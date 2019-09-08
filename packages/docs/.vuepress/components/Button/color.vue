<template>
  <div class="con-demo flex">
    <vs-button :active="active == 0" @click="active = 0">
      Default
    </vs-button>
    <vs-button flat :active="active == 1" @click="active = 1" color="success" >
      Success
    </vs-button>
    <vs-button border :active="active == 2" @click="active = 2" color="danger" >
      Danger
    </vs-button>
    <vs-button transparent :active="active == 3" @click="active = 3" color="warning" >
      Warning
    </vs-button>
    <vs-button gradient color="#7d33ff" :active="active == 4" @click="active = 4" >
      HEX
    </vs-button>
    <vs-button relief color="rgb(59,222,200)" :active="active == 5" @click="active = 5">
      RGB
    </vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 0
  })
}
</script>
<style lang="stylus" scoped>

</style>
