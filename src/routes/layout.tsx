import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="w-full h-screen bg-gradient-to-l from-red-900 to-red-600 text-neutral-50 flex flex-col items-center justify-center">
      <Slot />
    </main>
  );
});
