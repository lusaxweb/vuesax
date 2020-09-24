<template lang="html">
  <div class="">
    <ul class="leftx">
      <li class="modelx">
        {{radios2}}
      </li>
      <li>
        <vs-radio v-model="radios2" vs-value="primary">Primary</vs-radio>
      </li>
      <li>
        <vs-radio color="success" v-model="radios2" vs-value="Success">Success</vs-radio>
      </li>
      <li>
        <vs-radio color="danger" v-model="radios2" vs-value="Danger">Danger</vs-radio>
      </li>
      <li>
        <vs-radio color="warning" v-model="radios2" vs-value="Warning">Warning</vs-radio>
      </li>
      <li>
        <vs-radio color="dark" v-model="radios2" vs-value="Dark">Dark</vs-radio>
      </li>
      <li>
        <vs-radio color="rgb(87, 251, 187)" v-model="radios2" vs-value="RGB">RGB</vs-radio>
      </li>
      <li>
        <vs-radio color="#e48346" v-model="radios2" vs-value="HEX">HEX</vs-radio>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      radios2:'primary',
    }
  }
}
</script>

<style lang="css">
</style>
