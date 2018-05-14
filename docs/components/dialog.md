---
API:
 - name: $vs.alert()
   type: Function
   parameters: Object, JSON
   description: Function that runs the Alert dialog.
   default: null
 - name: $vs.confirm()
   type: Function
   parameters: Object, JSON
   description: Function that executes the Confirm dialog.
   default: null
 - name: $vs.prompt()
   type: Function
   parameters: Object, JSON
   description: Function that executes the dialog prompt.
   default: null
 - name: color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Dialog color.
   default: null
 - name: title
   type: String
   parameters: null
   description: Title dialog.
   default: null
 - name: text
   type: String
   parameters: null
   description: Text dialog.
   default: null
 - name: textConfirm
   type: String
   parameters: null
   description: Text of the confirm button in the dialog.
   default: null
 - name: textCancel
   type: String
   parameters: null
   description: Cancel button text in the dialog.
   default: null
 - name: confirm
   type: Function
   parameters: (value) only in the dialog prompt
   description: Function that is executed when confirming the dialog.
   default: null
 - name: cancel
   type: Function
   parameters: (value) only in the dialog prompt
   description: Function that is executed when canceling in the dialog.
   default: null
 - name: input
   type: Object
   parameters: placeholder, type, maxLength, value
   description: Parameters of the dialog prompt input (in the type parameter the inputs are not allowed checkBox, radio or button).
   default: null
---

# Dialogs

<box header>

  Dilogs very easy to implement and practical to use in any case and need.

</box>


<box>

## Alert

To inform the user you can use the alert type dialogs by calling the `$vs.alert` function, the parameters are:

  - title
  - text
  - textConfirm
  - color
  - confirm

```js
this.$vs.alert({
  title:'Dialog alert Default',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  textConfirm:'Aceptar',
  color:'rgb(233, 112, 197)',
  confirm:()=>{
    // Function a ejecutar cuando se confirma
  },
})
```

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Alert />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="alert('primary')" vs-type="primary-flat">Alert Primary</vs-button>
    <vs-button @click="alert('success')" vs-type="success-flat">Alert success</vs-button>
    <vs-button @click="alert('danger')" vs-type="danger-flat">Alert Danger</vs-button>
    <vs-button @click="alert('warning')" vs-type="warning-flat">Alert Warning</vs-button>
    <vs-button @click="alert('dark')" vs-type="dark-flat">Alert dark</vs-button>
    <vs-button @click="alertColor()" vs-type="primary-gradient">Alert Color RGB || HEX</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    alert(color){
      this.$vs.alert({
        title:'Dialog alert Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        textConfirm:'Aceptar',
        color:color,
        confirm:()=>{

        },
      })
    },
    alertColor(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.alert({
        title:'Dialog alert Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        textConfirm:'Aceptar',
        color:color,
        confirm:function(){
          // console.log("hola esto esta en confirm");
        },
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

There are times when we need the user's confirmation for it, we have the `$ vs.confirm` function that as parameters has::

- title
- text
- color
- confirm
- cancel

<vuecode md>
<div slot="demo">
  <Demos-Dialogs-Confirm />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="confirm" vs-type="danger-gradient">Run Confirm</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    confirm(){
      this.$vs.confirm({
        title:'Dialog Confirm Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color:'danger',
        confirm:()=>{
          this.$vs.notify({
            title:'Eliminado',
            text:'Lorem ipsum dolor sit amet',
            color:'danger',
          })
        },
        cancel:()=>{
          console.log("cancel click");
          this.$vs.notify({
            title:'Cancel',
            text:'Lorem ipsum dolor sit amet',
          })
        }
      })
    },
  }
}
</script>
```

</div>
</vuecode>

:::tip
  The function within confirm can be an arrow function to take advantage of the global scope of vue.

```js{2}
confirm:()=>{
  this.$vs.notify({
    title:'Eliminado',
    text:'Lorem ipsum dolor sit amet',
    color:'danger',
  })
},
```
  In case of using a normal function you would have to make use of a variable

```js{2}
confirm(){
  var _this = this
  this.$vs.confirm({
    title:'Dialog Confirm Default',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    color:'danger',
    confirm:()=>{
      _this.$vs.notify({
        title:'Eliminado',
        text:'Lorem ipsum dolor sit amet',
        color:'danger',
      })
    },
  })
},
```
:::

</box>


<box>

## Prompt

You can obtain a user value through the function `$vs.prompt`.

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
     <vs-button @click="prompt" vs-type="primary-border">Run prompt</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      val:null,
    }
  },
  methods:{
    prompt(){
      this.$vs.prompt({
        title:'Dialog Confirm Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color:'primary',
        input:{
          placeholder:'Name',
          value:this.val,
          maxLength:20,
          type:'text'
        },
        confirm:(value)=>{
          this.val = value
          this.$vs.notify({
            title:'Muy Bien',
            text:'Gracias '+value,
            color:'success',
          })
        },
        cancel:(value)=>{
          this.$vs.notify({
            title:'Cancel',
            text:'Gracias '+value,
            color:'danger',
          })
        }
      })
    },
  }
}
</script>
```

</div>
</vuecode>

</box>
