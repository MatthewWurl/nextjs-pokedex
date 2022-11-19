import PokemonCard from "./pokemonCard";

export default function PokemonContainer({ data }) {
  return (
    <div className="flex justify-center flex-wrap items-center pb-10 md:pb-14">
      {/* entire container of all pokemon */}
      {data.map((pokemon, idx) => {
        return <PokemonCard key={idx} pokemon={pokemon} />;
      })}
    </div>
  );
}
