<template>
    <v-app :theme="theme">
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>
          <h1>Hallo Welt</h1>

        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type theme = "light" | "dark";

const theme = ref<theme>('light')

function onClick () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
