import Image from "next/image";
import Link from "next/link";
import { getPaddedId, typeColors } from "../lib/pokemon";

export default function PokemonCard({ pokemon }) {
  const { id, image, name, types } = pokemon;

  // types = [
  //   {
  //     type: {
  //       name: "type1"
  //     }
  //   },
  //   {
  //     type: {
  //       name: "type2"
  //     }
  //   }
  // ]

  // w-24 md:w-28 bg-white p-3 m-1 sm:m-2 rounded text-center cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300

  return (
    <div
      className="text-black w-32 rounded-2xl m-2 p-4 text-center"
      style={{
        backgroundImage: `-webkit-linear-gradient(-30deg, ${
          typeColors[types[0].type.name]
        } 50%, ${
          typeColors[types[1]?.type?.name] || typeColors[types[0].type.name]
        } 50%)`,
        // boxShadow: "0 3px 18px rgba(200, 200, 200, 0.5)",

        // backgroundImage: `linear-gradient(
        //   #ddd,
        //   ${typeColors[types[0].type.name]}
        //   )`,
        // boxShadow: "0 4px 8px rgba(200, 200, 200, 0.5)",
      }}
    >
      <Link href={`/pokemon/${name}`}>
        <a>
          <div className="flex justify-center items-center rounded-full bg-img-container">
            {/**
             * 	background-color: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                width: 120px;
                height: 120px;
                text-align: center;
             */}
            <Image
              src={image || "/images/pokeball.png"}
              alt="pokemon-thumbnail"
              className="w-full h-full"
              width={128}
              height={128}
            />
          </div>
          <div className="text-center mt-2">
            <span className="bg-id-container rounded-lg px-2 py-1">
              #{getPaddedId(id)}
            </span>
            {/**
             * 	background-color: rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                font-size: 0.8em;
                padding: 5px 10px;
             */}
            <h3 className="text-lg capitalize">{name}</h3>
            <small className="text-xs">
              <span>
                {types
                  .map(
                    (typeObj) =>
                      typeObj.type.name[0].toUpperCase() +
                      typeObj.type.name.substr(1)
                  )
                  .join("/")}
              </span>
            </small>
          </div>
        </a>
      </Link>
    </div>
  );
}
