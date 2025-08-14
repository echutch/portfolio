import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center sm:text-left">
        <p className="text-sm uppercase tracking-wider text-foreground/60">
          UIUC Computer Engineering
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
          Evan Hutchins
        </h1>
        <p className="mt-4 text-foreground/80 max-w-2xl">
          {/* I build systems and software across embedded, web, and AI. Here are selected projects,
          experience, and skills that reflect my work and interests. */}
          Portfolio under construction... in the meantime, check out my Resume, GitHub, and LinkedIn!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {/* <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            View Projects
          </Link> */}
          <a
            href="https://drive.google.com/drive/folders/1_JTo6aXcWPRoNWOpmfFY6do7455v0KA5?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Resume
          </a>
          <a
            href="https://github.com/echutch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/evan-hutchins/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Featured Projects (placeholder) */}
      {/* <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-foreground/70 hover:underline underline-offset-4">
            See all
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Project Alpha", "Project Beta", "Project Gamma"].map((name, i) => (
            <div
              key={i}
              className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <h3 className="font-medium">{name}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Short summary of what you built, the tech stack, and the outcome.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5">
                  C/C++
                </span>
                <span className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5">
                  React
                </span>
                <span className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5">
                  FPGA
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Quick Links */}
      {/* <section>
        <h2 className="text-xl font-semibold">Explore</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <Link
            href="/experience"
            className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/10 transition-colors block"
          >
            <h3 className="font-medium">Experience</h3>
            <p className="mt-2 text-sm text-foreground/70">Internships, coursework, and clubs.</p>
          </Link>
          <Link
            href="/skills"
            className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/10 transition-colors block"
          >
            <h3 className="font-medium">Skills</h3>
            <p className="mt-2 text-sm text-foreground/70">Languages, tools, and technologies.</p>
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/10 transition-colors block"
          >
            <h3 className="font-medium">About</h3>
            <p className="mt-2 text-sm text-foreground/70">Who I am and what I&apos;m into.</p>
          </Link>
        </div>
      </section> */}
    </div>
  );
}
