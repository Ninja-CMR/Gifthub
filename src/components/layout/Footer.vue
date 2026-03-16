<script setup lang="ts">
import GifthubLogo from '@/components/ui/GifthubLogo.vue'
import { Mail, MessageCircle, Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-emerald-profound text-white pt-20 pb-10 overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        <div class="space-y-6">
          <GifthubLogo />
          <p class="text-white/60 text-sm leading-relaxed">
            Propulser les entrepreneurs africains avec des solutions digitales gratuites et performantes.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-clear hover:text-white transition-all">
                <Mail class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-emerald-clear hover:text-white transition-all">
                <MessageCircle class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Direct</h4>
          <ul class="space-y-4">
            <li>
              <a href="mailto:oliviermevaa0@gmail.com" class="text-white/60 hover:text-emerald-clear transition-colors break-all">
                oliviermevaa0@gmail.com
              </a>
            </li>
            <li class="flex items-center space-x-2 text-white/60">
              <span class="w-2 h-2 rounded-full bg-emerald-clear animate-pulse"></span>
              <span>WhatsApp disponible au <b>+237 696 17 28 99</b> </span>
            </li>
          </ul>
        </div>

        <div>
           <h4 class="font-bold text-white mb-6 uppercase tracking-wider text-sm">Initiative</h4>
           <p class="text-white/60 text-sm leading-relaxed">
             Gifthub est un programme indépendant de soutien à l'entrepreneuriat local inspiré par le Saint-Esprit de Dieu. Nous sélectionnons des projets à fort potentiel d'impact.
           </p>
        </div>
      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-white/40 text-sm">
          &copy; 2024 Gifthub. Tous droits réservés.
        </p>
        <div class="flex items-center space-x-1 text-white/40 text-sm">
          <span>Propulsé avec</span>
          <Heart class="w-4 h-4 text-red-400 fill-current" />
          <span>pour les créateurs.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
