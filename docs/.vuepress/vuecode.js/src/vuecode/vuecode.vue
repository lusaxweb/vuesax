<template lang="html">
  <div :class="{'shadow-vc':theme=='shadow','flat-vc':theme=='flat','line-vc':theme=='line'}" class="con-vuecode">
    <div class="con-demo">
      <header class="header">
        <div class="con-h2">
          <h2 v-html="title"></h2>
        </div>
        <div class="con-menu-vc">
        <ul>
          <li :class="{'activo-vc':code}" v-if="$slots.code" @click="code=!code"  class="btn-code flaticon2-code-vc"></li>
          <li v-if="codepen" class="btn-code">
            <a target="_blank" :href="codepen" class="flaticon2-3d-outlined-shape-vc"></a>
          </li>
          <li v-if="jsfiddle" class="btn-code">
            <a target="_blank" :href="jsfiddle" class="flaticon2-jsfiddle-logo-vc"></a>
          </li>
          <li v-if="github" class="btn-code">
            <a target="_blank" :href="github" class="flaticon2-github-logo-vc"></a>
          </li>
        </ul>


        <!-- <div class="con-options">
          <button :class="{'activo-vc':options}" @click="options=!options" class="btn-options"  @blur="options=false" type="button" name="button">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
          </button>
          <ul v-if="options">
            <li class="flaticon2-arrows">
            </li>
            <li class="flaticon2-copy-content">
            </li>
            <li class="flaticon2-invert">
            </li>
          </ul>
        </div> -->
        </div>
      </header>

      <div :class="{'centex':center}" v-if="$slots.demo" class="demo">
        <slot name="demo">
        </slot>
      </div>

    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
    <div v-if="$slots.code" v-show="code" ref="code" class="con-code content-vc">
      <slot name="code">

      </slot>
    </div>
    </transition>
    </div>
  </div>
</template>

<script>
import '../assets/font/flaticon.css'
import md from './highlight.js'

export default {
  props:{
    center:{
      default:false,
      type:Boolean
    },
    md:{
      default:false,
      type:Boolean
    },
    title:{
      type:String,
      default:'',
    },
    open:{
      type:Boolean,
      default:false,
    },
    github:{
      type:String,
      default:'',
    },
    jsfiddle:{
      type:String,
      default:'',
    },
    codepen:{
      type:String,
      default:'',
    },
    codeHtml:{},
  },
  data(){
    return {
      code:false,
      options:false,
      theme:'shadow',
    }
  },
  mounted(){
    this.code = this.open || this.$vcoptions.open || !this.$slots.demo || false
    this.theme = this.$vcoptions.theme || 'shadow'

    if(!this.md){
      console.log("enyro en render");
      let text = this.$refs.code.textContent, code
      if(this.codeHtml){

        let codeHtml = this.codeHtml.replace(/'/g,'"')
        this.$refs.codex.innerHTML = md.render(codeHtml);

      } else {
        code = md.render(text);
        this.$refs.code.innerHTML = code
      }
    }
  },
  computed:{
    mdx(){

      var result = md.render(this.$slots.code[0].children[0].text);
      return result
    }
  },
  methods:{
    // animation
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el, done) {
      el.style.height = 0 + 'px'
    },
    resolveLink(text){
      let link = text.replace(/\s/g,'_').toLowerCase()
      return link
    }
  }
}
</script>

<style lang="stylus">
@require '../config'

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0 !important;
  overflow: hidden;
  opacity: 0;
  // transform: translate(0,-100%);
  transform: matrix(10deg);
}

.centex {
  display: flex;
  align-items: center;
  justify-content: center;
}
// themes

// default theme
.shadow-vc
  .con-demo
    box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.080);
    width: calc(100% - 20px) !important
    margin-left: 10px;
    .con-code
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.250);
      border-radius: 6px;
      display: block;

// flat theme

.flat-vc
  background: rgb(255, 255, 255);
  width: 100% !important;
  padding: 0px !important;
  .content-vc
    width: calc(100% - 20px)
    margin-left: 10px;


//defaul values

.con-code
  display: block;
  margin-bottom: 10px;
  transition: all .250s ease;
  overflow: hidden;
  pre
    margin-top: 0px !important;
    margin-bottom: 0px !important;
* {
  box-sizing: border-box;
  outline: none;
}
.con-vuecode
  width 100%
  height: auto;
  position: relative;
  padding: 10px
  box-sizing: border-box;
  margin-top: 10px;
  li
    list-style: none !important;
  .con-demo
    width: 100%
    position: relative;
    border-radius: 7px;
    position: relative;
    height: auto;
    padding-bottom: 1px;
    // overflow: hidden;
    .header
      width: 100%
      background: rgb(245, 245, 245);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      position: relative;
      border-radius: 7px 7px 0px 0px;
      top: 0px;
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 10px;
      padding-left: 10px;
      .con-h2
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover
          a
            opacity: 1;
            transform: translate(0px);
        a
          color: rgba(0, 0, 0, 0.8)
          font-size: 22px;
          margin-right: 5px;
          opacity: 0;
          transform: translate(10px);
          transition: all .250s ease;
        h2
          font-weight: lighter;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.7)
          cursor: default;
      .con-menu-vc
        display: flex;
        align-items: center;
        justify-content: center;
        li
          padding: 7px;
          cursor: pointer;
          float: left;
          color: rgba(0, 0, 0, 0.5)
          border-radius: 5px;
          transition: all .250s ease;
          transform: translate(0);

        .con-options
          .btn-options
            width: 35px;
            height: 35px;
            border: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            background: transparent;
            cursor: pointer;
            transition: all .250s ease;
            border-radius: 5px;
            &:hover
              background: rgb(255,255,255)

            span
              width: 4px;
              height: 4px;
              background: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              display: block;
              margin: 2px;
              transition: all .250s ease;
          ul
            background: rgb(255, 255, 255);
            position: absolute;
            right: 10px;
            top: -10px;
            transform: translate(0%,-100%);
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1)
            border-radius: 5px;



    .demo
      padding: 10px
.tagx {
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 6px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
}
.icon-copyx {
  position: absolute;
  right: 22px;
  top: 4px;
  cursor: pointer;
}
.icon-copyx:before {
  font-size: 16px;
}

.activo-vc
  color: rgba(0, 0, 0, 0.8)
  background: rgb(255, 255, 255) !important;
  transform: translate(0,-5px) !important;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.080);
.btn-options
  &.activo-vc

    .c1
      height: 2px !important
      width: 22px !important;
      border-radius: 4px !important;
      position: absolute;
      transform: rotate(42deg) translate(-3px,0px);
      background: rgb(120, 120, 120) !important
    .c2
      opacity: 0;
    .c3
      height: 2px !important
      width: 22px !important;
      border-radius: 4px !important;
      position: absolute;
      transform: rotate(-42deg) translate(0px,-3px);
      background: rgb(120, 120, 120) !important
// code styles
.content-vc
  code
    color lighten($textColor, 20%)
    padding 0.25rem 0.5rem
    margin 0
    font-size 0.85em
    background-color rgba(27,31,35,0.05)
    border-radius 3px

.content-vc
  pre, pre[class*="language-"]
    background-color $codeBgColor
    line-height 1.4
    border-radius 6px
    padding 1.25rem 1.5rem
    margin 0.85rem 0
    white-space pre-wrap
    word-break break-word
    overflow auto
    position relative
    code
      color #fff
      padding 0
      background-color transparent
      border-radius 0
    &:before
      position absolute
      top 0.8em
      right 1em
      font-size 0.75rem
      color rgba(255, 255, 255, 0.4)
  .highlighted-line
    background-color rgba(0, 0, 0, 66%)
    display block
    margin 0 -1.5rem
    padding 0 1.5rem

  .custom-block
    .custom-block-title
      font-weight 600
      margin-bottom -0.4rem
    &.tip, &.warning, &.danger
      padding .1rem 1.5rem
      border-left-width .5rem
      border-left-style solid
      margin 1rem 0
    &.tip
      background-color #f3f5f7
      border-color #42b983
    &.warning
      background-color rgba(255,229,100,.3)
      border-color darken(#ffe564, 35%)
      color darken(#ffe564, 70%)
      .custom-block-title
        color darken(#ffe564, 50%)
      a
        color $textColor
    &.danger
      background-color #ffe6e6
      border-color darken(red, 20%)
      color darken(red, 70%)
      .custom-block-title
        color darken(red, 40%)
      a
        color $textColor

.hljs-comment
  color rgba(255, 255, 255, 0.3) !important
</style>
