<template lang="html">
  <div v-if="api"  id="vs-api" class="con-api">
    <h2 class="h2">API <a href="#vs-api">#</a> </h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Parameters</th>
          <th>Description</th>
          <th>default</th>
        </tr>
      </thead>
      <tbody v-for="tr in api">
        <tr>
          <td width="120px">{{tr.name}}</td>
          <td>{{tr.type}}</td>
          <td>{{tr.parameters}}</td>
          <td>{{tr.description}}</td>
          <td>{{tr.default}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    api(){
      return this.$page.frontmatter.API
    },
    data() {
      return this.$page.frontmatter
    },
  },
  mounted(){
    // this.$parent.codes.push({
    //   idx:'vs-api',
    //   title:'API'
    // })
  }
}
</script>

<style lang="css" scoped>
.h2 a {
  color: rgba(0, 0, 0, 0.61);
  font-size: 22px;
  transform: scale(.5);
  opacity: 0;
  transition: all .3s ease;
  display: inline-block;
  cursor: pointer;
}
.h2 a:hover {
  opacity: .7 !important;
}
.h2:hover a {
  opacity: 1;
  transform: scale(1);
  color: rgb(var(--morado));
}
.h3-ejemplo {
  padding: 20px;
  font-weight: lighter;
}
.btn-ejemplo button{
  padding: 10px;
}
.btn-ejemplo{
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-api {
  width: calc(100% - 20px);
  margin: auto;
  max-width: 1200px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
  margin-top: 0px !important;
}
.con-api::-webkit-scrollbar {
  height: 5px;
}
.con-api::-webkit-scrollbar-thumb {
  background: rgb(200, 200, 200);
}
.con-api h2  {
  color: rgb(var(--morado));
  padding: 15px;
  /* font-weight: lighter; */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.050); */
}
table {
    width: 100%;
    border-collapse: collapse;
}
table td {
  padding: 7px;
  border: 1px solid rgba(0, 0, 0, 0.050);
  color: rgba(0, 0, 0, 0.7);
  font-size: .8rem
}
th {
  padding: 7px;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.050);
  font-size: .8rem !important;
  /* color: rgb(var(--morado)); */
  /* font-weight: lighter; */
  background: rgb(250, 250, 250);
}
tbody tr{
  border-bottom: 1px solid rgba(0, 0, 0, 0.050);
}

@media only screen and (max-width: 650px) {
  .con-api {
    width: calc(100% - 30px);
  }
  table td {
    font-size: 13px !important;
  }
}
</style>
