<template>
  <transition name="view-upload">
    <div
      ref="view"
      class="view-upload"
      @click="closeView">
      <img
        :src="src"
        alt="image">
    </div>
  </transition>
</template>
<script>
  import utils from '../../utils'
  export default {
    name:'ViewUpload',
    props:{
      active:{
        default:false,
        type:Boolean
      },
      src:{
        default:null,
        type:String
      }
    },
    mounted(){
      utils.insertBody(this.$refs.view)
    },
    upload(){
      utils.insertBody(this.$refs.view)
    },
    methods:{
      closeView(evt){
        if(evt.target.tagName != 'IMG'){
          this.$parent.viewActive = false
        }
      }
    }
  }
</script>
