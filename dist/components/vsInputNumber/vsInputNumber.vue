<template lang="html">
  <div
    :class="[
      `vs-input-number-size-${size}`,
      `vs-input-number-${color}`,
      {'isChangeValue':isChangeValue}
    ]"
    class="vs-input-number">
    <button
      v-repeat-click="less"
      :disabled="$attrs.disabled"
      :class="{
        limit:value <= min
      }"
      :style="{
        background:getColor
      }"
      class="btn-less vs-input-number--button-less"
      type="button">
      <i
        translate="no"
        class="material-icons notranslate">
        remove
      </i>
    </button>
    <input
      ref="input"
      :style="{
        width:`${getLength}px`
      }"
      :value="value"
      v-bind="$attrs"
      type="number"
      class="vs-input-number--input"
      v-on="listeners">
    <button
      v-repeat-click="plus"
      :disabled="$attrs.disabled"
      :class="{
        limit:value >= max && max !== null
      }"
      :style="{
        background:getColor
      }"
      class="btn-plus vs-input-number--button-plus"
      type="button">
      <i
        translate="no"
        class="material-icons notranslate">
        add
      </i>
    </button>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsInputNumber',
  directives: {
    repeatClick: {
      bind(el, binding, vnode) {
        let intervalx = null;
        let startT;
        const functionx = () => vnode.context[binding.expression].apply();
        const bucle = () => {
          if (new Date() - startT < 100) {
            functionx();
          }
          clearInterval(intervalx);
          intervalx = null;
        };
        const eventx = (e) => {
          if (e.button !== 0) return;
          startT = new Date();
          var escuchando = function() {
            if (bucle) {
              bucle.apply(this, arguments);
            }
            el.removeEventListener('mouseup', escuchando, false);
          };
          el.addEventListener('mouseleave', escuchando ,false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        }
        el.addEventListener('mousedown', eventx ,false);

      }
    }
  },
  inheritAttrs:false,
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    },
    max:{
      default:null,
      type:[Number,String]
    },
    min:{
      default:0,
      type:[Number,String]
    },
    size:{
      default:null,
      type:String
    }
  },
  data:()=>({
    isChangeValue:false
  }),
  computed:{
    getLength(){
      if(this.value != ''){
        return this.value.length * 9.1
      } else {
        return 0
      }
    },
    getColor(){
      return _color.getColor(this.color,1)
    },
    listeners(){
      return {
        ...this.$listeners,
        blur:(evt)=>{
          if(parseInt(this.value) > parseInt(this.max)) {
            this.$emit('input',this.max)
          } else if (parseInt(this.value) < parseInt(this.min)) {
            this.$emit('input',this.min)
            this.$emit('blur',evt)
          }
        },
        input:(evt)=>{
          this.$emit('input',evt.target.value)
        }
      }
    }
  },
  watch:{
    value(){
      this.isChangeValue = true
      setTimeout(()=>{
        this.isChangeValue = false
      },200)
    }
  },
  methods:{
    plus(){
      let newValue
      if(this.value == ''){
        newValue = 0
      }
      if(this.max?parseInt(this.value)<parseInt(this.max):true){
        newValue = parseInt(this.value) + 1
        this.$emit('input',newValue)
      }
    },
    less(){
      let newValue
      if(this.value == ''){
        newValue = 0
      }
      if(this.min?parseInt(this.value)>parseInt(this.min):true){
        newValue = parseInt(this.value) - 1
        this.$emit('input',newValue)
      }
    },
  }
}
</script>
