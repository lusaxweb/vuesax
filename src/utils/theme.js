import color from './color.js'
export default {
  name:'theme',
  vsfunction(json){
    for (var clave in json) {
      let colorx
      if(/^[rgb(]/g.test(json[clave])){
        colorx = json[clave].replace(/[rgb()]/g,'')
      } else if(/[#]/g.test(json[clave])){
        let rgbx = color.hexToRgb(json[clave])
        colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
      } else {
        colorx = json[clave]
      }
      color.setCssVariable('--vs-'+clave,colorx)
    }
  },
}
