<template lang="html">
  <li v-show="visible" class="vs-component">
    <button
      v-bind="$attrs"
      v-on="listeners"
      :style="styles"
      class="vs-select-item-btn"
      @keydown.backspace.prevent="backspace"
      @keydown.down.prevent="navigateOptions('next')"
      @keydown.up.prevent="navigateOptions('prev')"
      ref="item" @keydown.enter.prevent="clickOption()"
      :class="{
        'activex':$parent.vsMultiple?getValue.indexOf(vsValue) != -1:getValue == vsValue,
        'con-icon':$parent.vsMultiple
       }" type="button" name="button">
      <i v-if="$parent.vsMultiple" class="material-icons icon-item">
        check_circle
      </i>
      <span v-html="getText">

      </span>
      <!-- <slot/> -->
    </button>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  inheritAttrs:false,
  name:'vs-select-item',
  props:{
    vsValue:{
      default:null,
    },
    vsText:{
      default:null,
    }
  },
  data:()=>({
    hoverx:false,
    visible:true,
    getText:null,
    valueInputx:''
  }),
  created(){
    this.putValue()
    this.getText = this.vsText
  },
  updated(){
    this.putValue()
  },
  watch:{
    valueInputx(){
      if(this.visible){
        let valueInputx = this.valueInputx.split(',')
        if(valueInputx[valueInputx.length-1] == ''){
          return
        }
        console.log(valueInputx[valueInputx.length-1]);
        var re = new RegExp(valueInputx[valueInputx.length-1],"g");

        let text = this.vsText.replace(re,`<b>${this.valueInputx}</b>`)
        console.log(text);
        this.getText = text
      }
    }
  },
  computed:{
    isActive(){
      return this.$parent.vsMultiple?this.getValue.indexOf(this.vsValue) != -1:this.getValue == this.vsValue
    },
    listeners() {
      return {
        ...this.$listeners,
        blur: (event) => {
          if(event.relatedTarget?!event.relatedTarget.closest('.vs-select-options'):true) {
              this.$parent.closeOptions()
          }
        },
        click: (event) => this.clickOption(event),
        mouseover: (event) => this.hoverx = true,
        mouseout: (event) => this.hoverx = false
      }
    },
    styles(){
      return {
        background: this.isActive?_color.getColor(this.$parent.vsColor,.1):null,
        color: this.isActive?_color.getColor(this.$parent.vsColor,1):null,
        fontWeight: this.isActive?'bold':null
      }
    },
    getValue(){
      return this.$parent.value
    }
  },
  methods:{
    backspace(){
      console.dir(this.$parent.$refs.inputselect);
      if(this.$parent.vsAutocomplete){
        let valueInput = this.$parent.$refs.inputselect.value
        this.$parent.$refs.inputselect.value = valueInput.substr(0,valueInput.length-1)
        this.$parent.$refs.inputselect.focus()
      }
    },
    navigateOptions(orientation){
      let
      orientationObject = 'nextSibling',
      lengthx = 0

      function getNextLi(li,orientationObject){
        if(li){
          let lix = li[orientationObject]
          if(li.style){
            if(li.style.display == 'none'){
               return getNextLi(lix,orientationObject)
            } else {
              return li
            }
          } else {
            return li
          }
        } else {
          return false
        }
      }

      if(orientation == 'prev'){
        orientationObject = 'previousSibling'
        lengthx = this.$parent.$children.length - 1
      }
      let nextElement = getNextLi(this.$el[orientationObject],orientationObject)
      // console.log(this.$el[orientationObject]);
      console.log("nextElement>",nextElement);
      if(nextElement){
        nextElement.querySelector('.vs-select-item-btn').focus()
      } else {
        getNextLi(this.$parent.$children[lengthx].$el,orientationObject).querySelector('.vs-select-item-btn').focus()
      }
    },
    focusValue(){
      if(this.$parent.vsMultiple?this.$parent.value.indexOf(this.vsValue) != -1:this.vsValue == this.$parent.value){
        if(!this.$parent.vsAutocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      }
    },
    putValue(){
      if(this.vsValue == this.$parent.value){
        this.$parent.valuex = this.vsText
      }
    },
    clickOption(event){
      let text = this.vsText
      if(!this.$parent.vsMultiple){
        this.$parent.active = false
        document.removeEventListener('click',this.$parent.clickBlur)
        this.$parent.valuex = text
        this.$parent.$emit('input',this.vsValue)
        this.$parent.changeValue()
      } else if (this.$parent.vsMultiple) {
        this.$parent.valuex = text
        this.$parent.addMultiple(this.vsValue)
      }

    },

    // methods colors
    isColor(){
      return _color.isColor(this.vsColor)
    },
  }
}
</script>

<style lang="stylus">
@import '../../styles'
.vs-select-item-btn
  background: transparent
  padding: 5px;
  width: 100%;
  margin: 0px !important;
</style>
