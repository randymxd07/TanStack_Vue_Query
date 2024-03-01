import pokeApi from "@/api/pokeApi";
import type { Pokemons } from "@/interfaces/pokemon.interface";

export const getPokemons = async () => {
    const { data } = await pokeApi.get<Pokemons>('pokemon');
    return data;
};