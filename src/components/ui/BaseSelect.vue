<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Option {
  label: string
  value: string | number
}

interface Props {
  modelValue?: string | number
  label?: string
  options: Option[]
  placeholder?: string
  error?: string
  required?: boolean
  id?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  required: false,
})

const emit = defineEmits(['update:modelValue', 'blur'])

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}

const selectClasses = computed(() => {
  return cn(
    'block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-neutral-gray transition-all focus:border-emerald-clear focus:ring-4 focus:ring-emerald-clear/10 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]',
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
    <div class="relative">
      <select
        :id="id"
        :value="modelValue"
        :required="required"
        :class="selectClasses"
        @change="onChange"
        @blur="emit('blur', $event)"
      >
        <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
        <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
    <p v-if="error" class="text-xs text-red-500 font-medium mt-1">
      {{ error }}
    </p>
  </div>
</template>
