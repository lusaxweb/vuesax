import { DefineRTL } from './utils/rtl';
/**
 * Override the main init sequence. This is called for every instance
 */

export default (Vue, options) => {
  const _init = Vue.prototype._init
  Vue.prototype._init = function (op = {}) {
    // Define $vs.rtl for every instance
    DefineRTL(Vue, options, this)
    _init.call(this, op)
  }
}