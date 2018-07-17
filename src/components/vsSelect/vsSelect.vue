<template lang="html">
  <div
    :class="{'autocompletex':vsAutocomplete,'activeOptions':active}"
    class="con-select">
    <input
      ref="inputselect"
      v-bind="$attrs"
      :readonly="!vsAutocomplete"
      class="input-select"
      type="text"
      name=""
      value=""
      @click.stop
      @keydown.esc.stop.prevent="closeOptions"
      v-on="listeners">

    <i class="material-icons icon-select">
      keyboard_arrow_down
    </i>

    <transition name="fade-select">
      <div
        v-show="active"
        ref="vsSelectOptions"
        :style="cords"
        :class="[`vs-select-${vsColor}`,{'scrollx':scrollx}]"
        class="vs-select-options">
        <ul ref="ulx">
          <slot/>
        </ul>
        <ul v-show="clear">
          <li @click="filterItems(''),changeValue()" >
            {{ vsNoData }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import utils from '../../utils'
export default {
  name:'VsSelect',
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
        input: () => {
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
  watch:{
    value(event){
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
  mounted(){
    this.changeValue()
    utils.insertBody(this.$refs.vsSelectOptions)
    // console.log("this.$children>>>>>>",this.$children);
  },
  updated(){
    if(!this.active){
      this.changeValue()
    }
  },
  methods:{
    addMultiple(value){
      let currentValues = this.value ? this.value : [];
      if(currentValues.includes(value)){
        currentValues.splice(currentValues.indexOf(value),1)
        this.$emit('input', currentValues);
        this.changeValue()
        if(this.vsAutocomplete) {
          this.$refs.inputselect.focus()
        }
      } else {
        if(this.vsAutocomplete){
          currentValues.push(value)
          this.$emit('input', currentValues);
          this.filterItems('')
          this.changeValue()
          // this.$refs.inputselect.value += ','
          this.$refs.inputselect.focus()
        } else {
          currentValues.push(value)
          this.$emit('input', currentValues);
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
        let values = this.value ? this.value : [];
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
    focus(){
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
