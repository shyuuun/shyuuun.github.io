"use client";

import Section from "@/components/section";
import Pill from "@/components/pill";

type Job = {
  role: string;
  company?: string;
  date: string;
  description: string[];
  tech: string[];
};

type TechCategory = "Languages" | "Tools" | "Frontend" | "Backend" | "Mobile";

const TECH_STACK: { category: TechCategory; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Dart", "C#", "SQL"],
  },
  {
    category: "Tools",
    items: [
      "Docker",
      "Firebase",
      "Git",
      "Figma",
      "Visual Studio Code",
      "Linux",
      "Claude",
      "GitHub",
      "Photoshop",
      "opencode",
      "zsh",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "NextJS",
      "Vue.js",
      "HTML",
      "CSS",
      "Bootstrap5",
      "TailwindCSS",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "ExpressJS",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Firebase",
      "Nginx",
    ],
  },
  {
    category: "Mobile",
    items: ["Flutter"],
  },
];

const JOBS: Job[] = [
  {
    role: "Junior Software Developer",
    company: "Withcenter Inc. Korea",
    date: "Feb 2025 - Apr 2026",
    description: [
      "Collaborated with other developers to build PHILGO website using PHP and Vue.js, and Philgo App using Flutter",
      "Integrated AI chatbot with guardrails to the Philgo app and connected the PHP API backend",
      "Set up deep links and Firebase push notifications (FCM)",
      "Deployed the PHILGO app to Play Store — reached 100k+ downloads",
    ],
    tech: ["Flutter", "PHP", "Firebase", "React", "NextJS", "Vue.js"],
  },
  {
    role: "Freelance Developer",
    date: "Nov 2023 — Present",
    description: [
      "Build web and mobile applications from concept to launch",
      "Plan, design, and maintain systems based on client requirements",
      "Work closely with clients to gather requirements, define project scope, and propose technical solutions",
    ],
    tech: [
      "React",
      "NextJS",
      "VueJS",
      "Flutter",
      "Docker",
      "Firebase",
      "Supabase",
      "PostgreSQL",
      "Figma",
    ],
  },
  {
    role: "IT Intern",
    company: "Adventus",
    date: "Jun 2023 - Oct 2023",
    description: [
      "Learned on how to setup servers, and collab with other developer to build / debug / maintain their systems",
    ],
    tech: ["JavaScript", "HTML", "CSS", "MySQL"],
  },
];

export default function ExperienceSection({ id }: { id?: string }) {
  return (
    <Section id={id} sectionNumber={3} sectionTitle="Experience">
      <div>
        <div className="relative ml-2 mt-2">
          <div className="absolute left-1.75 top-0 bottom-0 w-0.5 bg-primary/30" />

          {JOBS.map((job, i) => (
            <div
              key={`${job.company}-${i}`}
              className="relative pl-8 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />

              <div className="text-primary mb-1">{job.date}</div>

              <h3 className="font-bold">
                {job.role}
                {job.company && (
                  <span className="text-foreground/50 font-normal">
                    {" "}
                    @ {job.company}
                  </span>
                )}
              </h3>

              <ul className="text-sm mt-2 space-y-1 ml-4">
                {job.description.map((desc, i) => (
                  <li key={`${desc}-${i}`} className="list-disc">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-primary/20 p-4">
          <p className="text-md text-foreground mb-4">Tech stack</p>
          <div className="space-y-4">
            {TECH_STACK.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs text-foreground mb-2">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((t) => (
                    <Pill key={`${category}-${t}`} name={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
