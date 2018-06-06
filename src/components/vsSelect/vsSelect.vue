<template lang="html">
  <div :class="{'activo-select':visible, 'disabledx-select':disabled, 'vsAutocomplete':vsAutocomplete || vsMultiple}" class="vs-component con-select">
    <input
      ref="inputx"
      @blur="blurx"
      v-bind="$attrs"
      v-on="$listeners"
      @click.stop
      :disabled="disabled"
      @keydown="letters($event)"
      @keydown.down.prevent="navigateOptions('next')"
      @keydown.up.prevent="navigateOptions('prev')"
      @keydown.enter.prevent="optionClick()"
      @keydown.esc.stop.prevent="visible = false"
      v-model="valuex"
      class="inputx"
      @focus="focusx"
      type="text"
      :readonly="vsAutocomplete?null:'readonly'" name="" value="">
      <i class="material-icons icon-select">
        keyboard_arrow_down
      </i>
      <transition name="fade-select">
        <vs-select-options
          :vs-max-selected="vsMaxSelected"
          v-model="value"
          :vsMultiple="vsMultiple"
          :vsAutocomplete="vsAutocomplete"
          :valuex="valuex"
          :vs-clave-value="vsClaveValue"
          ref="options"
          @blur="visible = false"
          @focus="vsMultiple?visible = true:visible = false"
          :vs-clave-text="vsClaveText"
          :style="{'top':`${topx}px`,'left':`${leftx}px`, 'width':`${widthx}px`}"
          v-show="visible"
          :active-index="theseIndex"
          @option-click="optionClick"
          :options="vsAutocomplete?optionsFilter:options"/>
      </transition>
  </div>
</template>

<script>
import vsSelectOptions from './vsSelectOptions'
export default {
  name:'vs-select',
  components:{
    vsSelectOptions
  },
  props:{
    vsMaxSelected:{
      default:null,
      type:[Number,String]
    },
    vsMultiple:{
      default:false,
      type:Boolean
    },
    vsAutocomplete:{
      default:false,
      type:Boolean
    },
    vsClaveValue:{
      default:null,
      type:String,
    },
    vsClaveText:{
      default:null,
      type:String,
    },
    disabled:{
      type:[Boolean,String],
      default:false,
    },
    value:{},
    options: {
      type: [Array,Object],
      default: () => []
    },
  },
  data:()=>({
    visible:false,
    valuex:'',
    theseIndex:0,
    topx:0,
    leftx:0,
    widthx:200,
    autocomplete:'',
    valueSelected:'',
    arrows:false
  }),
  mounted(){
    this.getValue()
  },
  computed:{
    optionsFilter(){
      let options = JSON.parse(JSON.stringify(this.options))

      if(this.valuex != '' && this.vsAutocomplete && this.arrows && this.options){
        options = options.filter((item,index)=>{
          return item.text.toUpperCase().indexOf(this.valuex.toUpperCase()) != -1
        })
      }
      return options || []
    }
  },
  methods:{
    letters(event){
      var letters = /[A-Za-z0-9]/;
      if(event.key != 'ArrowDown' && event.key != 'ArrowUp'&& event.key != 'Enter'){
      this.changePosition()
      this.arrows = true
    } else {
      this.arrows = false

    }
    },
    focusx(event){
      this.visible = true
      this.$emit('focus', event)
      this.changePosition()
      if(this.vsAutocomplete){
        this.$refs.inputx.select()
      }
    },
    changePosition(){
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      console.dir();
      if(this.$refs.inputx.getBoundingClientRect().top + 300 >= window.innerHeight) {
        console.dir(this.$refs.options.$el);
        setTimeout( ()=> {
          if(this.vsAutocomplete || this.vsMultiple){
            this.topx = (this.$refs.inputx.getBoundingClientRect().top - this.$refs.options.$el.clientHeight) + scrollTopx
          } else {
            this.topx = (this.$refs.inputx.getBoundingClientRect().top - this.$refs.options.$el.clientHeight + this.$refs.inputx.clientHeight) + scrollTopx
          }
        }, 1);

      } else {
        this.topx = this.vsAutocomplete || this.vsMultiple?(this.$refs.inputx.getBoundingClientRect().top + this.$refs.inputx.clientHeight) + scrollTopx:this.$refs.inputx.getBoundingClientRect().top + scrollTopx
      }


      setTimeout( () => {
        this.leftx = this.$refs.inputx.getBoundingClientRect().left
        this.widthx = this.$refs.inputx.offsetWidth
      }, 1);
    },
    blurx(){
      // setTimeout((event) => {
          this.$emit('blur', event)
          this.visible = false
          setTimeout(()=>{
            this.autocomplete = false
          },100)
      // }, 100);
    },
    navigateOptions(orientation){
      if(orientation == 'next'){
        if(this.theseIndex == this.options.length-1) return
        this.theseIndex ++
      } else {
        if(this.theseIndex == 0) return
        this.theseIndex --
      }
      this.valuex = this.options[this.theseIndex].text
      this.valueSelected = this.options[this.theseIndex].value

    },
    optionClick(value){
      // multiple

      if(this.vsMultiple){
        let [__value] = this.options.filter((item,index)=>{
          if(this.vsClaveValue?item[this.vsClaveValue]:item.value == value){
            return true
          }
        })
        let _index = 0
        let [oldValue] = JSON.parse(JSON.stringify(this.value)).filter((item,index)=>{
          if(this.vsClaveValue?item[this.vsClaveValue]:item.value == value){
            _index = index
            return true
          }
        })
        if(oldValue){
          this.value.splice(_index,1)
        } else {
          this.value.push(__value)
        }
        this.visible = true
        this.getValue()

      } else {


      let _value = value
      if(!value && value!=0){
        _value = this.valueSelected
      }
      let index = 0

      let optionx = this.options.forEach((item,index_item)=>{
        if(this.vsClaveValue?item[this.vsClaveValue]:item.value == _value) {
          index = index_item
          this.valueSelected = this.vsClaveValue?selected[this.vsClaveValue]:item.value
        }
      })

      let selected = this.options[index!='no-index'?index:this.theseIndex]
      this.$emit('input',this.vsClaveValue?selected[this.vsClaveValue]:selected.value);
      this.$emit('change',this.vsClaveValue?selected[this.vsClaveValue]:selected.value);
      this.valuex = this.vsClaveText?selected[this.vsClaveText]:selected.text
      this.theseIndex = index!='no-index'?index:this.theseIndex
      this.visible = false
      this.$refs.inputx.blur()

      }
      this.changePosition()
    },
    getValue(){
      let _index = 0
      let optionsx = JSON.parse(JSON.stringify(this.options))
      let [_value] = optionsx.filter((item,index)=>{
        if(this.vsClaveValue?item[this.vsClaveValue]:item.value == this.value){
          _index = index
        }
        return this.vsClaveValue?item[this.vsClaveValue]:item.value == this.value
      })
      this.theseIndex = _index

      if(_value){
        this.valuex = this.vsClaveText?_value[this.vsClaveText]: _value.text
      } else if (this.vsMultiple) {
        let __value = this.options.filter((item,index)=>{
          let returnx = false
          this.value.forEach((item_value)=>{
            if(this.vsClaveValue?item[this.vsClaveValue]:item.value == item_value.value){
              returnx = true
            }
          })
          return returnx
        })
        let textValue = ''
        __value.forEach((item,index)=>{
          if(index==0){
            textValue += `${item.text}`
          } else {
            textValue += `, ${item.text}`
          }
        })
        this.valuex = textValue
      }
    }
  }
}
</script>

<style lang="stylus">

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
.activo-select:not(.vsAutocomplete)
  .inputx
    opacity: 0;
    transform: scale(1.05);
  .icon-select
    transform: rotate(180deg)

.vs-component.con-select
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  &.disabledx-select
    background: rgb(235, 235, 235)
  .inputx
    width: 100%;
    padding: 8px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 6px;
    padding-right: 20px;
    transition: all .2s ease;
    z-index: 100;
    background: transparent
  .icon-select
    position: absolute;
    right: 6px;
    font-size: 16px;
    transition: all .2s ease;
    z-index: 10;


</style>
