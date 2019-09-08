<template>
  <div class="con-demo">
    <div>
      <vs-button size="xlarge">
        Xlarge
      </vs-button>
      <vs-button size="large">
        Large
      </vs-button>
      <vs-button >
        Default
      </vs-button>
      <vs-button size="small">
        Small
      </vs-button>
      <vs-button size="mini">
        Mini
      </vs-button>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-demo
  display flex
  flex-direction column
  padding 30px 0px
  > div
    display flex
    align-items center
    justify-content center
    margin 5px 0px
</style>
