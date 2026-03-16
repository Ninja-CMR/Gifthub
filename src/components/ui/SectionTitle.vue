<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  title: string
  subtitle?: string
  centered?: boolean
  class?: string
}

withDefaults(defineProps<Props>(), {
  centered: false,
})
</script>

<template>
  <div :class="cn('mb-12 md:mb-16', centered && 'text-center', $props.class)">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-profound mb-4 leading-tight">
      {{ title }}
    </h2>
    <div v-if="subtitle" class="max-w-3xl mx-auto">
      <p :class="cn('text-lg md:text-xl text-gray-500', centered && 'mx-auto')">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>
