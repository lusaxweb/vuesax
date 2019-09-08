import locales from './locales'
import pkg from './package.json'
import { sticky, setColor, setVar, ripple, clipboard } from './vsFunctions'

export default (Vue, options) => {
  /**
   * Vue.prototype.$vs
   *
   * @description  : opciones por defecto de vuesax y sus funciones
   * @props {
   *  version      : version vuesax -> @constant
   *  theme        : tema del framework -> @String
   *  globalClass  : class que se asignara en todos los componentes -> @String
   *  locale       : idioma que se asignara a todos los componentes -> @String
   *  customLocale : un objeto json personalizado para un idioma en especifico -> @object
   *  setColor     : cambia el color de una variable css con el prefijo --vs-{varColorName} -> @function
   *  setVar       : Cambia una variable css con el prefijo --vs-{varName} -> @function
   *  clipboard    : copia el texto al portapapeles del usuario
   * }
   */

  Vue.prototype.$vs = {
    // props
    version: pkg.version,
    theme: options.theme || 'default',
    globalClass: options.globalClass || null,
    locale: options.customLocale ? { ...locales[options.locale], ...options.customLocale } : locales[options.locale] || 'es_ES',
    // functions
    setColor,
    setVar,
    sticky,
    ripple,
    clipboard
  }

}
