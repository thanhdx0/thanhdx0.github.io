import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thanh Dang's Blog",
  description: "Personal blog of Thanh Dang - Software Engineer",
  metadataBase: new URL("https://thanhdx0.github.io"),
  openGraph: {
    title: "Thanh Dang's Blog",
    description: "Personal blog of Thanh Dang - Software Engineer",
    type: "website",
    url: "https://thanhdx0.github.io",
    siteName: "Thanh Dang's Blog",
  },
  twitter: {
    card: "summary",
    title: "Thanh Dang's Blog",
    description: "Personal blog of Thanh Dang - Software Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var key = 'theme-preference';
                var dark = 'dark';
                var stored = localStorage.getItem(key);
                var theme = (stored === dark || stored === 'light') ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="max-w-[48rem] mx-auto px-3 w-full flex-1 flex flex-col pb-16">
          <header className="mb-8">
            <Link href="/" className="flex items-center gap-5 mb-4">
              <div
                className="w-[50px] h-[50px] rounded bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                style={{ backgroundImage: "url(/images/logo.png)" }}
              />
              <h1 className="text-[1.5rem] font-bold m-0 text-[var(--foreground)]">
                Thanh Dang&apos;s Blog
              </h1>
            </Link>
            <nav>
              <ul className="flex gap-4 m-0 p-0 list-none">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/writings">Writing</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-auto pt-5 border-t border-[var(--border)] text-center text-sm text-[var(--muted)] flex justify-between">
            <div>Copyright &copy; {currentYear} thanhdx0</div>
            <nav>
              <ul className="flex gap-4 m-0 p-0 list-none">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/writings">Writing</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
