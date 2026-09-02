import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Você mudou. E agora? | Alessandro Bortoletto" },
      {
        name: "description",
        content:
          "Se você sente que a vida mudou e não sabe mais quem você é — isso tem nome, tem causa e tem saída. Conheça o processo de coaching para mulheres na maturidade.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="presell-page min-h-screen bg-[#F5EDE8] text-[#2C2C2C]">
      {/* BLOCO 1 — Header mínimo */}
      <header className="flex items-center justify-center px-6 py-6">
        <span className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
          Alessandro Bortoletto
        </span>
      </header>

      {/* BLOCO 2 — Headline principal */}
      <section className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:py-14">
        <h1 className="font-heading max-w-3xl text-[28px] font-semibold leading-tight text-[#7B2C3B] sm:text-[38px]">
          Você dedicou a vida inteira aos outros. E agora que sobrou tempo para você — por que
          parece tão vazio?
        </h1>
        <p className="max-w-xl text-[18px] leading-relaxed text-[#2C2C2C] sm:text-[19px]">
          Se você está com mais de 55 anos e sente que perdeu o fio da sua própria história, você
          não está sozinha — e isso tem solução.
        </p>
      </section>

      {/* BLOCO 3 — Bloco de dor */}
      <section className="bg-[#EDE0DA] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-[17px] leading-[1.8]">
          <p>
            Talvez os filhos tenham saído de casa e a casa ficou grande demais. Talvez o casamento
            tenha mudado — ou acabado. Talvez você tenha se aposentado e perdido junto com o crachá
            o senso de quem você é. Talvez você olhe no espelho e não reconheça mais a mulher que
            está ali.
          </p>
          <p>
            Não é frescura. Não é fraqueza. É uma das transições mais intensas da vida de uma mulher
            — e quase ninguém fala sobre ela com honestidade.
          </p>
        </div>
      </section>

      {/* BLOCO 4 — Virada */}
      <section className="bg-white px-6 py-12 text-center sm:py-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4">
          <h2 className="font-heading text-2xl font-semibold text-[#7B2C3B] sm:text-3xl">
            Existe uma saída. E ela começa com uma conversa honesta.
          </h2>
          <p className="text-[17px] leading-relaxed">
            O processo de coaching para mulheres na maturidade não é terapia, não é curso e não é
            palestra. É um espaço criado especificamente para você entender onde está, o que quer e
            como chegar lá — com clareza, com apoio e no seu ritmo.
          </p>
        </div>
      </section>

      {/* BLOCO 5 — Autoridade */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex w-full max-w-[320px] flex-shrink-0 flex-col items-center gap-3 sm:max-w-[360px]">
            <img
              src="/alessandro-bortoletto.webp"
              alt="Alessandro Bortoletto, coach certificado pelo IBC"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-md"
            />
            <p className="max-w-[320px] text-center text-sm leading-relaxed text-[#2C2C2C]/80 sm:max-w-[360px]">
              Atendimento presencial em Florianópolis, Palhoça, São José e região — e também online
              para todo o Brasil.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div>
              <p className="font-heading text-xl font-semibold text-[#7B2C3B]">
                Eloar Alessandro Bortoletto
              </p>
              <p className="text-[15px] text-[#2C2C2C]/80">
                Coach certificado | Especialista em transições de vida na maturidade feminina
              </p>
            </div>
            <p className="text-[17px] italic leading-relaxed">
              "Trabalho com mulheres que chegam até mim se sentindo invisíveis para o mundo — e saem
              sabendo exatamente quem são e o que querem da vida que ainda têm pela frente."
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 6 — O que você vai encontrar */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
            <span className="text-3xl" aria-hidden="true">
              🧭
            </span>
            <h3 className="font-heading text-lg font-semibold text-[#7B2C3B]">Clareza</h3>
            <p className="text-[17px] leading-relaxed">
              Entenda o que está travando sua vida e qual direção faz sentido para você agora.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
            <span className="text-3xl" aria-hidden="true">
              🤝
            </span>
            <h3 className="font-heading text-lg font-semibold text-[#7B2C3B]">Acolhimento real</h3>
            <p className="text-[17px] leading-relaxed">
              Um espaço sem julgamento onde sua história é ouvida e respeitada.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
            <span className="text-3xl" aria-hidden="true">
              🌱
            </span>
            <h3 className="font-heading text-lg font-semibold text-[#7B2C3B]">Movimento</h3>
            <p className="text-[17px] leading-relaxed">
              Saia de cada sessão com algo concreto para pensar, sentir ou fazer.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 7 — Prova social */}
      <section className="bg-[#EDE0DA] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <h2 className="font-heading text-center text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
            O que mulheres que já passaram por esse processo dizem
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <blockquote className="flex flex-col gap-3 rounded-xl bg-white p-6 text-[17px] leading-relaxed">
              <p>
                "Cheguei sem saber mais quem eu era. Depois das sessões, voltei a me reconhecer."
              </p>
              <footer className="text-sm not-italic text-[#2C2C2C]/70">
                — M.L., 61 anos, Florianópolis
              </footer>
            </blockquote>
            <blockquote className="flex flex-col gap-3 rounded-xl bg-white p-6 text-[17px] leading-relaxed">
              <p>
                "Finalmente alguém que entende o que é estar nessa fase sem minimizar o que a gente
                sente."
              </p>
              <footer className="text-sm not-italic text-[#2C2C2C]/70">
                — R.S., 58 anos, São José
              </footer>
            </blockquote>
            <blockquote className="flex flex-col gap-3 rounded-xl bg-white p-6 text-[17px] leading-relaxed">
              <p>"Não esperava que uma conversa pudesse mudar tanto a forma como eu me vejo."</p>
              <footer className="text-sm not-italic text-[#2C2C2C]/70">
                — C.M., 63 anos, Palhoça
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* BLOCO 8 — CTA principal */}
      <section className="bg-[#7B2C3B] px-6 py-14 text-center text-white sm:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Pronta para dar o primeiro passo?
          </h2>
          <p className="text-[17px] leading-relaxed">
            Clique abaixo e preencha sua ficha de seleção. Vou analisar pessoalmente e entrar em
            contato para conversarmos — presencial ou online. Sem compromisso. Só clareza.
          </p>
          <Link
            to="/selecao"
            className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-white px-8 text-center text-[17px] font-semibold text-[#7B2C3B] transition-colors hover:bg-[#EDE0DA] sm:w-auto"
          >
            Quero conversar com Alessandro →
          </Link>
        </div>
      </section>

      {/* BLOCO 9 — Rodapé mínimo */}
      <footer className="bg-[#2C2C2C] px-6 py-6 text-center text-white">
        <p className="text-sm">© 2026 Alessandro Bortoletto — Coach de Vida | Florianópolis, SC</p>
        <p className="mt-2 text-sm">
          <Link to="/politica-de-privacidade" className="underline hover:text-[#C9A227]">
            Política de Privacidade
          </Link>
          <span className="mx-2">·</span>
          <Link to="/termos-de-uso" className="underline hover:text-[#C9A227]">
            Termos de Uso
          </Link>
        </p>
      </footer>
    </main>
  );
}
