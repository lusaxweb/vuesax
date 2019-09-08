<template>
  <div class="con-demo flex">
    <div class="content-inputs">
      <input placeholder="Correo" v-model="mail" type="text">

      <vs-alert color="danger" v-model="validMail">
        <template v-slot:icon>
          <i class='bx bxs-error' ></i>
        </template>
        <template v-slot:header>
          Invalid
        </template>
          The data you entered is not valid for an email

        <template v-slot:footer>
          <button
            @click="mail = ''" >
            Clear Input
          </button>
        </template>
      </vs-alert>

      <input placeholder="Password" v-model="pass" type="password">

      <vs-alert content-hidden color="danger" v-model="validPass">
        <template v-slot:icon>
          <i class='bx bxs-error' ></i>
        </template>
        <template v-slot:header>
          The password is invalid
        </template>
          The password you entered is insecure please consider

          <ul>
            <li>
              Passwords must be:
            </li>

            <ul>
              <li>
                At least 8 characters long, max length anything
              </li>
              <li>
                Include at least 1 lowercase letter
              </li>
              <li>
                1 capital letter
              </li>
              <li>
                1 number
              </li>
              <li>
                1 special character => <code>!@#$%^&*</code>
              </li>
            </ul>
          </ul>
      </vs-alert>
    </div>
  </div>
</template>
<script>
  export default {
    data:() => ({
      pass: '',
      mail: '',
      validPass: false,
      validMail: false,
    }),
    watch: {
      mail() {
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        this.validMail = !(re.test(this.mail)) && !!this.mail
      },
      pass() {
        this.validPass = !(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(this.pass)) && !!this.pass
      },
    },
  }
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 40px
  padding-bottom 40px

.content-inputs
  width 400px
  display flex
  flex-direction column


input
  padding 10px
  border 1px solid rgba(0,0,0,.1)
  margin-top 15px
  margin-bottom 10px
  border-radius 10px
  width 100%

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
</style>
