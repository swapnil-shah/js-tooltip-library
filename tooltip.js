//hover over the tooltip
// show the tooltip at the top of the element
// when mouse moves off the element remove the tooltip


import addGlobalEventListener from './utils/addGlobalEventListener'

const tooltipContainer = document.createElement('div')
tooltipContainer.classList.add('tooltip-container')
document.body.append(tooltipContainer)


//hover over the tooltip
addGlobalEventListener('mouseover', "[data-tooltip]", e => {
  const tooltip = createTooltipElement(e.target.dataset.tooltip)
  document.body.append(tooltip)
  positionTooltip(tooltip, e.target)

  // when mouse moves off the element remove the tooltip
  e.target.addEventListener('mouseleave', () => {
    tooltip.remove()
  }, { once: true })
})

// show the tooltip at the top of the element
function createTooltipElement(text) {
  const tooltip = document.createElement('div')
  tooltip.classList.add('tooltip')
  tooltip.innerText = text
  return tooltip
}

function positionTooltip(tooltip, element) {
  const elementRect = element.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  tooltip.style.top = `${elementRect.top - tooltipRect.height}px`
  tooltip.style.left = `${elementRect.left + elementRect.width / 2 - tooltipRect.width / 2}px`
}