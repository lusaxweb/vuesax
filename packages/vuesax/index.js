import * as vsComponents from './components.js'

import $vs from './vs.js'
const install = (Vue, options) => {

  Object.values(vsComponents).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })

  $vs(Vue, options)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export * from './components.js'
