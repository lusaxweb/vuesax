/**
 * @injectDirectionClass
 * will inject 'vuesax-app-is-ltr' (ltr case) or 'vuexsax-app-is-rtl' (rtl case) in the html tag
 */

export const injectDirectionClass = (dir) => {
  if (dir) {
    document.documentElement.classList.remove('vuesax-app-is-ltr');
    document.documentElement.classList.add('vuesax-app-is-rtl');
  } else {
    document.documentElement.classList.add('vuesax-app-is-ltr');
    document.documentElement.classList.remove('vuesax-app-is-rtl');
  }
}
export const DefineRTL = (Vue, options, vm) => {
  // if rtl option passed, inject the appropriate class
  if (options.hasOwnProperty('rtl') && typeof document !== 'undefined') {
    injectDirectionClass(options.rtl);
  }
  // Define reactive $vs.rtl property
  Vue.util.defineReactive(vm.$vs, 'rtl', options.rtl, () => {
    vm.$nextTick(() => {
      if (options.rtl !== vm.$vs.rtl) {
        options.rtl = vm.$vs.rtl;
        // if value change
        injectDirectionClass(vm.$vs.rtl);
      }
    })

  })
}
