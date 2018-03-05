import './vsLoading.css'
export const vsLoading = function(parameters) {

  let colorx = 'rgb(var(--primary))'
  let backgroundx = 'rgba(255, 255, 255,.8)'
  if(parameters !== undefined){
    if(parameters.hasOwnProperty('color')){
      colorx = /[#()]/.test(parameters.color)?parameters.color:`rgb(var(--${parameters.color}))`
    }
    if (parameters.hasOwnProperty('background')) {

      backgroundx = /[#()]/.test(parameters.background)?parameters.background:`rgb(var(--${parameters.background}))`
    }
  }

  // console.log("hola abrir el loading");
  let conLoading = document.createElement('div')
  conLoading.classList.add('vs-con-loading')
  conLoading.style.background = backgroundx
  conLoading.innerHTML = `
  <div class="vs-loading-default">
    <div style="border-left: 4px solid ${colorx}" class="linea1"></div>
    <div style="border-left: 4px solid ${colorx}" class="linea2"></div>
    <div style="border-left: 4px solid ${colorx}" class="linea3"></div>
  </div>
  `

  document.body.insertBefore(conLoading, document.body.firstChild);
  setTimeout(function () {

    conLoading.classList.add('loading-activo')
  }, 10);

  // setTimeout(function () {
  //   conLoading.style.opacity = 0
  //   setTimeout(function () {
  //     conLoading.remove()
  //   }, 300);
  // }, time);
}

export const vsLoadingClose = function(parameters) {
  // console.log("hola close");
  // return
    let conLoading = document.querySelector('.vs-con-loading')
    // setTimeout(function () {
      conLoading.style.opacity = 0
      setTimeout(function () {
        conLoading.remove()
      }, 300);
    // }, 2500);

}
