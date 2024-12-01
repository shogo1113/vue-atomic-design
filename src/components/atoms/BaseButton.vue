<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'material-button',
      variant === 'primary' ? 'material-button-primary' : 'material-button-secondary'
    ]"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <slot></slot>
  </button>
</template>