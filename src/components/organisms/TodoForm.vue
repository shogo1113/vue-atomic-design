<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const newTodoTitle = ref('')

async function handleAddTodo() {
  if (!newTodoTitle.value.trim()) return
  await todoStore.addTodo(newTodoTitle.value)
  newTodoTitle.value = ''
}
</script>

<template>
  <div class="flex items-center gap-4 mb-6">
    <div class="flex-1">
      <BaseInput
        v-model="newTodoTitle"
        placeholder="新しいTodoを入力..."
        @keyup.enter="handleAddTodo"
      />
    </div>
    <BaseButton variant="primary" @click="handleAddTodo" class="whitespace-nowrap">
      追加
    </BaseButton>
  </div>
</template>