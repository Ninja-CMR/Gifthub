<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  modelValue?: boolean
  label?: string
  error?: string
  required?: boolean
  id?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  required: false,
})

const emit = defineEmits(['update:modelValue', 'blur'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}

const checkboxClasses = computed(() => {
  return cn(
    'h-5 w-5 rounded border-gray-300 text-emerald-profound focus:ring-emerald-clear transition-all cursor-pointer',
    props.error && 'border-red-300',
    props.class
  )
})
</script>

<template>
  <div class="space-y-1">
    <div class="flex items-start">
      <div class="flex h-6 items-center">
        <input
          :id="id"
          type="checkbox"
          :checked="modelValue"
          :required="required"
          :class="checkboxClasses"
          @change="onInput"
          @blur="emit('blur', $event)"
        />
      </div>
      <div v-if="label" class="ml-3 text-sm leading-6">
        <label :for="id" class="font-medium text-emerald-profound cursor-pointer">
          {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>
      </div>
    </div>
    <p v-if="error" class="text-xs text-red-500 font-medium ml-8">
      {{ error }}
    </p>
  </div>
</template>
