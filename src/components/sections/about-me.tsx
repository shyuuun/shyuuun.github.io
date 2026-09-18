import Section from "../section";
import MyImage from "../my-image";

export function AboutMe({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="flex flex-col items-center gap-4 mb-4">
        <MyImage />
        <div className="text-center">
          <h1 className="text-2xl font-bold font-mono ">Frederick Vigilia</h1>
          <p>Software Developer ✧ Hobbyist</p>
        </div>
      </div>

      <p className="mb-4">
        Hi! I&apos;m a full stack developer based in Manila, Philippines. I
        specialize in building mobile and web apps. I&apos;m passionate about
        clean architecture, great user interfaces, and shipping products that
        people love to use.
      </p>

      <p className="mb-4">
        Currently, I&apos;m working on my own project called{" "}
        <a className="font-mono underline" href="https://hoppura.com">
          Hoppura
        </a>
        . It is an app where you can share your cosplays, and connect cosplayers
        to the world.
      </p>

      <p className="mb-8">
        Outside of tech, you&apos;ll usually find me practicing the piano,
        hanging out with friends, or diving into the TV World to defeat Shadows
        in Persona 4.
      </p>

      <div className="grid grid-cols-3 text-center font-mono">
        <div className="border-r border-t p-4">
          <p className="text-4xl font-bold ">8</p>
          <p className="text-sm text-foreground/50">Projects</p>
        </div>
        <div className="p-4 border-t">
          <p className="text-4xl font-bold">2+</p>
          <p className="text-sm text-foreground/50">Years experience</p>
        </div>
        <div className="p-4 border-l border-t">
          <p className="text-4xl font-bold font-mono ">100+</p>
          <p className="text-sm text-foreground/50">Coffees enjoyed</p>
        </div>
      </div>
    </Section>
  );
}
