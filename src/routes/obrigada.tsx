import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigada")({
  head: () => ({
    meta: [{ title: "Ficha recebida | Alessandro Bortoletto" }],
  }),
  component: Obrigada,
});

function Obrigada() {
  return (
    <main className="presell-page flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F5EDE8] px-6 text-center text-[#2C2C2C]">
      <span className="text-[64px]" aria-hidden="true">
        ✅
      </span>
      <h1 className="font-heading text-[28px] font-semibold text-[#7B2C3B] sm:text-[34px]">
        Ficha recebida com sucesso.
      </h1>
      <p className="max-w-[480px] text-[17px] leading-relaxed">
        Obrigada por compartilhar isso comigo. Analisarei sua ficha com cuidado e entrarei em
        contato pessoalmente em até 24 horas para comunicar se você foi selecionada.
      </p>
      <p className="text-[15px] italic text-[#2C2C2C]/70">Fique atenta ao seu WhatsApp e email.</p>
      <p className="text-[15px] text-[#2C2C2C]/70">
        Se não receber meu contato em até 24 horas, pode me chamar direto no WhatsApp:{" "}
        <a
          href="https://wa.me/5548935000948"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7B2C3B] underline"
        >
          (48) 93500-0948
        </a>
      </p>
    </main>
  );
}
