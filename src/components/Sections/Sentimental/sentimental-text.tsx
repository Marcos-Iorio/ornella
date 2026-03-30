import type { RefObject } from "react";
import ScrollReveal from "../../ScrollReveal";
import Section from "../../Section";
import Stack from "../../Stack";

import img1 from "../../../assets/images/img-1.JPG";
import img2 from "../../../assets/images/img-2.JPG";
import img3 from "../../../assets/images/img-3.JPG";
import img4 from "../../../assets/images/img-4.jpeg";
import img5 from "../../../assets/images/img-5.JPG";
import img6 from "../../../assets/images/img-6.jpeg";
import img7 from "../../../assets/images/img-7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const SentimentalSection = ({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <Section className="h-auto grid place-content-center ">
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 pt-10 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        No soy muy bueno haciendo cartas, menos escribiendolas, por eso, quise
        hacer algo en lo que por lo menos, tengo un poquito de conocimiento y se
        me da "bien", tipear.
      </ScrollReveal>
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 my-5 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        Desde la tercera cita, la tercera vez que te ví, en mi casa, supe que
        vos ibas a ser mi novia, me lo callaba, para mi mismo y para los demás
        por miedo a fallar, a que no me elijas y quedarme con las ganas de qué
        podría haber pasado.
      </ScrollReveal>
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 my-5 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        Siempre le dije a mis amigos, cada vez que me preguntaban cual era mi
        chica ideal(esa que pensas que al ser ideal, no existe o no llega),
        alguien que trabaje, labure, tenga proyectos, pasiones, que congenie en
        el humor, que nos ríamos, seamos nenes pero sobre todo, un lugar dónde
        yo, pueda ser yo, diciendo mis boludeces, mis chistes, dónde sentirme
        seguro, dónde ir a refugiarme cuando pasa algo y viceversa. Y ahí conocí
        a la mujer más increible que pude haber conocido, en un lugar,
        indeseado, quizás, pero que hay tantas cosas que nos unen que era casi
        imposible de que una forma u otra no nos termináramos conociendo igual.
      </ScrollReveal>
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 my-5 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        Desde que te conocí cada vez que te veo, escribo, pienso, soy más feliz,
        porque me llevas a eso, porque me mejoras, me motivás y te lo voy a
        agradecer por siempre.
      </ScrollReveal>
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 my-5 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        Por eso, quiero que compartamos la vida juntos, dando este paso(espero
        que el Marquitos del pasado te este mostrando esto una vez hayas dicho
        si)para confirmar lo que ya somos y como actuamos, solo que con el
        titulo oficial.
      </ScrollReveal>
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 my-5 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        Por último, hacerte saber, Ornellita, que me haces un hombre muy feliz,
        que me encantas, que te voy a cuidar, mimar, amar, proyectar. Sos una
        personita muy linda que ilumina a los demás con tu carisma y me iluminás
        a mi también, una persona maravillosa en todos los aspectos, muy buena,
        considerada, que piensa mucho en los demás, amorosa, cariñosa, pegajosa
        pero sobre todo, un Koala.
      </ScrollReveal>

      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
        textClassName="text-white text-lg font-jetbrains px-22 my-5 text-justify"
        containerClassName="max-w-[1366px] w-full"
        scrollContainerRef={scrollContainerRef as RefObject<HTMLElement>}
      >
        Te amo mi amor, quiero que estemos juntos por siempre ❤️.
      </ScrollReveal>
      <div className="w-75 h-100 mx-auto my-10">
        <Stack
          randomRotation={true}
          sensitivity={200}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ))}
          autoplay={true}
          autoplayDelay={1500}
          pauseOnHover={true}
        />
      </div>
    </Section>
  );
};

export default SentimentalSection;
