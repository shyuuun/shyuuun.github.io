import Section from "@/components/section";
import GearCard from "@/components/gear-card";

export default function GearPage() {
  const GEAR = [
    {
      name: "MacBook Air M1",
      description:
        "My daily driver laptop for coding, writing, and everything in between.",
      src: "macbook_m1.webp",
      loading: "eager" as const,
    },
    {
      name: "UGREEN Uno 6-in-1 Hub (Violet)",
      description: "USB hub",
      src: "ugreen.webp",
    },
    {
      name: "ASUS TUF VG279QE5A",
      description: "27-inch full HD monitor",
      src: "monitor.webp",
    },
    {
      name: "Gen 75 Elecfox Keyboard",
      description: "My main typing keyboard.",
      src: "keyboard.webp",
    },
    {
      name: "Rakk Alti Mouse",
      description: "My mouse for everyday use.",
      src: "mouse.webp",
    },
    {
      name: "Hand-built 60% Ortholinear Keyboard",
      description:
        "Custom ortholinear board I built. I will share it to you on how I built this keyboard ;)",
      src: "custom_keeb.webp",
      loading: "eager" as const,
    },
  ];

  return (
    <main className="pb-16">
      <Section>
        <h1 className="font-mono text-4xl font-medium mb-4">My Gear</h1>
        <p className="mb-4">
          My everyday hardware and tools I use to build, and create.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GEAR.map((item) => (
            <GearCard
              key={item.name}
              name={item.name}
              description={item.description}
              src={item.src}
              loading={item.loading}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
