import Link from "next/link";

// Dedicated nav for /thesis only — aligned to the article's own container
// (--td-measure) rather than the site-wide SiteNav's max-w-4xl, and laid out
// as logo-left / nav-right (Pattern A) instead of the shared nav's breadcrumb
// style. Scoped so it never affects SiteNav or any other route.
export function ThesisNav() {
  return (
    <nav className="thesis-nav">
      <Link href="/" className="thesis-nav-logo">
        <span className="thesis-nav-mark">DA</span>
        <span>DA System</span>
      </Link>
      <div className="thesis-nav-links">
        <Link href="/thesis">Thesis</Link>
        <span aria-hidden="true">·</span>
        <Link href="/writing">Writing</Link>
        <span aria-hidden="true">·</span>
        <a href="https://www.linkedin.com/in/donaldaditya/" target="_blank" rel="noopener noreferrer">
          Donald Aditya ↗
        </a>
      </div>
    </nav>
  );
}
