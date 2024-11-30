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
  <div>
    <BaseInput
      v-model="newTodoTitle"
      placeholder="新しいTodoを入力..."
      @keyup.enter="handleAddTodo"
    />
    <BaseButton variant="primary" @click="handleAddTodo">追加</BaseButton>
  </div>
</template>
