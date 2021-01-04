//hover over the tooltip
// show the tooltip at the top of the element
// when mouse moves off the element remove the tooltip


import addGlobalEventListner from './utils/addGlobalEventListner'

//hover over the tooltip
addGlobalEventListner('mouseover', "[data-tooltip]", e => {
  console.log("her")
})