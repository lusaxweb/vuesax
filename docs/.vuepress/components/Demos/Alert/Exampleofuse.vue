<template lang="html">
  <div class="centerx">
    <vs-input vs-label="Enter only numbers" placeholder="0123456789" v-model="value"/>

    <vs-alert :active="inputValid" color="danger" icon="new_releases">
      <span>the value is <b>invalid</b> you can only enter numbers</span>
    </vs-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:''
    }
  },
  computed:{
    inputValid(){
      return !/^\d+$/.test(this.value)
    }
  }
}
</script>
