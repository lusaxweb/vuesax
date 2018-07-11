<template lang="html">
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`vs-input-${vsColor}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':vsSuccess,
      'input-icon-validate-danger':vsDanger,
      'input-icon-validate-warning':vsWarning,
      }]" 
    class="vs-component vs-con-input-label vs-input">
    <label @click="focusInput" v-if="vsLabelPlaceholder?false:vsLabel" class="vs-input-label" for="">{{vsLabel}}</label>
    <div class="vs-con-input">
    <input
      :style="style"
      :class="{
        'hasValue':value != '',
        'hasIcon':vsIcon,
        'icon-after-input':vsIconAfter
        }"
      :placeholder="null"
      :value="value"
      ref="vsinput"
      v-bind="$attrs" 
      v-on="listeners"  
      class="vs-inputx" 
      type="text">
    <transition name="placeholderx">
    <span
      :style="styleLabel"
      :class="{
        'vs-placeholder-label':vsLabelPlaceholder,
        }"
      v-if="isValue&&(vsLabelPlaceholder||$attrs.placeholder)"
      ref="spanplaceholder"
      @click="focusInput" 
      class="input-span-placeholder">  
      {{$attrs.placeholder || vsLabelPlaceholder}}
    </span>  
    </transition>

    <i
      :class="[vsIconPack,vsIcon,{
        'icon-after':vsIconAfter,
        }]" 
      @click="focusInput" 
      v-if="vsIcon" 
      class="icon-inputx">
        {{vsIcon}}
      </i>

      <transition name="icon-validate">
      <span v-if="vsSuccess || vsDanger || vsWarning"
        class="input-icon-validate material-icons">
        {{getIcon}}    
      </span>
      </transition>
    </div>

    <transition-group
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
    <div key="success" v-if="vsSuccess" class="con-text-validation">
      <span class="span-text-validation span-text-validation-success">
        {{
          vsSuccessText
        }}
      </span>
    </div>
    <div key="danger" v-else-if="vsDanger" class="con-text-validation span-text-validation-danger">
      <span class="span-text-validation">
        {{
          vsDangerText
        }}
      </span>
    </div>
    <div key="warning" v-else-if="vsWarning" class="con-text-validation span-text-validation-warning">
      <span class="span-text-validation">
        {{
          vsWarningText
        }}
      </span>
    </div>
    <div key="description" v-if="vsDescriptionText" class="con-text-validation span-text-validation">
      <span class="span-text-validation">
        {{
          vsDescriptionText
        }}
      </span>
    </div>
    </transition-group>


    
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  inheritAttrs: false,
  name:'vs-input',
  props:{
    value:{},
    vsLabelPlaceholder:{
      default:null,
      type:[String,Number]
    },
    vsLabel:{
      default:null,
      type:[String,Number]
    },
    vsIcon:{
      default:null,
      type:String
    },
    vsIconAfter:{
      default:false,
      type:[Boolean,String]
    },
    vsIconPack:{
      default:'material-icons',
      type:String
    },
    vsColor:{
      default:'primary',
      type:String
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
    vsDescriptionText:{
      default: null,
      type:String
    },
  },
  data:()=>({
    isFocus:false
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?_color.getColor(this.vsColor,1):'rgba(0, 0, 0,.2)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?_color.getColor(this.vsColor,1):null,
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit('input',evt.target.value)
        },
        focus: (evt) => {
          this.$emit('focus',evt)
          this.isFocus = true
        },
        blur: (evt) => {
          this.$emit('blur',evt)
          this.isFocus = false
        }
      }
    },
    isValue(){
      return this.vsLabelPlaceholder?true:(this.value == '')
    },
    getIcon(){
      let iconx = 'done'
      if(this.vsDanger){
        iconx = 'clear'
      } else if (this.vsWarning) {
        iconx = 'warning'
      }
      return iconx
    }
  },
  methods:{
    // animation
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      // this.$refs.coninput.style.paddingBottom += `${h}px`
      done()
    },
    leave: function (el, done) {
      let h = el.scrollHeight
      el.style.height = 0 + 'px'
      // this.$refs.coninput.style.paddingBottom -= `${h}px`
    },
    focusInput(){
      this.$refs.vsinput.focus()
    }
  },
}
</script>
