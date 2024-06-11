import { ref, computed, toDisplayString, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo'

export const useTodosStore = defineStore('todos', () => {
  
  const todos = ref<Todo[]>([])

  const openTodos = computed(() => todos.value.filter(todo => todo.status === 'open'))

  function addTodo(todo: Todo) {
    todos.value.push(todo)
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

  onMounted(()=> {
    todos.value = JSON.parse(localStorage.getItem("todos") ?? '') ?? [];
  })

  watch(todos, () => {
    localStorage.setItem("todos",JSON.stringify(todos.value))
  }, {deep: true})

  return { todos, openTodos, addTodo, deleteTodo, markAsDone }
})
