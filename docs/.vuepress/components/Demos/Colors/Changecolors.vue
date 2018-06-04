<template lang="html">
  <div class="con-colors">
    <ul>
      <li class="primarychange">
          primary
      </li>
      <li class="successchange">
        success
      </li>
      <li class="dangerchange">
        danger
      </li>
      <li class="warningchange">
        warning
      </li>
      <li class="darkchange">
        dark
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.con-colors ul{
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-colors li{
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  background: rgb(155, 250, 149);
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  cursor: default;
  flex-direction: column;
}
.primarychange {
  background: #5b3cc4 !important;
  box-shadow: 0px 15px 40px -10px #5b3cc4;
}
.successchange {
  background: rgb(23, 201, 100) !important;
  box-shadow: 0px 15px 40px -10px rgb(23, 201, 100);
}
.dangerchange {
  background: rgb(242, 19, 93) !important;
  box-shadow: 0px 15px 40px -10px rgb(242, 19, 93);
}
.warningchange {
  background: rgb(255, 130, 0) !important;
  box-shadow: 0px 15px 40px -10px rgb(255, 130, 0);
}
.darkchange {
  background: rgb(36, 33, 69) !important;
  box-shadow: 0px 15px 40px -10px rgb(36, 33, 69);
}
</style>
