export default function Precos() {
  return (
    <section id="precos" className="bg-white/60 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Preços</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Planos para diferentes momentos</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
            {
              name: "Pé e mão",
              time: "30-40 min",
              items: ["Pé", "Mão", "Acabamento caprichado"],
              cta: "$86",
            },
            {
              name: "Manicure",
              time: "30-40 min",
              items: ["Higienização", "Cutilagem", "Esmaltação"],
              cta: "$40",
              highlight: true,
            },
            {
              name: "Pedicure",
              time: "45-60 min",
              items: ["Higienização", "Esfoliação", "Hidratação"],
              cta: "$46",
            },
          ].map((p) => (
            <div
              key={p.name}
              className={
                p.highlight
                  ? "rounded-3xl border border-black/10 bg-zinc-900 p-6 text-white shadow-sm"
                  : "rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black dark:text-zinc-50"
              }
            >
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className={
                      p.highlight ? "text-sm font-semibold text-white/70" : "text-sm font-semibold text-zinc-500 dark:text-zinc-400"
                    }
                  >
                    {p.time}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{p.name}</p>
                </div>
                {p.highlight ? (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Mais escolhido</span>
                ) : null}
              </div>

              <ul className="mt-5 space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className={p.highlight ? "flex gap-2 text-white/90" : "flex gap-2 text-zinc-700 dark:text-zinc-300"}>
                    <span
                      className={
                        p.highlight ? "mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" : "mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500"
                      }
                    />
                    {it}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between">
                <span className={p.highlight ? "text-lg font-semibold" : "text-lg font-semibold text-zinc-900 dark:text-zinc-50"}>
                  {p.cta}
                </span>
                <a
                  href="#contato"
                  className={
                    p.highlight
                      ? "rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:bg-white/90"
                      : "rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black"
                  }
                >
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
