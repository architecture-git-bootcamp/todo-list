<template>
    <v-text-field v-model="newTodo" id="newTodo" name="newTodo" label="Aufgabe eingeben" @keyup.enter="addTodo" persistent-hint />
    <v-btn prepend-icon="mdi-plus" block variant="tonal" color="green" @click="addTodo">Hinzufügen</v-btn>
</template>

<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';
import {ref} from 'vue'

const todoStore = useTodosStore()
const newTodo = ref('')

const addTodo = () => {
    todoStore.addTodo(
        {
            id: Math.random().toString(),
            createdAt: new Date(),
            status: 'open',
            title: newTodo.value
        }
    )
}

</script>