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
  <div class="space-y-4">
    <div class="flex gap-2">
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
    </div>
    <div class="border rounded-lg divide-y">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="todoStore.toggleTodo"
        @delete="todoStore.deleteTodo"
      />
    </div>
  </div>
</template>
