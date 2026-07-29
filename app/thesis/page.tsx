import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getThesis } from "@/lib/posts";

const SITE_URL = "https://www.da-system.ai";

export async function generateMetadata(): Promise<Metadata> {
  const post = await getThesis();
  const url = `${SITE_URL}/thesis`;
  return {
    title: `${post.title} — DA System`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: [{ url: `${SITE_URL}/thesis/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/thesis/opengraph-image`],
    },
  };
}

export default async function ThesisPage() {
  const post = await getThesis();
  return <ArticleLayout kicker="Thesis" title={post.title} description={post.description} date={post.date} html={post.html} />;
}
