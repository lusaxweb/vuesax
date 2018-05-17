<template lang="html">
    <button
    class="vs-btn"
    ref="btnvuesax"
    @mouseenter="hoverx=true,$emit('mouseenter')"
    @mouseleave="hoverx=false,$emit('mouseleave')"
    :style="{
      'width':vsWidth,
      'color':vsColorText?/[#()]/.test(vsColorText)?vsColorText:`rgb(var(--${vsColorText}))`:'',
      'border-radius':vsRadius,
      'background':backgroundx,
      }"
    @click="$emit('click',$event)"
    @blur="btnBlur($event)"
    type="button"
    :class="[vsType?clasex:'vs-button-primary-filled',{'filled':vsType?vsType.search('filled')!=-1:false,'border':vsType?vsType.search('border')!=-1:false,'vs-button-icon':vsIcon}]"
    name="button">
      <span v-if="vsHtml" v-html="vsHtml" :style="{
        'color':vsColorText?/[#()]/.test(vsColorText)?vsColorText:`rgb(var(--${vsColorText}))`:'',
        'padding':vsPadding}" class="text">
      </span>
      <span v-else

      :style="{
        'color':vsColorText?/[#()]/.test(vsColorText)?vsColorText:`rgb(var(--${vsColorText}))`:'',
        'padding':vsPadding}" class="text">
        <span v-if="vsIcon" :class="{'material-icons':vsIcon,'icon-btn':$slots.default}">{{vsIcon}}</span>
        <slot>
        </slot>
      </span>
      <div ref="lineax" class="lineax">

      </div>
    </button>

</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-button',
  props:{
    vsWidth:{
      type:String,
      default:'auto'
    },
    vsHtml:{
      type:String,
      default:null
    },
    vsType:{
      type:String,
      default:'primary-filled'
    },
    vsColor:{
      type:String,
      default:'',
    },
    vsRadius:{
      type:String,
      default:'',
    },
    vsPadding:{
      type:String,
      default:'',
    },
    vsColorText:{
      type:String,
      default:'',
    },
    vsIcon:{
      type:String,
      default:null
    }
  },
  data(){
    return {
      hoverx:false,
      clasex:`vs-button-${this.vsType}`,
    }
  },
  computed:{
    backgroundx(){
      if(/-border/.test(this.vsType)||/-flat/.test(this.vsType)||/-line-down/.test(this.vsType)||/-gradient/.test(this.vsType)){
        if(/-border/.test(this.vsType)){

        }

    } else {
      if(this.vsColor){
        if(/[#()]/.test(this.vsColor)){
          return this.vsColor
        } else {
          return `rgb(var(--${this.vsColor}))`
        }
      }
    }
    }
    // 'box-shadow': hoverx?`0px 2px 15px 0px ${/[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))`}`:'',
  },
  updated(){
    this.vsColorx()
  },
  mounted(){
    let _this = this
    let btn = this.$refs.btnvuesax
    let colorx = null
    this.vsColorx()
    // if(){
    //
    // }
    // btn.style.boxShadow = this.hoverx?`0px 2px 15px 0px ${/[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))`}`:''


    let el = this.$el
    el.addEventListener('click', function(event){
      console.log(event);
      let x
      let y
      // if(event.target.className == 'text'){
        x = event.offsetX
        y = event.offsetY
      // } else {
      //   console.log(event.target.closest('.text').offsetX);
      //   x = event.target.closest('.text').offsetX
      //   y = event.target.closest('.text').offsetY
      // }
      let elSpan = document.createElement("span");
      elSpan.className = 'relleno'
      el.appendChild(elSpan)

      let spanx = this.querySelector('.relleno')

      //agregar color personalizado

      if(_this.vsColor){
        if (/-flat/.test(_this.vsType) || /-border/.test(_this.vsType)) {
          // btn.style.border = '1px solid '+this.vsColor
          console.log("click dentro");
          spanx.style.background = _this.vsColor

        }
      }
      let time = 0.5
      if (event.target.closest('.vs-btn').clientWidth>100) {
        let s = event.target.closest('.vs-btn').clientWidth + 60
        time = event.target.closest('.vs-btn').clientWidth/s
      } else if (this.classList.contains('filled')) {
        let s = event.target.closest('.vs-btn').clientWidth
        time = event.target.closest('.vs-btn').clientWidth/s
      }
        spanx.style.transition = 'width '+time+'s ease,height '+time+'s ease,opacity '+time/1.5+'s ease'
        spanx.style.left = x+'px';
        spanx.style.top = y+'px';
        spanx.style.width = event.target.closest('.vs-btn').clientWidth*3+'px';
        spanx.style.height = event.target.closest('.vs-btn').clientWidth*3+'px';
        spanx.style.opacity = '1';
        this.classList.add('activo')
      if(this.classList.contains('filled')){
        setTimeout( ()=> {
          spanx.style.left = x+'px';
          spanx.style.top = y+'px';
          spanx.style.width = '0px';
          spanx.style.height = '0px';
          spanx.remove()
        }, time*1000);
      }
    })
  },
  methods:{
    vsColorx(){
      let _this = this
      let btn = this.$refs.btnvuesax
      let colorx = function(opacity){
        var rgb = _this.vsColor.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
        // console.log(rgb);
        return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
      }
      if(this.vsColor){

      if(/[#()]/.test(this.vsColor)){
        if(/#/.test(this.vsColor)){

          let c = color.hexToRgb(this.vsColor)
          colorx = function(opacity){
            return `rgba(${c.r},${c.g},${c.b},${opacity})`;
          }
          // console.log("paso coloe");

        }
      }

      if(/-border/.test(this.vsType)){
        btn.style.border = '1px solid '+this.vsColor
        btn.style.color = this.vsColor
        console.log("entro");
      } else if (/-flat/.test(this.vsType)) {
        btn.style.color = this.vsColor
        btn.addEventListener('mouseover',()=>{
              btn.style.background = colorx(.1)
        }),
        btn.addEventListener('mouseout',()=>{
          btn.style.background = 'transparent';
        })
      } else if (/-filled/.test(this.vsType)) {
        btn.style.boxShadow = `0px 9px 28px -9px ${colorx(1)}`
        btn.addEventListener('mouseover',()=>{
          btn.style.boxShadow = `0px 7px 0px -7px ${colorx(1)}`
        }),
        btn.addEventListener('mouseout',()=>{
          // btn.style.boxShadow = `0px 9px 28px -9px ${'rgba(255, 255, 255, 0)'}`
          btn.style.boxShadow = `0px 9px 28px -9px ${colorx(1)}`
        })
      } else if (/-line-down/.test(this.vsType)) {
        btn.querySelector('.text').style.color = this.vsColor
        btn.querySelector('.lineax').style.background = this.vsColor
        btn.style.borderBottom = `2px solid ${colorx(.2)}`
      } else if (/-gradient/.test(this.vsType)) {
        let color1 = this.vsColor.split('/')[0]
        let color2 = this.vsColor.split('/')[1]
        console.log(color1);
        console.log(color2);
        btn.style.background = `linear-gradient(30deg, ${color1} 0%, ${color2} 100%)`
      }
  }
},
    btnBlur(evt){
      if(!evt.target.classList.contains('filled')){
      evt.target.classList.remove('activo');
      let spanx = evt.target.querySelector('.relleno')
      spanx.style.opacity = '0';
      setTimeout(function () {
        spanx.style.width = '0px';
        spanx.style.height = '0px';
        spanx.remove()
      }, 200);
    }
    }
  }
}
</script>

<style lang="css">

 button {
    border: 1px solid rgba(255, 255, 255,0);
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    outline: none;
    background: rgb(238, 238, 238);
    color: rgba(0, 0, 0, 0.7);
    transition: all .2s ease;
    overflow: hidden;
    position: relative;
    backface-visibility: hidden;
    margin: 5px;
  }
  button:active {
    opacity: .7;
  }
  button:disabled {
    opacity: .4;
    pointer-events: none;
  }
   button:disabled .text {
    /* opacity: .8; */
    pointer-events: none;
  }
   button:disabled span::selection{
    background: transparent !important;
  }
  .relleno {
    width: 0px;
    height: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    opacity: 0;
    overflow: hidden;
    backface-visibility:hidden;
  }
  .vs-button-primary-border .relleno{
    background: rgb(var(--primary));
  }
  .vs-button-primary-border {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(var(--primary));
    color: rgb(var(--primary));
  }
  button[class*='-border']:hover {
    box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.150);
  }
  button[class*='-border'] {
    box-shadow: 0px 0px 0px -4px rgba(0, 0, 0, 0.0);
  }
  .vs-button-success-border {
    background:  rgb(255, 255, 255);
    border: 1px solid rgb(var(--success));
    color: rgb(var(--success));
  }
  .vs-button-success-border .relleno{
    background: rgb(var(--success));
  }
  .vs-button-danger-border {
    background:  rgb(255, 255, 255);
    border: 1px solid rgb(var(--danger));
    color: rgb(var(--danger));
  }
  .vs-button-danger-border .relleno{
    background: rgb(var(--danger));
  }
  .vs-button-dark-border {
    background:  rgb(255, 255, 255);
    border: 1px solid rgb(var(--dark));
    color: rgb(var(--dark));
  }
  .vs-button-dark-border .relleno{
    background: rgb(var(--dark));
  }
  .vs-button-warning-border {
    background:  rgb(255, 255, 255);
    border: 1px solid rgb(var(--warning));
    color: rgb(var(--warning));
  }
  .vs-button-warning-border .relleno{
    background: rgb(var(--warning));
  }
  .vs-button-default {
    background:  rgb(255, 255, 255);
    border: 1px solid rgb(var(--default));
    color: rgb(var(--default));
  }
  .vs-button-default .relleno{
    background: rgb(var(--default));
  }

  /* //filled */
  .vs-button-primary-filled {
    background: rgb(var(--primary));
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(255, 255, 255);
    box-shadow: 0px 9px 28px -9px rgb(var(--primary));

  }
  .vs-button-primary-filled:hover {
    box-shadow: 0px 7px 0px -7px rgb(var(--primary));
    /* box-shadow: 0px 0px 0px 0px rgba(var(--primary),.0); */
  }
  .vs-button-primary-filled .relleno{
    box-shadow:inset 0px 0px 50px 0px rgba(255, 255, 255,.5);
  }

  .vs-button-success-filled {
    background: rgb(var(--success));
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(255, 255, 255);
    /* box-shadow: 0px 0px 0px 0px rgba(var(--success),.0); */
    box-shadow: 0px 9px 28px -9px rgb(var(--success));
  }
  .vs-button-success-filled:hover {
      /* box-shadow: 0px 2px 15px 0px rgb(var(--success)); */
      box-shadow: 0px 7px 0px -7px rgb(var(--success));
  }
  .vs-button-success-filled .relleno{
    box-shadow:inset 0px 0px 50px 0px rgba(255, 255, 255,.5);
  }


  .vs-button-danger-filled {
    background: rgb(var(--danger));
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(255, 255, 255);
    /* box-shadow: 0px 0px 0px 0px rgba(var(--danger),.0); */
    box-shadow: 0px 9px 28px -9px rgb(var(--danger));
  }
  .vs-button-danger-filled:hover {
      /* box-shadow: 0px 2px 15px 0px rgb(var(--danger)); */
      box-shadow: 0px 7px 0px -7px rgb(var(--danger));
  }
  .vs-button-danger-filled .relleno{
    box-shadow:inset 0px 0px 50px 0px rgba(255, 255, 255,.5);
  }


  .vs-button-warning-filled {
    background: rgb(var(--warning));
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(255, 255, 255);
    /* box-shadow: 0px 0px 0px 0px rgba(var(--warning),.0); */
    box-shadow: 0px 9px 28px -9px rgb(var(--warning));
  }
  .vs-button-warning-filled:hover {
      /* box-shadow: 0px 2px 15px 0px rgb(var(--warning)); */
      box-shadow: 0px 7px 0px -7px rgb(var(--warning));
  }
  .vs-button-warning-filled .relleno{
    box-shadow:inset 0px 0px 50px 0px rgba(255, 255, 255,.5);
  }


  .vs-button-dark-filled {
    background: rgb(var(--dark));
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(255, 255, 255);
    /* box-shadow: 0px 0px 0px 0px rgba(var(--dark),.0); */
    box-shadow: 0px 9px 28px -9px rgb(var(--dark));
  }
  .vs-button-dark-filled:hover {
      /* box-shadow: 0px 2px 15px 0px rgb(var(--dark)); */
      box-shadow: 0px 7px 0px -7px rgb(var(--dark));
  }
  .vs-button-dark-filled .relleno{
    box-shadow:inset 0px 0px 50px 0px rgba(255, 255, 255,.3);
  }


  .text {
    position: relative;
    z-index: 200;
    transition: all .2s ease;
    padding: 12px;
    padding-left: 15px;
    padding-right: 15px;
    display: block;
    border-radius: 5px;
  }
  .activo .text {
    color: rgb(255, 255, 255);
  }


  /* flat */

  .vs-button-primary-flat {
    background: transparent;
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(var(--primary));
  }
  .vs-button-primary-flat:hover {
      background: rgba(var(--primary),.1);
  }
  .vs-button-primary-flat .relleno{
    background: rgb(var(--primary));
  }

  .vs-button-success-flat {
    background: transparent;
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(var(--success));
  }
  .vs-button-success-flat:hover {
      background: rgba(var(--success),.1);
  }
  .vs-button-success-flat .relleno{
    background: rgb(var(--success));
  }

  .vs-button-danger-flat {
    background: transparent;
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(var(--danger));
  }
  .vs-button-danger-flat:hover {
      background: rgba(var(--danger),.1);
  }
  .vs-button-danger-flat .relleno{
    background: rgb(var(--danger));
  }


  .vs-button-warning-flat {
    background: transparent;
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(var(--warning));
  }
  .vs-button-warning-flat:hover {
      background: rgba(var(--warning),.1);
  }
  .vs-button-warning-flat .relleno{
    background: rgb(var(--warning));
  }


  .vs-button-dark-flat {
    background: transparent;
    border: 1px solid rgba(255, 255, 255,0);
    color: rgb(var(--dark));
  }
  .vs-button-dark-flat:hover {
      background: rgba(var(--dark),.1);
  }
  .vs-button-dark-flat .relleno{
    background: rgb(var(--dark));
  }


  /* border down */


  button[class*='-line-down'] .lineax {
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0%;
    height: 2px;
    content: '';
    z-index: 100;
    transition: all .2s ease;
    transform: translate(-50%);
  }
  button[class*='-line-down']:hover .lineax {
      width: 100%;
  }
  button[class*='-line-down']:hover .text {
      transform: translate(0,2px);
  }
  button[class*='-line-down'] .relleno{
    background: transparent;
    display: none;
  }
  button[class*='-line-down'] {
    box-sizing: border-box;
    background: transparent;
    border-radius: 0px;
    overflow: visible;
  }
  .vs-button-primary-line-down {
    border-bottom: 2px solid rgba(var(--primary),.1);
    color: rgb(var(--primary));
  }
  .vs-button-primary-line-down .lineax {
    background: rgb(var(--primary));
  }
  .vs-button-primary-line-down .text {
    color: rgb(var(--primary));
  }

  .vs-button-success-line-down {
    border-bottom: 2px solid rgba(var(--success),.1);
    color: rgb(var(--success));
  }
  .vs-button-success-line-down .lineax {
    background: rgb(var(--success));
  }
  .vs-button-success-line-down .text {
    color: rgb(var(--success));
  }


  .vs-button-danger-line-down {
    border-bottom: 2px solid rgba(var(--danger),.1);
    color: rgb(var(--danger));
  }
  .vs-button-danger-line-down .lineax {
    background: rgb(var(--danger));
  }
  .vs-button-danger-line-down .text {
    color: rgb(var(--danger));
  }


  .vs-button-warning-line-down {
    border-bottom: 2px solid rgba(var(--warning),.1);
    color: rgb(var(--warning));
  }
  .vs-button-warning-line-down .lineax {
    background: rgb(var(--warning));
  }
  .vs-button-warning-line-down .text {
    color: rgb(var(--warning)) ;
  }

  .vs-button-dark-line-down {
    border-bottom: 2px solid rgba(var(--dark),.1);
    color: rgb(var(--dark));
  }
  .vs-button-dark-line-down .lineax {
    background: rgb(var(--dark));
  }
  .vs-button-dark-line-down .text {
    color: rgb(var(--dark));
  }

  /* gradient */
  button[class*='-gradient'] {
    overflow: visible;
  }
  button[class*='-gradient']:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0,.6);
    transform:translate(0,-4px);
  }
  button[class*='-gradient'] .relleno{
    background: transparent;
    display: none;
  }
  button[class*='-gradient']{
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .vs-button-primary-gradient {
    background: linear-gradient(30deg, rgba(var(--primary),1) 0%, rgb(96, 31, 255) 100%);
  }
  .vs-button-primary-gradient .text {
    color: rgb(255, 255, 255);
  }


  .vs-button-success-gradient {
    background: linear-gradient(30deg, rgb(138, 228, 141) 0%, rgb(22, 190, 119) 100%);
  }
  .vs-button-success-gradient .text {
    color: rgb(255, 255, 255);
  }

  .vs-button-danger-gradient {
    background: linear-gradient(30deg, rgba(var(--danger),1) 0%, rgb(213, 10, 101) 100%);
  }
  .vs-button-danger-gradient .text {
    color: rgb(255, 255, 255);
  }


  .vs-button-warning-gradient {
    background: linear-gradient(30deg, rgba(var(--warning),1) 0%, rgb(255, 109, 3) 100%);
  }
  .vs-button-warning-gradient .text {
    color: rgb(255, 255, 255);
  }

  .vs-button-dark-gradient {
    background: linear-gradient(30deg, rgba(var(--dark),1) 0%, rgb(70, 49, 97) 100%);
  }
  .vs-button-dark-gradient .text {
    color: rgb(255, 255, 255);
  }

  button[class*='-relief']:active span {
    padding-bottom: 16px !important;
  }
  button[class*='-relief'] .text {
      color: rgb(255, 255, 255);
  }


  .vs-button-primary-relief {
    background: rgb(var(--primary));
    border-bottom: 4px solid rgba(0, 0, 0, 0.3);
  }
  .vs-button-primary-relief:active {
    opacity: 1;
    transform: translate(0,5px);
    border-bottom: 0px solid rgba(0, 0, 0, 0.3);
  }

  .vs-button-success-relief {
    background: rgb(var(--success));
    border-bottom: 4px solid rgba(0, 0, 0, 0.3);
  }
  .vs-button-success-relief:active {
    opacity: 1;
    transform: translate(0,5px);
    border-bottom: 0px solid rgba(0, 0, 0, 0.3);
  }

  .vs-button-danger-relief {
    background: rgb(var(--danger));
    border-bottom: 4px solid rgb(198, 56, 68);
  }
  .vs-button-danger-relief:active {
    opacity: 1;
    transform: translate(0,5px);
    border-bottom: 0px solid rgb(198, 56, 68);
  }

  .vs-button-warning-relief {
    background: rgb(var(--warning));
    border-bottom: 4px solid rgb(207, 152, 7);
  }
  .vs-button-warning-relief:active {
    opacity: 1;
    transform: translate(0,5px);
    border-bottom: 0px solid rgb(207, 152, 7);
  }

  .vs-button-dark-relief {
    background: rgb(70, 70, 70);
    border-bottom: 4px solid rgb(40, 40, 40);
  }
  .vs-button-dark-relief:active {
    opacity: 1;
    transform: translate(0,5px);
    border-bottom: 0px solid rgb(40, 40, 40);
  }

  .vs-button-icon {
    /* border-radius: 50%; */
    padding: 0;
  }

  .vs-button-icon .text {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-btn {
    margin-right: 4px;
  }
</style>
