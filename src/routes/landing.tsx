import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [{ title: "Alessandro Bortoletto" }, { name: "description", content: "Em construção" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5EDE8] px-6 text-center text-[#2C2C2C]">
      <h1 className="font-['Playfair_Display',serif] text-3xl font-semibold text-[#7B2C3B]">
        Alessandro Bortoletto
      </h1>
      <p className="mt-3 text-lg">Página em construção</p>
    </main>
  );
}
