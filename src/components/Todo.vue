<template>
    <v-card>
        <template v-slot:title>
          {{ todo.title }}
          <v-spacer></v-spacer>
          <v-chip v-if="todo.status == 'open'" variant="elevated">
            Offen
          </v-chip>
          <v-chip v-if="todo.status == 'done'" variant="elevated">
            Erledigt
          </v-chip>
        </template>

        <template v-slot:subtitle>
          {{ todo.createdAt }}
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
    </v-card>
</template>

<script setup lang="ts">
import type { Todo } from '../types/todo'

type Props = {
    todo: Todo
}

defineProps<Props>()

</script>