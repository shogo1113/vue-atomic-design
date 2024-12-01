<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '../molecules/TodoItem.vue'
import BaseButton from '../atoms/BaseButton.vue'

const todoStore = useTodoStore()
const { todos, filter } = storeToRefs(todoStore)

const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'active':
      return todos.value.filter((todo) => !todo.completed)
    case 'completed':
      return todos.value.filter((todo) => todo.completed)
    default:
      return todos.value
  }
})
</script>

<template>
  <div class="space-y-6">
    <nav class="flex flex-wrap gap-2" aria-label="タスクフィルター">
      <BaseButton
        :variant="filter === 'all' ? 'primary' : 'secondary'"
        @click="todoStore.setFilter('all')"
      >
        すべて
      </BaseButton>
      <BaseButton
        :variant="filter === 'active' ? 'primary' : 'secondary'"
        @click="todoStore.setFilter('active')"
      >
        未完了
      </BaseButton>
      <BaseButton
        :variant="filter === 'completed' ? 'primary' : 'secondary'"
        @click="todoStore.setFilter('completed')"
      >
        完了済み
      </BaseButton>
    </nav>
    <div class="material-card divide-y divide-gray-200 dark:divide-gray-700">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="todoStore.toggleTodo"
        @delete="todoStore.deleteTodo"
      />
      <p 
        v-if="filteredTodos.length === 0"
        class="py-8 text-center text-gray-500 dark:text-gray-400"
        role="status"
      >
        タスクがありません
      </p>
    </div>
  </div>
</template>