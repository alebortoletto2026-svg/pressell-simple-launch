import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Alessandro Bortoletto" },
      {
        name: "description",
        content:
          "Termos de Uso do site de Alessandro Bortoletto, coach de vida em Florianópolis, SC.",
      },
    ],
  }),
  component: TermosDeUso,
});

function TermosDeUso() {
  return (
    <main className="presell-page min-h-screen bg-[#F5EDE8] text-[#2C2C2C]">
      <header className="flex items-center justify-center px-6 py-6">
        <Link to="/" className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
          Alessandro Bortoletto
        </Link>
      </header>

      <section className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-10 sm:py-14">
        <h1 className="font-heading text-[28px] font-semibold text-[#7B2C3B] sm:text-[34px]">
          Termos de Uso
        </h1>
        <p className="text-sm text-[#2C2C2C]/70">Última atualização: setembro de 2026.</p>

        <div className="flex flex-col gap-5 text-[17px] leading-[1.8]">
          <p>
            Estes Termos de Uso regem o acesso e a navegação neste site, de propriedade de
            Alessandro Bortoletto. Ao usar este site, você concorda com os termos abaixo.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">1. Sobre o site</h2>
            <p>
              Este site tem finalidade exclusivamente informativa: apresentar o trabalho de
              Alessandro Bortoletto como coach de vida e oferecer um canal de contato por WhatsApp
              para quem tiver interesse em conversar sobre o processo de coaching. Não há venda
              direta, cadastro, login ou qualquer transação financeira realizada dentro deste site.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              2. Natureza do serviço de coaching
            </h2>
            <p>
              O coaching oferecido por Alessandro Bortoletto é um processo de desenvolvimento
              pessoal. Ele não é terapia, não é tratamento psicológico, não é atendimento médico e
              não substitui acompanhamento de profissionais de saúde. Quando uma situação
              apresentada em conversa exigir cuidado além do escopo do coaching, a recomendação é
              buscar apoio psicológico ou médico especializado.
            </p>
            <p>
              Nenhum resultado específico é prometido ou garantido. Os resultados de um processo de
              coaching dependem do envolvimento e das circunstâncias de cada pessoa.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              3. Uso adequado do site
            </h2>
            <p>
              Você concorda em usar este site apenas para os fins a que se destina — conhecer o
              trabalho oferecido e, se desejar, iniciar contato. Não é permitido usar o site para
              qualquer finalidade ilegal, ofensiva ou que prejudique seu funcionamento.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              4. Propriedade do conteúdo
            </h2>
            <p>
              Todos os textos, imagens e elementos visuais deste site pertencem a Alessandro
              Bortoletto ou são usados com autorização. Não é permitido copiar, reproduzir ou
              redistribuir esse conteúdo sem autorização prévia.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              5. Link para o WhatsApp
            </h2>
            <p>
              Ao clicar no botão de contato, você será redirecionado ao aplicativo WhatsApp, fora
              deste site. A conversa que acontece ali segue os termos do próprio WhatsApp, sobre os
              quais Alessandro Bortoletto não tem controle.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              6. Alterações destes termos
            </h2>
            <p>
              Estes termos podem ser atualizados a qualquer momento, para refletir mudanças no site
              ou na forma como o serviço é oferecido. A data no topo desta página indica a versão
              mais recente.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">7. Contato</h2>
            <p>
              Dúvidas sobre estes Termos de Uso ou sobre a Política de Privacidade podem ser
              enviadas pelo mesmo canal de WhatsApp disponível neste site.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-4 inline-flex w-fit items-center justify-center rounded-md border border-[#7B2C3B] px-5 py-2 text-sm font-medium text-[#7B2C3B] transition-colors hover:bg-[#EDE0DA]"
        >
          Voltar para a página inicial
        </Link>
      </section>

      <footer className="bg-[#2C2C2C] px-6 py-6 text-center text-white">
        <p className="text-sm">© 2026 Alessandro Bortoletto — Coach de Vida | Florianópolis, SC</p>
      </footer>
    </main>
  );
}
