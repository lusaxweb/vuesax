<template>
  <div class="con-demo flex">
    <vs-button circle icon floating>
      <i class='bx bx-plus' ></i>
    </vs-button>
    <vs-button color="whatsapp" circle icon floating>
      <i class='bx bxl-whatsapp' ></i>
    </vs-button>
    <vs-button color="#ff3e4e" circle icon floating>
      <i class='bx bx-up-arrow-alt' ></i>
    </vs-button>
    <vs-button circle icon disabled >
      <i class='bx bxs-chat' ></i>
    </vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 1
  })
}
</script>
<style lang="stylus" scoped>
</style>
