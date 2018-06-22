---
API:
 - name: $vs.notify
   type: function
   parameters: (title,text,color,position,icon,click,fixed)
   description: Function that makes the notification appear.
   default: null
 - name: title
   type: string
   parameters:
   description: Title of the notification.
   default: null
 - name: time
   type: Number
   parameters:
   description: Waiting time for notification to disappear.
   default: 2s
 - name: text
   type: string
   parameters:
   description: Notification text.
   default: null
 - name: color
   type: string
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Background color of the notification.
   default: null
 - name: position
   type: string
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: bottom-right, top-right, top-left, bottom-left, bottom-center, top-center.
   default: null
 - name: position
   type: string
   parameters: bottom-right, top-right, top-left, bottom-left, bottom-center, top-center
   description: Posision in which the notification appears.
   default: null
 - name: icon
   type: string
   parameters: Icon material
   description: Notification Icon.
   default: null
 - name: click
   type: Function
   parameters: function(){ ... }, ()=>{ ... }
   description: Function executed by clicking on the notification
   default: null
 - name: fixed
   type: Boolean
   parameters: true, false
   description: Removes the automatic elimination of the notification
   default: null
---

# Notifications

<box header>

  Nice simple and interactive notifications.

</box>

<!-- defaults notifications -->
<box>

## Notifications Defaults

To add a notification we have the global function `$vs.notify`, as the first parameter is a `json` with all the necessary attributes or if we only want the standard notification we can only add a string with the text of the notification.

<vuecode md>
<div slot="demo">

  <Demos-Notifications-Defaults/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-notifications">
    <vs-button @click="$vs.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})" vs-color="primary" vs-type="border">Notificacion white</vs-button>
    <vs-button @click="$vs.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" vs-color="primary" vs-type="flat">Notificacion Primary</vs-button>
    <vs-button @click="$vs.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})" vs-color="success" vs-type="flat">Notificacion Success</vs-button>
    <vs-button @click="$vs.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})" vs-color="danger" vs-type="flat">Notificacion Danger</vs-button>
    <vs-button @click="$vs.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})" vs-color="warning" vs-type="flat">Notificacion Warning</vs-button>
    <vs-button @click="$vs.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})" vs-color="dark" vs-type="flat">Notificacion Dark</vs-button>
    <vs-button @click="notiAzar()" vs-color="success" vs-type="gradient">Notificacion Color Al Azar</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    notiAzar(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.notify({
        title:'Color',
        text:'Lorem ipsum dolor sit amet, consectetur',
        color:color
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

## Positions

We can change the place where the notification appears with the property `position` a serious example `position: 'top-right'` the supported values are:

 - `top-right`
 - `top-left`
 - `bottom-left`
 - `bottom-center`
 - `top-center`

 :::warning
  The default notifications appear `bottom-right`, it is not necessary to add the position property if it is the desired position.
 :::

<vuecode md>
<div slot="demo">

  <Demos-Notifications-Position/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="con-notifications-position">
    <vs-button @click="$vs.notify({
      title:'Position Default',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'primary'})" vs-color="primary" vs-type="flat">Position Default</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position top-right',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'success',
      position:'top-right'})" vs-color="success" vs-type="flat">Position Top Right</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position top-left',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'danger',
      position:'top-left'})" vs-color="danger" vs-type="flat">Position Top Left</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position bottom-left',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'warning',
      position:'bottom-left'})" vs-color="warning" vs-type="flat">Position Bottom Left</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position bottom-center',
      text:'Lorem ipsum dolor sit amet,
      consectetur',
      color:'dark',
      position:'bottom-center'})" vs-color="dark" vs-type="flat"> Position Bottom Center</vs-button>

    <vs-button @click="notiAzarCenter()" vs-color="success" vs-type="gradient">Position Top Center Color Al Azar</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    notiAzarCenter(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.notify({title:'Position top-center',text:'Lorem ipsum dolor sit amet, consectetur',color:color,position:'top-center'})
    }
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Icons

Notifications can have icons inside in order to give a better user experience and notify with a more pleasant and intuitive notification. For making this use the `icon` property. A real-case example would be: `icon: 'chat'`
::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::
<vuecode md>
<div slot="demo">

  <Demos-Notifications-Icons/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})" vs-color="primary" vs-type="flat">Icon Mail</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})" vs-color="success" vs-type="flat">Icon check_box</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})" vs-color="danger" vs-type="flat">Icon favorite</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})" vs-color="warning" vs-type="flat">Icon error</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})" vs-color="dark" vs-type="flat">Icon chat</vs-button>

    <vs-button @click="notiAzarIcon()" vs-color="success" vs-type="gradient">Icon Color Al Azar</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    notiAzarIcon(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      // this.vsNoti('Lorem ipsum dolor sit amet, consectetur',color,null,'verified_user')
      this.$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
    }
  }
}
</script>
```

</div>
</vuecode>

</box>



</vuecode>

</box>

<box>

## Fixed and function click

Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: `click:()=>{ ... }`

<vuecode md>
<div slot="demo">

  <Demos-Notifications-Click/>

</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="myFunction()" vs-type="flat">Run Example</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    myFunction(){
      this.$vs.notify({
        title:'Function click',
        text:'Click on me',
        color:'primary',
        fixed:true,
        click:()=>{
          // Secondary function
          this.$vs.notify({
            title:'Secondary function',
            text:'Executed the function when clicking',
            color:'success',
            icon:'check_box'
          })
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

## Time

You can change the delay time in leaving the notification screen with the `time` property, example: `time: 4000`.

::: tip
By default the notifications have a time of **2000** (2s)
:::

<vuecode md center>
<div slot="demo">
  <vs-button @click="$vs.notify({title:'Time default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-color="primary" vs-type="flat">Time default</vs-button>
  <vs-button @click="$vs.notify({time:4000,title:'Time 4s (4000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-color="primary" vs-type="flat">Time 4s (4000)</vs-button>
  <vs-button @click="$vs.notify({time:8000,title:'Time 8s (8000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-color="primary" vs-type="flat">Time 8s (8000)</vs-button>
</div>
<div slot="code">

```html
<vs-button @click="$vs.notify({
  title:'Time default',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" vs-color="primary" vs-type="flat">Time default</vs-button>

<vs-button @click="$vs.notify({
  time:4000,
  title:'Time 4s (4000)',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" vs-color="primary" vs-type="flat">Time 4s (4000)</vs-button>

<vs-button @click="$vs.notify({
  time:8000,
  title:'Time 8s (8000)',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" vs-color="primary" vs-type="flat">Time 8s (8000)</vs-button>
```

</div>
</vuecode>

</box>
