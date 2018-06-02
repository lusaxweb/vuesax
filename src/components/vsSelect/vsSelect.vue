<template lang="html">
  <div :class="{'activo-select':visible, 'disabledx-select':disabled, 'vsAutocomplete':vsAutocomplete}" class="vs-component con-select">
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
          :vsAutocomplete="vsAutocomplete"
          :valuex="valuex"
          :vs-clave-value="vsClaveValue"
          ref="options"
          @blur="visible = false"
          @focus="visible = false"
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
      if(this.valuex != '' && this.vsAutocomplete && this.arrows){
        options = options.filter((item,index)=>{
          return item.text.toUpperCase().indexOf(this.valuex.toUpperCase()) != -1
        })
      }
      return options || []
    }
  },
  methods:{
    letters(event){
      // console.log(event);
      // this.theseIndex = 0
      var letters = /[A-Za-z0-9]/;
      // // var arrows = /ArrowDown/
      // // let options = JSON.parse(JSON.stringify(this.options))
      // //
      // // options = options.map((item)=>{
      // //   return item.keyx = item.text[0]
      // // })
      // if(!letters.test(event.key)){
      //   return
      // }
      // console.log(event.key);
      // console.log(letters.test(event.key[0]));
      if(event.key != 'ArrowDown' && event.key != 'ArrowUp'&& event.key != 'Enter'){
      //   this.autocomplete = false
      // console.log("hola asdasd");
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
          if(this.vsAutocomplete){
            this.topx = (this.$refs.inputx.getBoundingClientRect().top - this.$refs.options.$el.clientHeight) + scrollTopx

          } else {
            this.topx = (this.$refs.inputx.getBoundingClientRect().top - this.$refs.options.$el.clientHeight + this.$refs.inputx.clientHeight) + scrollTopx

          }
          this.leftx = this.$refs.inputx.getBoundingClientRect().left
        }, 1);

      } else {
        this.topx = this.vsAutocomplete?(this.$refs.inputx.getBoundingClientRect().top + this.$refs.inputx.clientHeight) + scrollTopx:this.$refs.inputx.getBoundingClientRect().top + scrollTopx
        this.leftx = this.$refs.inputx.getBoundingClientRect().left
        this.widthx = this.$refs.inputx.offsetWidth
      }

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

      // console.log(">>>>valuex",this.valuex);
    },
    optionClick(value){
      // console.log("value>>>>>>>",value);
      let _value = value
      if(!value && value!=0){
        _value = this.valueSelected
      }
      let index = 0
      // console.log(_value);
      // console.log(this.valueSelected);
      let optionx = this.options.forEach((item,index_item)=>{
        if(this.vsClaveValue?item[this.vsClaveValue]:item.value == _value) {
          index = index_item
          this.valueSelected = this.vsClaveValue?selected[this.vsClaveValue]:item.value
        }
      })
      // console.log(optionx);
      let selected = this.options[index!='no-index'?index:this.theseIndex]
      this.$emit('input',this.vsClaveValue?selected[this.vsClaveValue]:selected.value);
      this.$emit('change',this.vsClaveValue?selected[this.vsClaveValue]:selected.value);
      this.valuex = this.vsClaveText?selected[this.vsClaveText]:selected.text
      this.theseIndex = index!='no-index'?index:this.theseIndex
      this.visible = false
      this.$refs.inputx.blur()
    },
    getValue(){
      let _index = 0
      let optionsx = JSON.parse(JSON.stringify(this.options))
      let [_value] = optionsx.filter((item,index)=>{
        if(item.value == this.value){
          _index = index
        }
        return item.value == this.value
      })
      this.theseIndex = _index
      this.valuex = this.vsClaveText?_value[this.vsClaveText]:_value.text
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
