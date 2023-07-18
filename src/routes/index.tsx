import { $, component$, useSignal } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonCard } from "@/components/pokemon-card";

export default component$(() => {
  const pokemonId = useSignal(1);
  const showBackImage = useSignal(true);

  const handleChangePokemon = $(() => {
    showBackImage.value = true;
    const randomPokemonId = Math.floor(Math.random() * 151) + 1;
    pokemonId.value = randomPokemonId;
  });

  return (
    <>
      <img
        src="
      /assets/who-is-that-pokemon.png
      "
        alt="Who is that Pokemon?"
        height={200}
        width={200}
      />

      <PokemonCard
        pokemonId={pokemonId.value}
        backImage={showBackImage.value}
      />

      <div class="space-x-4 my-8">
        <button
          class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick$={() => handleChangePokemon()}
        >
          Load
        </button>

        <button
          class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick$={() => (showBackImage.value = !showBackImage.value)}
        >
          Toggle Back Image
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwiq",
  meta: [
    {
      name: "description",
      content: "Who is that Pokemon? Build with Qwiq",
    },
  ],
};
