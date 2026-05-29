'use client'



type Slide = {
  src: string
  alt: string
}

const imagens: Slide[] = [
  { src: '/unha1.jpg', alt: 'Unhas decoradas' },
  { src: '/unha2.jpg', alt: 'Esmaltação' },
  { src: '/unha3.jpg', alt: 'Manicure' },
  { src: '/unha4.jpg', alt: 'Alongamento' },
]

export default function GaleriaUnhas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mt-8">
        {/* Galeria estática (sem carrossel), com cards lado a lado e zoom sutil ao clicar */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {imagens.map((img) => (
            <button
              key={img.src}
              type="button"
              aria-label={img.alt}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-0 text-left shadow-sm dark:border-white/10 dark:bg-black"
              onClick={() => {
                // animação sutil via CSS (mantém simples e sem modal)
                const el = document.getElementById(`galeria-zoom-${img.src}`);
                el?.classList.add('galeria-zoom-on');
                window.setTimeout(() => {
                  el?.classList.remove('galeria-zoom-on');
                }, 260);
              }}
            >
              <div className="relative aspect-[4/3] w-full">
                <style jsx>{`
                  .galeria-zoom-on { transform: scale(1.035); }
                `}</style>
                <div
                  id={`galeria-zoom-${img.src}`}
                  className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.03]"
                >
                  <div className="relative h-full w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
