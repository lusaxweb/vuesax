<template lang="html">
  <div class="">
    <con-doc :text="true" :apix="api" titlex="Grid" textx="
simple grid to make the design simpler and faster to specify.">
      <div slot="codes">
        <codex :text="true" titlex="Introduction">
          <div slot="text">
            In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can have stable arrangement.
<br><br>
Following is a brief look at how it works:
<br>
<span class="numero">1 - </span>Establish a set of column in the horizontal space defined by row (abbreviated col)
<br>
<span class="numero">2 - </span>Your content elements should be placed directly in the col, and only col should be placed directly in row
<br>
<span class="numero">3 - </span>The column grid system is a value of 1-12 to represent its range spans. For example, three columns of equal width can be created by .col-4 (33.3%).
<br>
<span class="numero">4 - </span>If the sum of col spans in a row are more than 12, then the overflowing col as a whole will start a new line arrangement.
          </div>
        </codex>
        <codex text="true" :float="true" titlex="Design concept" :code="code1">
          <div  slot="text">
            With the directive <b>vs-w</b> define the width of the column (<b>vs-col</b>) its value is <b>1-12</b> an example of sizes would be: <b>12 = 100%</b>,<b>6 = 50%</b>,<b>4 = 25%</b>
           </div>
        <div  slot="ejemplo">
           <!-- //code -->
           <div class="con-concept">
             <vs-row>
               <vs-col  v-tooltip="'col - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                 100%
               </vs-col>
             </vs-row>

             <vs-row>
               <vs-col :key="index" v-for="col,index in 2" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                 50%
               </vs-col>
             </vs-row>

             <vs-row>
               <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                 33.3%
               </vs-col>
             </vs-row>

             <vs-row>
               <vs-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                 25%
               </vs-col>
             </vs-row>

             <vs-row>
               <vs-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                 16.6%
               </vs-col>
             </vs-row>

             <vs-row>
               <vs-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
                 8.3%
               </vs-col>
             </vs-row>
           </div>
         </div>
       </codex>


       <codex text="true" :float="true" titlex="Column offset" :code="code2">
         <div  slot="text">
            <!-- //code -->
            To give a distance with respect to the left we have the directive <b>vs-offset</b> that with the same measures <b>1-12</b> we add the space specified a serious example <b>12 = 100%</b>, <b>6 = 50%</b>, <b>4 = 25%</b>
          </div>
       <div  slot="ejemplo">
          <!-- //code -->
          <div class="con-concept">
            <vs-row vs-w="12">
              <vs-col vs-offset="5" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                offset - 6
              </vs-col>
            </vs-row>

            <vs-row>
              <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                offset - 2
              </vs-col>
            </vs-row>

            <vs-row>
              <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                offset - 8
              </vs-col>
            </vs-row>

            <vs-row>
              <vs-col vs-offset="10" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
                offset - 7
              </vs-col>
            </vs-row>

            <vs-row>
              <vs-col vs-offset="4" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                offset - 4
              </vs-col>
            </vs-row>
          </div>
        </div>
      </codex>

      <codex text="true" :float="true" titlex="Flex layout" :code="code3">
        <div  slot="text">
           <!-- //code -->
           If what we need is to align the elements horizontally we can do it with the <b>vs-justify</b> directive that has as parameters the already known attributes of css: <b>flex-start</b>, <b>center</b>, <b>flex-end</b>, <b>space-around</b>, <b>space-between</b>.
         </div>
      <div  slot="ejemplo">
         <!-- //code -->
         <div class="con-concept">
           <vs-row vs-w="12">
             <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
               offset - 6
             </vs-col>
           </vs-row>

           <vs-row vs-type="flex" vs-justify="center">
             <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
               offset - 6
             </vs-col>
           </vs-row>

           <vs-row vs-type="flex" vs-justify="flex-end">
             <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
               offset - 6
             </vs-col>
           </vs-row>


           <vs-row vs-type="flex" vs-justify="space-around">
             <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
               offset - 6
             </vs-col>
           </vs-row>

           <vs-row vs-type="flex" vs-justify="space-between">
             <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
               offset - 6
             </vs-col>
           </vs-row>
         </div>
       </div>
     </codex>

     <codex text="true"  :float="true" titlex="Flex alignment" :code="code4">
       <div  slot="text">
          <!-- //code -->
          To align the elements vertically we have the directive <b>vs-align</b> that as parameters the same known values ​​of css: <b>center</b>, <b>flex-end</b>, <b>flex-start</b>
        </div>
     <div  slot="ejemplo">
        <!-- //code -->
        <div class="con-alignment con-concept">
          <h3>Align Top</h3>
          <vs-row vs-type="flex" vs-justify="center" vs-w="12">
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
          </vs-row>

          <h3>Align Center</h3>
          <vs-row vs-type="flex" vs-align="center" vs-justify="space-around" vs-w="12">
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
          </vs-row>

          <h3>Align Bottom</h3>
          <vs-row vs-type="flex" vs-align="flex-end" vs-justify="space-between" vs-w="12">
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
            <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
              col - 3
            </vs-col>
          </vs-row>
        </div>
      </div>
    </codex>

     <codex text="true" :float="true" titlex="Flex order" :code="code5">
       <div  slot="text">
          <!-- //code -->
          hey some cases in which we want to order the elements to our liking for that we have the directive <b>vs-order</b> that as a parameter you just have to pass the number in which we want to order the <b>vs-col</b> with respect to his brothers <b>vs-col</b>
        </div>
     <div  slot="ejemplo">
        <!-- //code -->
        <div class="con-concept">
          <vs-row vs-type="flex">
            <vs-col vs-order="3" v-tooltip="'col - 1 / order 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
              1 / order 3
            </vs-col>
            <vs-col vs-order="1" v-tooltip="'col - 2 / order 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
              2 / order 1
            </vs-col>
            <vs-col vs-order="4" v-tooltip="'col - 3 / order 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
              3 / order 4
            </vs-col>
            <vs-col vs-order="2" v-tooltip="'3 / order 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
              4 / order 2
            </vs-col>
          </vs-row>
        </div>
      </div>
    </codex>

     <codex text="true" :float="true" titlex="Responsive layout" :code="code6">
       <div  slot="text">
          <!-- //code -->
          There are some measures that can only be added in a specific size of the device, the directives are:
          <br>
          <br>
          <span class="numero">1 - </span> <b>vs-lg</b>: is for large devices such as desktops or laptops (large). <br>
          <span class="numero">2 - </span> <b>vs-sm</b>: is for medium devices such as laptops or tablets. <br>
          <span class="numero">3 - </span> <b>vs-xs</b>: is for small devices such as tablets (small) and phones.
        </div>
     <div  slot="ejemplo">
        <!-- //code -->
        <div class="con-concept">
          <vs-row vs-w="12">
            <vs-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >
              offset - 6
            </vs-col>
            <vs-col v-tooltip="'lg - 8 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
              offset - 6
            </vs-col>
            <vs-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
              offset - 6
            </vs-col>
          </vs-row>
        </div>
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
    return {
      api:[
        {
          name:'vs-w',
          type:'number, String',
          parametros:'1-12',
          descripcion:'Width of the vs-row or vs-colum',
          default:'12'
        },
        {
          name:'vs-offset',
          type:'number, String',
          parametros:'1-12',
          descripcion:'distance to the left of the',
          default:'0'
        },
        {
          name:'vs-justify',
          type:'String',
          parametros:'flex-start, center, flex-end, space-around, space-between',
          descripcion:'define the alignment vertically of the elements within the vs-row or vs-col',
          default:'null'
        },
        {
          name:'vs-align',
          type:'String',
          parametros:'flex-start, center, flex-end, space-around, space-between',
          descripcion:'define the horizontal alignment of the elements within the vs-row or vs-col',
          default:'null'
        },
        {
          name:'vs-order',
          type:'Number',
          parametros:'',
          descripcion:'changes the order of the vs-col with respect to his brothers vs-col',
          default:'null'
        },
        {
          name:'vs-lg',
          type:'Number,String',
          parametros:'1-12',
          descripcion:'is for large devices such as desktops or laptops (large)',
          default:'null'
        },
        {
          name:'vs-sm',
          type:'Number,String',
          parametros:'1-12',
          descripcion:'is for medium devices such as laptops or tablets.',
          default:'null'
        },
        {
          name:'vs-xs',
          type:'Number,String',
          parametros:'1-12',
          descripcion:'is for small devices such as tablets (small) and phones.',
          default:'null'
        },
      ],
      code1:`
<template>
<vs-row>
  <vs-col  v-tooltip="'col - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
    100%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 2" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
    50%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    33.3%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    25%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    16.6%
  </vs-col>
</vs-row>

<vs-row>
  <vs-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
    8.3%
  </vs-col>
</vs-row>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
      code2:`
<template>
<vs-row vs-w="12">
  <vs-col vs-offset="5" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
    offset - 6
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 2
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
    offset - 8
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="10" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
    offset - 7
  </vs-col>
</vs-row>

<vs-row>
  <vs-col vs-offset="4" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    offset - 4
  </vs-col>
</vs-row>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
      code3:`
<template>
<vs-row vs-w="12">
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="center">
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="flex-end">
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>


<vs-row vs-type="flex" vs-justify="space-around">
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>

<vs-row vs-type="flex" vs-justify="space-between">
  <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    offset - 6
  </vs-col>
</vs-row>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
      code4:`
<template>
<h3>Align Top</h3>
<vs-row vs-type="flex" vs-justify="center" vs-w="12">
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
</vs-row>

<h3>Align Center</h3>
<vs-row vs-type="flex" vs-align="center" vs-justify="space-around" vs-w="12">
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
</vs-row>

<h3>Align Bottom</h3>
<vs-row vs-type="flex" vs-align="flex-end" vs-justify="space-between" vs-w="12">
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
  <vs-col v-tooltip="'col - 6'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    col - 3
  </vs-col>
</vs-row>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
      code5:`
<template>
<vs-row vs-type="flex">
  <vs-col vs-order="3" v-tooltip="'col - 1 / order 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    1 / order 3
  </vs-col>
  <vs-col vs-order="1" v-tooltip="'col - 2 / order 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    2 / order 1
  </vs-col>
  <vs-col vs-order="4" v-tooltip="'col - 3 / order 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    3 / order 4
  </vs-col>
  <vs-col vs-order="2" v-tooltip="'3 / order 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    4 / order 2
  </vs-col>
</vs-row>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
      code6:`
<template>
<vs-row vs-w="12">
  <vs-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >
    offset - 6
  </vs-col>
  <vs-col v-tooltip="'lg - 8 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
    offset - 6
  </vs-col>
  <vs-col v-tooltip="'lg - 2 / sm - 4 / xs - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
    offset - 6
  </vs-col>
</vs-row>
</template>
<script>
export default {
  data(){

  }
}
</\script>
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
.con-concept {
  width: 100%;
  color: rgba(0, 0, 0,.7);
}
.con-concept .vs-col {
  border: 2px solid rgb(255, 255, 255);
  background: rgb(230, 230, 230);
  height: 50px;
  transition: all .2s ease;
  font-weight: bold;
  cursor: default;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0,.6);
}
.con-concept .vs-col:hover {
  background: rgb(var(--morado));
  color: rgb(255, 255, 255);
  border: 2px solid rgba(255, 255, 255,0);
}
.porcentaje {
    transition: all .3s ease;
}
.con-alignment .vs-col:nth-child(1) {
  height: 90px !important;
}
.con-alignment .vs-col:nth-child(2) {
  height: 60px !important;
}
.con-alignment .vs-col:nth-child(3) {
  height: 130px !important;
}
.con-alignment .vs-col:nth-child(4) {
  height: 30px !important;
}
.con-alignment h3{
  font-weight: lighter;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.050);
  border-top: 1px solid rgba(0, 0, 0, 0.050);
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
