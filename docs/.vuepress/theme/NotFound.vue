<template>
  <div class="theme-container">
    <div class="content-notfound">
      <div class="con-404">
        <a href="https://lusaxweb.github.io/vuesax/">
          <not-found/>
        </a>

      </div>
      <div class="con-btns-404">
        <h2>Links</h2>
        <div class="">
          <a href="https://lusaxweb.github.io/vuesax/">Vuesax</a>
          <a href="https://lusaxweb.github.io/vuesax/vuesax/">Documents</a>
          <a href="https://github.com/lusaxweb/vuesax">GitHub</a>
        </div>
      </div>
      <!-- <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote> -->
    </div>
  </div>
</template>

<script>
import notFound from './notFound404.vue'
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  components:{
    notFound
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="css">
  .content-notfound {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .con-404 {
    position: relative;
    display: block;
    width: 100%;
  }
  .con-404 svg {
    margin: auto;
    display: block;
    margin-top: 5%;
  }
  .con-btns-404 {
    position: absolute;
    bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .con-btns-404 a {
    font-size: 22px;
    margin: 15px;
  }
</style>
