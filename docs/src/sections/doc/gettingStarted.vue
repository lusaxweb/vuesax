<template lang="html">
  <div>
    <con-doc  :titlex="$marked(langx.h1)" :textx="$marked(langx.description)">
      <div slot="codes">
      <codex text="true" :titlex="langx.codes[0].title" doc="doc" :no-codigo="true" >
        <div v-html="$marked(langx.codes[0].text)" slot="text"></div>
      </codex>

      <codex text="true" float="true" :titlex="langx.codes[1].title" >
        <div v-html="$marked(langx.codes[1].text)" slot="text"></div>
        <div  slot="ejemplo">
          <div class="con-iframe">
            <iframe width="100%" height="300" src="//jsfiddle.net/luisdanielroviracontreras/txzqp7ny/6/embedded/html,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
          </div>
        </div>
      </codex>

      <codex :titlex="langx.codes[2].title" doc="doc" :code="langx.codes[2].code">
      <div v-html="$marked(langx.codes[2].text)" slot="text"></div>
      </codex>

      <codex text="true" :titlex="langx.codes[3].title" doc="doc" :code="langx.codes[3].code">
        <div v-html="$marked(langx.codes[3].text)" slot="text"></div>
      </codex>

      <codex text="true" :titlex="langx.codes[4].title" doc="doc" no-codigo="true">
        <div v-html="$marked(langx.codes[4].text)" slot="text"></div>
      </codex>

      </div>
    </con-doc>

  </div>
</template>

<script>

// import vsButton from '../../vuesax/components/vsBoton.vue'

import conDoc from '../../components/conDoc.vue'
import titlex from '../../components/title.vue'
import codex from '../../components/code.vue'
import $ from 'jquery'
export default {
  components:{
    conDoc,
    codex,
    // component
    // vsButton,
  },
  created(){
    this.langx = this.lang.docs.vuesax.gettingStarted
  },
  data(){
    return {
      langx:null,
      code1:
      `
      <!DOCTYPE html>
    <html>
    <head>
      <link href="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    </head>
    <body>
      <div id="app">
        <vs-button vs-type="primary-filled">Hola Mundo</vs-button>
      </div>

      <script src="https://unpkg.com/vue/dist/vue.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.js"><\/script>
      <script>
        new Vue({
          el: '#app'
        })
      <\/script>
    </body>
    </html>
      `,
    }
  },
  methods:{
    prueba(){
      console.log("paso");
    }
  }
}
</script>

<style lang="css" scoped>
.con-iframe {
  width: 100%;
}
.con-text {
  text-align: left;
  width: 100%;
  color: rgba(0,0,0,.6);
  transition: all .3s ease;
}
.con-text:hover {
  color: rgba(0,0,0,.9);
}
  .h2-get {
    text-align: center;
    padding: 20px;
    color: rgba(0, 0, 0,.7);
    background: rgb(255, 255, 255);
  }
</style>
