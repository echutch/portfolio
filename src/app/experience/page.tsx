import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internships, coursework, and clubs.",
};

type Entry = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
};

const timeline: Entry[] = [
  {
    title: "Software Engineering Intern",
    org: "Company XYZ",
    date: "Summer 2025",
    bullets: [
      "Built feature X improving Y by Z%.",
      "Collaborated with A, wrote tests, and shipped to production.",
    ],
  },
  {
    title: "Digital Systems Project",
    org: "University",
    date: "Spring 2025",
    bullets: [
      "Designed and simulated an FPGA-based pipeline.",
      "Implemented in Verilog; verified with testbench suite.",
    ],
  },
  {
    title: "Robotics Club",
    org: "Campus Org",
    date: "2024–Present",
    bullets: [
      "Developed embedded control software in C/C++.",
      "Worked on sensor fusion and telemetry.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="mt-2 text-foreground/70">
          Internships, academic projects, and extracurriculars.
        </p>
      </header>

      <ol className="space-y-6">
        {timeline.map((e, idx) => (
          <li
            key={idx}
            className="rounded-lg border border-black/10 dark:border-white/15 p-4"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2 className="font-medium">{e.title}</h2>
                <p className="text-sm text-foreground/70">{e.org}</p>
              </div>
              <span className="text-xs text-foreground/60">{e.date}</span>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-foreground/80 space-y-1">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
