<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { Target, Eye, BarChart3 } from 'lucide-vue-next'

const cards = [
  {
    title: 'Mission',
    description: 'Démocratiser l\'accès à une présence web professionnelle pour tous les entrepreneurs motivés, sans barrière financière.',
    icon: Target,
    color: 'bg-emerald-profound text-white'
  },
  {
    title: 'Vision',
    description: 'Bâtir une communauté d\'entrepreneurs connectés et outillés pour réussir dans l\'économie numérique de demain.',
    icon: Eye,
    color: 'bg-emerald-clear text-white'
  },
  {
    title: 'Impact',
    description: 'Mesurer la réussite non pas par le profit, mais par le nombre de projets qui prennent vie grâce à nos solutions.',
    icon: BarChart3,
    color: 'bg-accent text-emerald-profound'
  }
]
</script>

<template>
  <SectionContainer class="bg-white">
    <SectionTitle 
      title="Pourquoi nous faisons cela ?" 
      subtitle="Le manque de visibilité en ligne est l'un des plus grands freins au développement des petites entreprises. Nous avons décidé d'agir."
      centered
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="card in cards" 
        :key="card.title"
        class="card-premium group"
      >
        <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3', card.color]">
          <component :is="card.icon" class="w-7 h-7" />
        </div>
        <h3 class="text-xl font-bold text-emerald-profound mb-4">{{ card.title }}</h3>
        <p class="text-gray-500 leading-relaxed">
          {{ card.description }}
        </p>
      </div>
    </div>

    <div class="mt-20 p-8 md:p-12 bg-beige-clear rounded-3xl border border-emerald-clear/10 relative overflow-hidden">
        <div class="absolute right-0 top-0 w-64 h-64 bg-emerald-clear/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
                <blockquote class="text-2xl md:text-3xl font-medium text-emerald-profound italic leading-tight">
                    "Nous croyons que chaque grand projet mérite une vitrine impeccable. La technologie ne devrait pas être un luxe, mais un moteur de croissance pour tous."
                </blockquote>
                <div class="mt-6 flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-emerald-profound flex items-center justify-center text-white font-bold">OG</div>
                    <div>
                        <p class="font-bold text-emerald-profound">L'équipe Gifthub</p>
                        <p class="text-sm text-gray-500">Initiative communautaire inspiré par le Saint-Esprit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </SectionContainer>
</template>
