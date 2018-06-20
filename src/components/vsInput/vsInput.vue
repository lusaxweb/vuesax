<template lang="html">
  <div
  :style="{
    'width':vsWidth
  }"
  :class="[validar,{'con-focus':focusx,'vsIconx':vsIcon, 'vs-icon-after':vsIconAfter, 'disabledx':disabled}]" class="con-input">
    <label :class="{'focusLabel':focusx, 'disabledxlabel':disabled}" class="label" for="">{{vsLabel}}</label>

    <input

    :type="vsType ? vsType :'text'"
    :style="{'border':`1px solid ${focusx?backgroundx:'rgba(0, 0, 0, 0.150)'}`,'caretColor': backgroundx}"
    :disabled="disabled"
    :value="value"
    ref="inputx"
    v-bind="$attrs"
    v-on="listeners"
    class="vs-input">

    <span v-if="!vsLabelPlaceholder" @click="$refs.inputx.focus()" :class="{'noPlaceholder':value?(value.length>0 || typeof value === 'number'):false?true:focusx}" class="placeholder">{{vsPlaceholder}}</span>
    <span :style="{'color':focusx?backgroundx:'rgba(0, 0, 0, 0.30)'}" v-if="vsLabelPlaceholder" @click="$refs.inputx.focus()" :class="{'noPlaceholderLabel':value.length>0?true:focusx}" class="placeholder">{{vsLabelPlaceholder}}</span>

    <span v-if="vsIcon" class="iconx">
      <i v-if="vsIconPack == null" class="material-icons">{{vsIcon}}</i>
      <i v-else :class="[vsIconPack, vsIcon]"></i>
    </span>

    <div :title="validar=='input-mal'?vsDangerText:null" class="icon-validar-mal">
      <i class="material-icons">error</i>
    </div>
    <div :title="validar=='input-bien'?vsSuccessText:null" class="icon-validar-bien">
      <i class="material-icons">check_circle</i>
    </div>

    <!-- <div v-if="vsType=='number'" class="con-number-btns">
      <button @click="$emit('input',Number($refs.inputx.value)+1),focusx=true" @focus="focusx=true" @blur="focusx=false" class="material-icons">expand_less</button>
      <button @click="$emit('input',Number($refs.inputx.value)-1),focusx=true" @focus="focusx=true" @blur="focusx=false" class="material-icons">expand_more</button>
    </div> -->
  </div>
</template>

<script>
let validations = {
  email: (value) => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
  },
  url: (value) => {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(value)
  },
  password: (value) => {
    return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/i.test(value)
  },
  number: (value, min, max) => {
    if ((!min && min !== 0) || !max) return !isNaN(value);
    return Number(value) <= Number(max) && Number(value) >= Number(min)
  },
  default: (value) => true
}
export default {
  inheritAttrs: false,
  name:'vs-input',
  props:[
    'vsWidth',
    'value',
    'vsLabelPlaceholder',
    'vsPlaceholder',
    'vsLabel',
    'disabled',
    'vsIcon',
    'vsIconPack',
    'vsIconAfter',
    'vsColor',
    'vsType',
    'vsDangerText',
    'vsSuccessText',
    'vsMax',
    'vsMin',
    'vsValid',
    'vsValidationFunction',
    'vsRequired'
  ],
  data(){
    return {
      focusx:false,
    }
  },
  mounted(){
    if(this.value == undefined){
      console.warn("Vuesax: The property of the input v-model is necessary to function properly vs-input component", this.$el)
    }
  },
  computed:{
    isRequired: function isRequired() {
      return (this.vsRequired === true || this.vsRequired === 'true');
    },
    listeners() {
      return {
        ...this.$listeners,
        focus: this.onFocus,
        blur: this.onBlur,
        input: this.onInput,
        keydown: (evt) => this.validarKeypress(evt, evt.target.value)
      }
    },
    validar(){
      // Check if field is required first
      if (this.isRequired) {
        if (this.value.length === 0) {
          this.$emit('update:vsValid', false);
          return false;
        }
      } else {
        if (this.value === undefined || this.value === null || this.value.length === 0) {
          this.$emit('update:vsValid', true);
          return true;
        }
      }

      if(this.vsType){
        //email
        if(this.value.length > 0 || typeof this.value === 'number'){
          if(this.vsValidationFunction && typeof this.vsValidationFunction === 'function') {
            validations[this.vsType] = this.vsValidationFunction;
          }
          let validationFunction = validations[this.vsType] || validations.default
          let params = [this.value];
          if(this.vsType === 'number'){
            params.push(...[this.vsMin, this.vsMax]);
          }
          let validationResult = validationFunction.apply(null, params);
          let result = Boolean(validationResult);
          if(this.vsValid !== undefined){
            this.$emit('update:vsValid', result)
            return result ? 'input-bien' : 'input-mal'
          }
        } else {
          if(this.vsValid !== undefined){
            this.$emit('update:vsValid', false)
          }
        }

      } else {

        return false
      }
    },
    backgroundx(){
      if(this.vsColor){
        if(/[#()]/i.test(this.vsColor)){
          return this.vsColor
        } else {
          return `rgb(var(--${this.vsColor}))`
        }
      } else {
        return 'rgb(var(--primary))'
      }
    }
  },
  methods:{
    onFocus(){
      this.focusx=true;
      this.$emit('focus')
    },
    onBlur(){
      this.focusx=false;
      this.$emit('blur')
    },
    onInput(evt){
      this.$emit('input',evt.target.value)
    },
    validarKeypress(evt,value){
      if(this.vsType){
        if(this.vsType=='email'){
          var rgx = /[-\a-zA-Z0-9_@.]/;
          if( ! rgx.test(evt.key)) {
            evt.preventDefault()
          }
        }
        if(this.vsType=='number'){
          var rgx = /[0-9]/;
          if(evt.key!='Backspace'&&evt.key!='Delete'&&evt.key!='Tab'){
            if( ! rgx.test(evt.key)) {
              evt.preventDefault()
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
.con-input {
  position: relative;
  margin: 10px;
  margin-top: 17px;
}
  .vs-input {
    padding: 9px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.150);
    color: rgba(0, 0, 0, 0.7);
    transition: all .250s ease;
    position: relative;
    top: 0px;
    width: 100%;

  }
    .vs-input:focus {
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.150);
      border: 1px solid rgba(var(--primary),.7);
    }
    .vs-input:disabled {
      opacity: .4;
      background: rgb(230, 230, 230);
      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0,.1);
    }
    .vs-input:disabled + span {

      color: rgba(0, 0, 0,.2);
      user-select: none;
    }
  .placeholder {
    position: absolute;
    left: 12px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.30);
    transition: all .250s ease;
    bottom: 9px;
    user-select: none;
    cursor: text;
  }
  .noPlaceholder {
    opacity: 0;
    transform: translate(-6px,0%);

  }
  .noPlaceholderLabel {
    bottom: 40px;
    left: 8px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    cursor: default;
  }
  .vs-input:focus ~ .noPlaceholderLabel{
    color: rgb(var(--primary));

  }
  .label {
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    width: 100%;
    /* float: left; */
    font-size: 12px;
    padding-left: 8px;
    padding-bottom: 2px;
    color: rgba(0, 0, 0, 0.7);
    transform: translate(0,-100%);
  }
  .focusLabel {
    color: rgb(var(--primary))
  }
  .disabledxlabel {
    opacity: .5;
    user-select: none;
  }

  /* icon */

  .vsIconx input{
    padding-left: 35px;
  }
  .vsIconx input:focus ~ .iconx{
    border: 1px solid rgba(var(--primary),.7);
  }
  .vsIconx input:focus ~ .iconx i{
    color: rgb(var(--primary))
  }
  .vsIconx .noPlaceholderLabel{
    left: 8px !important;
  }
  .vsIconx .placeholder{
    left: 35px;
  }
  .iconx {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.150);
    transition: all .3s ease;
    border-radius: 5px 0px 0px 5px;
    background: rgb(255, 255, 255);
  }
  .iconx i {
    background: rgb(255, 255, 255);
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    background: transparent;
    margin-left: 2px;
  }
  .disabledx .iconx {
    opacity: .5;
  }

  .vs-icon-after.vsIconx input{
    padding-right: 35px;
    padding-left: 10px !important;
  }
  .vs-icon-after .iconx {
    left: auto;
    right: 0px;
    border-radius: 0px 5px 5px 0px;
  }
  .vs-icon-after .placeholder{
    left: 12px;
  }


  .input-mal input {
    caret-color: auto !important;
  }
  .input-mal input,.input-mal .iconx{
    border: 1px solid rgb(var(--danger)) !important;
  }
  .input-mal label,.input-mal i{
    color: rgb(var(--danger)) !important;
  }
  .input-mal.vsIconx .noPlaceholderLabel {
    color: rgb(var(--danger)) !important;
  }
  .input-mal .noPlaceholderLabel {
    color: rgb(var(--danger)) !important;
  }


  .icon-validar-mal {
      position: absolute;
      right: 5px;
      top: -8px;
      transition: all .3s ease;
      cursor: default;
  }
  .icon-validar-mal i {
    font-size: 14px;
    color:rgb(var(--danger));
    opacity:0;
    transition: all .3s ease;
    /* transform: scale(.5); */
    backface-visibility: hidden;
    transform: translate3d(0,0);
  }
  .input-mal .icon-validar-mal i {
    opacity: 1;
    transform: scale(1);
  }
  .input-mal .icon-validar-mal {
    top: -15px;
  }



  .input-bien.con-focus input {
    caret-color: auto !important;
  }
  .input-bien.con-focus input,.input-bien.con-focus .iconx{
    border: 1px solid rgb(var(--success)) !important;
  }
  .input-bien.con-focus label,.input-bien.con-focus i{
    color: rgb(var(--success)) !important;
  }
  .input-bien.con-focus.vsIconx .noPlaceholderLabel {
    color: rgb(var(--success)) !important;
  }
  .input-bien.con-focus .noPlaceholderLabel {
    color: rgb(var(--success)) !important;
  }

  .icon-validar-bien {
      position: absolute;
      right: 5px;
      top: -8px;
      transition: all .3s ease;
      cursor: default;
  }
  .icon-validar-bien i {
    font-size: 14px;
    color:rgb(var(--success));
    opacity:0;
    transition: all .3s ease;
    /* transform: scale(.5); */
    backface-visibility: hidden;
    transform: translate3d(0,0);
  }
  .input-bien .icon-validar-bien i {
    opacity: 1;
    transform: scale(1);
  }
  .input-bien .icon-validar-bien {
    top: -15px;
  }

  .con-number-btns {
    position: absolute;
    right: 0px;
    bottom: 0px;
    /* background: rgb(158, 240, 41); */
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25px;
  }
  .con-number-btns i {
    font-size: 14px;
    position: absolute;
    width: 100%;
    height: 50%;
    top: 2px;
    left: 0px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  }
  .con-number-btns i:last-child {
    bottom: 2px;
    top: auto;
  }
</style>
