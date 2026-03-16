<script setup lang="ts">
import Hero from '@/components/sections/Hero.vue'
import Concept from '@/components/sections/Concept.vue'
import ForWhom from '@/components/sections/ForWhom.vue'
import Benefits from '@/components/sections/Benefits.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Steps from '@/components/sections/Steps.vue'
import ApplicationForm from '@/components/sections/ApplicationForm.vue'
import Footer from '@/components/layout/Footer.vue'
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()

const handleCtaClick = () => {
    scrollTo('application-form')
}
</script>

<template>
  <div class="min-h-screen bg-beige-clear font-sans text-neutral-gray selection:bg-emerald-clear selection:text-white">
    <!-- Navigation Overlay (Logo) -->
    <nav class="fixed top-0 left-0 w-full z-50 bg-beige-clear/80 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-emerald-profound rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    G
                </div>
                <span class="text-xl font-bold text-emerald-profound tracking-tight">Gifthub</span>
            </div>
            
            <button 
                @click="handleCtaClick"
                class="hidden sm:block text-emerald-profound font-semibold hover:text-emerald-clear transition-colors text-sm"
            >
                Je demande mon site
            </button>
        </div>
    </nav>

    <main>
      <Hero @cta-click="handleCtaClick" @secondary-click="() => scrollTo('how-it-works')" />
      <Concept id="concept" />
      <ForWhom id="for-whom" />
      <Benefits id="benefits" />
      <Portfolio />
      <Steps id="how-it-works" />
      <ApplicationForm id="application-form" />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Custom page-wide animations */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>
