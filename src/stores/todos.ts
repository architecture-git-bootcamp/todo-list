import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo'

export const useTodosStore = defineStore('todos', () => {
  
  const todos = ref<Todo[]>([])

  const openTodos = computed(() => todos.value.filter(todo => todo.status === 'open'))

  function addTodo(todo: Todo) {
    todos.value.push(todo)
  }

  function deleteTodo(todoId: string) {

  }

  return { todos, openTodos, addTodo, deleteTodo }
})
