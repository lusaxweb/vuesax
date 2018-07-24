<template lang="html">
  <div
    :class="[
      `vs-input-number-${color}`,
      {'isChangeValue':isChangeValue}
    ]"
    class="vs-input-number">
    <button
      v-repeat-click="less"
      :style="{
        background:getColor
      }"
      class="btn-less"
      type="button">
      <i class="material-icons">
        remove
      </i>
    </button>
    <input
      :value="value"
      v-bind="$attrs"
      type="number"
      v-on="listeners">
    <button
      v-repeat-click="plus"
      :style="{
        background:getColor
      }"
      class="btn-plus"
      type="button">
      <i class="material-icons">
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
    }
  },
  data:()=>({
    isChangeValue:false
  }),
  computed:{
    getColor(){
      return _color.getColor(this.color,1)
    },
    listeners(){
      return {
        ...this.$listeners,
        input:(evt)=>{
          this.$emit('input',evt.target.value)
        }
      }
    }
  },
  // watch:{
  //   value(){
  //     this.isChangeValue = true
  //     setTimeout(()=>{
  //       this.isChangeValue = false
  //     },200)
  //   }
  // },
  methods:{
    plus(){
      console.log(this.value,">>>",parseInt(this.value))
      let newValue = parseInt(this.value) + 1
      this.$emit('input',newValue)
    },
    less(){
      let newValue = parseInt(this.value) - 1

      this.$emit('input',newValue)
    },
  }
}
</script>
