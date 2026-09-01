import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pressell" },
      { name: "description", content: "Em construção" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Pressell</h1>
      <p className="mt-3 text-base text-muted-foreground">Em construção</p>
    </main>
  );
}
