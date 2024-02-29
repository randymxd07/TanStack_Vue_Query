import { getPokemon } from '@/helpers/getPokemons';
import type { Pokemon } from '@/interfaces/pokemon.interface';
import { useQuery } from '@tanstack/vue-query';
import { onMounted, ref } from 'vue';

export const usePokemon = () => {

    const { isPending, isFetching, isError, data:pokemon, error } = useQuery({
        queryKey: ['pokemon'],
        queryFn: getPokemon,
    })

    return {
        pokemon,
    }

}