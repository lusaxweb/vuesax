<template lang="html">
  <div v-if="contributorsx.length > 0" class="con-contribuitor">
    <h3>{{title || 'Contributors'}}</h3>
    <ul>
      <li :title="contributor.login" v-for="contributor in contributorsx">
        <a target="_blank" :href="contributor.html_url">
          <img :src="contributor.avatar_url" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    repo:{
      default:null,
      type:String,
    },
    contributors:{
      type:[Array, String],
      default:null
    },
    title:{
      type:String,
      default:null
    }
  },
  data(){
    return {
      contributorsx:[],
    }
  },


  created(){
    this.consultContributors()
  },
  watch:{
    contributors(){
      console.log("cambio", this.contributors);
      this.contributorsx = []
      this.consultContributors()
    }
  },
  methods:{
    consultContributors(){
      if(!this.contributors) {
        return
      }

      if(this.contributors == 'all'){
        fetch('https://api.github.com/repos/'+this.repo+'/contributors')
        .then(response => response.json())
        .then(json => {
         this.contributorsx = json
         console.log('response',json);
         // this.star = json.stargazers_count
        })
      } else {
        console.log('this.contributors',this.contributors);
        this.contributors.forEach((item)=>{
          fetch(`https://api.github.com/users/${item}`)
          .then(response => response.json())
          .then(json => {
            console.log('response',json);
            this.contributorsx.push(json)
          })
        })

      }
    }
  }
}
</script>

<style lang="css">
.con-contribuitor {
  width: 100%;
  position: relative;
  padding: 20px;
}
.con-contribuitor ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0px !important
}
.con-contribuitor ul li {
  margin: 5px;
  list-style: none !important;
}
.con-contribuitor ul li img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.con-contribuitor h3 {
  text-align: center;
  padding: 10px;
}
</style>
