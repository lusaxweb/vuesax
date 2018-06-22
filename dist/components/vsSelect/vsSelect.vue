<template lang="html">
  <div :class="{'autocompletex':vsAutocomplete,'activeOptions':active}" class="con-select">
    <input
      @click.stop
      class="input-select"
      ref="inputselect"
      @keydown.esc.stop.prevent="closeOptions"
      v-bind="$attrs"
      v-on="listeners"
      :readonly="!vsAutocomplete"
      type="text"
      name="" value="">

      <i class="material-icons icon-select">
        keyboard_arrow_down
      </i>

      <transition name="fade-select">
        <div
        :style="cords"
        ref="vsSelectOptions" v-show="active" :class="[`vs-select-${vsColor}`,{'scrollx':this.scrollx}]" class="vs-select-options">
        <ul ref="ulx">
          <slot/>
        </ul>
        <ul v-show="clear">
          <li @click="filterItems(''),changeValue()" >
            {{vsNoData}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import utils from '../../utils'
export default {
  name:'vs-select',
  props:{
    value:{},
    vsNoData:{
      default:'data no available',
      type:String
    },
    vsMaxSelected:{
      default:null,
      type:[Number,String]
    },
    vsAutocomplete:{
      default:false,
      type:Boolean
    },
    vsColor:{
      default:'primary',
      type:String
    },
    vsMultiple:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    active:false,
    valuex:'',
    clear:false,
    scrollx:false,
    cords:{},
    filterx:false
  }),
  mounted(){
    this.changeValue()
    utils.insertBody(this.$refs.vsSelectOptions)
    console.log("this.$children>>>>>>",this.$children);
  },
  updated(){
    //
    if(!this.active){
      this.changeValue()
    }
  },
  watch:{
    value(){
      this.$emit('change',event)
    },
    active(){
      if(this.active){
        this.$children.forEach((item)=>{
          item.focusValue()
        })
        setTimeout( () => {
          if(this.$refs.ulx.scrollHeight >= 260) this.scrollx = true
        }, 100);
      }
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        blur: (event) => {
          if(this.vsAutocomplete && event.relatedTarget?!event.relatedTarget.closest('.vs-select-options'):false ){
            this.closeOptions()
          }
          this.$emit('blur',event)
        },
        focus: (event) => {
          this.$emit('focus',event)
          // document.removeEventListener('click',this.clickBlur)
          this.focus(event)
        },
        input: (event) => {
          return
        },
        keyup: (event) => {
          if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
            event.preventDefault()
            let childrens = this.$children.filter((item)=>{
              return item.visible
            })
            childrens[0].$el.querySelector('.vs-select-item-btn').focus()
          } else {
            if(this.vsAutocomplete){
              this.filterItems(event.target.value)
            }
          }

          this.$children.map((item)=>{
            item.valueInputx = this.$refs.inputselect.value
          })
        }
      }
    },
  },
  methods:{
    addMultiple(value){
      if(this.value.includes(value)){

        this.value.splice(this.value.indexOf(value),1)
        this.changeValue()
        if(this.vsAutocomplete) {
          this.$refs.inputselect.focus()
        }
      } else {
        if(this.vsAutocomplete){
          this.value.push(value)
          this.filterItems('')
          this.changeValue()
          // this.$refs.inputselect.value += ','
          this.$refs.inputselect.focus()
        } else {
          this.value.push(value)
          this.changeValue()
        }
      }

    },
    filterItems(value){
      if(value){
        this.filterx = true
      } else {
        this.filterx = false
      }
      let items = this.$children
      items.map((item)=>{
        // let text = item.$el.innerText.replace('check_circle','')
        let text = item.vsText
        if(this.vsMultiple){
          let valuesx = value.split(',')
          valuesx.forEach((value_multi)=>{
            if(text.toUpperCase().indexOf(value_multi.toUpperCase()) == -1){
              item.visible = false
            } else {
              item.visible = true
            }
          })

        } else {
          if(text.toUpperCase().indexOf(value.toUpperCase()) == -1){
            item.visible = false
          } else {
            item.visible = true
          }
        }

      })

      let lengthx = items.filter((item)=>{
        return item.visible
      })

      if(lengthx.length == 0){
        this.clear = true
      } else {
        this.clear = false
      }
    },
    changeValue(){
      if(this.vsMultiple){
        let values = this.value
        let options = this.$children
        let optionsValues = []
        values.forEach((item)=>{
          options.forEach((item_option)=>{
            if(item_option.vsValue == item) {
              let text = item_option.vsText
              text = text.replace('check_circle','')
              optionsValues.push(text.trim())
            }
          })
        })
        this.$refs.inputselect.value = optionsValues.toString()

      } else {
        this.$refs.inputselect.value = this.valuex

      }
    },
    focus(event){
      this.active = true
      let inputx = this.$refs.inputselect
      setTimeout( ()=> {
        document.addEventListener('click',this.clickBlur)
      }, 100);
      if(this.vsAutocomplete && this.vsMultiple){
        setTimeout( ()=> {
          if(inputx.value){
            this.$refs.inputselect.value = inputx.value += ','
          }
          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);

      } else if (this.vsAutocomplete && !this.vsMultiple) {
        this.$refs.inputselect.select()
      }

      if (!this.vsAutocomplete) {
        if(this.vsMultiple?this.value.length == 0:!this.value || this.vsMultiple){
          setTimeout( () => {
            this.$children[0].$el.querySelector('.vs-select-item-btn').focus()
          }, 50);
        }
      }
      // this.changePosition()
      this.cords = utils.changePosition(this.$refs.inputselect,this.$refs.vsSelectOptions,(this.vsAutocomplete))

    },
    clickBlur(event){
      let closestx = event.target.closest('.vs-select-options')
      if(!closestx){
        this.closeOptions()
        this.filterItems('')
        this.changeValue()
      }
    },
    closeOptions(){
      // this.$refs.inputselect.blur()
      this.active = false
      document.removeEventListener('click',this.clickBlur)
    },
  }
}
</script>

<style lang="stylus">
@import '../../styles'

// transition

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

.con-select
  position: relative;
  .icon-select
    position: absolute;
    right: 5px;
    font-size: 17px;
    top: 50%;
    transform: translate(0,-50%);
    transition: all .2s ease;
  &.activeOptions:not(.autocompletex)
    .input-select
      opacity: 0;
      transform: scale(1.1);
  &.activeOptions
    .icon-select
      transform: translate(0,-50%) rotate(-180deg) !important;

.input-select
  position: relative;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all .2s ease;
  padding-right: 20px;
  cursor: pointer;

.scrollx
  ul
    padding-right: 4px;
.vs-select-options
  padding: 4px;
  padding-top: 6px;
  padding-left: 5px;
  padding-bottom: 6px;
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  z-index: 40000;
  background: rgb(255, 255, 255);
  ul

    max-height: 260px;
    overflow: auto;
    padding-left: 0px !important;
    li
      margin: 0px;
    .vs-select-item-btn
      display: block;
      text-align: left;
      color: rgba(0,0,0,.8)
      padding: 7px;
      border-top: 1px solid rgb(255, 255, 255)
      border-bottom: 1px solid rgb(255, 255, 255)
      .icon-item
        position: absolute;
        font-size: 16px;
        left: 5px;
        transform: translate(-100%,-50%);
        opacity: 0;
        transition: all .2s ease;
        top: 50%;
      &:hover
        background: rgb(245, 245, 245)
      &:focus
        background: rgb(245, 245, 245)
      &.con-icon.activex
        padding-left: 25px;
        .icon-item
          opacity: 1;
          transform: translate(0,-50%);
for colorx, i in $vs-colors
  .vs-select-{colorx}
    .vs-select-item-btn
      &.activex
        background: alpha($vs-colors[colorx],.1) !important;
        color: $vs-colors[colorx];
        font-weight: bold;
</style>
