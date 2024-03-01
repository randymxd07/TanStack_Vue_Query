import { getPokemons } from '@/helpers/getPokemons';
import { useQuery } from '@tanstack/vue-query';

export const usePokemon = () => {

    const { isPending, isFetching, isError, data:pokemons, error } = useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
    })

    return {
        pokemons,
    }

}