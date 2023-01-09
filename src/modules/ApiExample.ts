import axios from "axios";

export const invokeAPI = async () => {
  function getPokemonURL(name: string): string {
    return `https://pokeapi.co/api/v2/pokemon/${name}`;
  }

  const pokemon: string = "ditto";

  const res = await axios.get(getPokemonURL(pokemon));
  console.log(res);
};
