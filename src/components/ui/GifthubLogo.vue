<template>
  <div class="flex items-center space-x-3 shrink-0">
    <div class="relative w-10 h-10 flex items-center justify-center">
      <!-- Background subtle glow -->
      <div class="absolute inset-0 bg-emerald-clear/10 rounded-xl blur-lg animate-pulse" />
      
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        class="w-full h-full relative z-10"
      >
        <!-- The "G-Box" Frame -->
        <path 
          d="M75 35V25C75 22.2386 72.7614 20 70 20H30C27.2386 20 25 22.2386 25 25V75C25 77.7614 27.2386 80 30 80H70C72.7614 80 75 77.7614 75 75V55H55" 
          stroke="currentColor" 
          stroke-width="10" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
        />
        
        <!-- The Central Spark / Gift Knot -->
        <circle cx="50" cy="50" r="10" fill="#FFD700" class="text-accent" />
        
        <!-- Connection line (Hub) -->
        <path 
          d="M50 20V40" 
          stroke="#FFD700" 
          stroke-width="8" 
          stroke-linecap="round" 
          class="text-accent"
          opacity="0.6"
        />
      </svg>
    </div>
    <span v-if="!iconOnly" class="text-2xl font-bold text-emerald-profound tracking-tighter">
      Gift<span class="text-emerald-clear text-accent font-black">hub</span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconOnly?: boolean
}>()
</script>

<style scoped>
.text-accent {
  color: #FFD700;
}
</style>
