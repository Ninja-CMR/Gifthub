<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { 
  Briefcase, 
  UtensilsCrossed, 
  Palette, 
  UserCircle, 
  Users, 
  ShoppingBag 
} from 'lucide-vue-next'

const targets = [
  { name: 'Entrepreneurs', icon: Briefcase },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Artistes', icon: Palette },
  { name: 'Freelances', icon: UserCircle },
  { name: 'Associations', icon: Users },
  { name: 'Commerçants', icon: ShoppingBag },
]
</script>

<template>
  <SectionContainer class="bg-beige-clear/50">
    <SectionTitle 
      title="Est-ce pour vous ?" 
      subtitle="Ce programme est conçu pour ceux qui ont la passion et le projet, mais pas encore l'outil pour rayonner."
      centered
    />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div 
        v-for="target in targets" 
        :key="target.name"
        class="bg-white rounded-2xl p-6 text-center border border-emerald-clear/5 shadow-sm hover:shadow-md transition-all duration-300 group"
      >
        <div class="w-12 h-12 rounded-xl bg-emerald-clear/5 text-emerald-profound flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-profound group-hover:text-white transition-colors duration-300">
          <component :is="target.icon" class="w-6 h-6" />
        </div>
        <p class="font-bold text-emerald-profound">{{ target.name }}</p>
      </div>
    </div>
    
    <div class="mt-16 text-center">
        <p class="text-gray-500 max-w-2xl mx-auto italic">
            "Peu importe votre secteur, si vous avez une vision et l'envie de la partager, nous sommes là pour vous aider à la concrétiser en ligne."
        </p>
    </div>
  </SectionContainer>
</template>
