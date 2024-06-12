<template>
  <new-task />
  <v-list>
    <v-list-item v-for="todo in todosStore.todos" class="d-flex justify-sm-start"
      >
      <template #prepend>
        <v-checkbox v-if="todo.status == 'open'" @click="todosStore.markAsDone(todo.id)" hide-details></v-checkbox>

        <v-btn v-else color="red" @click="todosStore.deleteTodo(todo.id)" icon="mdi-delete" elevation="0"
          variant="text">
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
        <v-list-item-subtitle>Asignee: {{ todo.asignee }}</v-list-item-subtitle>
      </div>
      <div></div>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useTodosStore } from '../stores/todos';
import NewTask from './NewTask.vue';

const todosStore = useTodosStore()

function capitalize(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}


watch(() => todosStore.todos, () => console.log(todosStore.todos), { deep: true });

</script>