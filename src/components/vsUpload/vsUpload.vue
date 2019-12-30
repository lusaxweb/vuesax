<template>
  <div class="con-upload">
    <view-upload
      v-if="viewActive"
      :src="viewSrc" />


    <div class="con-img-upload">
      <!-- <transition-group v-for="(img,index) in getFilesFilter" :key="index" name="upload"> -->
      <div
        v-for="(img,index) in getFilesFilter"
        :class="{
          'fileError':img.error,
          'removeItem':itemRemove.includes(index)
        }"
        :key="index"
        class="img-upload">
        <button
          class="btn-x-file"
          type="button"
          @click="removeFile(index)">
          <i
            translate="no"
            class="material-icons notranslate">
            clear
          </i>
        </button>
        <button
          v-if="showUploadButton"
          :class="{
            'on-progress':img.percent,
            'ready-progress':img.percent >= 100
          }"
          :style="{
            height: `${img.percent}%`
          }"
          class="btn-upload-file"
          @click="upload(index)">
          <i
            translate="no"
            class="material-icons notranslate">
            {{ img.percent >= 100?img.error?'report_problem':'cloud_done':'cloud_upload' }}
          </i>
          <span>{{ img.percent }} %</span>
        </button>
        <img
          v-if="img.src"
          :style="{
            maxWidth:img.orientation == 'h'?'100%':'none',
            maxHeight:img.orientation == 'w'?'100%':'none'
          }"
          :key="index"
          :src="img.src"
          @touchend="viewImage(img.src,$event)"
          @click="viewImage(img.src,$event)">
        <h4
          v-if="!img.src"
          class="text-archive">
          <i
            translate="no"
            class="material-icons notranslate">
            description
          </i>
          <span>
            {{ img.name }}
          </span>
        </h4>
      </div>
      <!-- </transition-group > -->


      <div
        :class="{
          'on-progress-all-upload':percent != 0,
          'is-ready-all-upload':percent >= 100,
          'disabled-upload':$attrs.hasOwnProperty('disabled') || limit?(srcs.length - itemRemove.length) >= Number(limit):false
        }"
        class="con-input-upload">
        <input
          ref="fileInput"

          v-bind="$attrs"
          :disabled="$attrs.disabled || limit?(srcs.length - itemRemove.length) >= Number(limit):false"
          type="file"
          @change="getFiles">
        <span class="text-input">
          {{ text }}
        </span>
        <span
          :style="{
            width:`${percent}%`
          }"
          class="input-progress">

        </span>
        <button
          v-if="showUploadButton"
          :disabled="filesx.length == 0"
          type="button"
          title="Upload"
          class="btn-upload-all vs-upload--button-upload"
          @click="upload('all')">
          <i
            translate="no"
            class="material-icons notranslate">
            cloud_upload
          </i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import viewUpload from './viewUpload'
  var lastTap = 0;
  export default {
    name: 'VsUpload',
    components:{
      viewUpload
    },
    inheritAttrs:false,
    props:{
      fileName:{
        default:null,
        type:String
      },
      text:{
        default:'Upload File',
        type:String
      },
      textMax:{
        default:'Maximum of files reached',
        type:String
      },
      limit:{
        default:null,
        type:[Number,String]
      },
      action:{
        default:null,
        type:String
      },
      headers:{
        default:null,
        type:Object
      },
      data: {
        default: null,
        type: Object
      },
      automatic:{
        default: false,
        type: Boolean
      },
      showUploadButton: {
        default: true,
        type: Boolean
      },
      singleUpload: {
        default: false,
        type: Boolean
      }
    },
    data:()=>({
      inputValue:null,
      type:null,
      srcs:[],
      filesx:[],
      itemRemove:[],
      percent:0,
      viewActive:false,
      viewSrc:null,
    }),
    computed:{
      getFilesFilter() {
        let files = this.srcs.filter((item) => {
          return !item.remove
        })

        return files
      },
      postFiles(){
        let postFiles = Array.prototype.slice.call(this.filesx);
        postFiles = postFiles.filter((item)=>{
          return !item.hasOwnProperty('remove')
        })
        return postFiles.length
      },
    },
    watch:{
      percent(){
        if(this.percent >= 100) {
          this.srcs.forEach((file)=>{
            file.percent = 100
          })
          setTimeout(()=>{
            this.percent = 0
          },1000)
        }
      }
    },
    methods:{
      viewImage(src,evt){
        var timeout;

        var eventx = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) ? 'touchstart' : 'click';
        if(eventx == 'click'){
          this.viewActive = true
          this.viewSrc = src
        } else {
          if(evt.type == 'touchend'){
            var currentTime = new Date().getTime();
            var tapLength = currentTime - lastTap;
            clearTimeout(timeout);
            if (tapLength < 500 && tapLength > 0) {
              this.viewActive = true
              this.viewSrc = src
              event.preventDefault();
            }
            lastTap = currentTime;
          }
        }
      },
      removeFile(index){
        this.itemRemove.push(index)
        this.$emit('on-delete', this.filesx[index])
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
            if(this.width > this.height){
              orientation = 'w'
            }
            switchImage(this,orientation);

          }
        }
        function switchImage(image,orientation) {
          _this.srcs.push({
            src:image.src,
            orientation:orientation,
            type:_this.typex,
            percent:null,
            error:false,
            remove:null
          })
        }

        var files = e.target.files;
        let count = (this.srcs.length - this.itemRemove.length)
        for (const file in files) {


          if (files.hasOwnProperty(file)) {
            if(this.limit) {
              count ++
              if( count > Number(this.limit) ) {
                break
              }
            }

            var reader  = new FileReader();
            const filex = files[file];
            if (/image.*/.test(filex.type)) {
              this.typex = 'image'
              this.filesx.push(filex)
              reader.onload = uploadImage;
              reader.readAsDataURL(filex);
            } else if (/video.*/.test(filex.type)) {
              this.typex = 'video'
              this.filesx.push(filex)
              _this.srcs.push({
                src:null,
                name:filex.name,
                type:'video',
                percent:null,
                error:false,
                remove:null
              })
            } else {
              this.filesx.push(filex)
              _this.srcs.push({
                src:null,
                name:filex.name,
                percent:null,
                error:false,
                remove:null
              })
            }
            this.$emit('change', e.target.value, this.filesx)
          }
        }
        const input = this.$refs.fileInput
        input.type = 'text'
        input.type = 'file'

        if (this.automatic) {
          this.upload('all')
        }
      },
      upload(index) {
        const formData = new FormData();
        let postFiles = Array.prototype.slice.call(this.filesx);
        if(typeof index == 'number'){
          postFiles = [postFiles[index]]
        } else if (index == 'all'){
          postFiles = postFiles.filter((item)=>{
            return !item.hasOwnProperty('remove')
          })
        }

        const data = this.data || {};
        for (var key in data) {
          formData.append(key, data[key]);
        }

        if(this.singleUpload) {
          postFiles.forEach((filex)=>{
            const formData = new FormData();
            for (var key in data) {
              formData.append(key, data[key]);
            }
            formData.append(this.fileName, filex, filex.name)

            this.uploadx(index, formData)
          })
        } else {
          postFiles.forEach((filex)=>{
            formData.append(this.fileName, filex, filex.name)
          })
          this.uploadx(index, formData)
        }
      },
      uploadx(index, formData){
        let self = this
        const xhr = new XMLHttpRequest();

        xhr.onerror = function error(e) {
          self.$emit('on-error',e)
          if(typeof index == 'number'){
            self.srcs[index].error = true
          }
        };

        xhr.onload = function onload(e) {

          if (xhr.status < 200 || xhr.status >= 300) {
            self.$emit('on-error',e)
            if(typeof index == 'number'){
              self.srcs[index].error = true
            }
          } else {
            self.$emit('on-success',e)
          }
        }


        if (xhr.upload) {
          xhr.upload.onprogress = function progress(e) {
            if (e.total > 0) {
              let percent = e.loaded / e.total * 100;
              if(typeof index == 'number'){
                self.srcs[index].percent = Math.trunc(percent)
              } else {
                self.percent = Math.trunc(percent)
              }
            }
          };
        }

        xhr.withCredentials = true;

        xhr.open('POST', this.action, true);

        const headers = this.headers || {};

        for (let head in headers) {
          if (headers.hasOwnProperty(head) && headers[head] !== null) {
            xhr.setRequestHeader(head, headers[head]);
          }
        }

        xhr.send(formData)
      },

    }
  }
</script>
