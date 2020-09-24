<template lang="html">
  <div>
    <vs-input
      :success="true"
      success-text="The email is valid"
      placeholder="Email Success"
      val-icon-success="done"
      v-model="value1"/>
      <vs-input
      :danger="true"
      danger-text="The password does not meet the standards"
      placeholder="Password Danger"
      val-icon-danger="clear"
      v-model="value2"/>
      <vs-input
      :warning="true"
      warning-text="The entered data could not be verified"
      placeholder="Date Warning"
      val-icon-warning="warning"
      v-model="value3"/>
      <vs-input
      description-text="Just enter the first 2 (two) numbers of your phone"
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
