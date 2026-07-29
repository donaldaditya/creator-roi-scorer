import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-medium">DA</span>
          </div>
          <span className="text-sm font-medium text-gray-900">DA System</span>
        </Link>
        <span className="text-gray-200">/</span>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <Link href="/thesis" className="hover:text-gray-700 transition-colors">Thesis</Link>
          <Link href="/writing" className="hover:text-gray-700 transition-colors">Writing</Link>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/donaldaditya/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
      >
        Donald Aditya ↗
      </a>
    </nav>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function ArticleLayout({
  title,
  description,
  date,
  html,
  kicker,
}: {
  title: string;
  description?: string;
  date: string;
  html: string;
  kicker: string;
}) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteNav />
      <article className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">{kicker}</p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight mb-4">{title}</h1>
        {description && <p className="text-sm text-gray-500 max-w-lg leading-relaxed mb-3">{description}</p>}
        <time dateTime={date} className="text-xs text-gray-400">{formatDate(date)}</time>

        <div className="article-body mt-10" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
