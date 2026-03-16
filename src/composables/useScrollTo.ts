export function useScrollTo() {
    const scrollTo = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (element) {
            const offset = 80 // Offset for header or spacing
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return {
        scrollTo
    }
}
