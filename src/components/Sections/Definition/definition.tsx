import { useEffect, useState } from "react";
import Section from "../../Section";
import GradientText from "../../GradientText";

const listOfWords = ["amor", "compañía", "risas", "alegría", "recuerdos"];

type Phase = "typing" | "pausing" | "erasing";

const Definition = () => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = listOfWords[wordIndex];

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        const t = setTimeout(
          () => setDisplayText(currentWord.slice(0, displayText.length + 1)),
          100,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("erasing"), 1500);
        return () => clearTimeout(t);
      }
    }

    if (phase === "erasing") {
      if (displayText.length > 0) {
        const t = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        setWordIndex((prev) => (prev + 1) % listOfWords.length);
        setPhase("typing");
      }
    }
  }, [displayText, phase, wordIndex]);

  return (
    <Section className="grid place-content-center bg-transparent text-white relative h-screen">
      <h2 className="text-5xl h-auto font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 m-0 mx-auto inline font-jetbrains w-max">
        Para mí, significa{" "}
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="font-playwrite m-0 inline h-8 text-7xl bg-transparent blur-none "
        >
          {displayText}
        </GradientText>
        <span className="animate-ping text-[#5227FF]">|</span>
      </h2>
    </Section>
  );
};

export default Definition;
