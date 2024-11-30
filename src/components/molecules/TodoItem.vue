<script setup lang="ts">
import type { Todo } from '@/types/todo'
import BaseButton from '../atoms/BaseButton.vue'

defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div class="flex items-center gap-4">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="emit('toggle', todo.id)"
        class="w-4 h-4"
      />
      <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
    </div>
    <BaseButton variant="secondary" @click="emit('delete', todo.id)">削除</BaseButton>
  </div>
</template>
