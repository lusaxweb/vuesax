<script>
export default {
  render (h) {
    return h('div', { class: 'carbon-ads' })
  },
  // mounted () {
  //   this.load()
  // },
  methods: {
    load () {
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio`
      this.$el.appendChild(s)
    },
    clean() {
      this.$el.innerHTML = ''
    }
  }
};
</script>
<style lang="stylus">
div[id*="carbonads"]
  + div
    display none !important

@media (max-width: 600px)
  .carbon-ads
    width 100% !important
    min-height auto !important
    padding 0px 30px !important
    bottom 0px !important
    z-index 1000 !important
    border-radius 0px !important
    &:hover
      transform translate(0px) !important
      border-radius 0px !important
    &:before,&:after
      display none !important
    .carbon-wrap
      display flex
      align-items center
      justify-content center
      .carbon-text
        padding-bottom 0px
        text-align left
      .carbon-img
        margin-bottom 0px !important
        img
          width 60px
          border-radius 10px
          margin-right 10px

</style>
<style lang="css">
.infoads {
  font-size: .5rem;
  font-weight: bold;
}
.carbon {
  display: flex;
  align-items: center;
  width: calc(100% - 10px);
  margin: 5px;
  transition: all .25s ease
}
.carbon-ads {
  transition: all .3s ease;
  opacity: 1;
  transform: translate(0%);
  position: relative;
  display: block;
  right: 0px;
  width: 145px;
  background: var(--vs-theme-layout);
  padding: 6px;
  padding-bottom: 0px;
  border-radius: 25px 0px 0px 0px;
  box-sizing: border-box;
  bottom: 0px;
  z-index: 10000;
  min-height: 170px
}

.carbon-ads.hidden {
  visibility: hidden;
  opacity: 0;
}

.carbon-ads:hover {
  transform: translate(-10px,-10px);
  border-radius: 20px
}
.hidden-ads {
  transition: all .3s ease !important;
  opacity: 0;
}

/* #-carbonads */
div[id*="carbonads"] {
  --width: 320px;
  --font-size: 13px;
}

div[id*="carbonads"] {
  background: var(--vs-theme-layout);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  overflow: hidden;
  /* margin-bottom: 30px; */
  width: calc(100% - 2px);
  margin: 2px;
  border-radius: 10px;
  margin-right: 0px;
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
  font-size: .7rem;
  /* padding: 5px */
}
/* div[id*="carbonads"]:hover {
  transform: translate(-10px,-5px); */
/* } */
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
  margin-bottom: 6px;
  max-width: 160px;
  line-height: 1;
}

.carbon-img img {
  display: block;
  max-width: none !important;
  width: 100%;
  border-radius: 15px 15px 15px 15px;
  border: 0px;
  margin: 0px;
}

.carbon-text {
  display: block;
  /* padding: 0 1em 8px; */
  padding-bottom: 4px;
  opacity: .75;
}

.carbon-poweredby {
  display: block;
  padding: 10px 13px;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 0;
  /* padding-top: 5px */
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
