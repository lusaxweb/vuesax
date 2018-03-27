import './vsTooltip.css'
export default {
  update(el,binding,vnode){
    // console.log("el=>",el);
    // console.log("binding=>",binding);
    // console.log('vnode=>',vnode);
    let valuex = null
    let keyx = el.dataset.keyx

    if(typeof binding.value == 'object'){
      valuex = binding.value.text
    } else if (typeof binding.value == 'string') {
      valuex = binding.value
    }

    let tooltipx = document.querySelector('.'+keyx)
    if(tooltipx){
      tooltipx.innerHTML = `
      <p>
        ${valuex}
      </p>
      `
    }
  },
  inserted(el, binding, vnode) {
    var ramdomx = Math.floor((Math.random() * 1000) + 1)
    el.dataset.keyx = 'vs-tooltip'+ramdomx
    // console.log("el=>",el);
    // console.log("binding=>",binding);
    // console.log('vnode=>',vnode);
    let delayx = 0
    let valuex = null
    let colorx = 'rgb(70, 70, 70)'
    let active = true

    if(typeof binding.value == 'object'){
      valuex = binding.value.text
      // if(binding.value.hasOwnProperty('delay')){
        delayx = binding.value.delay || 0
      // }
      // if(binding.value.hasOwnProperty('color')){
        colorx = binding.value.color?/[#()]/.test(binding.value.color)?binding.value.color:`rgb(var(--${binding.value.color}))`:'rgb(70, 70, 70)'
      // }
    } else if (typeof binding.value == 'string') {
      valuex = binding.value
    }


    el.classList.add('vs-tooltipx')

    var tooltipx = document.createElement("div");
    tooltipx.classList = 'vs-tooltip'

    if(typeof binding.value == 'object'){
      if(binding.value.hasOwnProperty('position')){
        tooltipx.classList.add('vs-tooltip-'+binding.value.position)
      }
    }



    tooltipx.classList.add('vs-tooltip'+ramdomx)

    tooltipx.innerHTML = `
      <p>
      ${valuex}
      </p>
    `
    tooltipx.style.background = colorx
    var mouseEnterx = function(event){

      let coords = event.toElement.getBoundingClientRect();
      document.body.insertBefore(tooltipx, document.body.firstChild);

      if(typeof binding.value == 'object'){
        if(binding.value.position == 'left'){
          tooltipx.style.top = coords.top + (event.target.clientHeight) + 'px'
          tooltipx.style.left = coords.left - (tooltipx.clientWidth+8) + 'px'
        } else if (binding.value.position == 'right') {
          tooltipx.style.top = coords.top + (event.target.clientHeight) + 'px'
          tooltipx.style.left = coords.left + (event.target.clientWidth+8) + 'px'
        } else if (binding.value.position == 'bottom') {
          tooltipx.style.top = coords.top + (event.target.clientHeight*2 + 5) + 'px'
          tooltipx.style.left = coords.left - (tooltipx.clientWidth/2 - event.target.clientWidth/2) + 'px'
        } else if (binding.value.position == 'top'||binding.value.position==undefined) {
          tooltipx.style.top = coords.top + 'px'
          tooltipx.style.left = coords.left - (tooltipx.clientWidth/2 - event.target.clientWidth/2) + 'px'
        }
      } else {
        tooltipx.style.top = coords.top + 'px'
        tooltipx.style.left = coords.left - (tooltipx.clientWidth/2 - event.target.clientWidth/2) + 'px'
      }


      setTimeout(function () {
        tooltipx.style.transform = `translateY(calc(-100% - 7px))`
        tooltipx.style.opacity = '1'
        el.removeEventListener('mouseEnterx',mouseEnterx,false)
      }, delayx);
      el.addEventListener('mouseleave',mousex)

    }

    el.addEventListener('mouseenter',mouseEnterx)

    var mousex = function(event){
      let coords = event.toElement.getBoundingClientRect();
      tooltipx.style.transform = `translateY(-90%)`
      tooltipx.style.opacity = '0'
      setTimeout(function () {
        if(document.querySelector('.vs-tooltip'+ramdomx)){
          document.querySelector('.vs-tooltip'+ramdomx).remove()
          el.removeEventListener('mouseleave',mousex,false)
        }
      }, 200);
      el.addEventListener('mouseEnterx',mouseEnterx,false)
    }

    el.addEventListener('mouseleave',mousex)


    //window scroll
    window.addEventListener('mousewheel',function(e){
      if(document.querySelector('.vs-tooltip'+ramdomx)){
        tooltipx.style.transform = `translateY(-90%)`
        tooltipx.style.opacity = '0'
        setTimeout(function () {
          if(document.querySelector('.vs-tooltip'+ramdomx)){
            document.querySelector('.vs-tooltip'+ramdomx).remove()
            el.removeEventListener('mouseleave',mousex,false)
          }
        }, 200);
        el.addEventListener('mouseEnterx',mouseEnterx,false)
      }
        });
    window.addEventListener('touchmove',function(e){
      if(document.querySelector('.vs-tooltip'+ramdomx)){
        tooltipx.style.transform = `translateY(-90%)`
        tooltipx.style.opacity = '0'
        setTimeout(function () {
          if(document.querySelector('.vs-tooltip'+ramdomx)){
            document.querySelector('.vs-tooltip'+ramdomx).remove()
            el.removeEventListener('mouseleave',mousex,false)
          }
        }, 200);
        el.addEventListener('mouseEnterx',mouseEnterx,false)
      }

        });




  }
};
