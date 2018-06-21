---
API:
 - name: vs-active.sync
   type: Boolean
   parameters: null
   description: Define if the dialog is active (visible).
   default: false
 - name: vs-title
   type: String
   parameters: null
   description: Main title of the dialog.
   default: Dialog
 - name: vs-color
   type: String
   parameters: null
   description: Dialog color and accept buttons.
   default: primary
 - name: vs-accept
   type: function
   parameters: null
   description: function that is executed when the user approves the dialog.
   default: null
 - name: vs-cancel
   type: function
   parameters: null
   description: Function that executes the user cancel the dialog.
   default: null
 - name: vs-type
   type: String
   parameters: alert , confirm, prompt
   description: Determine the type of dialog.
   default: alert
 - name: slot="input"
   type: Slot
   parameters: null
   description: slot to put the input at the prompt.
   default: null
 - name: vs-is-valid
   type: Boolean
   parameters: null
   description: Determines if it is valid to be able to accept at the prompt.
   default: null
---

# Dialogs

<box header>

  Dilogs very easy to implement and practical to use in any case and need.

</box>

<box>

## Alert

To implement a dialog we have the `vs-dialog` component, which as a required parameter is the` vs-active` that determines when the dialog is active and visible to the user.

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Alert />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="openAlert('primary')" vs-color="primary" vs-type="flat">Alert Primary</vs-button>
    <vs-button @click="openAlert('success')" vs-color="success" vs-type="flat">Alert success</vs-button>
    <vs-button @click="openAlert('danger')" vs-color="danger" vs-type="flat">Alert Danger</vs-button>
    <vs-button @click="openAlert('warning')" vs-color="warning" vs-type="flat">Alert Warning</vs-button>
    <vs-button @click="openAlert('dark')" vs-color="dark" vs-type="flat">Alert Dark</vs-button>
    <vs-button @click="openAlert(null)" vs-color="primary" vs-type="gradient">Alert Color RGB | HEX</vs-button>

    <!-- Component Dialog - alert -->
    <vs-dialog
      :vs-color="colorAlert"
      :vs-title="titleAlert"
      @vs-accept="acceptAlert"
      :vs-active.sync="activeAlert">
      <!-- Text in Alert -->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </vs-dialog>

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
      this.activeAlert = true
      this.titleAlert = 'Alert ' + color || this.getColorRandom()
      this.colorAlert = color || this.getColorRandom()
    },
    getColorRandom(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
    },
    acceptAlert(color){
      this.$vs.notify({
        color:this.colorAlert,
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
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

## Confirm

You can add a `vs-dialog` of type **confirm** by changing the `vs-type` property.

:::tip
  To do some action when the user approves or confirms we have the property `@vs-accept="myFunctionAccept"`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Confirm />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="activeConfirm = true" vs-color="danger" vs-type="gradient">Run Confirm</vs-button>
    <vs-dialog
      vs-color="danger"
      vs-title="Delete Image"
      vs-type="confirm"
      @vs-accept="acceptAlert"
      :vs-active.sync="activeConfirm">
      You are sure to delete this image?
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeConfirm:false
  }),
    methods:{
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

If you need the user to enter any data inside the dialog, you can do it by changing the property `vs-type =" prompt"`.

To add the inputs is done inside the slot named `input`

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
  <div class="centerx">
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vs-button @click="activePrompt = true" vs-type="border">Run prompt</vs-button>
     <div class="modelx">
       {{valMultipe.value1}}
       {{valMultipe.value2}}
     </div>
     <vs-button @click="activePrompt2 = true" vs-type="border">Run prompt inputs</vs-button>

     <vs-dialog
      @vs-cancel="val=''"
      vs-type="prompt"
      @vs-accept="acceptAlert"
      :vs-active.sync="activePrompt">
       Enter the security code
       <div slot="input">
         <vs-input vs-placeholder="Code" v-model="val"/>
       </div>
     </vs-dialog>

     <vs-dialog
      @vs-cancel="valMultipe.value1='',valMultipe.value2=''"
      vs-type="prompt"
      @vs-accept="acceptAlert"
      :vs-is-valid="validName"
      :vs-active.sync="activePrompt2">
       Enter your first and last name to continue
       <div slot="input">
         <vs-input vs-placeholder="Name" v-model="valMultipe.value1"/>
         <vs-input vs-placeholder="Last Name" v-model="valMultipe.value2"/>

         <vs-alert :vs-active="!validName" vs-color="danger" vs-icon="new_releases" >
           Fields can not be empty please enter the data
         </vs-alert>
       </div>
     </vs-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
  }
}
</script>
```

</div>
</vuecode>

</box>
