"use client";

import { useState } from "react";
import FeaturedProjectItem from "@/components/featured-project-item";
import Items from "@/components/items";
import ProjectModal from "@/components/project-modal";
import Section from "@/components/section";

const projects = [
  {
    name: "Philgo",
    description:
      "Largest korean community app in the Philippines for residents, travelers, job seekers, etc.",
    links: [
      { label: "Web version", href: "https://philgo.com" },
      {
        label: "iOS version",
        href: "https://apps.apple.com/us/app/philgo/id1480215987",
      },
      {
        label: "Android version",
        href: "https://play.google.com/store/apps/details?id=com.withcenter.philgo&hl=en",
      },
    ],
  },

  {
    name: "Re-Bling",
    description: "A reverse luxury auction website",
    href: "https://rebling.kr/",
  },
  {
    name: "Lost in Bytes",
    description: "Gaming blog that features game news, reviews, and guides.",
    href: "https://lostinbytes.com",
  },
  {
    name: "iExplore",
    description:
      "An mobile app that generates itinerary using Gemini AI, a travel planner, and showcase the places in Manila, Philippines",
    screenshots: [
      "/projects/iexplore-1.webp",
      "/projects/iexplore-2.webp",
      "/projects/iexplore-3.webp",
      "/projects/iexplore-4.webp",
      "/projects/iexplore-5.webp",
      "/projects/iexplore-6.webp",
    ],
  },
  {
    name: "PowerWise",
    description:
      "An energy monitoring app that tracks power consumption in real time and surfaces cost-saving insights across devices.",
    screenshots: [
      "/projects/powerwise-1.webp",
      "/projects/powerwise-2.webp",
      "/projects/powerwise-3.webp",
      "/projects/powerwise-4.webp",
      "/projects/powerwise-5.webp",
      "/projects/powerwise-6.webp",
    ],
  },
  {
    name: "Lending Management",
    description: "Loan management web app",
    overview:
      "A web app that handles lending operations end to end — borrower onboarding, loan applications, repayment schedules, and payment tracking. An admin dashboard manages the loan portfolio, with due-date alerts and arrears tracking.",
    screenshots: [
      "/projects/lending-1.webp",
      "/projects/lending-2.webp",
      "/projects/lending-3.webp",
      "/projects/lending-4.webp",
      "/projects/lending-5.webp",
      "/projects/lending-6.webp",
    ],
  },
  {
    name: "Condo Management",
    description: "Room occupancy tracker for condo buildings",
    overview:
      "A web app for residential buildings that shows real-time room occupancy per unit. Staff can see at a glance which rooms are occupied or free, manage tenant check-ins and check-outs, and track reservations and unit availability.",
    screenshots: [
      "/projects/condo-1.webp",
      "/projects/condo-2.webp",
      "/projects/condo-3.webp",
    ],
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );

  return (
    <main className="pb-16">
      <Section>
        <h1 className="font-mono text-4xl font-medium mb-4">Projects</h1>
        <p className="mb-4">
          Projects I&apos;ve worked on throughout my developer journey
        </p>

        <FeaturedProjectItem
          name="Hoppura: Cosplay Community"
          description="A cosplay community app that allows cosplay to share their work and connect to our cosplayers in the world."
          src="/projects/hoppura-icon.jpg"
          alt="Hoppura app screenshot"
          googlePlayUrl="https://play.google.com/store/apps/details?id=com.kokutaro.hoppura"
        />

        <Items
          className="mt-4 gap-4"
          items={projects.map((project) => ({
            ...project,
            id: project.name,
            target: project.href ? ("_blank" as const) : undefined,
            onClick:
              project.href || project.links?.length
                ? undefined
                : () => setSelected(project),
          }))}
        />
      </Section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
