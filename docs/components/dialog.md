---
API:
 - name: active.sync
   type: Boolean
   parameters: null
   description: Define if the dialog is active (visible).
   default: false
 - name: title
   type: String
   parameters: null
   description: Main title of the dialog.
   default: Dialog
 - name: color
   type: String
   parameters: null
   description: Dialog color and accept buttons.
   default: primary
 - name: accept
   type: function
   parameters: null
   description: function that is executed when the user approves the dialog.
   default: null
 - name: cancel
   type: function
   parameters: null
   description: Function that executes the user cancel the dialog.
   default: null
 - name: close
   type: function
   parameters: null
   description: function that is executed when the dialog as closed.
   default: null
 - name: is-valid
   type: Boolean
   parameters: null
   description: Determines if it is valid to be able to accept at the prompt.
   default: null
 - name: buttons-hidden
   type: Boolean
   parameters: null
   description: Determines if the component has hidden or visible buttons.
   default: false
 - name: button-accept
   type: type buttons
   parameters: null
   description: Change the type of botton for the accept.
   default: false
 - name: button-cancel
   type: type buttons
   parameters: null
   description: Change the type of botton for the cancel.
   default: filled
 - name: accept-text
   type: String
   parameters: null
   description: Change the text of the accept button.
   default: Accept
 - name: cancel-text
   type: String
   parameters: null
   description: Change the text of the cancel button.
   default: Cancel
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons

---

# Dialogs

<box header>

  Dialogs very easy to implement and practical to use in any case and need.

</box>

<box>

## Alert

To generate a dialog we have the global function `$vs.dialog` the parameters to generate the dialog are

- **title**: title of the dialogue - *String*
- **text**: internal text of the dialog - *String*
- **color**: color of the component - *Colors, RGB, HEX*
- **accept**: function that executes the user accept the dialog - *Function*
- **cancel**: function that executes the user to cancel the dialog (if it is a confirm type) - *Function*
- **type**: determines the type of dialog (alert or confirm) - *alert, confirm*
- **buttonAccept**: determines the type of accept button - *Boolean*
- **buttonCancel**: determines the type of cancel button - *Boolean*

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Alert />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="openAlert('primary')" color="primary" type="flat">Alert Primary</vs-button>
    <vs-button @click="openAlert('success')" color="success" type="flat">Alert Success</vs-button>
    <vs-button @click="openAlert('danger')" color="danger" type="flat">Alert Danger</vs-button>
    <vs-button @click="openAlert('warning')" color="warning" type="flat">Alert Warning</vs-button>
    <vs-button @click="openAlert('dark')" color="dark" type="flat">Alert Dark</vs-button>
    <vs-button @click="openAlert(null)" color="primary" type="gradient">Alert Color RGB | HEX</vs-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorAlert:'primary',
    titleAlert:'Alert',
    activeAlert:false,
    valueInput:'',
  }),
  methods:{
    openAlert(color){
      this.colorAlert = color || this.getColorRandom()
      this.$vs.dialog({
        color:this.colorAlert,
        title: `Dialog - ${this.colorAlert}`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
    },
    acceptAlert(){
      this.$vs.notify({
        color:this.colorAlert,
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    getColorRandom(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
    },
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Confirm

If you need a dialog of type confirm you can do it just by changing the type as a parameter inside the main function.

:::tip
  To do some action when the user approves or confirms we have the property `accept:myFunctionAccept`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Confirm />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="openConfirm()" color="danger" type="gradient">Alert Primary</vs-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeConfirm:false
  }),
    methods:{
      openConfirm(){
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
      },
      acceptAlert(color){
        this.$vs.notify({
          color:'danger',
          title:'Deleted image',
          text:'The selected image was successfully deleted'
        })
      },
    }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Prompt

To add a dialog of type prompt we have a global function a completely independent component `vs-prompt`. This allows more flexibility with the input and ability to add any type of input and components.

:::tip
  The properties of the component are equivalent to those of the global function only with the vs before each property something like

 - `function = color`
 - `component = vsColor`
:::

```html
  <div slot="input">
    <input v-model="val" type="text" name="" value="">
  </div>
```

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Prompt />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx con-exemple-prompt">
    <!-- <vs-button @click="openPrompt" color="primary" type="border">Run prompt</vs-button> -->
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>
     <div class="modelx">
       {{valMultipe.value1}}
       {{valMultipe.value2}}
     </div>
     <vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>

     <vs-prompt
      @cancel="val=''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt">
       <div class="con-exemple-prompt">
          Enter the security code
         <vs-input placeholder="Code" v-model="val"/>

         <vs-select
            class="selectExample"
            label="Figuras"
            v-model="select1"
            >
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
          </vs-select>
       </div>
     </vs-prompt>

     <vs-prompt
      color="danger"
      @cancel="valMultipe.value1='',valMultipe.value2=''"
      @accept="acceptAlert"
      @close="close"
      :is-valid="validName"
      :active.sync="activePrompt2">
       <div class="con-exemple-prompt">
       Enter your first and last name to <b>continue</b>.
         <vs-input placeholder="Name" v-model="valMultipe.value1"/>
         <vs-input placeholder="Last Name" v-model="valMultipe.value2"/>

         <vs-alert :active="!validName" color="danger" icon="new_releases" >
           Fields can not be empty please enter the data
         </vs-alert>
       </div>
     </vs-prompt>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data(){
    return {
      select1:2,
      options1:[
        {text:'IT',value:0},
        {text:'Blade Runner',value:2},
        {text:'Thor Ragnarok',value:3},
      ],
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
    acceptAlert(color){
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
  }
}
</script>

<style lang="stylus">
.con-exemple-prompt
  padding 10px;
  padding-bottom 0px;
  .vs-input
    width 100%
    margin-top 10px;
</style>


```

</div>
</vuecode>

</box>
