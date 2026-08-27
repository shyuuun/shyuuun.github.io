import Section from "../section";
import MyImage from "../my-image";

export function AboutMe({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="flex flex-col items-center gap-4 mb-4">
        <MyImage />
        <div className="text-center">
          <h1 className="text-2xl font-bold font-mono ">Frederick Vigilia</h1>
          <p>Software Developer | Hobbyist</p>
        </div>
      </div>

      <p className="mb-4">
        Hi! I&apos;m a full stack developer based in Manila, Philippines. I
        specialize in building mobile and web apps. I&apos;m passionate about
        clean architecture, great user interface, and shipping products that
        people love to use.
      </p>

      <div className="grid grid-cols-3 text-center font-mono">
        <div className="border-r border-t p-4">
          <p className="text-4xl font-bold ">15</p>
          <p className="text-sm text-gray-500">Projects</p>
        </div>
        <div className="p-4 border-t">
          <p className="text-4xl font-bold">3+</p>
          <p className="text-sm text-gray-500">Years experience</p>
        </div>
        <div className="p-4 border-l border-t">
          <p className="text-4xl font-bold font-mono ">100+</p>
          <p className="text-sm text-gray-500">Coffees enjoyed</p>
        </div>
      </div>
    </Section>
  );
}
