<template lang="html">
  <div :class="{'activo-select':visible, 'disabledx-select':disabled}" class="vs-component con-select">
    <input
      ref="inputx"
      v-bind="$attrs"
      v-on="$listeners"
      @click.stop
      :disabled="disabled"
      @keydown.down.prevent="navigateOptions('next')"
      @keydown.up.prevent="navigateOptions('prev')"
      @keydown.enter.prevent="optionClick('no-index')"
      @keydown.esc.stop.prevent="visible = false"
      v-model="valuex"
      class="inputx"
      @blur="blurx"
      @focus="visible = true,$emit('focus', $event),changePosition()"
      type="text"
      readonly="readonly" name="" value="">
      <i class="material-icons icon-select">
        keyboard_arrow_down
      </i>
      <transition name="fade-select">
        <vs-select-options ref="options"   @blur="visible = false"  @focus="visible = false" :vs-clave-text="vsClaveText" :style="{'top':`${topx}px`,'left':`${leftx}px`, 'width':`${widthx}px`}" v-show="visible" :active-index="theseIndex" @option-click="optionClick" :options="options"/>
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
  }),
  mounted(){
    this.getValue()
  },
  methods:{
    changePosition(){
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      console.dir();
      if(this.$refs.inputx.getBoundingClientRect().top + 300 >= window.innerHeight) {
        console.dir(this.$refs.options.$el);
        setTimeout( ()=> {
          this.topx = (this.$refs.inputx.getBoundingClientRect().top - this.$refs.options.$el.clientHeight + this.$refs.inputx.clientHeight) + scrollTopx
          this.leftx = this.$refs.inputx.getBoundingClientRect().left
        }, 100);

      } else {
        this.topx = this.$refs.inputx.getBoundingClientRect().top + scrollTopx
        this.leftx = this.$refs.inputx.getBoundingClientRect().left
        this.widthx = this.$refs.inputx.offsetWidth
      }

    },
    blurx(){
      // setTimeout((event) => {
          this.$emit('blur', event)
          this.visible = false
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
    },
    optionClick(index){
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
.activo-select
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
