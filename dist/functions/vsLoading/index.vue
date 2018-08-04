<template>
  <transition name="fade">
    <div
      v-if="active"
      :style="style"
      :class="[`vs-loading-background-${background}`,`vs-loading-color-${color}`,{'textAfter':textAfter}]"
      class="con-vs-loading"
      @click="effectClick">
      <transition name="effect-click">
        <div
          v-if="activeEffectClick&&clickEffect"
          :style="styleEffectClick"
          class="effect-click">
        </div>
      </transition>

      <h4
        v-if="text"
        class="title-loading">{{ text }}</h4>

      <div
        :style="{
          transform:`scale(${scale})`
        }"
        :class="[type]"
        class="vs-loading">


        <div
          v-if="type!='material'"
          :style="styleEffect1"
          class="effect-1 effects"></div>
        <div
          v-if="type!='material'"
          :style="styleEffect2"
          class="effect-2 effects"></div>
        <div
          v-if="type!='material'"
          :style="styleEffect3"
          class="effect-3 effects"></div>

        <img :src="src">

        <svg
          v-if="type=='material'"
          class="spinner"
          width="50px"
          height="50px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            class="path"
            fill="none"
            stroke-width="5"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"></circle>
        </svg>

      </div>


    </div>
  </transition>
</template>
<script>
  import _color from '../../utils/color.js'
  export default {
    data:()=>({
      active:false,
      type:'default',
      color:null,
      background:'rgba(255,255,255,.6)',
      src:'',
      leftx:0,
      topx:0,
      clickEffect:false,
      activeEffectClick:false,
      scale:1,
      textAfter:false,
      text:null,
    }),
    computed:{
      styleEffectClick(){
        return {
          left: `${this.leftx}px`,
          top: `${this.topx}px`
        }
      },
      styleEffect1(){
        let style = {
          borderLeft: `3px solid ${_color.getColor(this.color,1)}`
        }

        if(this.type == 'border'){
          style = {
            borderLeft: `1px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'point'){
          style = {
            background: _color.getColor(this.color,.4)
          }
        }

        if(this.type == 'radius'){
          style = {
            border: `3px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'corners'){
          style = {
            border: `3px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'sound'){
          style = {
            background: _color.getColor(this.color,1)
          }
        }

        return style
      },
      styleEffect2(){
        let style = {
          borderLeft: `3px solid ${_color.getColor(this.color,1)}`
        }

        if(this.type == 'border'){
          style = {
            borderLeft: `1px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'point'){
          style = {
            background: _color.getColor(this.color,.4)
          }
        }

        if(this.type == 'radius'){
          style = {
            border: `3px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'corners'){
          style = {}
        }

        if(this.type == 'sound'){
          style = {
            background: _color.getColor(this.color,1)
          }
        }

        return style
      },
      styleEffect3(){
        let style = {
          borderLeft: `3px solid ${_color.getColor(this.color,1)}`
        }

        if(this.type == 'border'){
          style = {
            borderLeft: `1px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'point'){
          style = {
            background: _color.getColor(this.color,.4)
          }
        }

        if(this.type == 'radius'){
          style = {
            border: `3px solid ${_color.getColor(this.color,1)}`
          }
        }

        if(this.type == 'corners'){
          style = {}
        }

        if(this.type == 'sound'){
          style = {
            background: _color.getColor(this.color,1)
          }
        }

        return style
      },
      style(){
        return {
          background:_color.getColor(this.background,1)
        }
      }
    },
    mounted(){
      this.active = true
    },
    methods:{
      effectClick(evt){
        this.leftx = evt.offsetX
        this.topx = evt.offsetY
        this.activeEffectClick = true
        setTimeout(()=>{
          this.activeEffectClick = false
        },50)
      },
      close(){
        this.active = false
      }
    }
  }
</script>
