<script setup lang="ts">
import { onMounted } from 'vue'
import TodoTemplate from '@/components/templates/TodoTemplate.vue'

import { useTodoStore } from '@/stores/todo'
const todoStore = useTodoStore()

onMounted(() => {
  todoStore.fetchTodos()
})
</script>

<template>
  <TodoTemplate />
</template>
