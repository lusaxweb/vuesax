<template lang="html">
  <div class="centex examplex">
    <vs-switch v-model="switch1">
      <span slot="on">On</span>
      <span slot="off">Off</span>
    </vs-switch>
    <vs-switch color="success" v-model="switch2">
      <span slot="on">Accept</span>
      <span slot="off">Cancel</span>
    </vs-switch>
    <vs-switch color="danger" vs-icon-off="close" v-model="switch3">
      <span slot="on">Remove</span>
    </vs-switch>
    <vs-switch color="warning" vs-icon-on="error_outline" v-model="switch4">
      <span slot="off">Prevent</span>
    </vs-switch>
    <vs-switch color="dark" vs-icon-on="check_box" vs-icon-off="block" v-model="switch5">
      <span slot="on">YES</span>
      <span slot="off">NO</span>
    </vs-switch>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
    }
  }
}
</script>

<style lang="css">
</style>
