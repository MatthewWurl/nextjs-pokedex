import Head from "next/head";
import Link from "next/link";
import { getPaddedId, querySinglePokemonData } from "../../lib/pokemon";

export async function getServerSideProps({ params }) {
  const pokemonData = await querySinglePokemonData(params.id);
  return {
    props: {
      pokemonData,
    },
  };
}

export default function Pokemon({ pokemonData }) {
  const { data } = pokemonData;
  return (
    <div>
      <Head>
        <title className="uppercase">Pokémon - #{getPaddedId(data.id)}</title>
      </Head>
      <div>
        <main className="bg-dark pt-12 pb-4 min-h-screen text-center font-roboto text-gray-300">
          <header className="capitalize">
            <Link href="/">
              <a>Back to Home . . . . . . .</a>
            </Link>
            {data.name}
          </header>
          <h1>This is a single Pokemon page.</h1>
          <br />
          <p className="text-4xl">
            The pokemon name is: <b className="capitalize">{data.name}</b>.
          </p>
        </main>
      </div>
    </div>
  );
}
