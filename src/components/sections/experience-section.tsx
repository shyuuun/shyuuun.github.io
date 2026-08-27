"use client";

import Section from "@/components/section";
import StackIcon, { type IconName } from "tech-stack-icons";

type Job = {
  role: string;
  company?: string;
  date: string;
  description: string[];
  tech: string[];
};

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
    tech: ["JavaScript", "HTML", "CSS", "C#", "MySQL"],
  },
];

const TECH_ICON_NAMES: Record<string, IconName> = {
  Flutter: "flutter",
  PHP: "php",
  Firebase: "firebase",
  React: "react",
  NextJS: "nextjs",
  "Vue.js": "vuejs",
  VueJS: "vuejs",
  Docker: "docker",
  Supabase: "supabase",
  PostgreSQL: "postgresql",
  Figma: "figma",
  JavaScript: "js",
  HTML: "html5",
  CSS: "css3",
  "C#": "csharp",
  MySQL: "mysql",
};

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
          <p className="text-xs text-foreground/50 mb-4">Tech stack</p>
          <div className="flex flex-wrap gap-1.5">
            {JOBS.flatMap((job) =>
              job.tech.map((t) => (
                <span
                  key={`${job.role}-${t}`}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs border border-primary/40 text-primary"
                >
                  <StackIcon
                    name={TECH_ICON_NAMES[t]}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  {t}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
