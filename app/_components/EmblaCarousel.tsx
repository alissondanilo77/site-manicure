"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";


export type EmblaImage = {
  src: string;
  alt: string;
};

type Props = {
  imagens: EmblaImage[];
};

export default function EmblaCarousel({ imagens }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    // Garante que cada slide funcione como página (snap) para rolar “pro lado”
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const total = imagens?.length ?? 0;

  const updateSelected = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    if (typeof idx === "number") setSelectedIndex(idx);
  }, [emblaApi]);

  // Sincroniza o state quando o carrossel muda
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi, updateSelected]);

  // Autoplay (pausa no hover) respeitando prefers-reduced-motion
  useEffect(() => {
    if (!emblaApi) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      "matchMedia" in window &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let isHovering = false;
    let timer: number | undefined;

    const scheduleNext = () => {
      // fallback para não travar: se der erro, tenta novamente
      timer = window.setTimeout(() => {
        if (!emblaApi) return;
        if (isHovering) {
          scheduleNext();
          return;
        }
        emblaApi.scrollNext();
        scheduleNext();
      }, 4500);
    };

    // emblaRef é um ref callback tipado, então não usamos `.current`
    const container = document.querySelector<HTMLElement>(".embla");


    const onMouseEnter = () => {
      isHovering = true;
    };
    const onMouseLeave = () => {
      isHovering = false;
    };

    if (container) {
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
    }

    scheduleNext();

    return () => {
      if (timer) window.clearTimeout(timer);
      if (container) {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [emblaApi]);

  const canShow = total > 0;


  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = useMemo(() => {
    if (!imagens?.length) return [];
    return imagens;
  }, [imagens]);

  if (!canShow) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black">
      {/* Estrutura canônica do Embla */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((img) => (
            <figure key={img.src} className="embla__slide relative shrink-0 grow-0 basis-full overflow-hidden">
              <div className="relative h-full w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 50vw"
                  className="h-full w-full object-contain object-center"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
            </figure>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-3">
        <button
          type="button"
          onClick={scrollPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/90 text-white shadow-sm backdrop-blur hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Foto anterior"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/90 text-white shadow-sm backdrop-blur hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Próxima foto"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center gap-2 pb-4 pt-2">
        {slides.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => emblaApi?.scrollTo(idx)}
            className={
              idx === selectedIndex
                ? "h-2.5 w-10 rounded-full bg-emerald-600 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]"
                : "h-2.5 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
            }
            aria-label={`Ir para foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

