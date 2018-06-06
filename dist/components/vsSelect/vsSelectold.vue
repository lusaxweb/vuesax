<template lang="html">
  <div
    @click="clickSelect"
    :class="{'abierto':visible,'disabledx':disabled}"
    ref="vsSelect"
    class="vs-select"
  >
    <label for="" v-text="label"></label>
    <!-- @blur="visible=false" -->
    <button
      @click="clickInputSelect"
      @focus="visible=true"
      :title="seleccionado"
      type="button"
      class="con-input-select"
    >
      <span v-text="seleccionado"></span>
      <i class="i-icon material-icons">expand_more</i>
    </button>
    <transition name="fade-select">
      <div
        v-show="visible"
        :class="{'visiblex':visible}"
        :style="{'top':topx+'px','left':leftx+'px','width':widthx+'px'}"
        ref="conUlSelect"
        class="con-ul-select"
      >
        <ul ref="ul" :class="{'scrollx':scroll}">
          <li
            v-for="(option, index) in options"
            :key="index"
            :style="{'transition':'transform .2s ease '+index/30+'s , background .2s ease,opacity .2s ease '+index/30+'s'}"
          >
            <button
              @click="clickOption($event),seleccionadoIndex=index"
              @keyup.enter="clickOption($event),seleccionadoIndex=index"
              v-focus="seleccionadoIndex==index"
              @focus="visible=true"
              @blur="visible=false"
              :class="{'activo':seleccionadoIndex==index}"
              :data-value="option.value"
              type="button"
              name="button"
            >
            {{option.text}} {{seleccionadoIndex==index}}
          </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import '../../css/iconfont/material-icons.css'
export default {
  name:'vs-select',
  props: {
    label: {
      type: String,
      default: () => ''
    },
    options: {
      type: Array | Object,
      default: () => []
    },
    value: {
      type: [Number,String],
      require: true
    },
    disabled: {
      type: [Boolean,String],
      default: () => false
    }
  },
  data(){
    return {
      scroll:false,
      visible:false,
      topx:0,
      leftx:0,
      widthx:0,
      seleccionadoIndex:0,
    }
  },
  watch:{
    visible(){
      if(this.visible){
        document.addEventListener('keydown',this.arrows)

        setTimeout( ()=> {

            let selects = document.querySelectorAll('.con-ul-select')
            if(selects.length==1){
              if(document.querySelector('.con-ul-select').clientHeight>=300){
                this.scroll = true
              }
            } else {
              if(selects[1].clientHeight>=300){
                this.scroll = true
              }
            }

        }, 400);
        setTimeout( ()=> {
          var elx = this.$el.querySelector('.con-ul-select')
          var elx2 = document.querySelectorAll('.con-ul-select')
          var elxUl = document.querySelector('.con-ul-select ul');
          for (var i = 0; i < elx2.length; i++) {
            mousewheelx(elx2[i])
          }
          function mousewheelx(el){
          el.querySelector('.con-ul-select ul').scrollTop = el.querySelector('.con-ul-select ul .activo').offsetTop
          if(el.clientHeight>=300){
            el.addEventListener('mousewheel',function(e){
                    if(e.wheelDelta /120 > 0) {
                        if(el.querySelector('.con-ul-select ul').scrollTop==0){
                          el.querySelector('.con-ul-select ul').style.paddingTop = '25px'
                          setTimeout(function () {
                            el.querySelector('.con-ul-select ul').style.paddingTop = '0px'
                          }, 300);
                        }
                    }
                    else{
                      if((el.querySelector('.con-ul-select ul').scrollHeight - el.querySelector('.con-ul-select ul').scrollTop) === el.querySelector('.con-ul-select ul').clientHeight){
                        el.querySelector('.con-ul-select ul').style.paddingBottom = '30px'
                        setTimeout(function () {
                          el.querySelector('.con-ul-select ul').style.paddingBottom = '0px'
                        }, 300);
                      }
                    }
                });
          }

              if(elx){
                document.body.insertBefore(elx, document.body.firstChild)
                elx.scrollIntoView()
              }
              }
        }, 1);

      } else {
        this.scroll = false
        document.removeEventListener('keydown',this.arrows)
      }
    }
  },
  methods:{
    arrows(event){
      event.preventDefault()
      if(event.code == "ArrowDown"){
        if(this.options.length-1 == this.seleccionadoIndex){
          // this.seleccionadoIndex = 0
        } else {
          this.seleccionadoIndex ++
        }
      } else if (event.code == "ArrowUp") {
        if(this.seleccionadoIndex == 0){
          // this.seleccionadoIndex = this.options.length
        } else {
          this.seleccionadoIndex --
        }
      }
    },
    seleccionadoValue(){
      let indexx = 0
      let seleccionadox = this.options.forEach((item,index) => {
        if(item.value == this.value){
          indexx = index
        }
      })
      // return seleccionadox[0].value
      this.seleccionadoIndex = indexx
    },
    clickSelect(){
      if(!this.disabled){
        // this.$refs.inputHidden.focus()
      }
    },
    blurx(){
      this.visible=false
    },
    clickOption(evt){
      this.visible=false
      this.$emit('input',evt.target.dataset.value);
      this.$emit('change',evt.target.dataset.value);
    },
    clickOptionSelect(evt){
      this.$emit('input',evt.target.value);
      this.$emit('change',evt.target.value);
    },
    clickInputSelect(){
      this.topx = this.$refs.vsSelect.querySelector('.con-input-select').getBoundingClientRect().top
      this.leftx = this.$refs.vsSelect.querySelector('.con-input-select').getBoundingClientRect().left
      this.widthx = this.$refs.vsSelect.querySelector('.con-input-select').offsetWidth
    }
  },
  computed:{
    validaAncho(){
      if(window.innerWidth > 500){
        return true
      } else {
        return false
      }

    },
    seleccionado(){
      let seleccionadox = this.options.filter((item) => {
        return item.value == this.value
      })
      return seleccionadox[0].text
    },

  },
  mounted() {
    this.seleccionadoValue()
    function getParents(e) {
      var result = [];
      for (var p = e && e.parentElement; p; p = p.parentElement) {
        result.push(p);
      }
      return result;
    }
    window.addEventListener('mousewheel', (e) => {
      var parents = getParents(e.toElement);
      parents = parents.filter((item) => {
        return item.className.search('con-ul-select')!=-1
      })
      if(parents.length==0){
        // this.visible=false
      }
    })
    window.addEventListener('touchmove', (e) => {
      var parents = getParents(e.toElement);
      parents = parents.filter((item) => {
        return item.className.search('con-ul-select')!=-1
      })
      if(parents.length==0){
        // this.visible=false
      }
    })
},
}
</script>

<style lang="css" scoped>
.disabledx {
  pointer-events: none;
}
.disabledx .con-input-select {
  background: rgb(240, 240, 240);
  color: rgba(0, 0, 0, 0.4);
  box-shadow:inset 0px 0px 10px 0px rgba(0, 0, 0,.1);
}
.disabledx .con-input-select span::selection {
  background: transparent !important;
}
.disabledx .con-input-select i {
  color: rgba(0, 0, 0, 0.2) !important;
}
.disabledx label {
  color: rgba(0, 0, 0, 0.4) !important;
}
.con-ul-select ul::-webkit-scrollbar{
  width: 0px;
}
.con-ul-select ul::-webkit-scrollbar-thumb{
  background: rgba(230, 230, 230,0);
  border-radius: 5px;
}
.scrollx::-webkit-scrollbar{
  width: 5px !important;
}
.scrollx::-webkit-scrollbar-thumb{
  background: rgba(230, 230, 230,1) !important;
}
.fade-select-enter-active {
  transition: transform .2s, opacity .2s;
}
.fade-select-leave-active {
  transition: transform .150s, opacity .150s;
}
.fade-select-enter, .fade-select-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0,0px) scale(0.950) !important;
  box-shadow: 0px 10px 0px -5px rgba(0, 0, 0, 0);
}

  .input-hidden {
    width: 1px;
height: 1px;
margin: -1px;
padding: 0;
overflow: hidden;
position: absolute;
clip: rect(0 0 0 0);
border: 0;
  }
  .vs-select {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 8px;
    /* width: 100%; */
  }
  .vs-select label{
    width: 100%;
    color: rgba(0, 0, 0, 0.8);
    padding-left: 5px;
    transition: all .3s ease;
    font-size: 15px;
    padding-bottom: 4px;
  }
  .abierto label {
    transform: translate(0,-5px);
  }
  .con-input-select {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding-right: 25px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 100%;
    transition: all .2s ease;
    color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    text-align: left;
    background: rgb(255, 255, 255);
  }
  .con-input-select span{
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    display: block;
  }
  .abierto .con-input-select {
    border: 1px solid rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    transform: scale(1.050);
  }
  .con-ul-select {
      position: absolute;
      background: rgb(255, 255, 255);
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      z-index: 10000;
      backface-visibility: hidden;
      padding: 5px;
      transform: translate3d(0,0,0);
      max-height: 300px;
      overflow: hidden;

  }
  .visiblex  {
    border-radius: 5px !important;
  }
  .con-ul-select ul{

    /* overflow: auto; */
    /* padding-right: 5px; */
    /* overflow: auto; */
    transition: all .2s ease;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px !important;
    box-sizing: border-box;
  }
  .scrollx {
    padding-right: 5px;
  }
    .visiblex ul {
      overflow: auto !important;
      max-height:300px;
      height: 100%;
    }
  .con-ul-select li {
    backface-visibility: hidden;

    /* padding-bottom: 7px;
    padding-top: 6px; */
    cursor: pointer;
    margin-bottom: 4px;


    width: 100%;
    border-radius: 4px;
    transform: translate(0);
    opacity: 1;
    /* transition: all .3s ease; */

    color: rgba(0, 0, 0, 0.7);
  }
  /* .con-ul-select li button:focus {
    background: rgb(23, 59, 237) !important;
    border: 5px solid rgb(9, 83, 50) !important
  } */
  .con-ul-select li button {
    padding: 10px;
    width: 100%;
    padding-left: 5px;
    background: rgb(255, 255, 255);
    text-align: left;
    margin: 0px !important;
    border: 1px solid rgba(255, 255, 255,0);
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    outline: none;
    transition: all .2s ease;
    overflow: hidden;
    position: relative;
    /* backface-visibility: hidden; */
    margin: 5px;
  }
  .con-ul-select li:last-child {
    /* margin-bottom: 10px; */
  }
  .con-ul-select li:hover button {
    background: rgb(248, 248, 248);
  }

  .fade-enter li, .fade-leave-to li /* .fade-leave-active below version 2.1.8 */ {
    transform: translate(0,-15px) ;
    opacity: 0 ;
  }
  .activo {
    background: rgba(var(--primary),.1) !important;
    color: rgba(var(--primary),1) !important;
    /* opacity: 1 !important; */
    /* transform: translate(0,0) !important; */
  }
  .i-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0,-50%);
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.5);
    transition: all .2s ease;
    font-size: 18px;
  }
  .abierto .i-icon  {
    transform: translate(0,-50%) rotate(-180deg);
    opacity: 0;
  }
</style>
