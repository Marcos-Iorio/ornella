import Galaxy from "../../Galaxy";
import Section from "../../Section";
import ShinyText from "../../ShinyText";

const MainSection = () => {
  return (
    <Section className="relative bg-black h-screen">
      <Galaxy
        mouseRepulsion={false}
        mouseInteraction
        density={1}
        glowIntensity={0.3}
        saturation={0.1}
        hueShift={80}
        twinkleIntensity={0.2}
        rotationSpeed={0.01}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.2}
        speed={0.1}
      />
      <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 m-0 flex gap-4 flex-col">
        <ShinyText
          text="Ornellita"
          className="text-9xl text-center font-playwrite h-full w-full"
          speed={3.2}
          delay={0}
          color="#ffea00"
          shineColor="#fffdcc"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        <p className="font-jetbrains text-2xl text-white text-center">
          Ornella es un nombre propio femenino de origen italiano que significa
          "fresno florido". Evoca naturaleza, primavera y frescura.{" "}
        </p>
      </div>
    </Section>
  );
};

export default MainSection;
