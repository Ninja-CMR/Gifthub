<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { ExternalLink } from 'lucide-vue-next'

// Import images to ensure Vite processes them correctly for production
import tunnelVenteImg from '@/assets/portfolio/tunnel_vente.png'
import architectSarlImg from '@/assets/portfolio/architect_sarl.png'
import appingSoftwareImg from '@/assets/portfolio/apping_software.png'
import yarnRestaurantImg from '@/assets/portfolio/yarn_restaurant.png'

const projects = [
  {
    title: 'Tunnel Vente',
    description: 'Une plateforme e-commerce mode avec un design épuré, mettant l\'accent sur le visuel et la conversion.',
    image: tunnelVenteImg,
    link: 'https://tunnelvente.netlify.app/',
    tags: ['E-commerce', 'Mode', 'Vite']
  },
  {
    title: 'Architect SARL',
    description: 'Site vitrine pour cabinet d\'architecture, alliant structure, sérieux et présentation de projets complexes.',
    image: architectSarlImg,
    link: 'https://architectsarl.netlify.app/',
    tags: ['Architecture', 'Corpo', 'Vue 3']
  },
  {
    title: 'Apping Software',
    description: 'Centre de formation numérique, proposant des parcours dynamiques pour les développeurs de demain.',
    image: appingSoftwareImg,
    link: 'https://appingsoftware.com/',
    tags: ['Éducation', 'Tech', 'Next.js']
  },
  {
    title: 'Yarn Restaurant',
    description: 'Expérience gastronomique en ligne avec menu interactif et système de réservation intuitif.',
    image: yarnRestaurantImg,
    link: 'https://yarn-restaurant.vercel.app/',
    tags: ['Restauration', 'UX/UI', 'Vercel']
  }
]
</script>

<template>
  <SectionContainer id="portfolio" class="bg-white">
    <SectionTitle 
      title="Nos dernières réalisations"
      subtitle="Découvrez comment nous aidons les entrepreneurs à transformer leur vision en réalité digitale."
      center
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="group relative overflow-hidden rounded-3xl border border-emerald-profound/5 bg-beige-clear/30 p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      >
        <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-inner relative">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-emerald-profound/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
            <a 
              :href="project.link" 
              target="_blank" 
              class="bg-white text-emerald-profound px-6 py-3 rounded-full font-bold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-accent hover:text-white"
            >
              <span>Voir le projet</span>
              <ExternalLink class="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div class="mt-6 px-2">
          <div class="flex items-center space-x-2 mb-3">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-emerald-profound/5 text-emerald-profound/60 border border-emerald-profound/10"
            >
              {{ tag }}
            </span>
          </div>
          <h3 class="text-2xl font-bold text-emerald-profound mb-2">{{ project.title }}</h3>
          <p class="text-neutral-gray text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Impact Quote -->
    <div class="mt-20 p-12 rounded-[40px] bg-emerald-profound text-white text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-clear/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div class="relative z-10 max-w-2xl mx-auto">
            <p class="text-2xl md:text-3xl font-medium italic mb-6">
                "Ils nous ont fait confiance pour leur lancement. Pourquoi pas vous ?"
            </p>
            <div class="h-1 w-20 bg-accent mx-auto"></div>
        </div>
    </div>
  </SectionContainer>
</template>
