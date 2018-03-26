<template lang="html">
  <div class="">
    <con-doc titlex="Contributing" textx="Hi! Thank you for choosing Vuesax..">
      <div slot="codes">
        <codex text="true" :float="true" titlex="Introduccion">
          <div slot="text">
            We are excited that you are interested in contributing to Vuesax. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.
          </div>
       </codex>

       <codex text="true" :float="true" titlex="Code of Conduct">
         <div slot="text">
           We have adopted a <a href="#">Code of Conduct</a> that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.
         </div>
      </codex>

        <codex text="true" :float="true" titlex="Open Development">
          <div slot="text">
All work on Vuesax happens directly on<a href="https://github.com/lusaxweb/vuesax/issues">GitHub</a>. Both core team members and external contributors send pull requests which go through the same review process.
          </div>
       </codex>



        <codex text="true" :float="true" titlex="Bugs">
          <div slot="text">
            We are using <a href="https://github.com/lusaxweb/vuesax/issues">GitHub</a> Issues for bug tracing.
          </div>
       </codex>

        <codex text="true" :float="true" titlex="Proposing a Change">
          <div slot="text">

If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it.
<br><br>
If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.
          </div>
       </codex>

        <codex text="true" :float="true" titlex="Sending a Pull Request">
          <div slot="text">
The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.
<br><br>
Before submitting a pull request, please make sure the following is done:
<br><br>
 <span class="number">1 - </span> Fork the repository and create your branch from proper branch.
<br>
 <span class="number">2 - </span> <b>run npm install</b> in the repository root.
 <br>

 <span class="number">3 - </span> If you’ve fixed a bug or added code that should be tested, add tests!
 <br>


Make sure your code lints (npm run dev)

          </div>
       </codex>

        <codex text="true" :float="true" titlex="Flujo de trabajo de desarrollo">
          <div slot="text">
            After cloning Vuesax, run npm install to fetch its dependencies. Then, you can run several commands:
            <br><br>
<span class="number">1 - </span><b>npm run dev</b> runs vuesax website locally.
<br>
<span class="number">2 - </span><b>npm run build</b> To build.

          </div>
       </codex>
      </div>
    </con-doc>
  </div>
</template>

<script>
import conDoc from '../../components/conDoc.vue'
import titlex from '../../components/title.vue'
import codex from '../../components/code.vue'
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
          name:'options',
          type:'Array',
          parametros:'',
          descripcion:'Opciones para seleccionar',
          default:'[]'
        },
      ],
      code1:`
<template>

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
