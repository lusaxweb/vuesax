import { setColor } from '../vsFunctions'
import { isColor } from '../utils'

const ripple = (evt, component, color = null) => {
  const el = evt.currentTarget
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  var time = 0.6

  if(component.clientWidth > 150) {
    time = 1.2
  }

  let effectContent = document.createElement('div')

  effectContent.className = 'vs-ripple__effect-content'
  let effect = document.createElement('div')
  effect.className = 'vs-ripple__effect'

  effect.style.transition = `all ${time}s ease`

  if(color) {
    effect.classList.add('vs-ripple__effect--color')
    console.log(effect)
    var _color = color || 'primary'

    if(!isColor(_color)) {
      setColor('color', color, effect)
    } else {
      let vsColor = `rgb(${getComputedStyle(component).getPropertyValue('--vs-color')})`
      setColor('color', vsColor, effect)
    }
  }


  effect.style.left = `${x}px`
  effect.style.top = `${y}px`

  component.appendChild(effectContent)
  effectContent.appendChild(effect)

  effect.style.width = `${component.clientWidth * 2.5}px`
  effect.style.height = `${component.clientWidth * 2.5}px`
  effect.style.opacity = `1`

  function removeEffect () {
    effect.style.transition = `all .3s ease`
    setTimeout(() => {
      effect.style.opacity = `0`
      setTimeout(() => {
        component.removeChild(effectContent)
      }, time * 600)
    }, time * 600)


    evt.target.removeEventListener('mouseup', removeEffect)
    evt.target.removeEventListener('mouseleave', removeEffect)
  }

  evt.target.addEventListener('mouseup', removeEffect)
  evt.target.addEventListener('mouseleave', removeEffect)
}

export default ripple
