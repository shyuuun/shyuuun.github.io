import Card from "../card";
import Deck from "../deck";
import Section from "../section";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "../button";

export default function ProjectsSection({ id }: { id?: string }) {
  return (
    <Section id={id} sectionNumber={2} sectionTitle="Projects">
      <Deck>
        <Card src="/hoppura.jpg" alt="Hoppura">
          <h1 className="font-mono font-bold text-base sm:text-2xl">
            Hoppura: Cosplay Community
          </h1>
          <hr className="my-2" />
          <p className="text-sm sm:text-base ">
            A platform for cosplayers to showcase their work and connect with
            others in the community.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="https://hoppura.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              Visit hoppura.com
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Card>
        <Card src="/lost_in_bytes.jpg" alt="Lost in Bytes">
          <h1 className="font-mono font-bold text-base sm:text-2xl">
            Lost in Bytes
          </h1>
          <hr className="my-2" />
          <p className="text-sm sm:text-base">
            My own gaming blog that features game news, reviews, and guides. I
            built this site to share my love for gaming.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="https://lostinbytes.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              Visit Lost in Bytes
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Card>
        <Card src="/philgo.jpg" alt="Philgo">
          <h1 className="font-mono font-bold text-base sm:text-2xl">Philgo</h1>
          <hr className="my-2" />
          <p className="text-sm sm:text-base">
            Project that I&apos;ve worked during my time in Withcenter Inc.
            Philgo is a largest korean community app in the Philippines for
            residents, travelers, job seekers, etc.
          </p>
          <div className="mt-3 flex flex-wrap justify-between">
            <Link
              href="https://philgo.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              Visit Philgo (Web)
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.withcenter.philgo&hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              Visit Philgo (Mobile)
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Card>
      </Deck>
      <div className="text-center mb-4">
        <Link href={"/projects"}>
          <Button size="lg" className="cursor-pointer">
            More Projects
          </Button>
        </Link>
      </div>
    </Section>
  );
}
