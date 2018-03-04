<template lang="html">
  <div :class="{'con-multiple':multiple}" class="contiene-upload">


  <div v-if="!multiple" class="con-upload">
    <div  class="con-subir">
      <h3>Subir Archivo</h3>
      <i class="material-icons">publish</i>
    </div>
    <input class="input-upload" ref="inputx"  @change="uploadx($event)" type="file" name="" value="">
    <div class="">

    </div>
    <div :style="{'background':colorx}" ref="conimg" :class="{'oculto':url==''}" class="con-img">
      <div class="header">
        <div @click="xUrl(),colorx='rgb(255, 255, 255)'" class="x-img">
          <i class="material-icons">close</i>
        </div>
      </div>
      <!-- <div class="con-imgx"> -->
        <img @click="verview"  ref="imgx" :src="url" alt="">

      <!-- </div> -->
    </div>
    <!-- <video ref="imgx" :src="url" autoplay >
      Tu navegador no admite el elemento <code>video</code>.
    </video> -->
  </div>

  <!-- multiple -->

  <div v-if="multiple" class="con-multiple-upload">
    <ul ref="ulmultiple" class="con-multiples-imgs">
      <li @click="view=true,urlview=file.src" v-for="file,index in reverseImgs" class="con-imgs">
        <img :ref="'vs'+index" :src="file.src" alt="">
      </li>
      <li class="agregarx">
        <input class="input-upload" ref="inputsx"  @change="multipleUploadx($event)" type="file" name="" value="">
      </li>
    </ul>
    <!-- <div @click="agregarImg" class="">
      <!-- Agregar

    </div> -->
  </div>


  <transition name="fade">
  <div @click="quitarView($event)" v-show="view" ref="viewx" class="view-upload">
    <div @click="view=false" class="x-view">
      <i class="material-icons">close</i>
    </div>
    <img :src="urlview" alt="">
  </div>
  </transition>
</div>
</template>

<script>
export default {
  name:'vs-upload',
  filter:{
    reverse:function(value){
      return value.slice().reverse();
    }
  },
  props:{
    vsFile:String,
    multiple:Boolean,
    arrayFiles:{
      type:Array,
      default:function() {return []}
    },
    vsFileList:Array,
  },
  data(){
    return {
      url:'',
      colorx:'rgb(255, 255, 255)',
      urlview:'',
      view:false,
    }
  },
  mounted(){
    let elx = this.$refs.viewx
    document.body.insertBefore(elx, document.body.firstChild)
  },
  computed:{
    reverseImgs(){
      if(this.arrayFiles.length > 0){

        return JSON.parse(JSON.stringify(this.arrayFiles)).slice().reverse();
      }
    }
  },
  methods:{
    // multiple
    agregarImg(){
      console.log("hola mundo");
    },


    quitarView(evt){
      console.log(evt.target.nodeName);
      if(evt.target.nodeName != 'IMG'){
        this.view = false
        setTimeout( ()=> {
          this.urlview = ''
        }, 250);
      }
    },
    verview(){
      this.urlview = this.url
      this.view = true
    },
    xUrl(){
      this.$refs.conimg.classList.add('oculto');
      setTimeout( ()=> {
        this.url = ''
        this.$emit('file','')
      }, 250);
    },
    multipleUploadx(e){

      var preview = this.$refs.ulmultiple
      var file    = this.$refs.inputsx.files[0]
      var reader  = new FileReader();
      var filesx = JSON.parse(JSON.stringify(this.vsFileList))
      reader.onloadend =  ()=> {
        // preview.src = reader.result;
        this.arrayFiles.push({src:reader.result})
        // this.vsFileList.push({name:file.name})
        console.log(file);

        filesx.push({name:file.name})
        console.log(filesx);
        this.$emit('update:vsFileList', filesx)
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        // preview.src = this.url;
      }


    },
    uploadx(e) {
      console.log("paso");
      this.$emit('update:vsFile', e.target.value)
      let _this = this
      this.$refs.conimg.classList.remove('oculto');
      var preview = this.$refs.imgx
      var file    = this.$refs.inputx.files[0]
      var reader  = new FileReader();


        // reader.onloadend =  ()=> {
        //   // preview.src = reader.result;
        //   this.url = reader.result
        // }
        //
        // if (file) {
        //   reader.readAsDataURL(file);
        // } else {
        //   preview.src = this.url;
        // }





  var averagediv = this.$refs.conimg
  var averageimage = this.$refs.imgx


  // obtener color
  function getaverageColor(imagen) {
    var r=0, g=0, b=0, count = 0, canvas, ctx, imageData, data, i, n;
    canvas = document.createElement('canvas');
    ctx = canvas.getContext("2d");
    canvas.width = imagen.width;
    canvas.height = imagen.height;
    ctx.drawImage(imagen, 0, 0);
    imageData = ctx.getImageData(0, 0, imagen.width, imagen.height);
    data = imageData.data;
    for(i = 0, n = data.length; i < n; i += 4) {
      ++count;
      r += data[i];
      g += data[i+1];
      b += data[i+2];
    }
    r = ~~(r/count);
    g = ~~(g/count);
    b = ~~(b/count);
    return [r, g, b];
  }

  function rgbToHex(arr) {
    return "#" + ((1 << 24) + (arr[0] << 16) + (arr[1] << 8) + arr[2]).toString(16).slice(1);
  }

  function uploadImage(e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function() {
      switchImage(this);
    }
  }
  function switchImage(image) {
    var averagecolor = getaverageColor(image);
    var color = rgbToHex(averagecolor);

    _this.url = image.src;
    _this.colorx = color
    // averagediv.style.backgroundColor = averagediv.textContent = color;
  }

  // function setDefaultImage() {
  //   var image = new Image();
  //   image.src = "images/average_image.jpg";
  //   image.onload = function() {
  //     switchImage(this);
  //   }
  // }


    file = e.target.files[0];
    if (!file.type.match(/image.*/)) return;
    var reader = new FileReader();
    reader.onload = uploadImage;
    reader.readAsDataURL(file);


    // this.$emit('file',e.target.value,e)

}
  }
}
</script>

<style lang="css">
.con-imgs {
  width: 170px;
  height: 170px;
  left: 0px;
  top: 0px;
  position: relative;
  float: left;
  /* background: rgb(170, 79, 155); */

  display: flex;
  align-items: center;
  justify-content: center;
  /* border-right: 1px solid rgba(0, 0, 0, 0.1); */
  background: rgb(225, 225, 225);
  /* box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1); */
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
}
.con-multiples-imgs li {
  /* display: block; */
  z-index: 100;
  position: relative;
}
.con-multiples-imgs li img {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}
.agregarx {
  width: 150px;
  height: 150px;
  background: rgb(255, 255, 255);
  position: relative;
  float: left;
  margin: 15px;
  border-radius: 10px;
  cursor: pointer;
    box-shadow: 0px 6px 15px -3px rgba(0, 0, 0, 0.0);
    transition: all .3s ease;
    display: block;
}
.agregarx input {
  cursor: pointer;
}
.agregarx:hover {
  box-shadow: 0px 6px 20px -3px rgba(0, 0, 0, 0.150);
  transform: translate(0,-6px);
}
.agregarx::after {
  width: 60px;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  display: block;
}
.agregarx::before {
  width: 1px;
  height: 60px;
  background: rgba(0, 0, 0, 0.15);
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0,-50%);
  display: block;
}
.con-multiples-imgs {
  width: auto;
  height: auto;
  /* background: rgb(138, 209, 39); */
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 200;
}
.con-multiple {
  width: 100%;
  height: auto;
  background: rgb(240, 240, 240);
  border-radius: 10px;

}
.con-multiple-upload {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.fade-enter-active img, .fade-leave-active img {
  transition: all .3s;
}
.fade-enter img, .fade-leave-to img /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(.6);
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.x-view {
  width: 45px;
  height: 45px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}
.view-upload {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
    padding: 15px;
}
.view-upload img {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0,.4) !important;
  border-radius: 10px;
  overflow: hidden;
  transition: all .3s ease;
}


.upload-colorx {
  width: 0px;
  height: 0px;
  position: relative;
  position: absolute;
  top: 0px;
  z-index: 10;
  border-radius: 50%;
  transform: translate(0,-50%);
  /* transition: all .3s ease; */
}
.x-img {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
}
.x-img i {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
}
.input-upload {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1000;
  cursor: pointer;
}
.con-subir {
  background: rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.4);
  transition: all .3s ease;

}
.con-subir input {
  cursor: pointer;

}
/* .con-subir {
  b
} */
.con-subir h3 {
  font-size: 16px;
  font-weight:lighter;
}
.con-upload:hover .con-subir{
  color: rgb(var(--primary)) !important;
}
.con-subir i {
  width: 35px;
  height: 35px;
  background: rgb(225, 225, 225);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 10px;
  font-size: 20px;
}
.con-img {
  height: auto;
  width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background: rgb(136, 42, 107); */
  /* padding: 10px; */
  position: relative;
  overflow: hidden;
  z-index: 2000;
  transition: all .3s ease, background 0s ease;
  max-height: 300px;
  border-radius: 10px;
  opacity: 1;
  transform: scale(1);
  /* overflow: auto; */
  /* overflow-x: hidden; */
}
.oculto {
  max-height: 0px;
  /* opacity: 0; */
  transform: scale(.7);
}
.con-img img {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0,.4) !important;
  border-radius: 10px;
  overflow: hidden;
  z-index: 20;
  margin: 10px;
  /* opacity: 1; */
  /* transform: scale(.8); */
  transition: all .3s ease;
  transform: scale(1);
  display: block;
  cursor: pointer;
}
/* .img-visible {
  opacity: 1 !important;
  transform: scale(1) !important;
} */
.con-upload {
  position: relative;
  /* background: rgb(110, 210, 40); */
}
</style>
