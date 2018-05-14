import './vsNotifications.css'
export default {name:'notify',vsfunction(parameters){
  // text,type='white',position='bottom-right',icon,functiox,fixed
  let text = parameters.text?parameters.text:null
  let type = parameters.color?parameters.color:'white'
  let position = parameters.position?parameters.position:'bottom-right'
  let icon = parameters.icon?parameters.icon:null
  let functiox = parameters.click?parameters.click:null
  let fixed = parameters.fixed?parameters.fixed:null

  // new
  let title = parameters.title?parameters.title:null
  let time = parameters.time?parameters.time:2000

  if(text==null){
    text = 'Vuesax: $vsNotify not parameters text'
    icon = 'warning'
    type = 'warning'
    console.warn(text);
    return
  }
  if(type==null){
    type = 'white'
  }
  if(position==null){
    position = 'bottom-right'
  }

  let conNotix = document.createElement('div')
  conNotix.classList.add('vs-noti-contenedor')
  conNotix.classList.add('vs-'+type);
  conNotix.classList.add('vs-'+position);

  let arrayPosition = position.split('-')





if(position.search('center')==-1){
  conNotix.style[arrayPosition[0]] = '15px';
  conNotix.style[arrayPosition[1]] = '15px';
}
if(position.search('top-center')!=-1){
    conNotix.style.left = `50%`
    conNotix.style.top = `15px`
    conNotix.style.transform = `translate(-50%)`
}
if(position.search('bottom-center')!=-1){
    conNotix.style.left = `50%`
    conNotix.style.bottom = `15px`
    conNotix.style.transform = `translate(-50%)`
}

  document.body.insertBefore(conNotix, document.body.firstChild);

  let rellenox = document.createElement('span')
  rellenox.classList.add('rellenox')
  if(/[#()]/i.test(type)){
    rellenox.style.background = type
  } else {
    rellenox.style.background = `rgb(var(--${type}))`
  }
  if(position.search('center')==-1){
    rellenox.style[arrayPosition[0]] = '50%';
    rellenox.style[arrayPosition[1]] = '0px';
  }
  if (position.search('bottom-center')!=-1){
    rellenox.style.left = '50%'
    rellenox.style.top = '100%'
  }
  if (position.search('top-center')!=-1){
    rellenox.style.left = '50%'
    rellenox.style.top = '0%'
  }
  conNotix.appendChild(rellenox)
  setTimeout(function () {
    if(position.search('left')!=-1){
      rellenox.style.left = '50%'
    } else if (position.search('right')!=-1) {
      rellenox.style.right = '-50%'
      rellenox.style.transform = 'translate(50%,-50%)'
    }
    // else if (position.search('center')!=-1){
    //   rellenox.style.left = '50%'
    //   rellenox.style.top = '100%'
    // }
    rellenox.style.top = '50%'
    rellenox.style.width = conNotix.offsetWidth*3.5 + 'px'
    rellenox.style.height = conNotix.offsetWidth*3.5 + 'px'
    moverNotis(position)
  }, 50);



  let notix = document.createElement('div')
  notix.innerHTML = text
  notix.classList.add('vs-noti')

  // create titlex
  if(title){
    let titlex = document.createElement('h3')
    titlex.innerHTML = title
    titlex.classList.add('vs-noti-title')
    notix.prepend(titlex)
  }

  conNotix.appendChild(notix)



  if(icon){
    conNotix.classList.add('con-icon')
    let iconx = document.createElement('span')
    iconx.classList.add('icon-noti')
    iconx.innerHTML=`<i class="material-icons">${icon}</i>`
    conNotix.appendChild(iconx)
  }

  setTimeout(function () {
    conNotix.classList.add('vs-noti-listo')
  }, 150);

  conNotix.addEventListener('click',function(e){
    if(functiox){
      functiox()
    }
    eliminarx(conNotix,position,conNotix,fluent)
  })

  let conFluent = document.createElement('div')
  conFluent.classList.add('vs-con-fluent')

  let fluent = document.createElement('div')
  fluent.classList.add('vs-fluent')
  fluent.style.height = conNotix.offsetHeight*2+'px'
  fluent.style.width = conNotix.offsetHeight*2+'px'
  conFluent.appendChild(fluent)

  conNotix.appendChild(conFluent)

  conNotix.addEventListener('mousemove',function(e){
    // console.log(e);
    let x = e.pageX
    let y = e.pageY
    fluent.style.left = x - conNotix.getBoundingClientRect().left+'px'
    fluent.style.top = y - conNotix.getBoundingClientRect().top+'px'
    fluent.style.opacity = '1'
    fluent.style.height = conNotix.offsetHeight*2+'px'
    fluent.style.width = conNotix.offsetHeight*2+'px'
  })
  conNotix.addEventListener('mouseleave',function(e){
    fluent.style.opacity = '0'
    fluent.style.height = conNotix.offsetHeight*4+'px'
    fluent.style.width = conNotix.offsetHeight*4+'px'
  })

setTimeout(function () {
  if(!fixed){
    eliminarx(conNotix,position,conNotix,fluent)
  }
}, time);
}
}
function eliminarx(contenedor,position,conNotix,fluent){
  fluent.style.filter = 'blur(10px)'
  fluent.style.opacity = '0'
  fluent.style.height = conNotix.offsetHeight*5+'px'
  fluent.style.width = conNotix.offsetHeight*5+'px'
  if (position.search('top-center')!=-1) {
    contenedor.style.top = '-20px'
    contenedor.style.opacity = 0
  }
  if (position.search('bottom-center')!=-1) {
    contenedor.style.bottom = '-20px'
    contenedor.style.opacity = 0
  }

    if(position.search('left')!=-1){
      contenedor.style.left = '-400px'
    } else if (position.search('right')!=-1){
      contenedor.style.right = '-400px'
    }
    setTimeout(function () {
      contenedor.style.opacity = 0
    }, 50);
    setTimeout(function () {
      contenedor.remove()
      moverNotis(position)
    }, 100);
}

function moverNotis(position){
  // console.log("paso en posision");
  let notisx = document.querySelectorAll('.vs-'+position);
  for (var i = 0; i < notisx.length; i++) {
    let hx = 0
    for (var i2 = 0; i2 < i; i2++) {
      hx += notisx[i2].offsetHeight + 10
    }
    if(position.search('center')==-1){
      if(position.search('top')!=-1){
        notisx[i].style.transform = `translatey(${hx}px)`
      } else if (position.search('bottom')!=-1) {
        notisx[i].style.transform = `translatey(-${hx}px)`
      }
    }

     if (position.search('top-center')!=-1) {
      notisx[i].style.transform = `translate(-50%,${hx}px)`
      notisx[i].style.zIndex = 10000-i
    }
     if (position.search('bottom-center')!=-1) {
      notisx[i].style.transform = `translate(-50%,-${hx}px)`
      notisx[i].style.zIndex = 10000-i
    }
  }
  // console.log(hx);
}
