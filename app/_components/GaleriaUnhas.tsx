import Image from "next/image";
import GaleriaCarousel from "./GaleriaCarousel";

const imagens = [
  { src: "/unha1.jpg", alt: "Unhas finalizadas 1" },
  { src: "/unha2.jpg", alt: "Unhas finalizadas 2" },
  { src: "/unha3.jpg", alt: "Unhas finalizadas 3" },
  { src: "/unha4.jpg", alt: "Unhas finalizadas 4" },
];

export default function GaleriaUnhas() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Galeria</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Unhas que inspiram</h2>
        </div>
        <a
          href="#contato"
          className="text-sm font-semibold text-zinc-900 hover:underline dark:text-zinc-50"
        >
          Quero esse resultado
        </a>
      </div>

      <div className="mt-8">
        {/* 4 fotos lado a lado (responsivo) */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {imagens.map((img, idx) => (
            <figure
              key={img.src}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="h-28 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-36"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

