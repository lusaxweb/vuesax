<template lang="html">
  <li class="lix" :class="{
    'disabledx':vsDisabled,
    }">
    <h4 v-if="vsLabel">
      {{vsLabel}}
    </h4>
    <div :class="{'con-li':!vsLabel||!vsGroup}">
      <slot>
      </slot>
    </div>
  </li>
</template>

<script>
export default {
  name:'vs-dropdown-item',
  props:{
    vsGroup:{
      type:Boolean,
      default:false,
    },
    vsLabel:{
      type:String,
      default:null,
    },
    vsColor:{
      type:String,
      default:'rgb(var(--primary))',
    },
    vsDisabled:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return {
      _vsColor:this.vsColor
    }
  },
  created(){
    // console.log();
    this._vsColor = this.$parent.vsColor
  }
}
</script>

<style lang="css" scoped>
.disabledx {
  opacity: .4;
  pointer-events: none;
  user-select: none;
}
.lix {
  background: inherit;
}
.lix:not(:nth-child(1)) h4{
    border-top: 1px solid rgba(200, 200, 200,.2);
    margin-top: 7px;
  }
  h4{
      font-weight: normal;
      text-align: left;
      font-size: 15px;
      text-transform: capitalize;
      color: inherit;
      padding: 10px;
      padding-bottom: 5px;
      cursor: default;
      user-select: none;
      position: sticky;
      top: 0;
      background: inherit;
      display: block;
      z-index: 200;
    }
  .con-li {
    display: block;
    width: auto;
    cursor: pointer;
    position: relative;
    padding: 8px;
  }
  .con-li a {
    color: inherit;
    opacity: .7;
    transition: all .3s ease;
  }
  .con-li a:hover {
    opacity: 1;
  }
</style>
