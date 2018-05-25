<template lang="html">
  <div ref="options" class="vs-component con-options">
    <ul>
      <li :class="{'activeItem':activeIndex==index}" v-for="option,index in options">
        <button @click="$emit('option-click',index)" type="button" name="button">{{vsClaveText?option[vsClaveText]:option.text}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
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
    insertBody(){
      let elx = this.$refs.options
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>

<style lang="stylus">

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
          &:hover
            background: rgb(245, 245, 245);

@css {
  .activeItem button{
    background: rgba(var(--primary),.1);
    font-weight: bold;
    color: rgba(var(--primary),1);
  }
}
</style>
