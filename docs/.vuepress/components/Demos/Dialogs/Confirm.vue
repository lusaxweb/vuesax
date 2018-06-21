<template lang="html">
  <div class="centerx">
    <vs-button @click="activeConfirm = true" vs-color="danger" vs-type="gradient">Run Confirm</vs-button>
    <vs-dialog
      vs-color="danger"
      vs-title="Delete Image"
      vs-type="confirm"
      @vs-accept="acceptAlert"
      :vs-active.sync="activeConfirm">
      You are sure to delete this image?
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeConfirm:false
  }),
    methods:{
      acceptAlert(color){
        this.$vs.notify({
          color:'danger',
          title:'Deleted image',
          text:'The selected image was successfully deleted'
        })
      },
    }
}
</script>

<style lang="css">
</style>
