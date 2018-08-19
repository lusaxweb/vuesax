<template lang="html">
  <div
    :class="{
      'autocompletex':vsAutocomplete,
      'activeOptions':active,
      'input-select-validate-success':vsSuccess,
      'input-select-validate-danger':vsDanger,
      'input-select-validate-warning':vsWarning}"
    class="con-select">
    <label
      ref="inputSelectLabel"
      v-if="vsLabel"
      class="input-select-label"
      for="">{{ vsLabel }}</label>
    <div class="input-select-con">
      <input
        ref="inputselect"
        v-bind="$attrs"
        :readonly="!vsAutocomplete"
        v-model="valueFilter"
        class="input-select"
        type="text"
        @click.stop
        @keydown.esc.stop.prevent="closeOptions"
        v-on="listeners">

      <i
        translate="no"
        class="material-icons icon-select notranslate">
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


    
     <!-- <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="vsSuccess"
        key="success"
        class="con-text-validation">
        <span class="span-text-validation span-text-validation-success">
          {{
            vsSuccessText
          }}
        </span>
      </div>
      <div
        v-else-if="vsDanger"
        key="danger"
        class="con-text-validation span-text-validation-danger">
        <span class="span-text-validation">
          {{
            vsDangerText
          }}
        </span>
      </div>
      <div
        v-else-if="vsWarning"
        key="warning"
        class="con-text-validation span-text-validation-warning">
        <span class="span-text-validation">
          {{
            vsWarningText
          }}
        </span>
      </div>
      <div
        v-if="vsDescriptionText"
        key="description"
        class="con-text-validation span-text-validation">
        <span class="span-text-validation">
          {{
            vsDescriptionText
          }}
        </span>
      </div>
    </transition-group> -->
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
    },
    vsLabel:{
      default:null,
      type:[String]
    },
    vsSuccess:{
      default:false,
      type:Boolean
    },
    vsDanger:{
      default:false,
      type:Boolean
    },
    vsWarning:{
      default:false,
      type:Boolean
    },
    vsSuccessText:{
      default: null,
      type:String
    },
    vsDangerText:{
      default: null,
      type:String
    },
    vsWarningText:{
      default: null,
      type:String
    },
  },
  data:()=>({
    valueFilter:'',
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
    },
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

      this.$nextTick(()=>{
        this.cords = this.changePosition()
      })
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
      this.$refs.inputSelectLabel.classList.add('input-select-label-' + this.vsColor + '--active');
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
      this.$nextTick(()=>{
        this.cords = this.changePosition()
      })

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
      this.$refs.inputSelectLabel.classList.remove('input-select-label-' + this.vsColor + '--active');
      document.removeEventListener('click',this.clickBlur)
    },
    changePosition(){
      let elx = this.$refs.inputselect
      let content = this.$refs.vsSelectOptions
      let conditional = this.vsAutocomplete
      let topx = 0
      let leftx = 0
      let widthx = 0
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if(elx.getBoundingClientRect().top + content.scrollHeight + 20 >= window.innerHeight) {
        topx = (elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx - content.scrollHeight
        if(conditional){
          topx = topx - elx.clientHeight - 5
        }
      } else {
        topx = conditional?(elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx + 5:elx.getBoundingClientRect().top + scrollTopx
      }

      leftx = elx.getBoundingClientRect().left
      widthx = elx.offsetWidth

      let cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      }

      return cords
    }
  }
}
</script>
