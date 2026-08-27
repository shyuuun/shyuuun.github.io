"use client";

import Image from "next/image";
import Link from "next/link";
import Pill from "./pill";
import { useSound } from "./hooks/use-sound";

type CardProps = {
  src: string;
  alt: string;
  href?: string;
  status?: string[];
  children?: React.ReactNode;
};

export default function Card({ src, alt, href, status, children }: CardProps) {
  const { play } = useSound();
  const cardBody = (
    <article
      onMouseEnter={() => play("hover")}
      onClick={() => play("click")}
      className="w-full rounded-2xl bg-card shadow-sm transition-colors hover:border-foreground/20 hover:shadow-md"
    >
      {status && status.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2 pt-4 px-4">
          {status.map((label) => (
            <Pill key={label} name={label} />
          ))}
        </div>
      )}
      <div className="mb-4 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={720}
          className="aspect-video object-cover"
        />
      </div>
      {children && <div className="px-4 pb-4">{children}</div>}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardBody}
      </Link>
    );
  }

  return cardBody;
}
