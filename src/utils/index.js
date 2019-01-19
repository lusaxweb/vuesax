export default {
  insertBody(elx){
    document.body.insertBefore(elx, document.body.firstChild)
  },
  removeBody(element) {
    let bodyx = document.body
    bodyx.removeChild(element);
  },
  changePosition(elx,content,conditional){
    let topx = 0
    let leftx = 0
    let widthx = 0
    let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
    if(elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout( ()=> {
        if(conditional){
          topx = (elx.getBoundingClientRect().top - content.clientHeight) + scrollTopx
        } else {
          topx = (elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight) + scrollTopx
        }
      }, 1);

    } else {
      topx = conditional?(elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx + 5:elx.getBoundingClientRect().top + scrollTopx
    }

    leftx = elx.getBoundingClientRect().left
    widthx = elx.offsetWidth

    let cords = {
      left: `${leftx}px`,
      top: `${topx}px`,
      width: `${widthx}px`
    }

    return cords
  },
}
