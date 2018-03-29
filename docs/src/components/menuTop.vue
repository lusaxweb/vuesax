<template lang="html">
  <div :class="{'scroll':$store.state.scroll,'en-doc':$store.state.menuVisible}" class="con-menu-top">
    <div @click="$router.push('/')" class="img-menu-grande">
      <img src="../assets/vuesax.png" alt="vuesax">
    </div>
    <div @click="$router.push('/')" class="img-menu">
      <img src="../assets/vuesax-logo-vertical-2.png" alt="">
    </div>
    <ul class="ul">
      <li>
        <router-link :to="`/${$i18n.locale}/home/`" class="nav-link" active-class="activo">
          <span v-html="$marked($t('components.menu.home'))"></span>
        </router-link>
      </li>
      <li>
        <router-link :to="`/${$i18n.locale}/docs/`" class="nav-link" active-class="activo">
          <span v-html="$marked($t('components.menu.documentation'))"></span>
        </router-link>
      </li>
      <li class="li-drop">
        <vs-dropdown :vs-title="$t('components.menu.ecosystemText')">
            <vs-dropdown-item :key="indexP" v-for="padre,indexP in $t('components.menu.ecosystem')" vs-group :vs-label="padre.text">
              <vs-dropdown-item :key="index" v-for="link,index in padre.items">
                <a class="linkx" :href="link.href">{{link.text}}</a>
              </vs-dropdown-item>
            </vs-dropdown-item>
        </vs-dropdown>
      </li>
      <li>

          <!-- <vs-dropdown :vs-title="$t('components.menu.translation')">
                <vs-dropdown-item>
                  <a @click="cambiarLang('en')" :class="{'estasx':$route.fullPath.search('/en/')!=-1}" class="linkx" href="#">English</a>
                </vs-dropdown-item>
                <vs-dropdown-item>
                  <a @click="cambiarLang('es')" :class="{'estasx':$route.fullPath.search('/es/')!=-1}" class="linkx" href="#">Español</a>
                </vs-dropdown-item>
          </vs-dropdown> -->

      </li>
      <li :class="{'li-visible':$store.state.menuVisible}" class="li-no"><input class="colorx" type="color" @change="cambiarColor($event)" name="" value="#1f73ff"></li>
      <li :class="{'li-visible':$store.state.menuVisible}" class="version li-no"><a href="https://www.npmjs.com/package/vuesax" target="_blank"><span>{{'v'+packageVersion}}</span></a></li>
      <li :class="{'li-visible':$store.state.menuVisible}" class="con-gitHubx li-no"><a class="flaticon-github-logo" target="_blank"  href="https://github.com/lusaxweb/vuesax"></a></li>
    </ul>
  </div>
</template>

<script>
// import algoliasearch from 'algoliasearch'
// import {aisIndex} from 'algoliasearch'
// var client = algoliasearch('EAGFI40K92', '739daed85bd1a07e06f1f3ab545cfffd');
// var index = client.initIndex('docs');
import packagex from '../../../package.json'
export default {

  data(){
    return {
      packageVersion:packagex.version,
      buscarx:'',
      itemsBuscados:[],
      select1:1,
      options1:[
        {text:'IT',value:1},
        {text:'Blade Runner',value:2},
        {text:'Thor Ragnarok',value:3},
      ],
    }
  },
  mounted(){

  },
  methods:{
    cambiarColor(evt){
      console.log(evt.target.value);
      this.$vs.theme({
        primary:evt.target.value
      })
    },
    cambiarLang(langx){
      console.dir(this.$route);
      // this.$route.params.lang = 'es'
      this.$router.push({route:this.$route.fullPath,params: { lang: langx }})
      // console.dir(this.$route.params.lang);
    },
    // buscar(){
    //   index.search(this.buscarx, {
    //     "hitsPerPage": "10",
    //     "page": "0",
    //     "analytics": "false",
    //     "attributesToRetrieve": "*",
    //     "facets": "[]"
    //   }).then(json => {
    //     console.log(json);
    //     let items = json.hits
    //     items.forEach((item)=>{
    //       console.log(item);
    //     })
    //     this.itemsBuscados.push()
    //   })
    // }
  }
}
</script>

<style lang="css">
.colorx {
  border: 0px;
  width: 25px;
  height: 25px;
  border-radius: 5px;
}
.li-no {
  opacity: 0;
  display: block !important;
  position: relative !important;
  margin-left: -60px !important;
  visibility: hidden;
}
.li-visible {
  opacity: 1 !important;
  margin-left: 0px !important;
  visibility: visible;
}
.activo {
    color: rgb(var(--morado)) !important;
}
.activo::after {
  width: 100% !important;
}
.version a {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.version {
  padding-left: 10px;
}
.version span{
  padding: 11px;
  background: rgb(245, 245, 245);
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
}
.img-menu {
  cursor: pointer;
    width: 150px;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.05); */
    transition: all .3s ease;
    transform: translate(0,-100%);
    opacity: 0;
}
.img-menu:hover img{
    transform: scale(1.040);
}
.img-menu img {
  backface-visibility: hidden;
  width: 100%;
  transition: all .3s ease;
}
.img-menu-grande {
  cursor: pointer;
  width:180px;
  transition: all .3s ease;
  /* transform: translate(0,-100%); */
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.060);
  position: absolute;
  top: 0px;
  background: rgb(255, 255, 255);
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
}
.img-menu-grande img {
  backface-visibility: hidden;
  width: 100%;
  transition: all .3s ease;
}
.con-menu-top {
  width: 100%;
  background: rgba(255, 255, 255,1);
  left: 0px;
  top: 0px;
  position: fixed;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* overflow: hidden; */
  box-shadow: 0px -6px 15px 0px rgba(0, 0, 0, 0.0);
  padding-left: 50px;
  padding-right: 20px;
  transition: all .3s ease;
}
.scroll {
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.050);
}
.scroll .img-menu{
  transform: translate(0);
  opacity: 1;
}
.scroll .img-menu-grande{
  transform: translate(0,-100%);
  opacity: 0;
}
.en-doc {
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.050);
  background: rgb(255, 255, 255);
}
.en-doc .img-menu{
  transform: translate(0);
  opacity: 1;
}
.en-doc .img-menu-grande{
  transform: translate(0,-100%);
  opacity: 0;
}
.en-doc {
  padding-right: 0px !important;
}
.ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.ul li {
  position: relative;
  display: block;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all .3s ease;
}
.ul li a{
  padding: 15px;
  padding-top: 16px;
  cursor: pointer;
  display: block;
  transition: all .3s ease;
  position: relative;
  color: rgb(140, 140, 140);
}
.ul li a:hover {
  color: rgb(var(--morado)) !important;
}
.ul li a::after {
  position: absolute;
  top: -7px;
  width: 0%;
  height: 10px;
  content: '';
  background:rgb(var(--morado));
  left: 50%;
  transform: translate(-50%);
  transition: all .3s ease;
  border-radius: 20px;
}
.con-gitHubx a{
  padding: 13px !important;
}
.con-gitHubx a:hover {
  color: rgb(var(--morado));
}
.linkx {
  color: rgba(0, 0, 0, 0.650);
  font-size: 14px;
  display: block;
  /* text-align: right; */
}
.linkx:hover {
  color: rgb(var(--morado)) !important;
}
.estasx {
  color: rgb(var(--morado)) !important;

}
@media only screen and (max-width: 650px) {

  .con-menu-top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
  .img-menu-grande,.img-menu {
    display: none;
  }
  .en-doc .li-no{
    display: none !important;
  }
}
@media only screen and (max-width: 460px) {
  .en-doc .li-drop{
    display: none !important;
  }
}
@media only screen and (max-width: 370px) {
  .li-drop {
    display: none !important;
  }
}
</style>
