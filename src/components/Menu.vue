<template>
    <v-list-item class="d-flex justify-sm-start" :class="todoStore.selectedMenuEntry == 'all' ? 'menu-active' : ''"  @click="todoStore.selectedMenuEntry = 'all'">Alle
    </v-list-item>
    <v-list-item class="d-flex justify-sm-start" :class="todoStore.selectedMenuEntry == 'open' ? 'menu-active' : ''" @click="todoStore.selectedMenuEntry = 'open'">Offen
    </v-list-item>
  </template>

<script setup lang="ts">
  import { useTodosStore } from '../stores/todos';

  const todoStore= useTodosStore()
</script>

<style scoped>
  .menu-active {
    background-color: rgba(43, 49, 54, 0.374);
  }
</style>