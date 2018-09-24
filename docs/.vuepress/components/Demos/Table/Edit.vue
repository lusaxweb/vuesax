<template lang="html">
  <div>
    <vs-table >
      <template slot="thead">
        <vs-th>
          Email - Input
        </vs-th>
        <vs-th>
          Name - Select
        </vs-th>
        <vs-th>
          Nro - Input-number
        </vs-th>
        <vs-th>
          Nro - Slider
        </vs-th>
      </template>
      <vs-tr :key="indextr" v-for="(tr, indextr) in dataTable" >
        <vs-td :data="dataTable[indextr].email">
          {{dataTable[indextr].email}}

          <template slot="edit">
            <vs-input v-model="dataTable[indextr].email" class="inputx" placeholder="Email"/>
          </template>
        </vs-td>

        <vs-td :data="dataTable[indextr].username">
          {{dataTable[indextr].username}}

          <template slot="edit">
            <!-- <vs-input v-model="dataTable[indextr].username" class="inputx" placeholder="Email"/> -->
            <vs-select
              label="Users"
              v-model="dataTable[indextr].username"
              >
              <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in users" />
            </vs-select>
          </template>
        </vs-td>

        <vs-td :data="dataTable[indextr].id">
          {{dataTable[indextr].id}}

          <template slot="edit">
            <vs-input-number v-model="dataTable[indextr].id"/>
          </template>
        </vs-td>

        <vs-td :data="dataTable[indextr].id">
          {{dataTable[indextr].id}}

          <template slot="edit">
            <!-- <vs-input-number v-model="dataTable[indextr].id"/> -->
            <vs-slider :max="20" v-model="dataTable[indextr].id"/>
          </template>
        </vs-td>

      </vs-tr>
    </vs-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  }),
}
</script>

<style lang="stylus">
</style>
