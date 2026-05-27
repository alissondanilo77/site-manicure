export default function Agendamento() {
  return (
    <section id="contato" className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-white/70">Agendamento</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Vamos marcar seu horário</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Preencha os dados abaixo e a gente retorna com disponibilidade. (Formulário genérico por enquanto.)
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-semibold text-white/70">Telefone</p>
                <p className="mt-2 text-sm font-semibold">(00) 00000-0000</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-semibold text-white/70">Local</p>
                <p className="mt-2 text-sm font-semibold">Seu bairro</p>
              </div>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-5 text-zinc-900 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-zinc-600">Nome</span>
                <input
                  className="rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                  placeholder="Seu nome"
                  name="nome"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-zinc-600">Telefone</span>
                <input
                  className="rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                  placeholder="(00) 00000-0000"
                  name="telefone"
                />
              </label>
            </div>

            <div className="mt-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-zinc-600">Serviço</span>
                <select
                  className="rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                  name="servico"
                  defaultValue="manicure"
                >
                  <option value="manicure">Manicure completa</option>
                  <option value="gel">Esmaltação em gel</option>
                  <option value="alongamento">Alongamento + esmaltação</option>
                </select>
              </label>
            </div>

            <div className="mt-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-zinc-600">Mensagem</span>
                <textarea
                  className="min-h-[110px] resize-y rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                  placeholder="Conte sua preferência (opcional)"
                  name="mensagem"
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Solicitar agendamento
            </button>

            <p className="mt-3 text-center text-xs text-zinc-500">
              Ao enviar, você concorda com o contato para confirmação do horário. (Sem backend por enquanto.)
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
