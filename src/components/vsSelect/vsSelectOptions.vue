<template lang="html">
  <div ref="options" class="vs-component con-options">
    <ul>
      <li :class="{'activeItem':vsMultiple?includesx(option):activeIndex==index}" v-for="option,index in options">
        <i v-if="vsMultiple" :class="{'active-icon-multiple':includesx(option)}" class="material-icons icon-multi">
          check_circle
        </i>
        <button
          :disabled="vsMultiple?includesx(option)?false:vsMaxSelected==value.length:false"
          :class="{'con-iconx-multi':vsMultiple}"
          v-html="TextColor(option)"
          @blur="$emit('blur')"
          @focus="$emit('focus')" @click="$emit('option-click',vsClaveValue?option[vsClaveValue]:option.value),$emit('focus')"
          type="button"
          name="button">
        </button>
      </li>
      <li v-if="options.length == 0">
        <button type="button" name="button">
          No data Avalible
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    value:{},
    vsMaxSelected:{
      default:null,
      type:[Number,String]
    },
    vsMultiple:{
      default:false,
      type:Boolean
    },
    vsAutocomplete:{
      default:false,
      type:Boolean
    },
    valuex:{},
    vsClaveValue:{
      type:String,
      default:null,
    },
    vsClaveText:{
      type:String,
      default:null,
    },
    activeIndex:{
      type:Number,
      default: 0,
    },
    options:{
      type:Array,
      default: () => []
    }
  },
  mounted(){
    this.insertBody()
    console.log("paso");
  },

  methods:{
    includesx(option){
      console.log(this.value);
      console.log(option);
      let returnx = false
      let value = JSON.parse(JSON.stringify(this.value)).filter((item)=>{
        if(this.vsClaveValue?option[this.vsClaveValue]:item.value == option.value){
          returnx = true
        }
      })
      return returnx
    },
    TextColor(option){
      let text = option.text
      let textInit = option.text
      function MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      if(this.vsClaveText){
        text = this.option[this.vsClaveText]
      }
      if(this.vsAutocomplete){
        let indexOfx = text.toUpperCase().indexOf(this.valuex.toUpperCase())
        if(indexOfx!=-1){
          text = text.toLowerCase().replace(this.valuex.toLowerCase(),`<span class="sub">${indexOfx<1?MaysPrimera(this.valuex):this.valuex}</span>`)
        }
      }
      return text
    },
    letters(event){
      console.log(event);
      var letters = /^[A-Za-z]+$/;
      let options = JSON.parse(JSON.stringify(this.options))
      options = options.map((item)=>{
        return item.keyx = item.text[0]
      })
      console.log(options);
      if(letters.test(event.key)){

      }
    },
    insertBody(){
      let elx = this.$refs.options
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>

<style lang="stylus">
.sub {
  background: rgba(0, 0, 0,.1) !important;
  // text-transform: capitalize !important;
}
.vs-component.con-options ul::-webkit-scrollbar {
  width: 5px;
}
.vs-component.con-options ul::-webkit-scrollbar-thumb {
  background: rgb(230, 230, 230);
  border-radius: 5px;
}
.vs-component.con-options ul::-webkit-scrollbar-thumb:hover {
  background: rgb(200, 200, 200);
}
.vs-component.con-options
  position: absolute
  top: 0px;
  left: 0px;
  z-index: 20000
  background: rgb(255, 255, 255);
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0px 15px 40px -10px rgba(0, 0, 0, 0.150);
  border-radius: 5px;
  ul
    max-height: 300px;
    overflow: auto;
    padding-left: 0px;
    padding-right: 5px;
    li
      list-style: none;
      width: 100%
      padding: 0px;
      position: relative;
      .icon-multi
        position: absolute;
        z-index: 100;
        font-size: 17px;
        top: 50%;
        left: 3px;
        transform: translate(-100%,-50%);
        backface-visibility: hidden;
        transition: all .2s ease;
        opacity: 0;
        &.active-icon-multiple
          opacity: 1
          transform: translate(0px,-50%);
      &:not(.activeItem)
        button
          background: transparent
      button
        margin: 0px;
        width: 100%
        padding: 8px
        margin-top: 2px;
        margin-bottom: 2px;
        text-align: left;
        transition: all .2s ease
        border-radius: 5px;
        text-transform: lowercase;
        &::first-letter
          text-transform: capitalize

        &:hover
          background: rgb(245, 245, 245);


@css {
  .activeItem button.con-iconx-multi {
    padding-left: 24px !important;
  }
  .activeItem button{
    background: rgba(var(--primary),.1);
    font-weight: bold;
    color: rgba(var(--primary),1);
  }
}
</style>
