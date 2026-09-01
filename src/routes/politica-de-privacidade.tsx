import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Alessandro Bortoletto" },
      {
        name: "description",
        content:
          "Política de Privacidade do site de Alessandro Bortoletto, coach de vida em Florianópolis, SC.",
      },
    ],
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <main className="presell-page min-h-screen bg-[#F5EDE8] text-[#2C2C2C]">
      <header className="flex items-center justify-center px-6 py-6">
        <Link to="/" className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
          Alessandro Bortoletto
        </Link>
      </header>

      <section className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-10 sm:py-14">
        <h1 className="font-heading text-[28px] font-semibold text-[#7B2C3B] sm:text-[34px]">
          Política de Privacidade
        </h1>
        <p className="text-sm text-[#2C2C2C]/70">Última atualização: setembro de 2026.</p>

        <div className="flex flex-col gap-5 text-[17px] leading-[1.8]">
          <p>
            Esta Política de Privacidade explica como este site trata as informações de quem o
            visita, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 —
            LGPD).
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              1. Quem é o responsável pelo tratamento de dados
            </h2>
            <p>
              Alessandro Bortoletto, coach de vida certificado pelo Instituto Brasileiro de Coaching
              (IBC), com atuação em Florianópolis, SC, é o responsável pelo tratamento das
              informações relacionadas a este site.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              2. Quais dados este site coleta
            </h2>
            <p>
              Este site não possui formulários de cadastro, captura de e-mail ou qualquer campo que
              peça dados pessoais diretamente. O único ponto de contato oferecido é o botão de
              WhatsApp, que abre uma conversa fora deste site, diretamente no aplicativo do
              WhatsApp.
            </p>
            <p>
              Ao clicar nesse botão, você decide o que compartilhar na conversa — nome, telefone e
              qualquer outra informação enviada ali são tratados diretamente por Alessandro
              Bortoletto, dentro do próprio WhatsApp, e não ficam armazenados neste site.
            </p>
            <p>
              Como qualquer site, o servidor que hospeda esta página pode registrar automaticamente
              informações técnicas de navegação, como tipo de navegador, dispositivo e páginas
              visitadas, usadas apenas para manter o site funcionando corretamente e com segurança.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              3. Como esses dados são usados
            </h2>
            <p>
              As informações trocadas via WhatsApp são usadas exclusivamente para responder ao seu
              contato, entender sua necessidade e, se fizer sentido para você, agendar uma conversa
              sobre o processo de coaching. Nenhuma informação é vendida, alugada ou compartilhada
              com terceiros para fins comerciais.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">4. Cookies</h2>
            <p>
              Este site pode usar cookies técnicos essenciais para seu funcionamento básico. Caso
              ferramentas de análise de tráfego sejam adicionadas no futuro, essa política será
              atualizada para refletir exatamente o que passa a ser coletado.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">5. Seus direitos</h2>
            <p>Conforme a LGPD, você tem direito a, entre outros:</p>
            <ul className="flex list-none flex-col gap-1 pl-0">
              <li>— confirmar a existência de tratamento dos seus dados;</li>
              <li>— acessar os dados que eventualmente tenham sido compartilhados por você;</li>
              <li>— corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>
                — solicitar a exclusão de dados pessoais tratados a partir do seu consentimento;
              </li>
              <li>— revogar o consentimento a qualquer momento.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, basta enviar uma mensagem pelo mesmo
              WhatsApp usado para o contato inicial.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-semibold text-[#7B2C3B]">
              6. Alterações desta política
            </h2>
            <p>
              Esta política pode ser atualizada sempre que o site passar a coletar ou tratar dados
              de forma diferente da descrita aqui. A data no topo desta página indica a versão mais
              recente.
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
