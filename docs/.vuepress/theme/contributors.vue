<template lang="html">
  <div v-if="contributorsx.length > 0" class="con-contribuitor">
    <h3 :class="{'allcontribuitors':contributors == 'all'}">{{title || 'Contributors of'}} <b>Vuesax</b>  </h3>
    <ul>
      <li :title="contributor.login" v-for="contributor in contributorsx">
        <a target="_blank" :href="contributor.html_url">
          <img :src="contributor.avatar_url" alt="">
          <img class="img-blur" :src="contributor.avatar_url" alt="">
        </a>
      </li>
    </ul>
    <div v-if="contributors == 'all'" class="con-btns-contribuitors">
      <button type="button" name="button"><a href="https://github.com/lusaxweb/vuesax/graphs/contributors">Contribuitors</a></button>
    </div>
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


  mounted(){
    this.consultContributors()
  },
  watch:{
    contributors(){
      // console.log("cambio", this.contributors);
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
         // console.log('response',json);
         // this.star = json.stargazers_count
        })
      } else {
        // console.log('this.contributors',this.contributors);
        this.contributors.forEach((item)=>{
          fetch(`https://api.github.com/users/${item}`)
          .then(response => response.json())
          .then(json => {
            // console.log('response',json);
            this.contributorsx.push(json)
          })
        })

      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.con-btns-contribuitors {
  margin-top: 40px;
}
.con-btns-contribuitors button {
  transition: all .2s ease;
  top: 0px;
}
.con-btns-contribuitors button a{
  padding: 14px;
  background: $accentColor
  color: rgb(255, 255, 255);
  display: block;
  padding-left: 35px;
  padding-right: 35px;
  transition: all .3s ease;
}
.con-btns-contribuitors button:hover {
  top: -5px;
  box-shadow: 0px 8px 12px -5px #5b3cc4 !important;
}
.allcontribuitors {
  text-align: left !important;
  font-size: 30px;
  margin-bottom: 20px;
}
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
  margin: 7px;
  list-style: none !important;
  position: relative;
  transition: all .3s ease;
  z-index: 200;
}
.con-contribuitor ul li:hover {
  transform: scale(1.1);
  z-index: 300;
}
.con-contribuitor ul li img {
  width: 50px;
  height: 50px;
  border-radius: 35%;
  z-index: 100;
  position: relative;
  display: block;
  }
.img-blur {
  position: absolute !important;
  left: 0px;
  bottom: -5px;
  z-index: 50 !important;
  filter: blur(7px);
  opacity: .5;
}
.con-contribuitor h3 {
  text-align: center;
  padding: 10px;
}
</style>
