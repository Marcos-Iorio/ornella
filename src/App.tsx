import "./App.css";
import { useRef } from "react";
import Grainient from "./components/Grainient";
import Counter from "./components/Sections/Counter/counter";
import Definition from "./components/Sections/Definition/definition";

import MainSection from "./components/Sections/Main/main";
import Quote from "./components/Sections/Quote/quote";
import SentimentalSection from "./components/Sections/Sentimental/sentimental-text";

function App() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <div className="fixed inset-0">
        <Grainient
          color1="#7844e8"
          color2="#a6a8ff"
          color3="#021631"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <main
        ref={mainRef}
        className="snap-y snap-proximity no-scrollbar overflow-y-scroll scroll-smooth h-screen relative z-10"
      >
        <MainSection />
        <Definition />
        <Quote />
        <SentimentalSection scrollContainerRef={mainRef} />
        <Counter />
        <footer className="h-screen grid place-content-center bg-black snap-start">
          <p className="text-white font-playwrite">
            Diseñado y programado por tu chico 🤍. Para{" "}
            <span className="underline">vos</span> y nadie más, Or.
          </p>
          <p className="text-center font-playwrite text-2xl text-yellow-400 font-bold">
            Te amo
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
