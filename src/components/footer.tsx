import Image from "next/image";

export default function Footer() {
  const images = [
    {
      src: "./88/1.gif",
      alt: "1 gif",
    },
    {
      src: "./88/anime.gif",
      alt: "anime gif",
    },
    {
      src: "./88/archlinux.gif",
      alt: "archlinux gif",
    },
    {
      src: "./88/bikobatanari.gif",
      alt: "bikobatanari gif",
    },
    {
      src: "./88/gameboy.png",
      alt: "gameboy png",
    },
  ];

  return (
    <footer className="container mt-12 border-t border-foreground/15 pt-4 text-center text-xs text-foreground/50">
      <div className="flex flex-wrap justify-center  gap-4 mb-4">
        {images.map((image, index) => (
          <Image
            key={image.alt + index}
            src={image.src}
            alt={image.alt}
            width={88}
            height={31}
            className="old-school-btns"
          />
        ))}
      </div>
      <p>© 2026 Frederick Vigilia.</p>
    </footer>
  );
}
