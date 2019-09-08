
const insertBody = (el, _this) => {
  _this.$root.$el.insertBefore(el, _this.$root.$el.firstChild)
}

const removeBody = (el, _this) => {
  _this.$root.$el.removeChild(el)
}

const setPosition = (parent, el, under) => {
  let box = window.innerHeight + el.clientHeight + window.pageYOffset
  let top = parent.offsetTop + el.clientHeight
  let isColapse = (box - top) < el.clientHeight

  if (!isColapse) {
    el.style.left = `${parent.offsetLeft}px`
    el.style.top = `${under ? (parent.offsetTop + parent.clientHeight) : parent.offsetTop}px`
  } else {
    el.style.left = `${parent.offsetLeft}px`
    el.style.top = `${under ? (parent.offsetTop - el.clientHeight - parent.clientHeight) : parent.offsetTop - el.clientHeight + parent.clientHeight}px`
  }
}

const css = (el, property) => {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}

const isColor = (color) => {
    let vsColors = [
      'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light',
      // social colors
      'facebook',
      'twitter',
      'youtube',
      'pinterest',
      'linkedin',
      'snapchat',
      'whatsapp',
      'tumblr',
      'reddit',
      'spotify',
      'amazon',
      'medium',
      'vimeo',
      'skype',
      'dribbble',
      'slack',
      'yahoo',
      'twitch',
      'discord',
      'telegram',
      'google-plus',
      'messenger'
    ]
    return vsColors.includes(color)
}

const getVsColors = () => {
    // let vsColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light']
    return document.documentElement.style

}


export {
  insertBody,
  removeBody,
  setPosition,
  css,
  isColor,
  getVsColors
}
