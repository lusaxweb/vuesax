<template>
  <div class="codefund">
    <div ref="codefund" id="codefund_ad"></div>
  </div>
</template>

<script>
export default {
  name: "CodeFund",
  mounted() {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      `https://codefund.io/scripts/${this.propertyId}/embed.js?template=${
        this.template
      }&theme=${this.theme}`
    );
    this.$refs.codefund.appendChild(script);
  },
  props: {
    propertyId: {
      type: String,
      required: true,
      validator: value => {
        const r = RegExp(
          "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
          "i"
        );
        return r.test(value);
      }
    },
    template: {
      type: String,
      default: "default"
    },
    theme: {
      type: String,
      default: "light"
    }
  }
};
</script>
<style lang="stylus">
#codefund_ad
  position absolute
  right 0px;
  bottom: 80px;
  width 100%;
  z-index 1000
  // border-radius 10px;
  overflow hidden
  // box-shadow 0px 5px 20px 0px rgba(0,0,0,.05)
  #cf_ad
    border: 0 !important
  .cf-wrapper
    background rgb(255,255,255) !important
    // padding 0px !important
    // border-radius 10px;
    padding 7px !important
    .cf-text
      font-size .8rem
      float left
      width 100%
      // margin-top 5px !important
</style>
