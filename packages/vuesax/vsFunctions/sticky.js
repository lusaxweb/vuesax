import { css } from '../utils'

function handleMousemove(evt) {
  let x = evt.offsetX - (evt.target.clientWidth / 2)
  let y = evt.offsetY - (evt.target.clientHeight / 2)
  const el = evt.target
  const child = el.querySelector('.sticky-el')


  el.style.transform = `translate(${x / 8}px, ${y / 7}px)`
  child.style.transform = `translate(${x / 8.5}px, ${y / 7.5}px)`
}

function handleMouseleave(evt) {
  const el = evt.target
  const child = el.querySelector('.sticky-el')
  el.removeEventListener('mousemove', handleMousemove)
  el.removeEventListener('mouseleave', handleMouseleave)

  el.style.transition = 'transform .2s ease'
  child.style.transition = 'transform .25s ease'

  setTimeout(() => {
    el.style.transition = el.dataset.transitionOld
    child.style.transition = child.dataset.transitionOld
  }, 250);

  el.style.transform = `translate(0px, 0px)`
  child.style.transform = `translate(0px, 0px)`

}

export default (evt, options) => {
  const el = evt.target
  const child = el.querySelector('.sticky-el')

  el.dataset.transitionOld = css(el, 'transition')
  child.dataset.transitionOld = css(child, 'transition')

  el.style.transition = el.dataset.transitionOld+',transform .2s ease'
  child.style.transition = child.dataset.transitionOld+',transform .25s ease'

  setTimeout(() => {
    el.style.transition = el.dataset.transitionOld+',transform 0s'
    child.style.transition = child.dataset.transitionOld+',transform .05s'
  }, 250);

  el.addEventListener('mousemove', handleMousemove)
  el.addEventListener('mouseleave', handleMouseleave)
}

