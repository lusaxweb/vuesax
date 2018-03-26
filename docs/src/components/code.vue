<template lang="html">
  <div :id="'vs-'+this.titlex.replace(/\s/g,'-')" class="con-code">
    <header>
      <h2 class="h2">{{titlex}}<span><a :href="'#vs-'+this.titlex.replace(/\s/g,'-')">#</a></span> </h2>
      <ul v-if="!doc" class="ul-code">
        <li v-tooltip="textCode" v-if="code"  :class="{'codeActivo':codeActivo}" @click="codeActivo=!codeActivo,colorearCode()" class="flaticon-coding"></li>
        <li v-tooltip="'View in Codepen'" v-if="codepen" ><a target="_blank" class="flaticon-3d-outlined-shape" :href="codepen"></a>  </li>
        <!-- <li class="flaticon-github-logo"></li> -->
      </ul>
    </header>

    <div v-if="text" class="con-texto">
      <p>
        <slot name="text">
        </slot>
      </p>
    </div>
    <div class="options">
      <!-- <button  :class="{'activox':disabledValue}" @click="$emit('click-disabled')" type="button" name="button">Disabled</button> -->
      <vs-switch v-if="disabledx" :vs-type="'rgb(var(--morado))'" :value="disabledValue" @change="$emit('click-disabled')">Disabled</vs-switch>
    </div>
    <div :class="{'floatx':float}" class="con-ejemplo">
      <slot name="ejemplo">

      </slot>
    </div>
    <transition name="fade">
    <div v-show="!noCodigo" v-if="codeActivo||doc" class="code">
      <pre><code class="html">{{code}}</code></pre>
    </div>
  </transition>
  </div>
</template>

<script>

import $ from 'jquery'
import '../assets/font/flaticon.css'
var hljs = require('highlight.js');
export default {
  props:[
    'text',
    'titlex',
    'code',
    'doc',
    'codepen',
    'disabledValue',
    'disabledx',
    'noCodigo',
    'float'
  ],
  data(){
    return {
      codeActivo:false,
    }
  },
  mounted(){
    let idx = this.titlex.replace(/\s/g,'-')
    console.log(idx);
    this.$parent.codes.push({
      idx:'vs-'+idx,
      title:this.titlex
    })


    $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
    });
  },
  computed:{
    textCode(){
      return this.codeActivo?'Hide code':'Show code'
    }

  },
  methods:{
    colorearCode(){
      setTimeout(function () {
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });

      }, 1);
    }
  }
}
</script>

<style lang="css" >
.number {
  color: rgb(var(--morado)) !important;
}
.con-texto {
  width: 100%;
  height: auto;
  padding: 15px;
  font-size: 14px;
}
.con-texto {
  color: rgba(0, 0, 0, 0.7);
}
.con-texto b {
  background: rgb(240, 240, 240);
  padding: 4px;
  margin-bottom: 4px;
  display: inline-block;
  border-radius: 4px;
  padding-left: 6px;
  padding-right: 6px;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.7);
}
.con-texto a {
  padding: 4px;
  margin-bottom: 4px;
  display: inline-block;
  border-radius: 4px;
  padding-left: 6px;
  padding-right: 6px;
  font-weight: lighter;
  color: rgb(var(--morado));
}
.con-texto .numero {
  color: rgb(var(--morado));
}
.activox {
  background: rgb(var(--morado));
  color: rgb(255, 255, 255);
}
.options {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.options button{
  padding: 10px;
}
.codeActivo {
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0,-3px);
  color: rgb(var(--morado)) !important;
}

*::before {
    margin-left: 0px !important;
}
.ul-code {
  position: relative;
  display: flex;
  align-items: center;
}

.ul-code li {
  padding: 9px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  transition: all .3s ease;
  margin-left: 7px;
}
.ul-code li:hover {
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0,-3px);
  color: rgb(var(--morado));
}

.con-ejemplo>div{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.floatx>div {
    flex-wrap: wrap !important;
}
  .h2 {
    color: rgba(0, 0, 0, 0.7);
    font-weight: lighter;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .h2 a {
    color: rgba(0, 0, 0, 0.61);
    font-size: 22px;
    transform: scale(.5);
    opacity: 0;
    transition: all .3s ease;
    display: inline-block;
    cursor: pointer;
    margin-left: 7px;
  }
  .h2 a:hover {
    opacity: .7 !important;
  }
  .h2:hover a {
    opacity: 1;
    transform: scale(1);
    color: rgb(var(--morado));
  }
  .con-code header {
    width: 100%;
    padding: 10px;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
  }
  .con-code {
    width: calc(100% - 100px);
    max-width: 1200px;
    margin: auto;
    background: rgb(255, 255, 255);
    position: relative;
    z-index: 1000;
    display: block;
    border-radius: 5px;
    overflow: hidden;
    /* box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.10); */
    box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.15);
    margin-top: 20px;
    transition: all .3s ease;
    display: block;
    backface-visibility: hidden;
  }
  .hljs-name {
    color: rgba(0, 0, 0,.7);
  }
  .hljs-string {
    color: rgb(227, 122, 141) !important;
  }
  .hljs-attr {
   color:rgb(102, 57, 193)

  }
  .code {
    /* font-style: italic; */
    font-weight: normal;

    background: rgb(245, 245, 245);
    color: rgba(0, 0, 0,.5);
    overflow: auto;
    max-height:300px;
    height: auto;
    opacity: 1;
    transition: all .3s;
    /* max-height: 300px; */
  }
  /* .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  } */
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    max-height:0px !important;
  }

  .code::-webkit-scrollbar {
    width: 6px;
    height: 5px;
}
  .code::-webkit-scrollbar-thumb {
    background: rgb(220, 220, 220);
    border-radius: 5px;
}
  .code span {
    letter-spacing: 1px;
    line-height: 21px;
    font-size: 15px;
  }
  .code pre {
    padding: 25px;
  }
@media only screen and (max-width: 650px) {
  .con-ejemplo>div{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  h2 {
    font-size: 18px;
  }
}
@media only screen and (max-width: 500px) {
  .con-code {
    width: calc(100% - 30px);
  }
}

</style>
