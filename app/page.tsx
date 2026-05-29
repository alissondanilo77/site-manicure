import Image from "next/image";
import Servicos from "./_components/Servicos";
import Precos from "./_components/Precos";
import Depoimentos from "./_components/Depoimentos";
import Agendamento from "./_components/Agendamento";
import GaleriaUnhas from "./_components/GaleriaUnhas";




export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-zinc-900 font-sans dark:bg-black dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center">
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Fabiana Maritis
              </span>
              <span className="block text-[11px] font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
                Manicure & Beleza
              </span>
            </span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300" href="#servicos">
              Serviços
            </a>
            <a className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300" href="#precos">
              Preços
            </a>
            <a className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300" href="#depoimentos">
              Depoimentos
            </a>
            <a className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300" href="#contato">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/SEU_NUMERO_AQUI"
              target="_blank"
              rel="noreferrer"
              aria-label="Falar no WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-400"
            >
              <Image
                src="/whatsapp.jpg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
                priority
              />
            </a>

            <a
              href="#contato"
              className="rounded-full ls
              bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black"
            >
              Agendar
            </a>
          </div>
        </div>
      </header>


      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-800/60" />
          <div className="absolute -bottom-32 right-[-120px] h-72 w-72 rounded-full bg-zinc-200/40 blur-3xl dark:bg-zinc-800/40" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-black/40 dark:text-zinc-200">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Atendimento personalizado
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Manicure e beleza com acabamento impecável
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              Reserve seu horário e garanta um resultado profissional. Agenda aberta para atendimentos rápidos e
              sessões completas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black"
              >
                Agendar agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-black/5 dark:border-white/15 dark:text-zinc-50 dark:hover:bg-white/5"
              >
                Ver serviços
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Tempo médio
                </dt>
                <dd className="mt-2 text-xl font-semibold">45-60 min</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Destaque
                </dt>
                <dd className="mt-2 text-xl font-semibold">Acabamento premium</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/IMG-20260513-WA0010.jpg"
                  alt="Foto do salão"
                  width={900}
                  height={520}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-black">
                  <p className="text-sm font-semibold">Higiene e cuidado</p>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">Procedimentos padronizados</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-black">
                  <p className="text-sm font-semibold">Variedade de estilos</p>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">Cores, texturas e tendências</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-black/40">
                Atendimento rápido
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-black/40">
                Materiais de qualidade
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-black/40">
                Ambiente confortável
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Servicos />

      {/* Gallery */}
      <GaleriaUnhas />

      {/* Pricing */}

      <Precos />



      {/* Testimonials */}
      <Depoimentos />

      {/* Contact */}
      <Agendamento />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Studio Beleza. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a className="hover:underline" href="#servicos">
              Serviços
            </a>
            <a className="hover:underline" href="#contato">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

