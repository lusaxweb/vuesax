<template>
  <div class="con-demo flex">
    <vs-button >
      Home
      <template #animate >
        <i class='bx bx-home-alt' ></i>
      </template>
    </vs-button>

    <vs-button flat color="success" animation-type="vertical" >
      Message
      <template #animate >
        <i class='bx bx-mail-send' ></i> Send
      </template>
    </vs-button>

    <vs-button border animation-type="fade" >
      Store
      <template #animate >
        <i class='bx bxs-shopping-bag' ></i>
      </template>
    </vs-button>

    <vs-button icon relief color="danger" animation-type="rotate" >
      <i class='bx bxs-like' ></i>
      <template #animate >
        <i class='bx bxs-trophy' ></i>
      </template>
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
