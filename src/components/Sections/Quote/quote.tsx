import CurvedLoop from "../../CurvedLoop";
import GradientText from "../../GradientText";
import Section from "../../Section";

const Quote = () => {
  return (
    <Section className="grid place-content-center bg-black relative h-screen">
      <p className="text-5xl font-bold font-jetbrains text-white flex flex-col justify-center">
        Aparte de gustarme,
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="font-playwrite m-0 inline h-max text-7xl bg-transparent blur-none "
        >
          te admiro
        </GradientText>
      </p>
      <div className="absolute w-screen">
        <CurvedLoop
          marqueeText="🐨  🍦  🍓  💖  ✨ "
          speed={2}
          direction="right"
          curveAmount={-400}
          interactive={false}
          className="absolute top-0 left-0 w-screen"
        />
      </div>
    </Section>
  );
};

export default Quote;
