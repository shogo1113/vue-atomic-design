// import axios from 'axios';
import type { Todo } from '@/types/todo'

// const api = axios.create({
//   baseURL: 'https://api.example.com/todos' // 仮のエンドポイント
// });
const TODOS_KEY = 'todos'

const getStoredTodos = (): Todo[] => {
  const todos = sessionStorage.getItem(TODOS_KEY)
  return todos ? JSON.parse(todos) : []
}

const setStoredTodos = (todos: Todo[]) => {
  sessionStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

export const todoApi = {
  getTodos() {
    return new Promise<Todo[]>((resolve) => {
      resolve(getStoredTodos())
    })
  },

  createTodo(todo: Omit<Todo, 'id'>) {
    return new Promise<Todo>((resolve) => {
      const todos = getStoredTodos()
      const newTodo = { ...todo, id: Date.now() }
      todos.push(newTodo)
      setStoredTodos(todos)
      resolve(newTodo)
    })
  },

  updateTodo(id: number, todo: Todo) {
    return new Promise<Todo>((resolve, reject) => {
      const todos = getStoredTodos()
      const index = todos.findIndex((t) => t.id === id)
      if (index === -1) {
        reject(new Error('Todo not found'))
        return
      }
      todos[index] = todo
      setStoredTodos(todos)
      resolve(todo)
    })
  },

  deleteTodo(id: number) {
    return new Promise<void>((resolve, reject) => {
      const todos = getStoredTodos()
      const index = todos.findIndex((t) => t.id === id)
      if (index === -1) {
        reject(new Error('Todo not found'))
        return
      }
      todos.splice(index, 1)
      setStoredTodos(todos)
      resolve()
    })
  },
}
