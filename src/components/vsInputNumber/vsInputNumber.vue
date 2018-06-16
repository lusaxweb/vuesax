<template lang="html">
  <div :class="'vs-'+vsSize">
    <!-- /[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))` -->
    <div :style="{'color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))`:'rgb(var(--primary))','background':vsColor?/[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))`:'rgb(var(--primary))'}" :class="[{'con-plus':pulsandoPlus,'con-menos':pulsandoMenos,'disabledx':disabled}]" class="con-input-number">

      <button :class="{'no-mas':vsMin?value<=vsMin:false}" @mousedown="pulsandoMenos=true" @mouseup="pulsandoMenos=false" @mouseleave="pulsandoMenos=false" v-repeat-click="menos"  type="button" name="button">
        <i  class="material-icons">remove</i>
      </button>
      <div class="numberx">
        <input
        @blur="blurx"
        :style="{'width':value.toString().length*17+'px'}"
        :class="{'plus':pulsandoPlus,'menos':pulsandoMenos}"
        :value="value"
        @keydown="validarKeypress($event,$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        type="text"
         name=""
          value="">
        <!-- {{}} -->
      </div>
      <div class="">
        <button :class="{'no-mas':vsMax?value>=vsMax:false}" @mousedown="pulsandoPlus=true" @mouseup="pulsandoPlus=false" @mouseleave="pulsandoPlus=false"     v-repeat-click="mas" type="button" name="button">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'vs-input-number',
  directives: {
      repeatClick: {
        bind(el, binding, vnode) {
          let intervalx = null;
          let startT;
          const functionx = () => vnode.context[binding.expression].apply();
          const bucle = () => {
            if (new Date() - startT < 100) {
              functionx();
            }
            clearInterval(intervalx);
            intervalx = null;
          };
          const eventx = (e) => {
            if (e.button !== 0) return;
            startT = new Date();
            var escuchando = function() {
              if (bucle) {
                bucle.apply(this, arguments);
              }
              el.removeEventListener('mouseup', escuchando, false);
            };
            el.addEventListener('mouseleave', escuchando ,false);
            el.addEventListener('mouseup', escuchando, false);
            clearInterval(intervalx);
            intervalx = setInterval(functionx, 100);
          }
          el.addEventListener('mousedown', eventx ,false);

        }
}
    },
  props:[
    'value',
    'vsColor',
    'vsMax',
    'vsMin',
    'disabled',
    'vsLabel',
    'vsSize',
  ],
  data(){
    return {
      valuex:this.value,
      pulsandoPlus:false,
      pulsandoMenos:false,
    }
  },
  created(){
    if (parseInt(this.value)<parseInt(this.vsMin)) {
      this.$emit('input',this.vsMin)
      this.$emit('change',this.vsMin)
    } else if (parseInt(this.value)>parseInt(this.vsMax)) {
      this.$emit('input',this.vsMax)
      this.$emit('change',this.vsMax)
    }
  },
  watch:{
    value(){
      this.valuex = this.value
    }
  },
  methods:{
    blurx(){
      if(this.valuex==''){
        this.$emit('input',0)
        this.$emit('change',0)
      }
      if (parseInt(this.value)<parseInt(this.vsMin)) {
        this.$emit('input',this.vsMin)
        this.$emit('change',this.vsMin)
      } else if (parseInt(this.value)>parseInt(this.vsMax)) {
        this.$emit('input',this.vsMax)
        this.$emit('change',this.vsMax)
      }
    },
    validarKeypress(evt,value){
        var rgx = /[0-9]/;
        if(evt.key!='Backspace'&&evt.key!='Delete'&&evt.key!='ArrowLeft'&&evt.key!='ArrowRight'&&evt.key!='ArrowUp'&&evt.key!='ArrowDown'){
          if( ! rgx.test(evt.key)) {
            evt.preventDefault()
          }
        } else if (evt.key=='ArrowDown') {
          this.menos()
        } else if (evt.key=='ArrowUp') {
          this.mas()
        }
    },
    mas(){
      if(this.valuex===''){
        this.valuex = 0
      }
      if(this.vsMax?parseInt(this.value)<parseInt(this.vsMax):true){
        let valueNew = parseInt(this.valuex) + 1
        this.$emit('input',valueNew)
        this.$emit('change',valueNew)
      }
    },
    menos(){
      if(this.valuex===''){
        this.valuex = 0
      }
      if(this.vsMin?parseInt(this.value)>parseInt(this.vsMin):true){
      let valueNew = parseInt(this.valuex) - 1
      this.$emit('input',valueNew)
      this.$emit('change',valueNew)
      }
    },

  }
}
</script>

<style lang="css" scoped>
    .con-input-number {
      background: rgb(var(--primary));
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      padding: 3px;
      color: rgb(var(--primary));
      position: relative;
      margin: 5px;
    }
    .con-input-number input {
      padding: 5px;
      border: 0px;
      background: transparent;
      text-align: center;
      /* width: 100px; */
      font-size: 18px;
      color: rgb(255, 255, 255);
      transition: all .3s ease;
      box-sizing: border-box;
      min-width: 70px;
    }
  .con-input-number button{
    margin: 0px !important;
    border-radius: 50%;
    border: 0px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
    background: rgba(255, 255, 255,.3);
    color: rgb(255, 255, 255);
    z-index: 100;

  }
  .con-input-number button:active {
    transform: scale(.9);
  }
    .con-input-number button i {
      font-size: 18px;
    }
  .con-input-number button:hover {
    background: rgb(255, 255, 255);
    /* color: rgb(var(--primary)); */
    color: inherit;
  }
  .plus {
    padding-left: 15px !important;
  }
  .menos {
    padding-right: 15px !important;
  }
  .no-mas {
    transform: scale(.9);
    opacity: .3;
  }
  .no-mas:hover {
    background: rgba(255, 255, 255,.4) !important;
    color: rgb(255, 255, 255) !important;
  }
  .disabledx {
    pointer-events: none;
    user-select: none;
    opacity: .3 !important;
  }
.vs-medium button {
  width: 28px;
  height: 28px;
}
.vs-medium button i {
  font-size: 16px;
}
.vs-medium input {
  font-size: 16px;
  min-width: 60px;
}

.vs-small button {
  width: 24px;
  height: 24px;
}
.vs-small button i {
  font-size: 14px;
}
.vs-small input {
  padding: 4px;
  font-size: 14px;
  min-width: 50px;
}

.vs-mini button {
  width: 20px;
  height: 20px;
}
.vs-mini button i {
  font-size: 13px;
}
.vs-mini input {
  padding: 2px;
  font-size: 13px;
  min-width: 40px;
}

</style>
