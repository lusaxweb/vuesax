<template lang="html">
  <div :class="{'vsIconx':vsIcon, 'vs-icon-after':vsIconAfter, 'disabledx':disabled}" class="con-input">
    <label :class="{'focusLabel':focusx, 'disabledxlabel':disabled}" class="label" for="">{{vsLabel}}</label>
    <input :disabled="disabled" :value="value" @input="$emit('input',$event.target.value)" ref="inputx" @focus="focusx=true" @blur="focusx=false"  class="vs-input" type="text">
    <span v-if="!vsLabelPlaceholder" @click="$refs.inputx.focus()" :class="{'noPlaceholder':value.length>0?true:focusx}" class="placeholder">{{vsPlaceholder}}</span>
    <span v-if="vsLabelPlaceholder" @click="$refs.inputx.focus()" :class="{'noPlaceholderLabel':value.length>0?true:focusx}" class="placeholder">{{vsLabelPlaceholder}}</span>

    <span v-if="vsIcon" class="iconx"><i class="material-icons">{{vsIcon}}</i></span>
  </div>
</template>

<script>
export default {
  name:'vs-input',
  props:[
    'value',
    'vsLabelPlaceholder',
    'vsPlaceholder',
    'vsLabel',
    'disabled',
    'vsIcon',
    'vsIconAfter'
  ],
  data(){
    return {
      focusx:false,
    }
  },
  computed:{
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
    caret-color: rgba(var(--primary),.8)
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
    bottom: 36px;
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
    color: rgb(var(--primary)) !important;
  }
  .vsIconx .noPlaceholderLabel{
    left: 8px !important;
  }
  .vsIconx .placeholder{
    left: 35px;
  }
  .iconx {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 30px;
    height: 35px;
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
</style>
