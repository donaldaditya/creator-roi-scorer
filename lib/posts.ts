import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  ogImage?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  html: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// Inline HTML (e.g. an SVG diagram) can be embedded directly in the markdown
// body — rehype-raw + allowDangerousHtml preserve it through to the final
// render instead of escaping it as text.
async function renderMarkdown(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(WRITING_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const html = await renderMarkdown(content);
  return { slug, html, ...(data as PostFrontmatter) };
}

export function getAllPostsMeta(): (PostFrontmatter & { slug: string })[] {
  return getPostSlugs()
    .map((slug) => {
      const filePath = path.join(WRITING_DIR, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as PostFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
