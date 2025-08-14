import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected engineering projects and coursework.",
};

type Project = {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Project Alpha",
    summary: "Brief description of the problem, approach, and result.",
    tags: ["C/C++", "FPGA", "Verilog"],
  },
  {
    title: "Project Beta",
    summary: "What you built and why it matters. Include metrics if possible.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Gamma",
    summary: "Key technical challenges and how you solved them.",
    tags: ["Python", "Embedded", "RTOS"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-foreground/70">
          A selection of coursework, personal builds, and internship work.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={i}
            className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <h2 className="font-medium">{p.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href ? (
              <Link
                href={p.href}
                className="mt-4 inline-block text-sm hover:underline underline-offset-4"
              >
                Read more →
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
