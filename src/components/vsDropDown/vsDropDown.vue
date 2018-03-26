<template lang="html">
  <div
  :style="{
    'margin':vsMargin,
    }"
  :class="{
    'vsDisabled':vsDisabled,
    'vs-visible':visible
    }" class="vs-drop-down">
    <div v-if="conSlotButton" class="con-slot">
      <slot name="button">
      </slot>
      <i
      :style="{
        'background':vsColorButton?/[#()]/.test(vsColorButton)?vsColorButton:`rgba(var(--${vsColorButton}),1)`:'rgba(var(--primary))',
        'color':vsColorRow?/[#()]/.test(vsColorRow)?vsColorRow:`rgba(var(--${vsColorRow}),1)`:'rgb(255, 255, 255)',
        }"
      @click="setVisible($event)"
      @mouseenter="setVisible($event)"
      @mouseleave="vsTriggerClick?agregarClickFuera():visible=false"
      class="material-icons">{{vsIcon}}</i>
    </div>

    <div
    v-else
    @click="setVisible($event)"
    @mouseenter="setVisible($event)"
    @mouseleave="vsTriggerClick?agregarClickFuera():visible=false"
     class="btn-vs-drop-down">
      {{vsTitle}}<i  class="material-icons">{{vsIcon}}</i>
      <!--  -->
    </div>

    <!-- @mouseleave="visible=false" -->
    <transition name="dropdown">
    <div @mouseenter="visible=true" @mouseleave="vsTriggerClick?agregarClickFuera():visible=false" ref="ulDrop" v-show="visible" class="con-drop-ul">
      <ul
      :style="{
        'background':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255, 255, 255)',
        'color':colorx,
        }"
      class="drop-ul">
        <slot>
        </slot>
      </ul>
    </div>
  </transition>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-dropdown',
  props:{
    vsTitle:{
      type:String,
      default:'',
    },
    vsColorButton:{
      type:String,
      default:null,
    },
    vsTriggerClick:{
      type:Boolean,
      default:false,
    },
    vsMargin:{
      type:String,
      default:'0px',
    },
    vsDisabled:{
      type:Boolean,
      default:false,
    },
    vsColor:{
      type:String,
      default:'rgb(255, 255, 255)'
    },
    vsColorRow:{
      type:String,
      default:null,
    },
    vsIcon:{
      type:String,
      default:'keyboard_arrow_down',
    }

  },
  data(){
    return {
      visible:false,
      conSlotButton:false,
    }
  },
  computed:{

    colorx(){
      if(this.vsColor){
        console.log("contras=============>",color.contrastColor(this.vsColor));
        if(color.contrastColor(this.vsColor)){
          return 'rgba(0, 0, 0,.8)'
        } else {
          return 'rgba(255, 255, 255,.8)'
        }
      }
    }
  },
  methods:{
    setVisible(evt){
      if(evt.type=='mouseenter'&&this.vsTriggerClick){
        return
      }
        let cords = evt.target.getBoundingClientRect()
        let elx = this.$refs.ulDrop
        // console.log();
        elx.style.left = (cords.left + evt.target.clientWidth)+'px'
        // console.log(elx.style.right);
        elx.style.top = (cords.top + evt.target.clientHeight)+'px'
        document.body.insertBefore(elx, document.body.firstChild)
        this.visible=!this.visible
        setTimeout(function () {
          window.addEventListener('click',this.cerrar)
        }, 10);
        window.addEventListener('mousewheel',this.cerrar)
        window.addEventListener('touchmove',this.cerrar)

    },
    agregarClickFuera(){
      window.addEventListener('click',this.clickFuera)
    },
    clickFuera(e){
      console.log(e);
      if(e.target.closest('.con-drop-ul')==null){
        this.visible = false
        this.removeEventListenerx()
      }
    },
    cerrar(e){
      if(e.target.closest('.con-drop-ul')==null){
        this.visible = false
        this.removeEventListenerx()
      }
    },
    removeEventListenerx(){
      window.removeEventListener('click',this.clickFuera)
      window.removeEventListener('click',this.cerrar)
      window.removeEventListener('mousewheel',this.cerrar)
      window.removeEventListener('touchmove',this.cerrar)
    }
  },
  beforeDestroy(){
    this.visible = false
    let ulx = this.$refs.ulDrop
    ulx.remove();
  },
  mounted(){
    if(this.$slots.hasOwnProperty('button')){
      this.conSlotButton = true
    }
    console.log();
  }
}
</script>

<style lang="css" scoped>
.vsDisabled {
  pointer-events: none;
  opacity: .4;
  user-select: none;
}
.con-slot i {
  background: rgb(7, 113, 250);
  border-radius: 0px 5px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-left: 1px solid rgba(255, 255, 255,.2);
  padding-left: 5px;
  padding-right: 5px;
  font-size: 18px;
  cursor: pointer;
}
.con-slot {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.con-slot button {
  margin: 0px !important;
  border-radius: 5px 0px 0px 5px;
}
  .btn-vs-drop-down {
    padding: 10px;
    border-radius: 5px;
    /* background: rgb(179, 179, 179); */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.7);
  }
  .btn-vs-drop-down i {
    position: relative;
    font-size:19px;
    display: block;
    transition: all .2s ease;
    padding: 4px;
  }
  .con-drop-ul {
    width: auto;
    /* min-width: 70px; */
    z-index: 20000;
    position: fixed;
    transform: translate(-100%);
    display: block;
    transition: all .3s ease;

  }
  .con-drop-ul >>> a {
    color: inherit !important;
  }
  .con-drop-ul a {
    color: inherit !important;
  }
  .drop-ul {
    margin-top: 5px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 5px;
    padding-top: 0px;
    width: auto;
    max-height: 350px;
    overflow: auto;
    overflow-x: hidden;
  }
  .vs-visible .btn-vs-drop-down i{
    transform: rotate(-180deg);
  }

  .dropdown-enter-active .drop-ul, .dropdown-leave-active .drop-ul{
    transition: all .250s;
  }
  .dropdown-enter .drop-ul, .dropdown-leave-to .drop-ul /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate(0px,-15px);
  }
</style>
