import './vsLoading.css'
export const vsLoading = {name:'loading',vsfunction(parameters) {

  let colorx = 'rgb(var(--primary))'
  let backgroundx = 'rgba(255, 255, 255,.8)'
  let containerx = document.body
  let scalex = 1
  if (parameters !== undefined) {
    if (parameters.hasOwnProperty('color')) {
      colorx = /(^#(([a-f]|[A-F]|[0-9]){3}|([a-f]|[A-F]|[0-9]){6})$|^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$|^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(0?(\.\d+)?|1(\.0+)?)\)$|^transparent$)/.test(parameters.color) ? parameters.color : `rgb(var(--${parameters.color}))`
    }
    if (parameters.hasOwnProperty('background')) {
      backgroundx = /(^#(([a-f]|[A-F]|[0-9]){3}|([a-f]|[A-F]|[0-9]){6})$|^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$|^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(0?(\.\d+)?|1(\.0+)?)\)$|^transparent$)/.test(parameters.background) ? parameters.background : `rgb(var(--${parameters.background}))`
    }
    if (parameters.hasOwnProperty('container')) {
      containerx = document.querySelectorAll(parameters.container)
    }
    if (parameters.hasOwnProperty('scale')) {
      scalex = /^\d+(\.\d+)?$/.test(parameters.scale) ? parameters.scale : 1
    }
  }

  let conLoading = document.createElement('div')
  conLoading.classList.add('vs-con-loading')
  conLoading.setAttribute('style', `background: ${backgroundx};`)
  conLoading.innerHTML = `
      <div class="vs-loading-default" style="transform: scale(${scalex});">
        <div style="border-left: 4px solid ${colorx};" class="linea1"></div>
        <div style="border-left: 4px solid ${colorx};" class="linea2"></div>
        <div style="border-left: 4px solid ${colorx};" class="linea3"></div>
      </div>
  `

  let loaders = []

  if (containerx.nodeType !== 1) {
    containerx.forEach(containerEl => {
      let conLoadClone = conLoading.cloneNode(true)
      containerEl.insertBefore(conLoadClone, containerEl.firstChild)

      loaders.push(conLoadClone)
    })
  } else {
    loaders.push(conLoading)
    containerx.insertBefore(conLoading, containerx.firstChild)
  }


  setTimeout(function () {
    loaders.forEach(loader => {
      loader.classList.add('loading-activo')
    })
  }, 10)
}
}

export const vsLoadingClose = {name:'loading',subName:'close',vsfunction(parameters) {
  let conLoading = document.querySelector('.vs-con-loading')

  if (parameters !== undefined) {
    if (parameters.hasOwnProperty('loadingQuery')) {
      conLoading = document.querySelectorAll(parameters.loadingQuery)
    }
  }

  if (conLoading.nodeType !== 1) {
    conLoading.forEach(loadingNode => {
      loadingNode.style.opacity = 0
    })
  } else {
    conLoading.style.opacity = 0
  }

  setTimeout(function () {
    if (conLoading.nodeType !== 1) {
      conLoading.forEach(loadingNode => {
        loadingNode.remove()
      })
    } else {
      conLoading.remove()
    }
  }, 300)

}
}
