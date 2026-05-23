import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'

const container = document.querySelector('.accordion-container')
const faqSection = document.querySelector('.faq-section')

if (container && faqSection) {
  const updateFaqTitleMargin = () => {
    const hasOpenAccordion = container.querySelector('.ac.is-active')
    faqSection.classList.toggle(
      'faq-section--opened',
      Boolean(hasOpenAccordion)
    )
  }

  const handleAccordionClick = (event) => {
    const trigger = event.target.closest('.ac-trigger')

    if (!trigger || !container.contains(trigger)) return

    setTimeout(updateFaqTitleMargin, 0)
  }

  container.addEventListener('click', handleAccordionClick)

  new Accordion(container, {
    showMultiple: true,
    duration: 500
  })
}
