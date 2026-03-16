import type { Handler, HandlerEvent } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const handler: Handler = async (event: HandlerEvent) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    try {
        const data = JSON.parse(event.body || '{}')

        // Validation logic
        if (!data.email || !data.fullName || !data.projectName) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Champs obligatoires manquants' })
            }
        }

        const emailContent = `
            <h2>Nouveau projet soumis sur Gifthub</h2>
            <p><strong>Nom complet:</strong> ${data.fullName}</p>
            <p><strong>Projet:</strong> ${data.projectName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Téléphone:</strong> ${data.phone}</p>
            <p><strong>Ville/Pays:</strong> ${data.city}, ${data.country}</p>
            <p><strong>Type de site:</strong> ${data.siteType}</p>
            <hr>
            <p><strong>Description activité:</strong></p>
            <p>${data.activityDescription}</p>
            <p><strong>Objectif du site:</strong> ${data.siteGoal}</p>
            <p><strong>Fonctionnalités:</strong> ${Array.isArray(data.features) ? data.features.join(', ') : 'Aucune'}</p>
            <p><strong>Description détaillée:</strong></p>
            <p>${data.detailedDescription}</p>
            <p><strong>Réseaux sociaux:</strong> ${data.socialLinks || 'N/A'}</p>
        `

        // Send confirmation email to the user
        await resend.emails.send({
            from: 'Gifthub <onboarding@resend.dev>',
            to: 'oliviermevaa0@gmail.com',
            subject: `🚀 Nouveau projet : ${data.projectName}`,
            html: emailContent,
        })

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Demande reçue avec succès',
                timestamp: new Date().toISOString()
            }),
        }
    } catch (error) {
        console.error('Error sending email:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erreur lors de l\'envoi de la demande' }),
        }
    }
}
