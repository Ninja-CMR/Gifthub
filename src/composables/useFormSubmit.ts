import { ref } from 'vue'
import type { ApplicationData } from '@/types/form'

export function useFormSubmit() {
    const loading = ref(false)
    const error = ref<string | null>(null)
    const success = ref(false)

    const submitForm = async (data: ApplicationData) => {
        loading.value = true
        error.value = null
        success.value = false

        // DEVELOPMENT MOCK: If we are in local dev, simulate success after a delay
        if (import.meta.env.DEV) {
            console.log('--- DEV MOCK MODE ---')
            console.log('Data to send:', data)
            await new Promise(resolve => setTimeout(resolve, 1500))
            success.value = true
            loading.value = false
            return
        }

        try {
            const response = await fetch('/api/request-site', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData.message || 'Une erreur est survenue lors de l\'envoi.')
            }

            success.value = true
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Erreur inconnue'
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        error,
        success,
        submitForm,
    }
}
