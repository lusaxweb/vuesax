export default {
  RandomColor(){
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
  },
  rColor(colorx,opacity=1){
    if(/^[#]/.test(colorx)){
      let c = this.hexToRgb(colorx)
      colorx = `rgba(${c.r},${c.g},${c.b},${opacity})`
    } else if (/^[rgb]/.test(colorx)){
      let colorSplit = colorx.split(')')[0].replace('rgb','rgba')
      colorSplit += `,${opacity})`
      colorx = colorSplit
    }

    let vscolors = ['primary','success','danger','warning','dark']
    if(colorx){
      if(/[#()]/.test(colorx)){
        return colorx
      } else {
        if(vscolors.includes(colorx)){
          return `rgba(var(--${colorx}),${opacity})`
        } else {
          console.warn(`[Vuesax] : The color of the component can not be processed, only colors are accepted (RGB or HEX), or the color is not one of the main ones ${JSON.stringify(vscolors)} The unprocessed color is > ${colorx}`);
          return `rgba(var(--primary),${opacity})`
        }
      }
    } else {
      return `rgba(var(--primary),${opacity})`
    }
  },
  contrastColor(elementx) {
    let c = elementx
      if(/[#]/g.test(elementx)){
        let rgbx = this.hexToRgb(elementx)
       c = `rgb(${rgbx.r},${rgbx.g},${rgbx.b})`
      }
      var rgb = c.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
      var yiq = ((rgb[0]*299)+(rgb[1]*587)+(rgb[2]*114))/1000;
      if(yiq >= 128){
        return true
      } else {
        return false
      }
  },
  setCssVariable(propertyName, value, isServer) {
    // if(!isServer || process.browser){
    if(typeof window !== 'undefined' || process.browser){
      document.documentElement.style.setProperty(propertyName, value);
    }
    // }
  },
  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
},
  getVariable(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
  },
  changeColor(colorInicial){
    let colores = ['primary','success','danger','warning','dark']
    let colorx

    if(colores.includes(colorInicial)){
      let style = getComputedStyle(document.documentElement)
      colorx = this.getVariable(style,'--'+colorInicial)
    } else {
      if(/[rgb()]/g.test(colorInicial)){
        colorx = colorInicial.replace(/[rgb()]/g,'')
      } else if(/[#]/g.test(colorInicial)){
        let rgbx = this.hexToRgb(colorInicial)
        colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
      } else {
        colorx = '--'+colorInicial
      }
    }


    return colorx
    // this.setCssVariable('--'+clave,colorx)
  }
}
