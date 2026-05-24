import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'

const container = document.querySelector('.accordion-container')

if (container) {
  new Accordion(container, {
    showMultiple: false,
    duration: 500
  })
}
