import Head from "next/head";
import Image from "next/image";
import PokemonContainer from "../components/pokemonContainer";
import { queryAllPokemonData } from "../lib/pokemon";
import { useEffect, useState } from "react";
import Footer from "../components/footer";

export async function getStaticProps() {
  const data = await queryAllPokemonData();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilteredData(
      data.filter((pokemon) => pokemon.name.includes(searchValue.toLowerCase()))
    );
  }, [searchValue, data]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Matt&apos;s Pokédex App</title>
      </Head>
      <main className="bg-dark pt-12 pb-4 min-h-screen text-center font-roboto sm:px-2 px-3">
        <div className="flex justify-center items-center text-gray-300 text-3xl mb-6">
          <Image
            src="/images/pokeball_2.png"
            alt="pokeball"
            width={48}
            height={48}
          />
          <div className="ml-2">Matt&apos;s Pokedex</div>
        </div>
        {/* search bar */}
        <div className="flex justify-center items-center text-gray-300 text-2xl mb-4">
          <div className="relative bg-gray-600 p-2 rounded border-2 border-blue-400">
            <svg
              className="w-6 h-6 absolute left-0 ml-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="ml-7 bg-transparent outline-none md:w-96"
              value={searchValue}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        {filteredData.length === 0 ? (
          searchValue === "" ? (
            <h3 className="text-gray-300">Loading...</h3>
          ) : (
            <h3 className="text-gray-300">
              No Pokémon with that name was found.
            </h3>
          )
        ) : (
          <div>
            <div className="text-gray-300 my-2">
              Currently showing {filteredData.length} Pokémon.
            </div>
            <PokemonContainer data={filteredData} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
