import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Evan Hutchins — Portfolio",
    template: "%s | Evan Hutchins",
  },
  description: "Student Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:px-3 focus:py-2 focus:rounded-md focus:bg-black/5 dark:focus:bg-white/10"
        >
          Skip to content
        </a>

        <header className="border-b border-black/10 dark:border-white/15">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Evan Hutchins
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/projects" className="hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="/experience" className="hover:underline underline-offset-4">
                Experience
              </Link>
              <Link href="/skills" className="hover:underline underline-offset-4">
                Skills
              </Link>
              <Link href="/about" className="hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main id="content" className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>

        <footer className="border-t border-black/10 dark:border-white/15">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-foreground/70 flex items-center justify-between">
            <p>&copy; {new Date().getFullYear()} Evan Hutchins</p>
            <p className="hidden sm:block">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
