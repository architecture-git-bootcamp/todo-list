<template>
  <v-layout>
    <v-app :theme="theme">
      <v-navigation-drawer v-model="open"        
        :temporary="$vuetify.display.mobile"
>
        <img class="ml-4" src="/public/logo.svg">
        <new-task />
      </v-navigation-drawer>

      <v-app-bar class="px-2" elevation="0">
        <v-btn v-if="$vuetify.display.mobile" icon="mdi-menu" @click="open = !open"></v-btn>
        <h1>Übersicht</h1>
        <v-spacer></v-spacer>

        <v-btn
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          slim
          @click="toggleTheme"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <todo-list />
      </v-main>
    </v-app>
    </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NewTask from './components/NewTask.vue';
import TodoList from './components/TodoList.vue';

type Theme = "light" | "dark";

const theme = ref<Theme>('light')

const open = ref(true)

function toggleTheme () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
