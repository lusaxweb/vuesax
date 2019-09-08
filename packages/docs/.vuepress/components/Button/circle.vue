<template>
  <div class="con-demo flex">
    <vs-button circle :active="active == 0" @click="active = 0">
      Home
    </vs-button>
    <vs-button circle icon flat :active="active == 1" @click="active = 1" color="success" >
      <i class='bx bxs-phone-call' ></i>
    </vs-button>
    <vs-button circle border :active="active == 2" @click="active = 2" color="danger" >
      <i class='bx bxs-heart' ></i> Like
    </vs-button>
    <vs-button circle transparent :active="active == 3" @click="active = 3" color="warning" >
      Warning <i class='bx bxs-bell-ring' ></i>
    </vs-button>
    <vs-button circle icon gradient color="#7d33ff" :active="active == 4" @click="active = 4" >
      <i class='bx bxs-paper-plane' ></i>
    </vs-button>
    <vs-button circle icon relief color="rgb(59,222,200)" :active="active == 5" @click="active = 5">
      <i class='bx bxs-purchase-tag' ></i>
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
