<template lang="html">
  <div :class="{'s-d':disabled}" class="con-slider"

  >
  <!-- @touchstart="clickLinea($event)" -->
    <div
      ref="lineaSlider"
     @click="clickLinea"
     class="linea-slider">

      <div
      :style="{'background':vsColor,'width':sliderValue+'%','max-width':ancho?ancho+'px':'auto'}"
        ref="lineaPintada"
       class="linea-pintada">
       <div

       :style="{'background':vsColor}"
       @mouseenter="showToolTip=true"
       @mouseleave="showToolTip=false"
       @mousedown="mousedownx"
       @touchstart="mousedownx($event)"
       @focus="showToolTip=true"
       @blur="showToolTip=false"
       @keydown.left="onLeftKeyDown"
       @keydown.right="onRightKeyDown"
       tabindex="0"
        ref="circle"
        class="circle-slider">
        <!-- :style="{'background':vsColor}" -->
        <span :style="{'border':'2px solid '+vsColor}" class="circle-interno">
          <span></span>
        </span>

        <div :style="{'background':vsColor}" :class="{'hoverx':showToolTip}" class="con-numero-slider">
          <span>{{Math.round(sliderValue)>100?100:Math.round(sliderValue)}}{{vsNotPercentage?'':'%'}}</span>
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
  props: {
    disabled: {
      type: [Boolean, String],
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    vsColor: {
      type: String,
      default:'rgb(var(--primary))'
    },
    vsMin: {
      type: Number
    },
    vsStep: {
      type: Number,
      default: 1
    },
    vsNotPercentage:{
      type:[Boolean],
      default:false,
    }
  },
  data(){
    return {
      sliderValue:this.value,
      numeroMostrar:this.value,
      showToolTip:false,
      valuex:0,
      ancho:0,
    }
  },
  created(){
    this.sliderValue = this.value
  },
  mounted(){
    this.ancho = this.$refs.lineaSlider.offsetWidth
    window.addEventListener('resize',this.resizex)
  },
  watch:{
    value(){
      this.sliderValue = this.value
    },
    numeroMostrar(){
      this.$emit('change',this.sliderValue)
    }
  },
  methods:{
    resizex(){
      this.ancho = this.$refs.lineaSlider.offsetWidth
      this.setSliderValue(this.numeroMostrar)
    },
    setSliderValue(value){
      if(value <= 100 && value >= 0) {
        this.sliderValue = value;
      }
    },
    onRightKeyDown() {
      this.setSliderValue(this.sliderValue + this.vsStep);
      this.$emit('input', this.sliderValue)
    },
    onLeftKeyDown() {
      this.setSliderValue(this.sliderValue - this.vsStep);
      this.$emit('input', this.sliderValue)
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
      this.showToolTip = true
      let lineaPintada = this.$refs.lineaPintada
      let linea = this.$refs.lineaSlider
      let circle = this.$refs.circle
      let x;
      if(event.type=='touchmove'){
        x = event.targetTouches[0].clientX
      } else {
        x = event.clientX
      }
      let valorx = x - (linea.getBoundingClientRect().left - circle.offsetWidth/2)
      if(this.vsMin){
        if((valorx / this.ancho) * 100<=this.vsMin){
          valorx = valorx
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
        this.setSliderValue(porcentajex)
        this.numeroMostrar = porcentajex
        this.$emit('input',porcentajex)
      // }
      // circle.style.left = (e.clientX - circle.offsetWidth/2) - this.ancho/2 + 'px'
    },
    removeEvents(event){
      if(this.disabled){
        return
      }
      this.showToolTip = false
      let obtenerPorcentaje = (this.valuex / this.ancho) * 100
      let porcentajex = Math.round(obtenerPorcentaje)

      this.setSliderValue(porcentajex)
      this.$emit('input',porcentajex)
      window.removeEventListener('mousemove', this.mouseMovex);
      window.removeEventListener('mouseup', this.removeEvents);
      window.removeEventListener('touchmove', this.mouseMovex);
      window.removeEventListener('touchend', this.removeEvents);
    },
    clickLinea(evt){
      let { className } = evt.target;
      if(className !== 'linea-slider' && className !== 'linea-pintada' || this.disabled)
      {
        return
      }
      this.showToolTip = true;
      const sliderOffsetLeft = this.$refs.lineaSlider.getBoundingClientRect().left;
      let obtenerPorcentaje = (evt.clientX - sliderOffsetLeft) / this.ancho * 100
      let porcentajex = Math.round(obtenerPorcentaje);
      this.numeroMostrar = porcentajex;
      this.$emit('input',porcentajex + 1)
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
.s-d .circle-interno {
  opacity: 0 !important;
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
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: transform .3s ease;
  /* background: rgb(var(--primary)); */
  backface-visibility: visible;
  background: rgb(255, 255, 255);
  right: 0px;
}
.circle-interno {
  position: absolute;
  left: 0%;
  top: 0%;
  transform: scale(1);
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: all .3s ease;
  background: rgb(255, 255, 255);
  backface-visibility: hidden;
  box-sizing: border-box;
}
.circle-slider:active {
  /* transform:translate(0%,-50%) scale(1.1); */
}
.circle-slider:active .circle-interno {
  transform: scale(0);
  opacity: 1;
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
  top: -7px;
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
