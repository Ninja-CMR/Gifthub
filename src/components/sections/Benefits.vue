<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import { CheckCircle2 } from 'lucide-vue-next'

const benefits = [
  'Site web professionnel complet',
  'Design moderne et personnalisé',
  'Optimisé pour mobile (Responsive)',
  'Référencement naturel de base (SEO)',
  'Conseils en stratégie digitale',
  'Hébergement sécurisé & rapide',
  'Support technique réactif'
]
</script>

<template>
  <SectionContainer class="bg-emerald-profound text-white relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-clear/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
          Ce que vous obtenez avec ce programme
        </h2>
        <p class="text-xl text-emerald-clear/80 mb-10 leading-relaxed">
          Nous ne faisons pas de "petits" sites. Nous créons des outils de croissance robustes et élégants pour votre activité.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div 
            v-for="benefit in benefits" 
            :key="benefit"
            class="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
          >
            <CheckCircle2 class="w-6 h-6 text-emerald-clear flex-shrink-0" />
            <span class="font-medium">{{ benefit }}</span>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl relative overflow-hidden group">
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div class="h-4 w-1/3 bg-white/20 rounded"></div>
                    <div class="flex space-x-2">
                        <div class="w-2 h-2 rounded-full bg-red-400/50"></div>
                        <div class="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                        <div class="w-2 h-2 rounded-full bg-green-400/50"></div>
                    </div>
                </div>
                <div class="aspect-[16/10] bg-emerald-profound/40 rounded-2xl overflow-hidden relative shadow-inner border border-white/10">
                    <img 
                        src="/src/assets/portfolio/tunnel_vente.png" 
                        alt="Aperçu Tunnel Vente"
                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-emerald-profound/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4 text-white">
                        <p class="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">E-commerce</p>
                        <p class="text-lg font-bold">Tunnel Vente</p>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="h-16 bg-white/10 rounded-xl border border-white/5"></div>
                    <div class="h-16 bg-white/10 rounded-xl border border-white/5"></div>
                    <div class="h-16 bg-white/10 rounded-xl border border-white/5"></div>
                </div>
                <p class="text-center text-sm text-emerald-clear/60 font-medium">Aperçu d'une création récente</p>
            </div>
            
            <!-- Hover Overlay Glow -->
            <div class="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
        
        <!-- Stats Float -->
        <div class="absolute -top-10 -right-10 bg-accent p-6 rounded-2xl shadow-xl text-emerald-profound hidden md:block rotate-3">
             <p class="text-3xl font-black">100%</p>
             <p class="text-xs font-bold uppercase tracking-wider">Gratuit</p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
