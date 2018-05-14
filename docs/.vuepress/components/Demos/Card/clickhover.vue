<template lang="html">
  <div class="">
    <vs-card vsColor="success">
      <vs-card-media vsMedia="https://placeimg.com/640/480/any"></vs-card-media>
      <vs-card-header vsBackgroundColor="success" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="check"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
    <vs-card vs-click="clickCard" vsColor="success">
      <vs-card-header vsBackgroundColor="success" vsTitle="A nice title" vsIcon="check"></vs-card-header>
      <vs-card-media vsMedia="https://placeimg.com/640/480/any"></vs-card-media>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
  </div>
</template>

<script>
export default {
  methods:{
    clickCard(){
      this.$vs.notify({title:'Click in Card',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>

<style lang="css">
</style>
