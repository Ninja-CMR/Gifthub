<script setup lang="ts">
import { Mail, MessageCircle, Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-white border-t border-gray-100 pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 lg:col-span-2 space-y-6">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-emerald-profound rounded-xl flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span class="text-2xl font-bold text-emerald-profound tracking-tight">Gifthub</span>
          </div>
          <p class="text-gray-500 max-w-sm text-lg leading-relaxed">
            Chaque grand projet commence par une idée simple. Nous sommes là pour lui donner la visibilité qu'elle mérite.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-emerald-clear/10 text-emerald-profound flex items-center justify-center hover:bg-emerald-profound hover:text-white transition-all">
                <Mail class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-emerald-clear/10 text-emerald-profound flex items-center justify-center hover:bg-emerald-profound hover:text-white transition-all">
                <MessageCircle class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-emerald-profound mb-6 uppercase tracking-wider text-sm">Contact Direct</h4>
          <ul class="space-y-4">
            <li>
              <a href="mailto:oliviermevaa0@gmail.com" class="text-gray-500 hover:text-emerald-clear transition-colors break-all">
                oliviermevaa0@gmail.com
              </a>
            </li>
            <li class="flex items-center space-x-2 text-gray-500">
              <span class="w-2 h-2 rounded-full bg-emerald-clear animate-pulse"></span>
              <span>WhatsApp disponible au <b>+237 696 17 28 99</b> </span>
            </li>
          </ul>
        </div>

        <div>
           <h4 class="font-bold text-emerald-profound mb-6 uppercase tracking-wider text-sm">Initiative</h4>
           <p class="text-gray-500 text-sm leading-relaxed">
             Gifthub est un programme indépendant de soutien à l'entrepreneuriat local inspiré par le Saint-Esprit de Dieu. Nous sélectionnons des projets à fort potentiel d'impact.
           </p>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          &copy; 2024 Gifthub. Tous droits réservés.
        </p>
        <div class="flex items-center space-x-1 text-gray-400 text-sm">
          <span>Propulsé avec</span>
          <Heart class="w-4 h-4 text-red-500 fill-current" />
          <span>pour les créateurs.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
