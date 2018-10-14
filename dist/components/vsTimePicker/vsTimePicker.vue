<template lang="html">
  <div
    v-bind="$attrs"
    class="vs-component vs-timepicker"
    v-on="$listeners">
    <div class="con-vs-time">
      <div class="con-icon-timepicker">
        <vs-icon>
          schedule
        </vs-icon>
      </div>

      <div
        ref="hours"
        class="time-h time"
        @click="activeHours = true" >
        {{ getHours }}
        <div
          v-show="activeHours"
          ref="ulhours"
          :style="styleUlHours"
          class="con-ul-time">
          <ul
            class="ul-time">
            <li
              v-for="hour in hours24"
              :class="{'active-time': hour == getHours}"
              @click="changeHours(hour)" >
              {{ hour }}
            </li>
          </ul>
        </div>
      </div>



      <div
        ref="minutes"
        class="time-m time"
        @click="activeMinutes = true" >
        {{ getMinutes }}
        <div
          v-show="activeMinutes"
          ref="ulminutes"
          :style="styleUlminutes"
          class="con-ul-time">
          <ul
            class="ul-time">
            <li
              v-for="minute in minutes"
              :class="{'active-time': minute == getMinutes}"
              @click="changeMinutes(minute)" >
              {{ minute }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "VsTimePicker",
  inheritAttrs:false,
  props:{
    value:{}
  },
  data:()=>({
    activeHours: false,
    activeMinutes: false,
    cords:{
      hours:{},
      minutes:{},
    },
    hours24: [
      '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',
    ],
    minutes: [
      '00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29',
      '30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'
    ]
  }),
  computed:{
    getMinutes() {
      let minutesx = this.value.split(':')[1]
      return minutesx
    },
    getHours() {
      let hoursx = this.value.split(':')[0]
      return hoursx
    },
    styleUlHours() {
      return {
        left: `${this.cords.hours.left}px`,
        top: `${this.cords.hours.top}px`
      }
    },
    styleUlminutes() {
      return {
        left: `${this.cords.minutes.left}px`,
        top: `${this.cords.minutes.top}px`
      }
    }
  },
  watch:{
    value() {
      this.activeHours = false
      this.activeMinutes = false
    }
  },
  mounted () {
    this.insertBody(this.$refs.ulhours)
    this.insertBody(this.$refs.ulminutes)
    this.changePositions()
  },
  methods: {
    changeHours(hour) {
      this.$emit('input', `${hour}:${this.getMinutes}`)
    },
    changeMinutes(minute) {
      this.$emit('input', `${this.getHours}:${minute}`)
    },
    changePositions() {
      // add hours ul position
      let cordsHours = this.$refs.hours.getBoundingClientRect()
      this.cords.hours = cordsHours


      // add minutes ul position
      let cordsMinutes = this.$refs.minutes.getBoundingClientRect()
      this.cords.minutes = cordsMinutes
    },
    insertBody(elx){
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>
