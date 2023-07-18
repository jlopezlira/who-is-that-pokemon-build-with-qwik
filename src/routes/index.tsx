import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1>Hola Qwiq</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hola Qwiq",
  meta: [
    {
      name: "description",
      content: "Qwiq is a new way to build web apps.",
    },
  ],
};
