import type { Handler, HandlerEvent } from '@netlify/functions'

export const handler: Handler = async (event: HandlerEvent) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    try {
        const data = JSON.parse(event.body || '{}')

        // Validation logic (simplified, assuming frontend already validated)
        if (!data.email || !data.fullName) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing required fields' })
            }
        }

        console.log('--- NEW SITE CREATION REQUEST ---')
        console.log(`Nom: ${data.fullName}`)
        console.log(`Email: ${data.email}`)
        console.log(`Téléphone: ${data.phone}`)
        console.log(`Type de site: ${data.siteType}`)
        console.log(`Description activité: ${data.activityDescription}`)
        console.log(`Objectifs: ${data.siteGoal}`)
        console.log(`Fonctionnalités: ${Array.isArray(data.features) ? data.features.join(', ') : 'Aucune'}`)
        console.log(`Description détaillée: ${data.detailedDescription}`)
        console.log('--------------------------------')

        // IN PRODUCTION: Integrate with SendGrid, Mailgun, or Postmark here
        // Example:
        /*
        await sendEmail({
          to: 'oliviermevaa0@gmail.com',
          subject: `Nouveau projet Gifthub: ${data.projectName}`,
          text: `Détails du projet...`,
          html: `<h1>Nouveau Projet</h1>...`
        })
        */

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Demande reçue avec succès',
                timestamp: new Date().toISOString()
            }),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erreur interne au serveur' }),
        }
    }
}
