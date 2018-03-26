<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Tabs" textx="Tabs very easy to implement (in process).">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div slot="ejemplo">
           <!-- //code -->

             <vs-tabs >
               <vs-tab vs-label="Home">
                 <div class="con-tab-ejemplo">
                   Home
                 </div>
               </vs-tab>
               <vs-tab vs-label="Service">
                 <div class="con-tab-ejemplo">

                   Service
                 </div>
               </vs-tab>
               <vs-tab vs-label="login">
                 <div class="con-tab-ejemplo">
                   login

                 </div>
               </vs-tab>
               <vs-tab :disabled="true" vs-label="Disabled">
                 <div class="con-tab-ejemplo">
                   Disabled

                 </div>
               </vs-tab>
             </vs-tabs>

         </div>
       </codex>
        <codex :float="true" titlex="Position" :code="code2">
        <div slot="ejemplo">

           <vs-tabs vs-color="rgb(93, 32, 122)">
             <vs-tab vs-label="top">
               <!-- top -->
               <vs-tabs vs-color="rgb(29, 55, 194)">
                 <vs-tab vs-label="Home">
                   <div class="con-tab-ejemplo">
                     Home
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="Service">
                   <div class="con-tab-ejemplo">
                     Service
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="login">
                   <div class="con-tab-ejemplo">
                     login
                   </div>

                 </vs-tab>
                 <vs-tab :disabled="true" vs-label="Disabled">
                   <div class="">
                     Disabled
                   </div>
                 </vs-tab>
               </vs-tabs>

             </vs-tab>
             <vs-tab vs-label="right">

               <!-- right -->
               <vs-tabs vs-position="right" vs-color="rgb(29, 55, 194)">
                 <vs-tab vs-label="Home">
                   <div class="con-tab-ejemplo">
                     Home
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="Service">
                   <div class="con-tab-ejemplo">
                     Service
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="login">
                   <div class="con-tab-ejemplo">
                     login
                   </div>
                 </vs-tab>
                 <vs-tab :disabled="true" vs-label="Disabled">
                   <div class="con-tab-ejemplo">
                     Disabled
                   </div>
                 </vs-tab>
               </vs-tabs>

             </vs-tab>
             <vs-tab vs-label="bottom">

               <!-- bottom -->
               <vs-tabs vs-position="bottom" vs-color="rgb(29, 55, 194)">
                 <vs-tab vs-label="Home">
                   <div class="con-tab-ejemplo">
                     Home
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="Service">
                   <div class="">
                     Service
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="login">
                   <div class="con-tab-ejemplo">
                     login
                   </div>
                 </vs-tab>
                 <vs-tab :disabled="true" vs-label="Disabled">
                   <div class="con-tab-ejemplo">
                     Disabled
                   </div>
                 </vs-tab>
               </vs-tabs>

             </vs-tab>
             <vs-tab vs-label="left">
               <!-- left -->
               <vs-tabs vs-position="left" vs-color="rgb(29, 55, 194)">
                 <vs-tab vs-label="Home">
                   <div class="con-tab-ejemplo">
                     Home
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="Service">
                   <div class="con-tab-ejemplo">
                     Service
                   </div>
                 </vs-tab>
                 <vs-tab vs-label="login">
                   <div class="con-tab-ejemplo">
                     login
                   </div>
                 </vs-tab>
                 <vs-tab :disabled="true" vs-label="Disabled">
                   <div class="con-tab-ejemplo">
                     Disabled
                   </div>
                 </vs-tab>
               </vs-tabs>

             </vs-tab>
           </vs-tabs>
           <!-- bottom-right -->

         </div>
       </codex>
       <!-- <codex :float="true" titlex="type" :code="code1">
       <div slot="ejemplo">
          <!-- //code
          <vs-tabs >
            <vs-tab vs-label="Home">
              <div class="">
                Home
              </div>
            </vs-tab>
            <vs-tab vs-label="Service">
              Service
            </vs-tab>
            <vs-tab vs-label="login">
              login
            </vs-tab>
            <vs-tab :disabled="true" vs-label="Disabled">
              Disabled
            </vs-tab>
          </vs-tabs>


          <vs-tabs vs-type="border-bottom" vs-color="rgb(33, 10, 142)" >
            <vs-tab vs-label="Home">
              <div class="">
                Home
              </div>
            </vs-tab>
            <vs-tab vs-label="Service">
              Service
            </vs-tab>
            <vs-tab vs-label="login">
              login
            </vs-tab>
            <vs-tab :disabled="true" vs-label="Disabled">
              Disabled
            </vs-tab>
          </vs-tabs>
        </div>
      </codex> -->
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
    return {
      value2_1:'asdasd',
      value2_2:'123123',
      api:[
        {
          name:'vs-label',
          type:'string',
          parametros:'',
          descripcion:'Texto en el boton del tab',
          default:'null'
        },
        {
          name:'vs-position',
          type:'string',
          parametros:'top,left,bottom,right',
          descripcion:'posision del menu tabs',
          default:'top'
        },
        {
          name:'vs-color',
          type:'string',
          parametros:'RGB, HEX',
          descripcion:'color del componente tabs',
          default:'primary'
        },
        {
          name:'disabled',
          type:'boolean',
          parametros:'true, false',
          descripcion:'button en disabled',
          default:'false'
        },
      ],
      code1:`
<template>
  <vs-tabs >
    <vs-tab vs-label="Home">
      <div class="con-tab-ejemplo">
        Home
      </div>
    </vs-tab>
    <vs-tab vs-label="Service">
      <div class="con-tab-ejemplo">

        Service
      </div>
    </vs-tab>
    <vs-tab vs-label="login">
      <div class="con-tab-ejemplo">
        login

      </div>
    </vs-tab>
    <vs-tab :disabled="true" vs-label="Disabled">
      <div class="con-tab-ejemplo">
        Disabled

      </div>
    </vs-tab>
  </vs-tabs>
</template>
      `,
      code2:`
<template>
<vs-tabs vs-color="rgb(93, 32, 122)">
  <vs-tab vs-label="top">
    <!-- top -->
    <vs-tabs vs-color="rgb(29, 55, 194)">
      <vs-tab vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab vs-label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login
        </div>

      </vs-tab>
      <vs-tab :disabled="true" vs-label="Disabled">
        <div class="">
          Disabled
        </div>
      </vs-tab>
    </vs-tabs>

  </vs-tab>
  <vs-tab vs-label="right">

    <!-- right -->
    <vs-tabs vs-position="right" vs-color="rgb(29, 55, 194)">
      <vs-tab vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab vs-label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
      <vs-tab :disabled="true" vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vs-tab>
    </vs-tabs>

  </vs-tab>
  <vs-tab vs-label="bottom">

    <!-- bottom -->
    <vs-tabs vs-position="bottom" vs-color="rgb(29, 55, 194)">
      <vs-tab vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab vs-label="Service">
        <div class="">
          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
      <vs-tab :disabled="true" vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vs-tab>
    </vs-tabs>

  </vs-tab>
  <vs-tab vs-label="left">
    <!-- left -->
    <vs-tabs vs-position="left" vs-color="rgb(29, 55, 194)">
      <vs-tab vs-label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab vs-label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab vs-label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
      <vs-tab :disabled="true" vs-label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vs-tab>
    </vs-tabs>

</template>
      `,
    }
  },
  methods:{
    cambio(){
      console.log("hola cambio");
    }
  }
}
</script>

<style lang="css" scoped>
.con-tab-ejemplo {
  width: 100%;
  padding: 15px;
  padding-top: 0px;
}
.ul {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.modelx {
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
  background: rgb(240, 240, 240);
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
