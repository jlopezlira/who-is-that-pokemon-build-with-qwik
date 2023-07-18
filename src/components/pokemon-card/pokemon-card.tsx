import { component$ } from "@builder.io/qwik";

type Props = {
  pokemonId: number;
  backImage?: boolean;
};

const IMAGE_SRC =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const PokemonCard = component$<Props>(({ pokemonId, backImage }) => {
  const renderImage = `${IMAGE_SRC}/${pokemonId}.png`;

  const renderBackImage = `${IMAGE_SRC}/back/${pokemonId}.png`;

  return (
    <div class="animate animate-shake animate-once animate-ease-in-out relative">
      <img
        src={backImage ? renderBackImage : renderImage}
        alt="Pokemon"
        class={backImage && "brightness-0"}
        height={200}
        width={200}
      />
    </div>
  );
});

export default PokemonCard;
