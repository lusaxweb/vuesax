import './vsMessageBox.css'
export const message = function(parameters) {
  //parameters
  let text = parameters.text

  // contenedor
  let conx = document.createElement('div')
  conx.classList = "con-message"

  let messagex = document.createElement('div')
  messagex.classList = "vs-message"
  messagex.innerHTML = text
  conx.appendChild(messagex)
  document.body.insertBefore(conx, document.body.firstChild);

  // animation
  setTimeout(function () {
    messagex.style.transform = "scale(1.050)"
    conx.style.opacity = "1"
    setTimeout(function () {
      messagex.style.transform = "scale(1)"
    }, 200);
  }, 10);

  //events
  conx.addEventListener('click',function(e){
    if(e.target.className=='con-message'){
      messagex.style.transform = "scale(.8)"
      conx.style.opacity = "0"
      setTimeout(function () {
        conx.remove()
      }, 300);
    }

  })
}
