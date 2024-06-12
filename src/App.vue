<template>
  <v-layout>
    <v-app :theme="theme">
      <v-navigation-drawer v-model="open" :temporary="$vuetify.display.mobile">
        <img class="ml-4" src="/public/logo.svg">
        <v-list-item class="d-flex justify-sm-start" :class="selectedMenuEntry == 'all' ? 'menu-active' : ''"  @click="selectedMenuEntry = 'all'">Alle
        </v-list-item>
        <v-list-item class="d-flex justify-sm-start" :class="selectedMenuEntry == 'open' ? 'menu-active' : ''" @click="selectedMenuEntry = 'open'">Offen
        </v-list-item>
        {{ selectedMenuEntry }}
      </v-navigation-drawer>

      <v-app-bar class="px-2" elevation="0">
        <v-btn v-if="$vuetify.display.mobile" icon="mdi-menu" @click="open = !open"></v-btn>
        <h1>Dashboard</h1>
        <v-spacer></v-spacer>

        <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="toggleTheme"></v-btn>
      </v-app-bar>

      <v-main>
        <v-text-field v-model="newTodo" id="newTodo" name="newTodo" label="Aufgabe eingeben" @keyup.enter="addTodo"
          persistent-hint />
        <v-btn prepend-icon="mdi-plus" block variant="tonal" color="green" @click="addTodo">Hinzufügen</v-btn>
        <v-list>
          <v-list-item v-for="todo in dynamicTodos" class="d-flex justify-sm-start">
            <template #prepend>
              <v-checkbox v-if="todo.status == 'open'" @click="markAsDone(todo.id)" hide-details></v-checkbox>

              <v-btn v-else color="red" @click="deleteTodo(todo.id)" icon="mdi-delete" elevation="0" variant="text">
              </v-btn>

            </template>

            <div>
              <v-list-item-title>
                <template v-if="todo.status == 'open'">
                  {{ capitalize(todo.title) }}
                </template>
                <strike v-else>
                  {{ capitalize(todo.title) }}
                </strike>
              </v-list-item-title>
              <v-list-item-subtitle>Added on: {{ todo.createdAt }}</v-list-item-subtitle>
            </div>
            <div></div>
          </v-list-item>
        </v-list>
      </v-main>
    </v-app>
  </v-layout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { watch } from 'vue';


type Todo = {
  id: string;
  createdAt: Date;
  status: 'open' | 'done';
  title: string;
}


function capitalize(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}



const newTodo = ref('')

const todos = ref<Todo[]>([])

const selectedMenuEntry = ref<'all' | 'open'>('all')

watch(todos, () => console.log(todos.value), { deep: true });

const dynamicTodos = computed(()=> {
  if (selectedMenuEntry.value == 'all') {
    return todos.value
  }
  return todos.value.filter(todo => todo.status == 'open')
})

function addTodo() {
  todos.value.push(
    {
      id: Math.random().toString(),
      createdAt: new Date(),
      status: 'open',
      title: newTodo.value
    }
  )
}

function deleteTodo(todoId: string) {
  todos.value = todos.value.filter(todo => todo.id !== todoId)
}

function markAsDone(todoId: string) {
  todos.value = todos.value.map(todo => {
    if (todo.id == todoId) {
      return {
        ...todo,
        status: 'done'
      } as Todo
    }
    return todo
  })
}

onMounted(() => {
  if (localStorage.getItem("todos")) {
    todos.value = JSON.parse(localStorage.getItem("todos") ?? '') ?? [];
  }
})

watch(todos, () => {
  localStorage.setItem("todos", JSON.stringify(todos.value))
}, { deep: true })


type Theme = "light" | "dark";

const theme = ref<Theme>('light')

const open = ref(true)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.menu-active {
  background-color: rgba(43, 49, 54, 0.474);
}
</style>