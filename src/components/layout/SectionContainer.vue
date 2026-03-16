<script setup lang="ts">
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

defineProps<Props>()
</script>

<template>
  <section :class="cn('py-16 md:py-24', $props.class)">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>
