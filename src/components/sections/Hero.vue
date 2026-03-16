<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'

interface Props {
  onCtaClick?: () => void
  onSecondaryClick?: () => void
}

defineProps<Props>()
</script>

<template>
  <SectionContainer class="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden relative">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-clear/5 rounded-full blur-3xl opacity-50 -z-10" />
    <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl opacity-50 -z-10" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8 max-w-2xl">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-clear/10 border border-emerald-clear/20 text-emerald-profound text-sm font-semibold animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-clear opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-clear"></span>
          </span>
          <span>Programme de soutien 2026</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Et si votre prochain site web ne vous <span class="text-emerald-clear">coûtait rien ?</span>
        </h1>

        <p class="text-xl text-gray-500 leading-relaxed md:pr-12">
          Nous aidons gratuitement des entrepreneurs, créateurs et petites entreprises à lancer leur présence en ligne avec un site web professionnel de haute qualité.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <BaseButton size="lg" @click="onCtaClick">
            Je demande mon site gratuit
          </BaseButton>
          <BaseButton variant="outline" size="lg" @click="onSecondaryClick">
            Voir comment ça marche
          </BaseButton>
        </div>

        <div class="flex items-center space-x-4 pt-8 border-t border-gray-100">
          <div class="flex -space-x-2">
            <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
               <img :src="`https://i.pravatar.cc/100?img=${i+10}`" alt="User" />
            </div>
          </div>
          <p class="text-sm text-gray-500">
            Rejoignez <span class="font-bold text-emerald-profound">50+ entrepreneurs</span> déjà propulsés.
          </p>
        </div>
      </div>

      <div class="relative lg:ml-8">
        <div class="absolute -inset-4 bg-emerald-profound/5 rounded-3xl -rotate-2 -z-10 scale-105" />
        <div class="relative rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white">
          <img 
            src="@/assets/hero.png" 
            alt="Entrepreneur travaillant sur son projet" 
            class="w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
          />
        </div>
        
        <!-- Floating Badge -->
        <div class="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-emerald-clear/10 animate-bounce-slow">
          <div class="flex items-center space-x-4">
            <div class="p-3 bg-accent/20 rounded-xl">
               <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">Temps de déploiement</p>
              <p class="text-lg font-bold text-emerald-profound">72 Heures</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-bounce-slow {
  animation: bounceSlow 3s ease-in-out infinite;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
