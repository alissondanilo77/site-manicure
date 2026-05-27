export default function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Serviços</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">O que você pode agendar</h2>
        </div>
        <a href="#contato" className="text-sm font-semibold text-zinc-900 hover:underline dark:text-zinc-50">
          Falar com atendimento
        </a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Manicure completa",
            desc: "Higienização caprichada, cutilagem com cuidado e finalização com esmaltação para um acabamento impecável.",
          },
          {
            title: "Pé e mão",
            desc: "Pé e mão com higienização, preparação e acabamento caprichado, com opções de cores e um resultado duradouro.",
          },
          {
            title: " Pedicure",
            desc: "Higienização, esfoliação para remover asperezas e hidratação para deixar a pele macia e com brilho.",
          },
        ].map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black"
          >
            <p className="text-lg font-semibold">{s.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{s.price}</span>
              <a
                href="#contato"
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold transition hover:bg-black/5 dark:border-white/10 dark:text-zinc-50 dark:hover:bg-white/5"
              >
                Agendar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
