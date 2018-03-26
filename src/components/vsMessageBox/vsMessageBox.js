import './vsMessageBox.css'
export const message = {name:'alert',vsfunction(parameters) {
  //parameters
  let title = parameters.title
  let text = parameters.text
  let textConfirm = parameters.textConfirm?parameters.textConfirm:'Accept'
  let confirm = parameters.confirm
  let color = parameters.color?parameters.color:null
if(color!=null){
  if(!/[#()]/.test(color)){
    color = `rgb(var(--${color}))`
  }
}
  // contenedor
  let conx = document.createElement('div')
  conx.classList = "vs-con-message"
  if(color){
    conx.classList.add("vs-color")
  } else {
    conx.classList.add("vs-no-color")

  }

  let messagex = document.createElement('div')
  messagex.classList = "vs-message"

    messagex.innerHTML = `<div class="vs-text">
    <p class="vs-p">
    ${text}
    </p>
    <div class="vs-con-btns">
      <button style="background:${color}; border: 1px solid ${color}" class="vs-confirm" type="button" name="button">${textConfirm}</button>
    </div>
    </div>`



  let headerx = document.createElement('header');
  headerx.classList = 'vs-header'
  headerx.style.borderLeft = '3px solid '+color
  headerx.innerHTML = `
    <div class="vs-x">
    <i style="color:${color}" class="material-icons">close</i>
    </div>
  `
  let titlex = document.createElement('h3')
  titlex.innerHTML = title
  titlex.style.color = color

  messagex.prepend(headerx)
  headerx.appendChild(titlex)


  conx.appendChild(messagex)
  document.body.insertBefore(conx, document.body.firstChild);

  // animation
  setTimeout(function () {
    messagex.style.transform = "scale(1.050)"
    conx.style.opacity = "1"
    setTimeout(function () {
      messagex.style.transform = "scale(1)"



    }, 200);
    setTimeout(function () {
      messagex.style.borderRadius = '5px'
      headerx.style.borderRadius = '5px 5px 5px 0px'
      let x = document.getElementsByClassName('vs-x')
      x[0].style.opacity = '1'
      x[0].style.transform = ' scale(1) translate(5px,-5px)'
      x[0].style.borderRadius = '5px'

      let btns = document.getElementsByClassName('vs-con-btns')
      btns[0].style.opacity = '1'
      btns[0].style.transform = 'translate(0)'

      let text2 = document.getElementsByClassName('vs-p')
      text2[0].style.opacity = '1'
      text2[0].style.transform = 'translate(0)'


      titlex.style.opacity = '1'
      titlex.style.transform = 'translate(0)'
    }, 120);

  }, 10);


  //events
  document.getElementsByClassName('vs-confirm')[0].addEventListener('click',function(){
    quitarMessage(messagex,conx)
    confirm()
  })
  document.getElementsByClassName('vs-x')[0].addEventListener('click',function(){
    quitarMessage(messagex,conx)
  })
  conx.addEventListener('click',function(e){
    if(e.target.className.search('vs-con-message')!=-1){
      quitarMessage(messagex,conx)
    }
  })


  function quitarMessage(messagex,conx){
    messagex.style.transform = "scale(1.1)"
    conx.style.opacity = "0"
    setTimeout(function () {
      conx.remove()
    }, 300);
  }
}

}

////////////////////////////////////////////// confirm /////////////////////////////////




export const confirm = {name:'confirm',vsfunction(parameters) {
  //parameters
  let title = parameters.title
  let text = parameters.text
  let textConfirm = parameters.textConfirm?parameters.textConfirm:'Accept'
  let confirm = parameters.confirm
  let color = parameters.color?parameters.color:null

  let textCancel = parameters.textCancel?parameters.textCancel:'Cancel'
  let cancel = parameters.cancel


if(color!=null){
  if(!/[#()]/.test(color)){
    color = `rgb(var(--${color}))`
  }
}

  // contenedor
  let conx = document.createElement('div')
  conx.classList = "vs-con-message"
  if(color){
    conx.classList.add("vs-color")
  } else {
    conx.classList.add("vs-no-color")

  }

  let messagex = document.createElement('div')
  messagex.classList = "vs-message"

    messagex.innerHTML = `<div class="vs-text">
    <p class="vs-p">
    ${text}
    </p>
    <div class="vs-con-btns">
      <button class="vs-cancel" type="button" name="button">${textCancel}</button>
      <button style="background:${color}; border: 1px solid ${color}" class="vs-confirm" type="button" name="button">${textConfirm}</button>
    </div>
    </div>`



  let headerx = document.createElement('header');
  headerx.classList = 'vs-header'
  headerx.style.borderLeft = '3px solid '+color
  // headerx.innerHTML = `
  //   <div class="vs-x">
  //   <i style="color:${color}" class="material-icons">close</i>
  //   </div>
  // `
  let titlex = document.createElement('h3')
  titlex.innerHTML = title
  titlex.style.color = color

  messagex.prepend(headerx)
  headerx.appendChild(titlex)


  conx.appendChild(messagex)
  document.body.insertBefore(conx, document.body.firstChild);

  // animation
  setTimeout(function () {
    messagex.style.transform = "scale(1.050)"
    conx.style.opacity = "1"
    setTimeout(function () {
      messagex.style.transform = "scale(1)"



    }, 200);
    setTimeout(function () {
      messagex.style.borderRadius = '5px'
      headerx.style.borderRadius = '5px 5px 5px 0px'
      // let x = document.getElementsByClassName('vs-x')
      // x[0].style.opacity = '1'
      // x[0].style.transform = ' scale(1) translate(5px,-5px)'
      // x[0].style.borderRadius = '5px'

      let btns = document.getElementsByClassName('vs-con-btns')
      btns[0].style.opacity = '1'
      btns[0].style.transform = 'translate(0)'

      let text2 = document.getElementsByClassName('vs-p')
      text2[0].style.opacity = '1'
      text2[0].style.transform = 'translate(0)'


      titlex.style.opacity = '1'
      titlex.style.transform = 'translate(0)'
    }, 120);

  }, 10);


  //events
  document.getElementsByClassName('vs-cancel')[0].addEventListener('click',function(){
    quitarMessage(messagex,conx)
    cancel()
  })
  document.getElementsByClassName('vs-confirm')[0].addEventListener('click',function(){
    quitarMessage(messagex,conx)
    confirm()
  })
  // document.getElementsByClassName('vs-x')[0].addEventListener('click',function(){
  //   quitarMessage(messagex,conx)
  // })
  conx.addEventListener('click',function(e){
    if(e.target.className.search('vs-con-message')!=-1){

      messagex.style.transform = "scale(1.050)"
      setTimeout(function () {
        messagex.style.transform = "scale(1)"
      }, 100);
    }

  })


  function quitarMessage(messagex,conx){
    messagex.style.transform = "scale(1.1)"
    conx.style.opacity = "0"
    setTimeout(function () {
      conx.remove()
    }, 300);
  }
}
}




////////////////////////////////////////////// prompt /////////////////////////////////




export const prompt = {name:'prompt',vsfunction(parameters) {
  //parameters
  let title = parameters.title
  let text = parameters.text
  let textConfirm = parameters.textConfirm?parameters.textConfirm:'Accept'
  let confirm = parameters.confirm
  let color = parameters.color?parameters.color:null

  let textCancel = parameters.textCancel?parameters.textCancel:'Cancel'
  let cancel = parameters.cancel
  let input = parameters.input

  if(input.type=='radio'||input.type=='checkBox'||input.type=='button'){
    // var textoActivo="MDN"
    var URL="https://lusaxweb.github.io/vuesax/#/"

    console.warn("Vuesax: prompt invalid parameter type: "+input.type);
    return
  }

if(color!=null){
  if(!/[#()]/.test(color)){
    color = `rgb(var(--${color}))`
  }
}

  // contenedor
  let conx = document.createElement('div')
  conx.classList = "vs-con-message"
  if(color){
    conx.classList.add("vs-color")
  } else {
    conx.classList.add("vs-no-color")

  }

  let messagex = document.createElement('div')
  messagex.classList = "vs-message"

    messagex.innerHTML = `<div class="vs-text">
    <p class="vs-p">
    ${text}
    <input
      placeholder="${input.placeholder?input.placeholder:''}"
      class="vs-input"
      type="${input.type}"
      name=""
      maxlength="${input.maxLength}"
      value="${input.value?input.value:''}"
      >
    </p>
    <div class="vs-con-btns">
      <button class="vs-cancel" type="button" name="button">${textCancel}</button>
      <button style="background:${color}; border: 1px solid ${color}" class="vs-confirm" type="button" name="button">${textConfirm}</button>
    </div>
    </div>`



  let headerx = document.createElement('header');
  headerx.classList = 'vs-header'
  headerx.style.borderLeft = '3px solid '+color
  // headerx.innerHTML = `
  //   <div class="vs-x">
  //   <i style="color:${color}" class="material-icons">close</i>
  //   </div>
  // `
  let titlex = document.createElement('h3')
  titlex.innerHTML = title
  titlex.style.color = color

  messagex.prepend(headerx)
  headerx.appendChild(titlex)


  conx.appendChild(messagex)
  document.body.insertBefore(conx, document.body.firstChild);

  // animation
  setTimeout(function () {
    messagex.style.transform = "scale(1.050)"
    conx.style.opacity = "1"
    setTimeout(function () {
      messagex.style.transform = "scale(1)"



    }, 200);
    setTimeout(function () {
      messagex.style.borderRadius = '5px'
      headerx.style.borderRadius = '5px 5px 5px 0px'
      // let x = document.getElementsByClassName('vs-x')
      // x[0].style.opacity = '1'
      // x[0].style.transform = ' scale(1) translate(5px,-5px)'
      // x[0].style.borderRadius = '5px'

      let btns = document.getElementsByClassName('vs-con-btns')
      btns[0].style.opacity = '1'
      btns[0].style.transform = 'translate(0)'

      let text2 = document.getElementsByClassName('vs-p')
      text2[0].style.opacity = '1'
      text2[0].style.transform = 'translate(0)'


      titlex.style.opacity = '1'
      titlex.style.transform = 'translate(0)'
    }, 120);

  }, 10);


  //events
  document.getElementsByClassName('vs-cancel')[0].addEventListener('click',function(){
    quitarMessage(messagex,conx)
    cancel()
  })
  document.getElementsByClassName('vs-confirm')[0].addEventListener('click',function(){
    let valuex = document.getElementsByClassName('vs-input')[0]
    if(valuex.value.length>0){
      quitarMessage(messagex,conx)
      confirm(valuex.value)
    } else {
      valuex.classList.add('input-mal-box')
      valuex.focus()
      messagex.style.transform = "scale(1.030)"
      setTimeout(function () {
        messagex.style.transform = "scale(1)"
      }, 100);
    }
  })
  // document.getElementsByClassName('vs-x')[0].addEventListener('click',function(){
  //   quitarMessage(messagex,conx)
  // })
  conx.addEventListener('click',function(e){
    if(e.target.className.search('vs-con-message')!=-1){
      messagex.style.transform = "scale(1.050)"
      setTimeout(function () {
        messagex.style.transform = "scale(1)"
      }, 100);
    }

  })


  function quitarMessage(messagex,conx){
    messagex.style.transform = "scale(1.1)"
    conx.style.opacity = "0"
    setTimeout(function () {
      conx.remove()
    }, 300);
  }
}
}
