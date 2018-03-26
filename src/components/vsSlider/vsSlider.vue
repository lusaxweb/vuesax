<template lang="html">
  <div :class="{'s-d':disabled}" class="con-slider"

  >
  <!-- @touchstart="clickLinea($event)" -->
    <div
      ref="lineaSlider"
     @click="clickLinea($event)"
     class="linea-slider">

      <div
      :style="{'background':vsColor,'width':numerox+'%','max-width':ancho?ancho+'px':'auto'}"
        ref="lineaPintada"
       class="linea-pintada">
       <div

       :style="{'background':vsColor}"
       @mouseenter="verNumero=true"
       @mouseleave="verNumero=false"
       @mousedown="mousedownx"
       @touchstart="mousedownx($event)"
        ref="circle"
        class="circle-slider">

        <div :style="{'background':vsColor}" :class="{'hoverx':verNumero}" class="con-numero-slider">
          <span>{{Math.round(this.numerox)>100?100:Math.round(this.numerox)}}%</span>
        </div>

      </div>
      </div>
      <!--
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @mousedown="onButtonDown"
      :class="{ 'hover': hovering, 'dragging': dragging }"
      :style="wrapperStyle"
      ref="button"
      tabindex="0"
      @focus="handleMouseEnter"
      @blur="handleMouseLeave"
      @keydown.left="onLeftKeyDown"
      @keydown.right="onRightKeyDown"
      @keydown.down.prevent="onLeftKeyDown"
      @keydown.up.prevent="onRightKeyDown" -->

    </div>
  </div>
</template>

<script>
export default {
  name:'vsSlider',
  props:[
    'disabled',
    'value',
    'vsColor',
    'vsMin'
  ],
  data(){
    return {
      numerox:this.value,
      numeroMostrar:this.value,
      verNumero:false,
      valuex:0,
      ancho:0,
    }
  },
  created(){
    this.numerox = this.value
  },
  mounted(){
    this.ancho = this.$refs.lineaSlider.offsetWidth
    window.addEventListener('resize',this.resizex)
  },
  updated(){
    this.ancho = this.$refs.lineaSlider.offsetWidth
    window.addEventListener('resize',this.resizex)
  },
  watch:{
    value(){
      this.numerox = this.value
    },
    numeroMostrar(){
      this.$emit('change',this.numeroMostrar)
    }
  },
  methods:{
    resizex(){
      // console.log(this.$refs.lineaSlider.clientWidth);
      this.ancho = this.$refs.lineaSlider.offsetWidth
      this.numerox = this.numeroMostrar
    },
    mousedownx(event){
      // event.preventDefault();
      window.addEventListener('mousemove', this.mouseMovex);
      window.addEventListener('mouseup', this.removeEvents);
      window.addEventListener('touchmove', this.mouseMovex);
      window.addEventListener('touchend', this.removeEvents);
    },
    mouseMovex(event){
      if(this.disabled){
        return
      }
      this.verNumero = true
      let lineaPintada = this.$refs.lineaPintada
      let linea = this.$refs.lineaSlider
      let circle = this.$refs.circle
      let x;
      // console.log(event);
      if(event.type=='touchmove'){
        x = event.targetTouches[0].clientX
      } else {
        x = event.clientX
      }
      let valorx = x - (linea.getBoundingClientRect().left - circle.offsetWidth/2)
      // console.log(this.vsMin);
      if(this.vsMin){
        if((valorx / this.ancho) * 100<=this.vsMin){
          valorx = valorx
          // console.log('entro');
        }
      } else {
        if(Math.sign(valorx)==-1){
          valorx=0
        }
      }

       if (valorx>this.ancho) {
        valorx = this.ancho
       }

        this.valuex = valorx

        let obtenerPorcentaje = 0
        let porcentajex = 0
        // if(this.vsMin){
        //
        // } else {
          obtenerPorcentaje = (valorx / this.ancho) * 100
          porcentajex = Math.round(obtenerPorcentaje)
        // }
        // circle.style.left = valorx  + 'px'
        // lineaPintada.style.width = valorx + 10  + 'px'
        this.numerox = porcentajex
        this.numeroMostrar = porcentajex
        this.$emit('input',porcentajex)
      // }
      // circle.style.left = (e.clientX - circle.offsetWidth/2) - this.ancho/2 + 'px'
    },
    removeEvents(event){
      if(this.disabled){
        return
      }
      this.verNumero = false
      let linea = this.$refs.lineaSlider
      let obtenerPorcentaje = (this.valuex / this.ancho) * 100
      let porcentajex = Math.round(obtenerPorcentaje)

      this.numerox = porcentajex
      this.$emit('input',porcentajex)
      window.removeEventListener('mousemove', this.mouseMovex);
      window.removeEventListener('mouseup', this.removeEvents);
      window.removeEventListener('touchmove', this.mouseMovex);
      window.removeEventListener('touchend', this.removeEvents);
    },
    clickLinea(evt){
      if(evt.target.className != 'linea-slider' && evt.target.className != 'linea-pintada' || this.disabled)
      {
        return
      }
      let linea = this.$refs.lineaSlider
      let circle = this.$refs.circle
      let lineaPintada = this.$refs.lineaPintada

      console.log(evt);
      console.log(evt.layerX + 'px');
      console.log(this.ancho + 'px');

      lineaPintada.style.width = evt.layerX + 'px'

      this.verNumero = true
      let obtenerPorcentaje = ((evt.layerX + 9)/ this.ancho) * 100
      let porcentajex = Math.round(obtenerPorcentaje)
      // circle.style.left = evt.layerX - circle.offsetWidth/2 + 'px'
      this.numeroMostrar = porcentajex
      this.$emit('input',porcentajex)
    }
  }
}
</script>

<style lang="css">
.s-d {
  /* pointer-events: none; */

  cursor: default;
}
.s-d .circle-slider{
  background: rgb(200, 200, 200) !important;
  cursor: default !important;

}
.s-d .circle-slider .con-numero-slider {
  background: rgb(60, 60, 60) !important;
}
.s-d .linea-pintada {
  background: rgb(200, 200, 200) !important;
}
.con-slider {
  width: 100%;
  padding: 10px;
}
.linea-slider {
  position: relative;
  width: 100%;
  background: rgb(235, 235, 235);
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
}
.circle-slider {
  /* left: 0px; */
  top: 50%;
  position: absolute;
  transform: translate(0%,-50%);
  width: 17px;
  height: 17px;
  border-radius: 50%;
  transition: transform .3s ease;
  background: rgb(var(--primary));
  right: 0px;
}
.circle-slider:active {
  transform:translate(0%,-50%) scale(1.1);
}
.linea-pintada {
  width: 0px;
  height: 100%;
  background: rgb(var(--primary));
  border-radius: 3px;
  position: relative;
}
.con-numero-slider {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translate(-50%,-60%) scale(.5);
  padding: 4px;
  background: rgb(var(--primary));
  border-radius: 5px;
  transition: all .2s ease;
  opacity: 0;
  visibility:hidden;
  font-size: 12px;
}
.con-numero-slider span {
  z-index: 100;
  display: block;
  position: relative;
  color: rgb(255, 255, 255);
}
.con-numero-slider::after {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 1px;
  background: inherit;
  /* background: rgb(182, 137, 204); */
  left: 50%;
  bottom: -7px;
  transform: rotate(45deg) translate(-68%);
  z-index: 10;
}
.hoverx {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%,-100%);
}
</style>
