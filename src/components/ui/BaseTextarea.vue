<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  modelValue?: string | number
  label?: string
  placeholder?: string
  rows?: number
  error?: string
  required?: boolean
  id?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  rows: 4,
  required: false,
})

const emit = defineEmits(['update:modelValue', 'blur'])

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const textareaClasses = computed(() => {
  return cn(
    'block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-neutral-gray transition-all placeholder:text-gray-400 focus:border-emerald-clear focus:ring-4 focus:ring-emerald-clear/10 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed resize-none',
    props.error && 'border-red-300 focus:border-red-500 focus:ring-red-500/10',
    props.class
  )
})
</script>

<template>
  <div class="space-y-1.5">
    <label v-if="label" :for="id" class="block text-sm font-semibold text-emerald-profound">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :class="textareaClasses"
      @input="onInput"
      @blur="emit('blur', $event)"
    />
    <p v-if="error" class="text-xs text-red-500 font-medium mt-1">
      {{ error }}
    </p>
  </div>
</template>
