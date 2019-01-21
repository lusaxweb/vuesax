<template lang="html">
  <div class="con-colors">
    <ul>
      <li class="primary">
        primary
      </li>
      <li class="success">
        success
      </li>
      <li class="danger">
        danger
      </li>
      <li class="warningx">
        warning
      </li>
      <li class="dark">
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
}
.primary {
  background: rgb(var(--vs-primary)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-primary),.9);
}
.success {
  background: rgb(var(--vs-success)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-success),.9);
}
.danger {
  background: rgb(var(--vs-danger)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-danger),.9);
}
.warningx {
  background: rgb(var(--vs-warning)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-warning),.9);
}
.dark {
  background: rgb(var(--vs-dark)) !important;
  box-shadow: 0px 15px 40px -10px rgba(var(--vs-dark),.9);
}
@media (max-width: 550px) {
  .con-colors ul {
    display: block !important;
    padding-left: 0px;
  }
  .con-colors ul li {
    margin-left: 0px !important;
    height: auto !important;
    padding: 10px;
    width: 100% !important;
    box-sizing: border-box;
  }
}
</style>
