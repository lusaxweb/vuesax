<template lang="html">
  <div class="centerx">
    <vs-button v-if="!chip1&&!chip2&&!chip3&&!chip4&&!chip5" @click="chip1=true,chip2=true,chip3=true,chip4=true,chip5=true" vs-type="filled">Reset Chips</vs-button>
    <vs-chip v-model="chip1" vs-closable vs-color="primary">primary</vs-chip>
    <vs-chip v-model="chip2" vs-closable vs-color="warning">warning</vs-chip>
    <vs-chip v-model="chip3" vs-closable vs-color="danger">danger</vs-chip>
    <vs-chip v-model="chip4" vs-closable vs-color="success">success</vs-chip>
    <vs-chip v-model="chip5" vs-closable vs-color="dark">dark</vs-chip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chip1:true,
      chip2:true,
      chip3:true,
      chip4:true,
      chip5:true
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
