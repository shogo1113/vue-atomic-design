import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Todo, TodoFilter } from '@/types/todo'
import { todoApi } from '@/apis/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const filter = ref<TodoFilter>('all')

  async function fetchTodos() {
    const response = await todoApi.getTodos()
    todos.value = response
  }

  async function addTodo(title: string) {
    const response = await todoApi.createTodo({ title, completed: false })
    todos.value.push(response)
  }

  async function toggleTodo(id: number) {
    const todo = todos.value.find((t) => t.id === id)
    if (!todo) return

    const response = await todoApi.updateTodo(id, {
      ...todo,
      completed: !todo.completed,
    })

    const index = todos.value.findIndex((t) => t.id === id)
    todos.value[index] = response
  }

  async function deleteTodo(id: number) {
    await todoApi.deleteTodo(id)
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  function setFilter(newFilter: TodoFilter) {
    filter.value = newFilter
  }

  return {
    todos,
    filter,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
  }
})
