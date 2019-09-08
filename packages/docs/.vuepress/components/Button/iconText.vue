<template>
  <div class="con-demo flex">
    <vs-button :active="active == 0" @click="active = 0">
      <i class='bx bx-home-alt'></i> Home
    </vs-button>
    <vs-button flat :active="active == 1" @click="active = 1" color="success" >
      <i class='bx bxs-phone-call' ></i> Call
    </vs-button>
    <vs-button border :active="active == 2" @click="active = 2" color="danger" >
      <i class='bx bxs-heart' ></i> Like
    </vs-button>
    <vs-button transparent :active="active == 3" @click="active = 3" color="warning" >
      <i class='bx bxs-bell-ring' ></i> Notification
    </vs-button>
    <vs-button gradient color="#7d33ff" :active="active == 4" @click="active = 4" >
      <i class='bx bxs-paper-plane' ></i> Send
    </vs-button>
    <vs-button relief color="rgb(59,222,200)" :active="active == 5" @click="active = 5">
      <i class='bx bxs-purchase-tag' ></i> Save
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
