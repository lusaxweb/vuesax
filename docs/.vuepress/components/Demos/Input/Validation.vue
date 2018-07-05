<template lang="html">
  <div>
    <vs-input 
      :vs-success="true"  
      vs-success-text="The mail is valid" 
      placeholder="Email Success"
      v-model="value1"/>
      <vs-input 
      :vs-danger="true" 
      vs-danger-text="The password does not meet the standards" 
      placeholder="Password Danger"
      v-model="value2"/>
      <vs-input 
      :vs-warning="true" 
      vs-warning-text="The entered data could not be verified" 
      placeholder="Date Warning"
      v-model="value3"/>
      <vs-input 
      vs-description-text="Just enter the first 2 (two) numbers of your phone" 
      placeholder="Phone Description"
      v-model="value4"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
    }
  }
}
</script>

<style lang="css" scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
  }
</style>
