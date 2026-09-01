import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Depois dos cinquenta, a vida pede um novo olhar" },
      {
        name: "description",
        content:
          "Filhos que saem de casa, uma separação ou a aposentadoria trazem a sensação de recomeçar. Conheça o trabalho de Alessandro Bortoletto com mulheres em transição de vida.",
      },
    ],
  }),
  component: Index,
});

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px flex-1 max-w-[120px] bg-[#C9A227]/60" />
      <span className="h-2 w-2 rotate-45 bg-[#C9A227]" />
      <span className="h-px flex-1 max-w-[120px] bg-[#C9A227]/60" />
    </div>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/landing"
      className="flex min-h-[56px] w-full items-center justify-center rounded-md bg-[#7B2C3B] px-6 text-center text-lg font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
    >
      {children}
    </Link>
  );
}

function Index() {
  return (
    <main className="presell-page min-h-screen bg-[#F5EDE8] text-[#2C2C2C]">
      <div className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-14 sm:px-8 sm:py-20">
        {/* 1-3: Headline, subtítulo e foto */}
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-[32px] font-semibold leading-tight text-[#7B2C3B] sm:text-[40px]">
            Depois dos cinquenta, a vida pede um novo olhar
          </h1>
          <p className="text-[19px] leading-[1.7] sm:text-[21px]">
            Filhos que saem de casa, uma separação ou a aposentadoria trazem a sensação de recomeçar
            sem saber por onde começar.
          </p>
          <div className="mt-2 aspect-[3/4] w-full max-w-[220px] rounded-2xl border-2 border-[#C9A227] bg-[#E4D9D0] p-2">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#D9D9D9] text-center text-sm font-medium uppercase tracking-wide text-[#6b6b6b]">
              Foto Alessandro
            </div>
          </div>
        </section>

        <Divider />

        {/* 4. Abertura */}
        <section className="flex flex-col gap-4 text-[18px] leading-[1.7] sm:text-[20px]">
          <p>
            A casa fica mais silenciosa em algum momento. Os filhos crescem, seguem a vida deles, e
            a rotina que antes girava em torno de todo mundo passa a girar só em torno de você. É um
            tipo de mudança que ninguém avisa quando vai chegar.
          </p>
          <p>
            Pode ser também uma separação, uma aposentadoria recém-chegada ou simplesmente a
            sensação de já não reconhecer os próprios dias. Muitas mulheres nessa fase relatam esse
            mesmo estranhamento, mesmo quando por fora tudo parece estar bem.
          </p>
          <p>
            Se alguma dessas cenas soa familiar, talvez você reconheça esse momento. Um convite
            silencioso a olhar para dentro, sem pressa, e entender com calma o que vem a seguir.
          </p>
        </section>

        <Divider />

        {/* 5. Desenvolvimento */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
              Um tempo de identidade em movimento
            </h2>
            <p className="text-[18px] leading-[1.7] sm:text-[20px]">
              A identidade segue se formando depois dos cinquenta. Ela muda de forma junto com o
              corpo, os papéis dentro de casa e as pessoas que estão por perto. Reconhecer essa
              mudança já é parte do processo, mesmo antes de qualquer resposta pronta aparecer. Dar
              nome a isso, com calma, já ajuda a organizar os próprios pensamentos.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
              O peso de recomeçar sozinha
            </h2>
            <p className="text-[18px] leading-[1.7] sm:text-[20px]">
              Encarar essa fase sem um roteiro claro pode parecer solitário no começo. Não existe um
              manual para esse tipo de mudança, e cada mulher vive esse processo à sua maneira e no
              seu tempo. Buscar companhia nessa travessia costuma facilitar cada passo.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
              O silêncio que também fala
            </h2>
            <p className="text-[18px] leading-[1.7] sm:text-[20px]">
              O silêncio da casa vazia ou dos dias sem agenda pode incomodar logo de início. Com o
              tempo, esse mesmo silêncio pode virar espaço para se ouvir de novo e reorganizar as
              prioridades. É nesse espaço que muitas mulheres começam a enxergar o que realmente
              importa para elas, longe da rotina que ocupava cada hora do dia.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
              Entender antes de decidir
            </h2>
            <p className="text-[18px] leading-[1.7] sm:text-[20px]">
              Antes de qualquer decisão grande, existe um passo anterior: entender o que mudou
              dentro de você. Autoconhecimento é o ponto de partida para qualquer recomeço que faça
              sentido de verdade, e esse entendimento costuma vir aos poucos, em camadas.
            </p>
          </div>
        </section>

        <Divider />

        {/* 6. Virada */}
        <section className="flex flex-col gap-2 text-center">
          <h2 className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
            Existe um caminho possível
          </h2>
          <p className="text-[18px] leading-[1.7] sm:text-[20px]">
            Existe uma forma de atravessar essa transição com mais clareza sobre quem você é e para
            onde quer ir agora. Esse caminho tem passos concretos, pensados para essa fase
            específica da vida, e ele começa antes de qualquer explicação por aqui. Os detalhes
            fazem mais sentido na próxima etapa dessa conversa.
          </p>
        </section>

        <Divider />

        {/* 7. Apresentação do profissional */}
        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
            Quem é Alessandro
          </h2>
          <p className="text-[18px] leading-[1.7] sm:text-[20px]">
            Alessandro Bortoletto é coach certificado pelo Instituto Brasileiro de Coaching,
            palestrante e escritor do livro Finalmente um Novo Eu. Ele acompanha de perto histórias
            de recomeço e acredita que toda mulher pode redescobrir seu propósito em qualquer fase
            da vida, com o tempo e o cuidado que cada história pede.
          </p>
          <p className="text-[18px] leading-[1.7] sm:text-[20px]">
            Esse interesse nasceu da convivência com mulheres da própria família que viveram grandes
            transições, como luto, divórcio e aposentadoria, e encontraram aos poucos um novo
            sentido para seguir em frente. É esse processo de reconstrução que ele acompanha hoje,
            com respeito ao tempo de cada mulher e sem fórmulas prontas. Cada conversa parte de onde
            a pessoa está, não de um roteiro fechado.
          </p>
          <p className="text-[18px] leading-[1.7] sm:text-[20px]">
            Quando alguma situação pede um cuidado além do coaching, o caminho inclui indicação para
            apoio psicológico especializado, sempre que fizer sentido para a pessoa envolvida.
          </p>
        </section>

        {/* 8. CTA */}
        <section className="flex justify-center py-2">
          <CtaButton>Quero entender esse caminho</CtaButton>
        </section>

        <Divider />

        <section className="flex flex-col items-center gap-4 text-center">
          <p className="text-[18px] leading-[1.7] sm:text-[20px]">
            Um novo capítulo pode começar de um jeito mais leve, com clareza sobre o que vem a
            seguir e sem pressa para decidir tudo de uma vez.
          </p>
          <CtaButton>Quero entender esse caminho</CtaButton>
        </section>

        {/* 9. Rodapé */}
        <footer className="mt-6 flex flex-col items-center gap-2 border-t border-[#C9A227]/40 pt-8 text-center text-sm leading-relaxed text-[#2C2C2C]/80">
          <p>Alessandro Bortoletto · Florianópolis, SC</p>
          <p className="max-w-md">
            Coaching é um processo de desenvolvimento pessoal e não substitui acompanhamento
            psicológico ou médico.
          </p>
        </footer>
      </div>
    </main>
  );
}
