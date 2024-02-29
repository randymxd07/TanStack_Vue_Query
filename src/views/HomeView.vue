<script setup lang="ts">
import { usePokemon } from '../composables/usePokemon';

const { pokemon } = usePokemon();
</script>

<template>
  <div>
    <h1>Pokemon</h1>
    <h2>Nombre: {{ pokemon?.name }}</h2>
  </div>
</template>
