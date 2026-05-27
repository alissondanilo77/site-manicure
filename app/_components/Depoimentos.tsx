import Image from "next/image";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div>
        <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Depoimentos</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Clientes que voltam</h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            name: "Mariana",
            text: "Ficou impecável! Atendimento super atencioso e resultado muito bonito.",
            img: "/depo1.jpg",
          },
          {
            name: "Carla",
            text: "Amei o acabamento. Durou bastante e o brilho estava incrível.",
            img: "/depo2.jfif",
          },
          {
            name: "Ana",
            text: "Ambiente tranquilo e profissional. Recomendo sem dúvida.",
            img: "/depo3.jfif",
          },
        ].map((t) => (
          <div
            key={t.name}
            className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black"
          >
            <div className="flex items-center gap-3">
              <Image
                src={t.img}
                alt={t.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
                priority
              />
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t.name}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">“{t.text}”</p>
            <div className="mt-5 flex items-center gap-1 text-amber-400" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
