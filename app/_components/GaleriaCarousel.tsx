"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Imagem = {
  src: string;
  alt: string;
};

export default function GaleriaCarousel({
  imagens,
}: {
  imagens: Imagem[];
}) {
  const [active, setActive] = useState(0);

  const total = imagens.length;
  const clampedActive = useMemo(() => {
    if (total <= 0) return 0;
    return Math.max(0, Math.min(active, total - 1));
  }, [active, total]);

  // Não precisa ajustar `active` em efeito: `clampedActive` já garante que o índice está no range.
  useEffect(() => {
    // Mantido vazio de propósito para evitar ajuste/atualização assíncrona ao mudar `total`.
  }, [total]);


  const goPrev = () => setActive((n) => (total ? (n - 1 + total) % total : 0));
  const goNext = () => setActive((n) => (total ? (n + 1) % total : 0));

  if (!imagens || imagens.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${clampedActive * 100}%)` }}
      >
        {imagens.map((img) => (
          <figure key={img.src} className="relative min-w-full overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={900}
              className="h-64 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
          </figure>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-3">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur hover:bg-white"
          aria-label="Foto anterior"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur hover:bg-white"
          aria-label="Próxima foto"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center gap-2 pb-4 pt-2">
        {imagens.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(idx)}
            className={
              idx === clampedActive
                ? "h-2.5 w-10 rounded-full bg-emerald-600"
                : "h-2.5 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800"
            }
            aria-label={`Ir para foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

