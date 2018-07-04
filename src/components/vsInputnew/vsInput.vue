<template lang="html">
  <div
    :class="[`vs-input-${vsColor}`]" 
    class="vs-component vs-con-input-label vs-input">
    <label @click="focusInput" v-if="vsLabelPlaceholder?false:vsLabel" class="vs-input-label" for="">{{vsLabel}}</label>
    <div class="vs-con-input">
    <input
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
    </div>
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
      type:Boolean
    },
    vsIconPack:{
      default:'material-icons',
      type:String
    },
    vsColor:{
      default:'primary',
      type:String
    }
  },
  methods:{
    focusInput(){
      this.$refs.vsinput.focus()
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit('input',evt.target.value)
        }
      }
    },
    isValue(){
      return this.vsLabelPlaceholder?true:(this.value == '')
    }
  }
}
</script>
