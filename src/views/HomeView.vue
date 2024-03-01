<script setup lang="ts">
import { usePokemon } from '../composables/usePokemon';
const { pokemons } = usePokemon();
</script>

<template>
  <div>
    <h1>Pokemon List:</h1>
    <ul>
      <li v-for="pokemon in pokemons?.results">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
