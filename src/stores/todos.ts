import { ref, computed, toDisplayString } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo'

export const useTodosStore = defineStore('todos', () => {
  
  const todos = ref<Todo[]>([])

  const openTodos = computed(() => todos.value.filter(todo => todo.status === 'open'))

  function addTodo(todo: Todo) {
    todos.value.push(todo)
  }

  function deleteTodo(todoId: string) {
    todos.value.filter(todo => todo.id !== todoId)
  }

  function markAsDone(todoId: string) {
    todos.value.map(todo => {
      if (todo.id == todoId) {
        return {
          ...todo,
          status: 'done'
        }
      }
      return todo
    })
  }

  return { todos, openTodos, addTodo, deleteTodo, markAsDone }
})
