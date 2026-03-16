<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
})

const variants = {
  primary: 'bg-emerald-profound text-white hover:bg-emerald-profound/90 shadow-sm focus:ring-emerald-clear',
  secondary: 'bg-accent text-emerald-profound hover:bg-accent/90 shadow-sm focus:ring-accent/50',
  outline: 'border-2 border-emerald-profound text-emerald-profound hover:bg-emerald-profound/5 focus:ring-emerald-clear',
  ghost: 'text-emerald-profound hover:bg-emerald-profound/5 focus:ring-emerald-clear',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-semibold',
}

const buttonClasses = computed(() => {
  return cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95',
    variants[props.variant],
    sizes[props.size],
    props.class
  )
})
</script>

<template>
  <button :type="type" :disabled="disabled || loading" :class="buttonClasses">
    <span v-if="loading" class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
    <slot />
  </button>
</template>
