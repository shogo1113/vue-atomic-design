<script setup lang="ts">
import TodoList from '@/components/organisms/TodoList.vue'
import TodoForm from '@/components/organisms/TodoForm.vue'
</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Todoリスト</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>
