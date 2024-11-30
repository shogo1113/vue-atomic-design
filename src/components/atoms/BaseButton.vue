<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'px-4 py-2 rounded',
      variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700',
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80',
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
