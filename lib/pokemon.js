import client from "../apollo-client";
import { gql } from "@apollo/client";

export const numPokemon = 898;

export const typeColors = {
  // light colors from https://bulbapedia.bulbagarden.net/wiki/Category:Type_color_templates
  normal: "#C6C6A7",
  fire: "#F5AC78",
  water: "#9DB7F5",
  grass: "#A7DB8D",
  electric: "#FAE078",
  ice: "#BCE6E6",
  fighting: "#D67873",
  poison: "#C183C1",
  ground: "#EBD69D",
  flying: "#C6B7F5",
  psychic: "#FA92B2",
  bug: "#C6D16E",
  rock: "#D1C17D",
  ghost: "#A292BC",
  dark: "#A29288",
  dragon: "#A27DFA",
  steel: "#D1D1E0",
  fairy: "#F4BDC9",
};

//export const getPaddedId = (id) => (id < 100 ? ("00" + id).slice(-3) : id);
export const getPaddedId = (id) => id.toString().padStart(3, "0");

export async function querySinglePokemonData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    id,
    data,
  };
}

export async function queryAllPokemonData() {
  const { data } = await client.query({
    query: gql`
      query AllPokemonWithTypes {
        pokemon_v2_pokemon(limit: ${numPokemon}) {
          id
          name
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
  });

  const { pokemon_v2_pokemon: pokemonData } = data;

  const pokemonDataWithImages = pokemonData.map((pokemon) => {
    const image = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPaddedId(
      pokemon.id
    )}.png`;

    return {
      ...pokemon,
      image,
    };
  });

  return pokemonDataWithImages;
}
