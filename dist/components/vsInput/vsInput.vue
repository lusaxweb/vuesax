<template lang="html">
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`vs-input-${color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':vsSuccess,
      'input-icon-validate-danger':vsDanger,
      'input-icon-validate-warning':vsWarning,
      'is-label-placeholder':vsLabelPlaceholder
    }]"
    class="vs-component vs-con-input-label vs-input">
    <label
      v-if="vsLabelPlaceholder?false:vsLabel"
      class="vs-input-label"
      for=""
      @click="focusInput">{{ vsLabel }}</label>
    <div class="vs-con-input">
      <input
        ref="vsinput"
        :style="style"
        :class="[`vs-inputx-${vsSize}`,{
          'hasValue':value != '',
          'hasIcon':vsIcon,
          'icon-after-input':vsIconAfter
        }]"
        :placeholder="null"
        :value="value"
        v-bind="$attrs"
        :type="$attrs.type?$attrs.type:'text'"
        class="vs-inputx"
        v-on="listeners">
      <transition name="placeholderx">
        <span
          v-if="isValue&&(vsLabelPlaceholder||$attrs.placeholder)"
          ref="spanplaceholder"
          :style="styleLabel"
          :class="[
          vsLabelPlaceholder&&(`vs-placeholder-label-${vsSize}`),
          `input-span-placeholder-${vsSize}`,
          {
            'vs-placeholder-label': vsLabelPlaceholder,
          }]"
          class="input-span-placeholder"
          @click="focusInput">
          {{ $attrs.placeholder || vsLabelPlaceholder }}
        </span>
      </transition>

      <i
        v-if="vsIcon"
        :class="[vsIconPack,vsIcon, `icon-inputx-${vsSize}`, {
          'icon-after':vsIconAfter,
        }]"
        translate="no"
        class="icon-inputx notranslate"
        @click="focusInput">
        {{ vsIcon }}
      </i>

      <transition name="icon-validate">
        <span
          v-if="vsSuccess || vsDanger || vsWarning"
          class="input-icon-validate material-icons">
          {{ getIcon }}
        </span>
      </transition>
    </div>

    <transition-group
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
    </transition-group>



  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsInput',
  inheritAttrs: false,
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
    color:{
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
    vsSize:{
      default:'normal',
      type:String
    }
  },
  data:()=>({
    isFocus:false
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?_color.getColor(this.color,1):'rgba(0, 0, 0,.2)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?_color.getColor(this.color,1):null,
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
          this.changeFocus(true)
        },
        blur: (evt) => {
          this.$emit('blur',evt)
          this.changeFocus(false)
        }
      }
    },
    isValue(){
      return this.vsLabelPlaceholder?true:!this.value
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
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el) {
      el.style.height = 0 + 'px'
    },
    focusInput(){
      this.$refs.vsinput.focus()
    }
  },
}
</script>
