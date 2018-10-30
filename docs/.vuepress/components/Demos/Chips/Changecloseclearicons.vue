<template lang="html">
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" remove-icon="delete_forever">
      <vs-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable close-icon="delete">
        {{ chip }}
      </vs-chip>
    </vs-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "Vuejs",
        "Node",
        "Vuesax"
      ]
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
