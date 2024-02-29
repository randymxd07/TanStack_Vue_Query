import pokeApi from "@/api/pokeApi";
import type { Pokemon } from "@/interfaces/pokemon.interface";

export const getPokemon = async () => {
    const { data } = await pokeApi.get<Pokemon>('pokemon/ditto');
    return data;
};