<template>
  <div class="con-demo flex">
    <vs-alert class="alert-danger" color="danger">
      <template v-slot:icon>
        <i class='bx bx-user-x' ></i>
      </template>

      <template v-slot:header>
        Delete user
      </template>

      You are sure to permanently <strong>delete</strong> this user, this change is irreversible

      <template v-slot:footer>

        <button>Accept</button>

      </template>
    </vs-alert>

    <vs-alert class="alert-success" color="success">
      <template v-slot:icon>
        <i class='bx bx-save' ></i>
      </template>

      <template v-slot:header>
        Save changes
      </template>

      Please keep the changes to continue

      <template v-slot:footer>

        <button>Cancel</button>
        <button>Save</button>

      </template>
    </vs-alert>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 20px
  padding-bottom 20px
.alert-danger
  button
    padding 7px 20px
    border 0px
    border-radius 15px
    background rgb(255, 71, 87)
    color rgb(255,255,255)
    cursor pointer
    transition all .25s ease
    &:hover
      opacity .7
.alert-success
  button:first-child
    padding 7px 20px
    border 0px
    border-radius 15px
    cursor pointer
    transition all .25s ease
    margin-right 10px
    background transparent
    color $textColor
    opacity .7
    &:hover
      opacity 1
  button:last-child
    padding 7px 20px
    border 0px
    border-radius 15px
    background rgb(70, 201, 58)
    color rgb(255,255,255)
    cursor pointer
    transition all .25s ease
    &:hover
      opacity .7
</style>
