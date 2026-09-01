import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "Você mudou. E agora? | Alessandro Bortoletto" },
      {
        name: "description",
        content:
          "Se você tem mais de 55 anos e sente que perdeu o fio da própria história — isso tem nome, tem causa e tem saída. Conheça o coaching para mulheres na maturidade.",
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP_NUMBER = "5548935000948";
const WHATSAPP_MESSAGE =
  "Olá Alessandro, vi sua página e gostaria de saber mais sobre o processo de coaching para mulheres na maturidade.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function WhatsAppButton({
  className = "",
  variant = "onWine",
}: {
  className?: string;
  variant?: "onWine" | "solid";
}) {
  const variantClass =
    variant === "solid"
      ? "bg-[#7B2C3B] text-white hover:bg-[#671f2c]"
      : "bg-white text-[#7B2C3B] hover:bg-[#EDE0DA]";

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex min-h-[48px] items-center justify-center rounded-lg px-8 py-4 text-center text-[18px] font-bold transition-colors ${variantClass} ${className}`}
    >
      Quero dar o primeiro passo →
    </a>
  );
}

function Landing() {
  return (
    <main className="presell-page min-h-screen bg-[#F5EDE8] pb-20 text-[#2C2C2C] sm:pb-0">
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
        <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-[#2C2C2C] sm:text-[19px]">
          Se você tem mais de 55 anos e sente que perdeu o fio da sua própria história, você não
          está sozinha — e isso tem saída.
        </p>
      </section>

      {/* BLOCO 3 — Dor */}
      <section className="bg-[#EDE0DA] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-[17px] leading-[1.8]">
          <p>
            Talvez os filhos tenham saído de casa e a casa ficou grande demais e silenciosa demais.
            Talvez o casamento tenha mudado — ou acabado. Talvez você tenha se aposentado e perdido
            junto com o crachá o senso de quem você é. Talvez você olhe no espelho e não reconheça
            mais a mulher que está ali.
          </p>
          <p>
            Ou talvez não seja nada disso de forma isolada. É tudo junto. Uma sensação de que a vida
            foi passando, você foi cuidando de todo mundo — e em algum momento deixou de cuidar de
            você.
          </p>
          <p>
            Não é frescura. Não é fraqueza. Não é "coisa da idade". É uma das transições mais
            intensas da vida de uma mulher — e quase ninguém fala sobre ela com honestidade.
          </p>
        </div>
      </section>

      {/* BLOCO 4 — Agitação */}
      <section className="bg-[#F5EDE8] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-[17px] leading-relaxed">
          <p>
            A maioria das mulheres nessa fase tenta resolver sozinha. Lê livros, assiste vídeos,
            conversa com amigas. E ainda assim a sensação de vazio persiste. Porque o problema não é
            falta de informação — é falta de direção. É não saber mais quem você é fora dos papéis
            que sempre desempenhou.
          </p>
          <p>Durante décadas, sua identidade tinha endereço certo.</p>
          <p>
            Mãe. Esposa. Profissional. Cuidadora. Quando esses papéis mudam ou somem — o que sobra?
          </p>
        </div>
      </section>

      {/* BLOCO 5 — Virada */}
      <section className="bg-white px-6 py-12 text-center sm:py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
          <h2 className="font-heading text-2xl font-semibold text-[#7B2C3B] sm:text-3xl">
            Essa pergunta tem resposta. E você não precisa encontrá-la sozinha.
          </h2>
          <p className="text-[17px] leading-relaxed">
            O processo de coaching para mulheres na maturidade não é terapia, não é curso e não é
            palestra. É um espaço criado especificamente para você — para entender onde está, o que
            quer e como chegar lá. Com clareza, com apoio e no seu ritmo.
          </p>
          <WhatsAppButton variant="solid" className="w-full sm:w-auto" />
        </div>
      </section>

      {/* BLOCO 6 — O que você vai encontrar */}
      <section className="bg-[#EDE0DA] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <h2 className="font-heading text-center text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
            O que acontece quando você decide parar de esperar:
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
              <span className="text-3xl" aria-hidden="true">
                🧭
              </span>
              <h3 className="font-heading text-lg font-semibold text-[#7B2C3B]">Clareza</h3>
              <p className="text-[17px] leading-relaxed">
                Você entende o que está travando sua vida e qual direção faz sentido para você agora
                — não para quem você era, mas para quem você está se tornando.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
              <span className="text-3xl" aria-hidden="true">
                🤝
              </span>
              <h3 className="font-heading text-lg font-semibold text-[#7B2C3B]">
                Acolhimento real
              </h3>
              <p className="text-[17px] leading-relaxed">
                Um espaço sem julgamento onde sua história é ouvida, respeitada e levada a sério.
                Sem pressa. Sem receitas prontas.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-sm">
              <span className="text-3xl" aria-hidden="true">
                🌱
              </span>
              <h3 className="font-heading text-lg font-semibold text-[#7B2C3B]">Movimento</h3>
              <p className="text-[17px] leading-relaxed">
                Cada sessão termina com algo concreto — uma percepção, uma decisão, um próximo
                passo. Pequeno que seja, é seu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 7 — Prova social */}
      <section className="bg-[#F5EDE8] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <h2 className="font-heading text-center text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
            O que mulheres que já passaram por esse processo dizem:
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <blockquote className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm">
              <span
                className="font-heading text-3xl leading-none text-[#7B2C3B]"
                aria-hidden="true"
              >
                "
              </span>
              <p className="text-[17px] leading-relaxed">
                Cheguei sem saber mais quem eu era. Saí sabendo o que quero e, principalmente, que
                tenho direito de querer.
              </p>
              <footer className="text-sm italic text-[#2C2C2C]/70">
                — M.L., 61 anos, Florianópolis
              </footer>
            </blockquote>
            <blockquote className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm">
              <span
                className="font-heading text-3xl leading-none text-[#7B2C3B]"
                aria-hidden="true"
              >
                "
              </span>
              <p className="text-[17px] leading-relaxed">
                Finalmente alguém que entende o que é estar nessa fase sem minimizar o que a gente
                sente. Foi a conversa mais honesta que tive em anos.
              </p>
              <footer className="text-sm italic text-[#2C2C2C]/70">
                — R.S., 58 anos, São José
              </footer>
            </blockquote>
            <blockquote className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm">
              <span
                className="font-heading text-3xl leading-none text-[#7B2C3B]"
                aria-hidden="true"
              >
                "
              </span>
              <p className="text-[17px] leading-relaxed">
                Não esperava que algumas sessões pudessem mudar tanto a forma como eu me vejo. Mas
                mudaram.
              </p>
              <footer className="text-sm italic text-[#2C2C2C]/70">— C.M., 63 anos, Palhoça</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* BLOCO 8 — Autoridade */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center">
          <div className="mx-auto flex w-full max-w-[320px] flex-shrink-0 flex-col items-center gap-3 sm:mx-0 sm:max-w-[360px]">
            <img
              src="/alessandro-bortoletto.webp"
              alt="Alessandro Bortoletto, coach certificado pelo IBC"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-md"
            />
          </div>
          <div className="flex max-w-md flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <div>
              <p className="font-heading text-xl font-semibold text-[#7B2C3B]">
                Alessandro Bortoletto
              </p>
              <p className="text-[15px] text-[#2C2C2C]/80">
                Coach certificado | Especialista em transições de vida na maturidade feminina
              </p>
              <div className="mt-3 h-px w-16 bg-[#7B2C3B] sm:mx-0" />
            </div>
            <p className="text-[17px] italic leading-relaxed">
              "Trabalho com mulheres que chegam até mim se sentindo invisíveis para o mundo — e saem
              sabendo exatamente quem são e o que querem da vida que ainda têm pela frente."
            </p>
            <p className="text-[17px] leading-relaxed">
              Atendimento presencial em Florianópolis, Palhoça, São José, Biguaçu e região — e
              também online para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 9 — Pré-CTA (qualificação leve) */}
      <section className="bg-white px-6 py-12 text-center sm:py-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4">
          <h2 className="font-heading text-2xl font-semibold text-[#7B2C3B] sm:text-3xl">
            Esse processo é para você se:
          </h2>
          <div className="flex flex-col gap-2 text-left text-[17px] leading-relaxed">
            <p>— Você tem mais de 55 anos e sente que está vivendo no piloto automático</p>
            <p>
              — Você passou por uma grande mudança recente — separação, aposentadoria, filhos saindo
              de casa, luto
            </p>
            <p>— Você quer se reconectar com quem você é fora dos papéis que sempre desempenhou</p>
            <p>— Você está pronta para investir em si mesma com seriedade</p>
          </div>
          <p className="text-[17px] leading-relaxed">
            Se você se identificou com pelo menos um desses pontos, a conversa gratuita foi feita
            para você.
          </p>
        </div>
      </section>

      {/* BLOCO 10 — CTA final (fim da página) */}
      <section className="bg-[#7B2C3B] px-6 py-14 text-center text-white sm:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Pronta para dar o primeiro passo?
          </h2>
          <p className="text-[17px] leading-relaxed">
            Clique abaixo e me chame no WhatsApp. Vou te responder pessoalmente e, se fizer sentido
            para você, agendamos uma conversa gratuita de 30 minutos — presencial em Florianópolis e
            região, ou online.
          </p>
          <WhatsAppButton className="w-full sm:w-auto" />
        </div>
      </section>

      {/* BLOCO 11 — Rodapé */}
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

      {/* Botão flutuante fixo — garante WhatsApp visível sem rolar em mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#EDE0DA] bg-[#F5EDE8] p-3 sm:hidden">
        <WhatsAppButton className="w-full" />
      </div>
    </main>
  );
}
