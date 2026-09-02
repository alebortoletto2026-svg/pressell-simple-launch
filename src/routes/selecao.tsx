import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/selecao")({
  head: () => ({
    meta: [
      { title: "Ficha de Seleção | Alessandro Bortoletto" },
      {
        name: "description",
        content: "Preencha sua ficha de seleção para a Sessão de Grandes Desafios gratuita.",
      },
    ],
  }),
  component: Selecao,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgaekdgr";
const NOTIFY_EMAIL = "alebortoletto2026@gmail.com";

const fieldClass =
  "w-full min-h-[80px] rounded-lg border border-[#2C2C2C]/20 p-3 text-[16px] text-[#2C2C2C] outline-none transition-colors focus:border-[#7B2C3B]";
const inputClass =
  "w-full rounded-lg border border-[#2C2C2C]/20 p-3 text-[16px] text-[#2C2C2C] outline-none transition-colors focus:border-[#7B2C3B]";

function Field({
  label,
  example,
  children,
}: {
  label: string;
  example?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-heading text-[16px] font-semibold text-[#7B2C3B]">{label}</label>
      {example && <p className="text-[14px] italic text-[#2C2C2C]/60">{example}</p>}
      {children}
    </div>
  );
}

function Selecao() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = "/obrigada";
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="presell-page min-h-screen bg-[#F5EDE8] text-[#2C2C2C]">
      {/* BLOCO 1 — Header mínimo */}
      <header className="flex items-center justify-center px-6 py-6">
        <span className="font-heading text-xl font-semibold text-[#7B2C3B] sm:text-2xl">
          Alessandro Bortoletto
        </span>
      </header>

      {/* BLOCO 2 — Introdução */}
      <section className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:py-14">
        <h1 className="font-heading max-w-2xl text-[28px] font-semibold leading-tight text-[#7B2C3B] sm:text-[34px]">
          Ficha de Seleção — Sessão de Grandes Desafios
        </h1>
        <p className="max-w-[640px] text-[17px] leading-relaxed">
          Estou selecionando um número limitado de mulheres para uma Sessão de Grandes Desafios
          gratuita. Responda com sinceridade — analisarei cada ficha pessoalmente.
        </p>
        <p className="max-w-[640px] text-[15px] italic leading-relaxed text-[#2C2C2C]/70">
          Se você for selecionada, entrarei em contato em até 24 horas.
        </p>
      </section>

      {/* BLOCO 3 — Formulário */}
      <section className="px-6 pb-16">
        <form
          onSubmit={handleSubmit}
          noValidate={false}
          className="mx-auto flex max-w-[680px] flex-col gap-6 rounded-2xl bg-white p-6 shadow-md sm:p-10"
        >
          <Field label="Seu nome completo">
            <input type="text" name="nome" required className={inputClass} />
          </Field>

          <Field
            label="1. Qual é o seu principal objetivo com o Coaching? O que deseja realizar?"
            example="Ex: Reconectar com quem eu sou depois que os filhos saíram de casa. Ter clareza do meu próximo passo. Sair do piloto automático. Reconstruir minha identidade após a aposentadoria."
          >
            <textarea
              name="objetivo_principal"
              required
              className={fieldClass}
              style={{ minHeight: "100px" }}
            />
          </Field>

          <Field
            label="2. O que esse objetivo vai te ajudar a evitar na sua vida?"
            example="Ex: Continuar me sentindo invisível. Deixar mais anos passarem sem saber quem eu sou. Ficar presa na mesma sensação de vazio."
          >
            <textarea
              name="o_que_evitar"
              required
              className={fieldClass}
              style={{ minHeight: "100px" }}
            />
          </Field>

          <Field
            label="3. O que esse objetivo vai te ajudar a conquistar?"
            example="Ex: Paz comigo mesma. Clareza sobre o que quero. Reconexão com meus sonhos. Uma vida que faça sentido pra mim agora."
          >
            <textarea
              name="o_que_conquistar"
              required
              className={fieldClass}
              style={{ minHeight: "100px" }}
            />
          </Field>

          <Field label="4. O que você já fez ou vem fazendo para tentar atingir esse objetivo?">
            <textarea
              name="o_que_ja_tentou"
              required
              className={fieldClass}
              style={{ minHeight: "80px" }}
            />
          </Field>

          <Field
            label="5. Se existe algo te impedindo de atingir esse objetivo, o que é?"
            example="Ex: Medo, insegurança, não saber por onde começar, sensação de que já é tarde demais."
          >
            <textarea
              name="o_que_impede"
              required
              className={fieldClass}
              style={{ minHeight: "100px" }}
            />
          </Field>

          <Field label="6. Em quanto tempo você deseja realizar esse objetivo?">
            <input type="text" name="prazo" required className={inputClass} />
          </Field>

          <Field label="7. O que acontecerá se você não conseguir conquistar esse objetivo?">
            <textarea
              name="consequencia"
              required
              className={fieldClass}
              style={{ minHeight: "80px" }}
            />
          </Field>

          <Field
            label="8. Qual é o seu maior medo?"
            example="Ex: Chegar ao fim da vida sem ter sido quem eu poderia ter sido. Continuar me sentindo invisível. Perder mais tempo."
          >
            <textarea
              name="maior_medo"
              required
              className={fieldClass}
              style={{ minHeight: "100px" }}
            />
          </Field>

          <Field label="9. Imagine que você está no futuro e conquistou seu objetivo. O que você vê, diz para si mesma e sente?">
            <textarea
              name="visao_futuro"
              required
              className={fieldClass}
              style={{ minHeight: "100px" }}
            />
          </Field>

          <Field
            label="10. Quanto vale a conquista desse objetivo para você?"
            example="Não existe resposta certa. Escreva um valor que mostre o quanto isso importa pra você — R$ 500, R$ 5.000, R$ 50.000?"
          >
            <textarea
              name="valor_objetivo"
              required
              className={fieldClass}
              style={{ minHeight: "60px" }}
            />
          </Field>

          <Field label="Qual é a sua renda mensal aproximada?">
            <select name="renda_mensal" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                (selecione uma opção)
              </option>
              <option value="Até R$ 2.000">Até R$ 2.000</option>
              <option value="De R$ 2.000 a R$ 4.000">De R$ 2.000 a R$ 4.000</option>
              <option value="De R$ 4.000 a R$ 7.000">De R$ 4.000 a R$ 7.000</option>
              <option value="De R$ 7.000 a R$ 10.000">De R$ 7.000 a R$ 10.000</option>
              <option value="Acima de R$ 10.000">Acima de R$ 10.000</option>
              <option value="Prefiro não informar">Prefiro não informar</option>
            </select>
          </Field>

          <input type="hidden" name="_replyto" value={NOTIFY_EMAIL} />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex min-h-[56px] w-full items-center justify-center rounded-lg bg-[#7B2C3B] px-10 py-4 text-center text-[18px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-70 sm:w-auto"
          >
            {loading ? "Enviando..." : "Enviar minha ficha →"}
          </button>

          {error && (
            <p className="text-[15px] text-red-600">Ocorreu um erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </section>
    </main>
  );
}
