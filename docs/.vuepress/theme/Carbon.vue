

<script>
export default {
  render (h) {
    return h('div', { class: 'carbon-ads' })
  },
  mounted () {
    this.load()
  },
  watch: {
    '$route' (to, from) {
      if (
        // to.path !== from.path
        // &&
        this.$el.querySelector('#carbonads')
      ) {
        this.$el.innerHTML = ''
        this.load()
      }
    }
  },
  methods: {
    load () {
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio`
      this.$el.appendChild(s)
    }
  }
};
</script>
<style lang="css">
.carbon {
  display: flex;
  align-items: center;
  width: 100%;

}

/* #-carbonads */
div[id*="carbonads"] {
  --width: 320px;
  --font-size: 13px;
  margin-bottom: 80px
}

div[id*="carbonads"] {
  background: rgb(255,255,255);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  overflow: hidden;
  /* margin-bottom: 30px; */
  width: 100%;
  border-radius: 10px;
  /* margin-left: 7px; */
  text-align: center;
  /* box-shadow: 0px 5px 20px 0px rgba(0,0,0,.05); */
  /* background: rgb(255,255,255) !important; */
  font-size: 13px;
  line-height: 1.5;
  position: relative;
  /* right: 10px; */
  z-index: 1000;
  border: 0px;
  transition: all .3s ease;
  font-size: .7rem;
  padding: 5px
}
div[id*="carbonads"]:hover {
  transform: translate(-10px,-5px);
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,.1);
}
div[id*="carbonads"] a {
  color: inherit;
  text-decoration: none;
}

div[id*="carbonads"] a:hover {
  color: inherit;
}

div[id*="carbonads"] span {
  position: relative;
  display: block;
  overflow: hidden;
}

.carbon-img {
  display: block;
  margin-bottom: 8px;
  max-width: 160px;
  line-height: 1;
}

.carbon-img img {
  display: block;
  margin: 0 auto;
  max-width: 160px;
  width: 100%;
  height: auto;
  border-radius: 10px
}

.carbon-text {
  display: block;
  /* padding: 0 1em 8px; */
  padding-bottom: 8px
}

.carbon-poweredby {
  display: block;
  padding: 10px 13px;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 0;
}

@media only screen and (max-width: 1100) {

  div[id*="carbonads"] {
    float: none;
    margin: 0 auto;
    right: 0px;
    max-width: calc(100% - 20px);
    position: relative;
    /* margin-bottom: 20px */
  }
  div[id*="carbonads"] span {
    position: relative;
  }
  div[id*="carbonads"] > span {
    max-width: none;
  }
  .carbon-img {
    float: left;
    margin: 0;
  }

  .carbon-img img {
    max-width: 130px !important;
  }
  .carbon-text {
    float: left;
    margin-bottom: 0;
    padding: 8px 20px;
    text-align: left;
    max-width: calc(100% - 130px - 3em);
  }
  .carbon-poweredby {
    left: 130px;
    bottom: 0;
    display: block;
    width: 100%;
  }
}
</style>
