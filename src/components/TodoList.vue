<template>
                  <v-list-item-group>
                    <v-list-item v-for="(todo, i) in todosStore.todos">
                      <template #default="{ active, toggle }">
                        <v-list-item-action>

                          <v-checkbox v-model="active" @click="toggle"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title >{{ capitalize(todo.title) }}</v-list-item-title>
                          <v-list-item-subtitle>Added on: {{ todo.createdAt }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-btn fab ripple small color="red" v-if="todo.status == 'done'" @click="todosStore.deleteTodo(todo.id)">
                          <v-icon class="white--text">mdi-close</v-icon>
                        </v-btn>
                      </template>
                    </v-list-item>
                  </v-list-item-group>


</template>

<script setup lang="ts">
import { useTodosStore } from '../stores/todos';

const todosStore = useTodosStore()

function capitalize (value: string) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
}


</script>