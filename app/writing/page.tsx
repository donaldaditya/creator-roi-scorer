import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ArticleLayout";
import { getAllPostsMeta } from "@/lib/posts";

const SITE_URL = "https://www.da-system.ai";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building and deploying AI tools inside a live P&L, and on commercializing AI in Southeast Asia.",
  alternates: { canonical: `${SITE_URL}/writing` },
  openGraph: {
    title: "Writing",
    description: "Notes on building and deploying AI tools inside a live P&L, and on commercializing AI in Southeast Asia.",
    url: `${SITE_URL}/writing`,
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function WritingIndex() {
  const posts = getAllPostsMeta();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteNav />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Writing</p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-4">
          Notes from building inside a live P&amp;L
        </h1>
        <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
          Fortnightly, mostly to find out where the argument is weak. Every piece links back to the{" "}
          <Link href="/thesis" className="text-gray-900 underline underline-offset-2">thesis</Link>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        {posts.length === 0 && <p className="text-sm text-gray-400">Nothing published yet.</p>}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <time dateTime={post.date} className="text-xs text-gray-400 uppercase tracking-wider">
                {formatDate(post.date)}
              </time>
              <div className="text-base font-medium mt-2 mb-2 text-gray-900">{post.title}</div>
              <p className="text-xs text-gray-400 leading-relaxed">{post.description}</p>
              <div className="mt-4 text-xs text-gray-300 group-hover:text-gray-500 transition-colors">Read →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
