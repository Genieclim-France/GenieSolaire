import imgOnduleur from "@/../public/onduleur.png";
import { WordRotate } from "@/components/word-rotate";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function Onduleur() {
  return (
    <section
      className={twMerge(
        "flex flex-col",
        "h-[45rem] sm:h-[35rem] md:h-fit",
        "items-center md:items-start",
        "md:pl-60 md:ml-20",
        "gap-4 md:gap-0",
        "bg-secondary",
        "border-2 border-primary rounded-3xl",
        "p-8 mt-10 mb-40 md:mb-0 md:mt-20",
        "text-white font-emOne",
        "relative"
      )}
    >
      <h2
        className={twMerge(
          "text-2xl md:text-2xl 2xl:text-4xl",
          "font-bold uppercase",
          "pb-1",
          "font-emOne text-primary",
          "text-center"
        )}
      >
        Pas de panneaux sans onduleur
      </h2>
      <h3
        className={twMerge(
          "text-lg md:text-base 2xl:text-xl",
          "font-bold italic uppercase",
          "pb-4",
          "font-emOne",
          "text-center"
        )}
      >
        Solax x1 Hybrid-G4
      </h3>
      <p className="font-kollektif">
        Pour tirer le meilleur parti de vos panneaux solaires, l'onduleur joue
        un rôle clé. Nous avons choisi l'excellence avec le Solax X1 Hybrid-G4,
        un onduleur hybrid de dernière génération conçu pour{" "}
        <span className="font-bold text-primary">
          maximiser l'efficacité de votre installation photovoltaïque
        </span>
      </p>

      <div className="flex flex-col items-center justify-center border-l-2 border-primary px-4 mt-6 bg-[#3B3B3B]">
        <WordRotate
          duration={2000}
          className="text-2xl font-bold uppercase text-white"
          words={["Puissance", "Rendement", "Contrôle"]}
        />
      </div>
      <Image
        src={imgOnduleur}
        alt="Onduleur"
        className={twMerge(
          "absolute",
          "-bottom-[10rem] md:top-1/2",
          "md:-translate-y-1/2",
          "md:-left-32",
          "w-[80%] md:w-[35%] xl:w-[30%] 2xl:w-[25%]",
          "filter",
          "drop-shadow-[0_0_20px_rgba(235,202,78,0.5)]"
        )}
      />
    </section>
  );
}

export default Onduleur;
