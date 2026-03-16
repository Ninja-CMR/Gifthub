<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const steps = [
  {
    number: '01',
    title: 'Vous remplissez le formulaire',
    description: 'Dites-nous tout sur votre projet, votre vision et vos besoins spécifiques via notre formulaire détaillé.'
  },
  {
    number: '02',
    title: 'Nous analysons votre projet',
    description: 'Notre équipe étudie votre demande pour s\'assurer de la viabilité et du potentiel d\'impact de votre initiative.'
  },
  {
    number: '03',
    title: 'Nous vous contactons',
    description: 'Si votre projet est retenu, nous organisons un court échange pour affiner les détails et lancer la création.'
  },
  {
    number: '04',
    title: 'Nous lançons la création',
    description: 'Votre site est conçu, optimisé et mis en ligne. Vous recevez vos accès et nos conseils pour la suite.'
  }
]
</script>

<template>
  <SectionContainer>
    <SectionTitle 
      title="Comment ça marche ?" 
      subtitle="Un processus simple, transparent et rapide pour donner vie à votre présence en ligne."
      centered
    />

    <div class="relative">
      <!-- Connection line for desktop -->
      <div class="hidden lg:block absolute top-[2.75rem] left-0 w-full h-0.5 bg-emerald-clear/20 -z-10"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div 
          v-for="step in steps" 
          :key="step.number"
          class="relative group"
        >
          <div class="mb-6 flex items-center justify-center lg:justify-start">
            <div class="w-14 h-14 rounded-2xl bg-white border-2 border-emerald-clear text-emerald-profound text-xl font-bold flex items-center justify-center shadow-lg group-hover:bg-emerald-profound group-hover:text-white transition-all duration-300">
              {{ step.number }}
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-emerald-profound mb-4 text-center lg:text-left">
            {{ step.title }}
          </h3>
          <p class="text-gray-500 leading-relaxed text-center lg:text-left">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="mt-20 text-center">
        <div class="inline-flex items-center space-x-2 text-emerald-profound font-semibold bg-emerald-clear/5 px-6 py-4 rounded-full border border-emerald-clear/10">
            <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Prochaine sélection dans 4 jours</span>
        </div>
    </div>
  </SectionContainer>
</template>
