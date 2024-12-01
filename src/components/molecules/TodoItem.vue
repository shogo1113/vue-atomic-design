<script setup lang="ts">
import type { Todo } from '@/types/todo'
import BaseButton from '../atoms/BaseButton.vue'

defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  toggle: [id: number]
  delete: [id: number]
}>()
</script>

<template>
  <div 
    class="flex items-center justify-between py-4 px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
    :class="{ 'opacity-75': todo.completed }"
  >
    <div class="flex items-center gap-4">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="emit('toggle', todo.id)"
        class="material-checkbox"
        :aria-label="`${todo.title}を${todo.completed ? '未完了' : '完了'}にする`"
      />
      <span
        :class="[
          'text-sm transition-all duration-200',
          todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-200'
        ]"
      >{{ todo.title }}</span>
    </div>
    <div class="flex items-center gap-3">
      <span
        :class="[
          'status-badge',
          todo.completed ? 'status-complete' : 'status-pending'
        ]"
        role="status"
      >
        {{ todo.completed ? '完了' : '未完了' }}
      </span>
      <BaseButton 
        variant="secondary" 
        @click="emit('delete', todo.id)"
        :aria-label="`${todo.title}を削除`"
      >
        削除
      </BaseButton>
    </div>
  </div>
</template>