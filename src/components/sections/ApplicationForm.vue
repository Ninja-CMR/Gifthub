<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { ApplicationSchema, type ApplicationData } from '@/types/form'
import { useFormSubmit } from '@/composables/useFormSubmit'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import FormCard from '@/components/ui/FormCard.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { CheckCircle, AlertCircle, Send } from 'lucide-vue-next'

const { loading, error, success, submitForm } = useFormSubmit()

const { handleSubmit, errors } = useForm<ApplicationData>({
  validationSchema: toTypedSchema(ApplicationSchema),
  initialValues: {
    features: [],
    confirmed: false,
  }
})

// Define fields for validation binding
const { value: fullName } = useField<string>('fullName')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: city } = useField<string>('city')
const { value: country } = useField<string>('country')
const { value: siteType } = useField<string>('siteType')
const { value: projectName } = useField<string>('projectName')
const { value: activityDescription } = useField<string>('activityDescription')
const { value: siteGoal } = useField<string>('siteGoal')
const { value: features } = useField<string[]>('features')
const { value: detailedDescription } = useField<string>('detailedDescription')
const { value: socialLinks } = useField<string>('socialLinks')
const { value: confirmed } = useField<boolean>('confirmed')

const onSubmit = handleSubmit(async (data) => {
  await submitForm(data)
})

const siteTypeOptions = [
  { label: 'Portfolio', value: 'Portfolio' },
  { label: 'Restaurant', value: 'Restaurant' },
  { label: 'Site vitrine', value: 'Site vitrine' },
  { label: 'Association', value: 'Association' },
  { label: 'Blog', value: 'Blog' },
  { label: 'Autre', value: 'Autre' },
]

const siteGoalOptions = [
  { label: 'Présenter mon activité', value: 'Présenter mon activité' },
  { label: 'Trouver des clients', value: 'Trouver des clients' },
  { label: 'Montrer mon portfolio', value: 'Montrer mon portfolio' },
  { label: 'Vendre des services', value: 'Vendre des services' },
  { label: 'Autre', value: 'Autre' },
]

const availableFeatures = [
  'Galerie photos',
  'Prise de contact',
  'Réservation',
  'Menu restaurant',
  'Portfolio',
  'Blog',
  'Paiement en ligne',
  'Autre',
]

const toggleFeature = (feature: string) => {
  const current = [...(features.value || [])]
  const index = current.indexOf(feature)
  if (index > -1) {
    current.splice(index, 1)
  } else {
    current.push(feature)
  }
  features.value = current
}
</script>

<template>
  <SectionContainer id="application-form" class="bg-beige-clear/30">
    <SectionTitle 
      title="Parlez-nous de votre projet" 
      subtitle="Remplissez ce formulaire avec soin. Plus nous aurons de détails, plus nous pourrons vous aider efficacement."
      centered
    />

    <div class="max-w-4xl mx-auto">
      <div v-if="success" class="bg-white rounded-3xl p-12 text-center shadow-premium border border-emerald-clear/20 animate-fade-in">
        <div class="w-20 h-20 bg-emerald-clear/10 text-emerald-clear rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle class="w-10 h-10" />
        </div>
        <h3 class="text-3xl font-bold text-emerald-profound mb-4">Demande envoyée !</h3>
        <p class="text-gray-500 text-lg mb-8">
          Merci de nous avoir partagé votre projet. Notre équipe va analyser votre demande et vous contactera très prochainement.
        </p>
        <BaseButton @click="success = false" variant="outline">Envoyer une autre demande</BaseButton>
      </div>

      <form v-else @submit.prevent="onSubmit" class="space-y-8">
        <!-- Error Alert -->
        <div v-if="error" class="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center space-x-3 text-red-600">
          <AlertCircle class="w-5 h-5" />
          <p class="font-medium">{{ error }}</p>
        </div>

        <!-- Section 1: Personal Info -->
        <FormCard title="Informations personnelles" description="Comment pouvons-nous vous contacter ?">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseInput 
              v-model="fullName" 
              label="Nom complet" 
              placeholder="Ex: Jean Dupont" 
              :error="errors.fullName"
              required
            />
            <BaseInput 
              v-model="email" 
              type="email" 
              label="Adresse Email" 
              placeholder="jean@exemple.com" 
              :error="errors.email"
              required
            />
            <BaseInput 
              v-model="phone" 
              label="Numéro de téléphone" 
              placeholder="+221 ..." 
              :error="errors.phone"
              required
            />
            <div class="grid grid-cols-2 gap-4">
              <BaseInput 
                v-model="city" 
                label="Ville" 
                placeholder="Dakar" 
                :error="errors.city"
                required
              />
              <BaseInput 
                v-model="country" 
                label="Pays" 
                placeholder="Sénégal" 
                :error="errors.country"
                required
              />
            </div>
          </div>
        </FormCard>

        <!-- Section 2: Project Info -->
        <FormCard title="Informations sur le projet" description="Dites-nous ce que vous voulez créer.">
          <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BaseSelect 
                v-model="siteType" 
                label="Type de site" 
                :options="siteTypeOptions" 
                placeholder="Choisissez une option"
                :error="errors.siteType"
                required
              />
              <BaseInput 
                v-model="projectName" 
                label="Nom de l'entreprise ou du projet" 
                placeholder="Ex: Ma Petite Boutique" 
                :error="errors.projectName"
                required
              />
            </div>
            <BaseTextarea 
              v-model="activityDescription" 
              label="Description de l'activité" 
              placeholder="Expliquez clairement ce que vous faites au quotidien..." 
              :error="errors.activityDescription"
              :rows="4"
              required
            />
          </div>
        </FormCard>

        <!-- Section 3: Objectives & Features -->
        <FormCard title="Objectifs et fonctionnalités" description="Quels sont vos besoins spécifiques ?">
          <div class="space-y-8">
            <BaseSelect 
              v-model="siteGoal" 
              label="Quel est l'objectif principal du site ?" 
              :options="siteGoalOptions" 
              placeholder="Choisissez une option"
              :error="errors.siteGoal"
              required
            />
            
            <div class="space-y-4">
              <label class="block text-sm font-semibold text-emerald-profound">
                Fonctionnalités souhaitées <span class="text-red-500">*</span>
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <button 
                  v-for="feature in availableFeatures" 
                  :key="feature"
                  type="button"
                  @click="toggleFeature(feature)"
                  :class="[
                    'px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200',
                    features?.includes(feature) 
                      ? 'bg-emerald-profound text-white border-emerald-profound shadow-md scale-105' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-clear'
                  ]"
                >
                  {{ feature }}
                </button>
              </div>
              <p v-if="errors.features" class="text-xs text-red-500 font-medium">
                {{ errors.features }}
              </p>
            </div>

            <BaseTextarea 
              v-model="detailedDescription" 
              label="Description détaillée de vos attentes" 
              placeholder="Décrivez précisément ce que vous imaginez pour votre site..." 
              :error="errors.detailedDescription"
              :rows="6"
              required
            />
          </div>
        </FormCard>

        <!-- Section 4: Validation -->
        <FormCard>
          <div class="space-y-6">
            <BaseInput 
              v-model="socialLinks" 
              label="Lien réseaux sociaux (optionnel)" 
              placeholder="Instagram, Facebook, LinkedIn..." 
              :error="errors.socialLinks"
            />
            <hr class="border-gray-100" />
            <BaseCheckbox 
              v-model="confirmed" 
              label="Je confirme que les informations fournies sont vraies et exactes." 
              :error="errors.confirmed"
              required
            />
            
            <div class="pt-4">
                <BaseButton 
                    type="submit" 
                    class="w-full py-4 text-lg" 
                    :loading="loading"
                >
                    <Send class="w-5 h-5 mr-2" />
                    Envoyer ma demande
                </BaseButton>
                <p class="text-center text-sm text-gray-400 mt-4 italic">
                    Vos données sont traitées avec soin et ne seront jamais partagées.
                </p>
            </div>
          </div>
        </FormCard>
      </form>
    </div>
  </SectionContainer>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
