export default {
  contrastColor(elementx) {
    let c = elementx
      if(/[#]/g.test(elementx)){
        // console.log();
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
  setCssVariable(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
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
  },
  rgbToHex(r, g, b) {
    function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
}
