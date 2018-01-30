<template lang="html">
  <button
  :title="title"
  :disabled="disabled"
  @click="$emit('click',$event)"
  :class="vsType"
  type="button"
  name="button">
    <span>{{vsText}}</span>
  </button>
</template>

<script>

export default {
  props:{
    title:{

    },
    disabled:{

    },
    vsText: {
      type: String,
      default: 'Aceptar'
    },
    vsTheme: {
      type: String,
      default:'primary'
    },
    vsType:{
      type:String,
      default:'default'
    }
  },
  name:'vs-button'
}
</script>

<style lang="css" scoped>
  button {
    padding: 10px;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    border: 0px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    position: relative;
    transition: all .3s ease;
    overflow: hidden;
  }
  button:disabled {
    opacity: .5;
    pointer-events: none;
  }
  button span {
    font-weight: lighter;
    position: relative;
    z-index: 1000;
    cursor: pointer;
    color: inherit;
  }
  button:after {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.0);
    content: '';
    transition: all .3s ease;
  }
  button:hover:after {
    background: rgba(0, 0, 0, 0.150);
  }
  button:active {
    opacity: .8;
    transform: scale(0.980);
  }
  button.default span {
    color: rgba(0, 0, 0,.8);
  }
  button.primary {
    background: rgb(var(--primary));
    color: rgb(255, 255, 255);
  }
  button.danger {
    background: rgb(var(--danger));
    color: rgb(255, 255, 255);
  }
  button.success {
    background:rgb(var(--success));
    color: rgb(255, 255, 255);
  }

  /* default-border */
  button[class*="-border"]{
    background: transparent;
  }
  button.default-border {
    border: 1px solid rgb(var(--default));
    color: rgb(var(--default));
  }
  button.default-border:hover {
    background: rgb(235, 235, 235);
  }
  /* primary-border */
  button.primary-border {
    border: 1px solid rgb(var(--primary));
    color: rgb(var(--primary));
  }
  button.primary-border:hover {
    background: rgb(var(--primary));
    color: rgb(255, 255, 255);
  }

  /* danger-border */
  button.danger-border {
    border: 1px solid rgb(var(--danger));
    color: rgb(var(--danger));
  }
  button.danger-border:hover {
    background: rgb(var(--danger));
    color: rgb(255, 255, 255);
  }

  /* success-border */
  button.success-border {
    background: transparent;
    border: 1px solid rgb(var(--success));
    color: rgb(var(--success));
  }
  button.success-border:hover {
    background: rgb(var(--success));
    color: rgb(255, 255, 255);
  }


  /* default-line */
  button[class*="-line"]{
    background: transparent;
  }
  button.default-line {
    border-radius: 0px;
    border-bottom: 2px solid rgb(var(--default));
    color: rgb(var(--default));
  }
  button.default-line:hover {
    background: rgb(235, 235, 235);
  }
  /* primary-line */
  button.primary-line {
    border-radius: 0px;
    border-bottom: 2px solid rgb(var(--primary));
    color: rgb(var(--primary));
  }
  button.primary-line:hover {
    background: rgb(var(--primary));
    color: rgb(255, 255, 255);
  }

  /* danger-line */
  button.danger-line {
    border-radius: 0px;
    border-bottom: 2px solid rgb(var(--danger));
    color: rgb(var(--danger));
  }
  button.danger-line:hover {
    background: rgb(var(--danger));
    color: rgb(255, 255, 255);
  }

  /* success-line */
  button.success-line {
    border-radius: 0px;
    background: transparent;
    border-bottom: 2px solid rgb(var(--success));
    color: rgb(var(--success));
  }
  button.success-line:hover {
    background: rgb(var(--success));
    color: rgb(255, 255, 255);
  }

</style>
