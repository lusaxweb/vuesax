<template lang="html">
  <div class="">
    <con-doc  :apix="api" titlex="Notifications" textx="Nice simple and interactive notifications." >
      <div slot="codes">
        <codex :float="true" titlex="Notifications Defaults" :code="code1">
          <div slot="ejemplo">

            <vs-button @click="$vs.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})" vs-type="primary-border">Notificacion white</vs-button>
            <vs-button @click="$vs.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" vs-type="primary-flat">Notificacion Primary</vs-button>
            <vs-button @click="$vs.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})" vs-type="success-flat">Notificacion Success</vs-button>
            <vs-button @click="$vs.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})" vs-type="danger-flat">Notificacion Danger</vs-button>
            <vs-button @click="$vs.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})" vs-type="warning-flat">Notificacion Warning</vs-button>
            <vs-button @click="$vs.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})" vs-type="dark-flat">Notificacion Dark</vs-button>
            <vs-button @click="notiAzar()" vs-type="success-gradient">Notificacion Color Al Azar</vs-button>

          </div>
          </codex>

          <codex :float="true" titlex="Positions" :code="code2">
            <div slot="ejemplo">
              <vs-button @click="$vs.notify({title:'Position Default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" vs-type="primary-flat">Position Default</vs-button>

              <vs-button @click="$vs.notify({title:'Position top-right',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',position:'top-right'})" vs-type="success-flat">Position Top Right</vs-button>

              <vs-button @click="$vs.notify({title:'Position top-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',position:'top-left'})" vs-type="danger-flat">Position Top Left</vs-button>

              <vs-button @click="$vs.notify({title:'Position bottom-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',position:'bottom-left'})" vs-type="warning-flat">Position Bottom Left</vs-button>

              <vs-button @click="$vs.notify({title:'Position bottom-center',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',position:'bottom-center'})" vs-type="dark-flat"> Position Bottom Center</vs-button>

              <vs-button @click="notiAzarCenter()" vs-type="success-gradient">Position Top Center Color Al Azar</vs-button>
            </div>
            </codex>

            <codex :float="true" titlex="Icons" :code="code3">
              <div slot="ejemplo">

                <p class="px">Los iconos de Vuesax utilizan la biblioteca de fuentes de Google Material Icons. Para obtener una lista de todos los íconos disponibles, visite la página oficial de <a target="_blank" href="https://material.io/icons/">Iconos de materiales</a>. </p>

                <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})" vs-type="primary-flat">Icon Mail</vs-button>

                <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})" vs-type="success-flat">Icon check_box</vs-button>

                <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})" vs-type="danger-flat">Icon favorite</vs-button>

                <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})" vs-type="warning-flat">Icon error</vs-button>

                <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})" vs-type="dark-flat">Icon chat</vs-button>

                <vs-button @click="notiAzarIcon()" vs-type="success-gradient">Icon Color Al Azar</vs-button>
              </div>
              </codex>

              <codex :float="true" titlex="Fixed and function click" :code="code4">
                <div slot="ejemplo">
                  <vs-button @click="myFunction()" vs-type="primary-flat">Run Example</vs-button>
                </div>
              </codex>

              <codex :float="true" titlex="Time" :code="code5">
                <div slot="ejemplo">
                  <vs-button @click="$vs.notify({title:'Time default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-type="primary-flat">Time default</vs-button>
                  <vs-button @click="$vs.notify({time:4000,title:'Time 4s (4000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-type="primary-flat">Time 4s (4000)</vs-button>
                  <vs-button @click="$vs.notify({time:8000,title:'Time 8s (8000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-type="primary-flat">Time 8s (8000)</vs-button>
                </div>
              </codex>

      </div>
    </con-doc>
  </div>
</template>

<script>
import conDoc from '../../../components/conDoc.vue'
import titlex from '../../../components/title.vue'
import codex from '../../../components/code.vue'
import $ from 'jquery'
export default {
  components:{
    conDoc,
    codex,
  },
  data(){
    return{
      api:[
        {
          name:'$vs.notify',
          type:'function',
          parametros:'(title,text,color,position,icon,click,fixed)',
          descripcion:'Funcion que hace aparecer la notificacion',
          default:'null',
          ejemplo:`this.$vs.notify({
    title:'Icon mail',
    text:'Lorem ipsum dolor sit amet',
    color:'dark',
    icon:'chat'
})`
        },
        {
          name:'title',
          type:'string',
          parametros:'string',
          descripcion:'Title of the notification',
          default:'null',
          ejemplo:"this.$vs.notify({title:'my title'})"
        },
        {
          name:'time',
          type:'Number',
          parametros:'',
          descripcion:'Waiting time for notification to disappear',
          default:'null',
          ejemplo:"this.$vs.notify({time:4000})"
        },
        {
          name:'text',
          type:'string',
          parametros:'string',
          descripcion:'Notification text',
          default:'null',
          ejemplo:"this.$vs.notify({text:'my text'})"
        },
        {
          name:'color',
          type:'string',
          parametros:'RGB, HEX, primary, success, danger, warning, dark',
          descripcion:'Background color of the notification',
          default:'null',
          ejemplo:"this.$vs.notify({color:'rgb(97, 17, 237)'})"
        },
        {
          name:'position',
          type:'string',
          parametros:'bottom-right, top-right, top-left, bottom-left, bottom-center, top-center',
          descripcion:'Posision in which the notification appears',
          default:'null',
          ejemplo:"this.$vs.notify({posision:'top-center'})"
        },
        {
          name:'icon',
          type:'string',
          parametros:'Icon materia',
          descripcion:'Notification Icon',
          default:'null',
          ejemplo:"this.$vs.notify({icon:'email'})"
        },
        {
          name:'click',
          type:'function',
          parametros:'function(){ ... }, ()=>{ ... }',
          descripcion:'Function executed by clicking on the notification',
          default:'null',
          ejemplo:"this.$vs.notify({click:()=>{ ... }})"
        },
        {
          name:'fixed',
          type:'boolean',
          parametros:'true, false',
          descripcion:'Removes the automatic elimination of the notification',
          default:'false',
          ejemplo:"this.$vs.notify({fixed:true})"
        },


      ],
      code1:`
<template>

  <vs-button
    @click="$vs.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})"
    vs-type="primary-border">
      Notificacion white
    </vs-button>

  <vs-button
    @click="$vs.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})"
    vs-type="primary-flat">
      Notificacion Primary
    </vs-button>

  <vs-button
    @click="$vs.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})"
    vs-type="success-flat">
      Notificacion Success
    </vs-button>

  <vs-button
    @click="$vs.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})"
    vs-type="danger-flat">
      Notificacion Danger
    </vs-button>

  <vs-button
    @click="$vs.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})"
    vs-type="warning-flat">
      Notificacion Warning
    </vs-button>

  <vs-button
    @click="$vs.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})"
    vs-type="dark-flat">
      Notificacion Dark
    </vs-button>

  <vs-button
    @click="notiAzar()"
    vs-type="success-gradient">
      Notificacion Color Al Azar
    </vs-button>

</template>

<script>
  export default {
    methods:{
      notiAzar(){
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        let color = 'rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')'

        this.$vs.notify({
          title:'Color',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:color
        })

      },
    }
  }
</\script>
`,
      code2:`
<template>

  <vs-button
    @click="$vs.notify({title:'Position Default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})"
    vs-type="primary-flat">
      Position Default
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Position top-right',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',position:'top-right'})"
    vs-type="success-flat">
      Position Top Right
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Position top-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',position:'top-left'})"
    vs-type="danger-flat">
      Position Top Left
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Position bottom-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',position:'bottom-left'})"
    vs-type="warning-flat">
      Position Bottom Left
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Position bottom-center',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',position:'bottom-center'})"
    vs-type="dark-flat">
      Position Bottom Center
  </vs-button>

  <vs-button
    @click="notiAzarCenter()"
    vs-type="success-gradient">
      Position Top Center Color Al Azar
  </vs-button>

</template>

<script>
  export default {
    methods:{

        notiAzarCenter(){
          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
          let color = 'rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')'

          this.$vs.notify({title:'Position bottom-center',text:'Lorem ipsum dolor sit amet, consectetur',color:color,position:'top-center'})
        }

    }
  }
</\script>
`,
      code3:`
<template>

  <vs-button
    @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})"
    vs-type="primary-flat">
      Icon Mail
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})"
    vs-type="success-flat">
      Icon check_box
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})"
    vs-type="danger-flat">
      Icon favorite
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})"
    vs-type="warning-flat">
      Icon error
  </vs-button>

  <vs-button
    @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})"
    vs-type="dark-flat">
      Icon chat
  </vs-button>

  <vs-button
    @click="notiAzarIcon()"
    vs-type="success-gradient">
      Icon Color Al Azar
  </vs-button>

</template>

<script>
  export default {
    methods:{

        notiAzarIcon(){
          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
          let color = 'rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')'

          this.$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
        },

    }
  }
</\script>
`,
      code4:`
<template>

  <vs-button
    @click="myFunction()"
    vs-type="primary-flat">
      Run Example
  </vs-button>

</template>

<script>
  export default {
    methods:{

      myFunction(){
        this.$vs.notify({
          title:'Function click',
          text:'Has click en mi',
          color:'primary',
          fixed:true,
          click:()=>{ // arrow function
            //function segundaria
            this.$vs.notify({
              title:'Function segundaria',
              text:'Ejecutada la function al hacer click',
              color:'success',
              icon:'check_box'
            })
          },
        })

      },

    }
  }
</\script>
`,
code5:`
<template>

<vs-button @click="$vs.notify({
  title:'Time default',
  text:'Lorem ipsum dolor sit amet, consectetur',
  color:'primary',icon:'query_builder'
})"
vs-type="primary-flat">Time default</vs-button>
<vs-button @click="$vs.notify({
  time:4000,title:'Time 4s (4000)',
  text:'Lorem ipsum dolor sit amet, consectetur',
  color:'primary',icon:'query_builder'
})"
vs-type="primary-flat">Time 4s (4000)</vs-button>
<vs-button @click="$vs.notify({
  time:8000,title:'Time 8s (8000)',
  text:'Lorem ipsum dolor sit amet, consectetur',
  color:'primary',icon:'query_builder'
})" vs-type="primary-flat">Time 8s (8000)</vs-button>

</template>

<script>
export default {
methods:{

}
}
</\script>
`,


}
  },
  methods:{
    notification1(){
      this.$vs.notify({
            text:'hola mundo esto es un json',
            color:'primary',
            position:'top-center',
            fixed:true,
            click:()=>{
            console.log("paso");
            this.$vs.notify({text:'hola soy el numero 2',color:'danger'})
        },
      })
    },
    pruebax(){
      console.log('hola mundo vuesax')
    },
    myFunction(){
      this.$vs.notify({
        title:'Function click',
        text:'Has click en mi',
        color:'primary',
        fixed:true,
        click:()=>{
          //function segundaria
          this.$vs.notify({
            title:'Function segundaria',
            text:'Ejecutada la function al hacer click',
            color:'success',
            icon:'check_box'
          })
        },
      })
    },
    notiAzar(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.notify({
        title:'Color',
        text:'Lorem ipsum dolor sit amet, consectetur',
        color:color
      })

    },
    notiAzarIcon(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      // this.vsNoti('Lorem ipsum dolor sit amet, consectetur',color,null,'verified_user')
      this.$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
    },
    notiAzarCenter(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.notify({title:'Position bottom-center',text:'Lorem ipsum dolor sit amet, consectetur',color:color,position:'top-center'})
    }
  }
}
</script>

<style lang="css" scoped>
.px {
  padding: 10px;
  font-size: 15px;
  padding-bottom: 30px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
