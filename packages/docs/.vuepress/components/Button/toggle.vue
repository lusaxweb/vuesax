<template>
  <div class="con-demo flex">
    <vs-button @click="handleClick" :icon="success" :upload="sending" :color="success ? 'success' : 'primary'" animation-type="vertical" >
      <span v-if="!success">
        <i class='bx bx-mail-send' ></i>
          Send
      </span>

      <i class='bx bx-check' v-else ></i>
    </vs-button>

    <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
      <i class='bx bxl-facebook-square' ></i>
      {{ successFace ? 'Logout' : 'Facebook' }}
      <template #animate >
         <i class='bx bx-user' ></i> Login
      </template>
    </vs-button>
  </div>
</template>
<script>
export default {
  data:() => ({
    sending: false,
    success: false,

    loadingFace: false,
    successFace: false
  }),
  methods:{
    handleClick() {
      this.sending = true

      setTimeout(() => {
        this.sending = false
        this.success = !this.success
      }, 2000);
    },
    handleClickFace() {
      this.loadingFace = true

      setTimeout(() => {
        this.loadingFace = false
        this.successFace = !this.successFace
      }, 2000);
    }
  }
}
</script>
<style lang="stylus" scoped>
.bx-check
  font-size 1.4rem
  margin-left 0px !important
  margin-bottom 6px !important
</style>
