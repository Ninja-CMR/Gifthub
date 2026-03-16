import { z } from 'zod'

export const ApplicationSchema = z.object({
    // Personal Info
    fullName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(8, 'Le téléphone est requis'),
    city: z.string().min(2, 'La ville est requise'),
    country: z.string().min(2, 'Le pays est requis'),

    // Project Info
    siteType: z.enum(['Portfolio', 'Restaurant', 'Site vitrine', 'Association', 'Blog', 'Autre'], {
        message: 'Veuillez choisir un type de site',
    }),
    projectName: z.string().min(3, 'Le nom du projet est requis'),
    activityDescription: z.string().min(30, 'La description doit faire au moins 30 caractères'),

    // Goals
    siteGoal: z.enum(['Présenter mon activité', 'Trouver des clients', 'Montrer mon portfolio', 'Vendre des services', 'Autre'], {
        message: 'Veuillez choisir un objectif',
    }),

    // Features
    features: z.array(z.string()).min(1, 'Veuillez choisir au moins une fonctionnalité'),

    // Detailed Description
    detailedDescription: z.string().min(40, 'La description détaillée doit faire au moins 40 caractères'),

    // Social
    socialLinks: z.string().optional(),

    // Confirmation
    confirmed: z.boolean().refine(v => v === true, {
        message: 'Vous devez confirmer l\'exactitude des informations',
    }),
})

export type ApplicationData = z.infer<typeof ApplicationSchema>
