<template>
  <div class="con-upload">
    <div class="con-input-upload">
      <input
        ref="inputx"
        multiple
        type="file"
        @change="getFiles">
      <span>
        Upload File
      </span>
    </div>
    <button
      @click="uploadx">
      Subir
    </button>
    <div class="con-img-upload">
      <transition-group name="upload">
        <div
          v-for="(img,index) in srcs"
          :class="{'removeItem':itemRemove.includes(index)}"
          :key="index"
          class="img-upload">
          <button
            class="btn-x-file"
            @click="removeFile(index)">
            <i class="material-icons">
              clear
            </i>
          </button>
          <img
            :style="{
              maxWidth:img.orientation == 'h'?'100%':'none',
              maxHeight:img.orientation == 'w'?'100%':'none'
            }"
            :key="index"
            :src="img.src">

        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'VsUpload',
    data:()=>({
      type:null,
      srcs:[],
      filesx:[],
      itemRemove:[]
    }),
    methods:{
      removeFile(index){
        this.itemRemove.push(index)
        setTimeout(()=>{
          this.filesx[index].remove = true
        },301)
      },
      getFiles(e) {
        this.$emit('update:vsFile', e.target.value)
        let _this = this
        function uploadImage(e) {
          let orientation = 'h'
          var image = new Image();
          image.src = e.target.result;
          image.onload = function() {
            console.log(this.width + " " + this.height);
            if(this.width > this.height){
              orientation = 'w'
            }
            switchImage(this,orientation);

          }
        }
        function switchImage(image,orientation) {
          _this.srcs.push({src:image.src,orientation:orientation})
        }

        var files = e.target.files;
        for (const file in files) {
          if (files.hasOwnProperty(file)) {
            var reader  = new FileReader();
            const filex = files[file];
            if (/image.*/.test(filex.type)) {
              this.typex = 'image'
            } else if (/video.*/.test(filex.type)) {
              this.typex = 'video'
            }
            this.filesx.push(filex)
            reader.onload = uploadImage;
            reader.readAsDataURL(filex);
          }
        }
      },
      uploadx(){
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        let postFiles = Array.prototype.slice.call(this.filesx);
        postFiles = postFiles.filter((item)=>{
          console.log("item>>>>>>>>>>>>>",item.hasOwnProperty('remove'))
          return !item.hasOwnProperty('remove')
        })
        console.log("postFiles>>>",postFiles)

        postFiles.forEach((filex)=>{
          formData.append("file", filex)
        })

        xhr.onerror = function error(e) {
          console.log("******>error en el envio")
        };

        xhr.onload = function onload(e) {
          console.log('listo se subio',e)
        }

        xhr.withCredentials = true;

        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts/');
        // xhr.setRequestHeader("Accept","text/html")
        xhr.send(formData)
      }

    }
  }
</script>
