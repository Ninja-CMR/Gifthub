<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  title?: string
  description?: string
  class?: string
}

defineProps<Props>()
</script>

<template>
  <div :class="cn('bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-emerald-clear/5', $props.class)">
    <div v-if="title || description" class="mb-8 overflow-hidden">
      <h3 v-if="title" class="text-2xl font-bold text-emerald-profound mb-2">
        {{ title }}
      </h3>
      <p v-if="description" class="text-gray-500">
        {{ description }}
      </p>
    </div>
    <slot />
  </div>
</template>
