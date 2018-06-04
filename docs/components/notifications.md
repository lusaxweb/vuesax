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
    <vs-button @click="$vs.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})" vs-type="primary-border">Notificacion white</vs-button>
    <vs-button @click="$vs.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" vs-type="primary-flat">Notificacion Primary</vs-button>
    <vs-button @click="$vs.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})" vs-type="success-flat">Notificacion Success</vs-button>
    <vs-button @click="$vs.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})" vs-type="danger-flat">Notificacion Danger</vs-button>
    <vs-button @click="$vs.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})" vs-type="warning-flat">Notificacion Warning</vs-button>
    <vs-button @click="$vs.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})" vs-type="dark-flat">Notificacion Dark</vs-button>
    <vs-button @click="notiAzar()" vs-type="success-gradient">Notificacion Color Al Azar</vs-button>
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
      color:'primary'})" vs-type="primary-flat">Position Default</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position top-right',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'success',
      position:'top-right'})" vs-type="success-flat">Position Top Right</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position top-left',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'danger',
      position:'top-left'})" vs-type="danger-flat">Position Top Left</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position bottom-left',
      text:'Lorem ipsum dolor sit amet, consectetur',
      color:'warning',
      position:'bottom-left'})" vs-type="warning-flat">Position Bottom Left</vs-button>

    <vs-button @click="$vs.notify({
      title:'Position bottom-center',
      text:'Lorem ipsum dolor sit amet,
      consectetur',
      color:'dark',
      position:'bottom-center'})" vs-type="dark-flat"> Position Bottom Center</vs-button>

    <vs-button @click="notiAzarCenter()" vs-type="success-gradient">Position Top Center Color Al Azar</vs-button>
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

Notifications can have icons to give a better user experience and report with a more pleasant and intuitive notification for this is the property `icon` a serious example: `icon: 'chat'`
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
    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})" vs-type="primary-flat">Icon Mail</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})" vs-type="success-flat">Icon check_box</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})" vs-type="danger-flat">Icon favorite</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})" vs-type="warning-flat">Icon error</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})" vs-type="dark-flat">Icon chat</vs-button>

    <vs-button @click="notiAzarIcon()" vs-type="success-gradient">Icon Color Al Azar</vs-button>
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

There are times when we need to execute a function when the user clicks on the notification. For this, we have the property that clicks as a value to pass a function to it. Example: `click:()=>{ ... }`

<vuecode md>
<div slot="demo">
  <Demos-Notifications-Click/>
</div>
<div slot="code">

```html{16}
<template lang="html">
  <div class="centerx">
    <vs-button @click="myFunction()" vs-type="primary-flat">Run Example</vs-button>
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
  <vs-button @click="$vs.notify({title:'Time default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-type="primary-flat">Time default</vs-button>
  <vs-button @click="$vs.notify({time:4000,title:'Time 4s (4000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-type="primary-flat">Time 4s (4000)</vs-button>
  <vs-button @click="$vs.notify({time:8000,title:'Time 8s (8000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" vs-type="primary-flat">Time 8s (8000)</vs-button>
</div>
<div slot="code">

```html{9,17}
<vs-button @click="$vs.notify({
  title:'Time default',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" vs-type="primary-flat">Time default</vs-button>

<vs-button @click="$vs.notify({
  time:4000,
  title:'Time 4s (4000)',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" vs-type="primary-flat">Time 4s (4000)</vs-button>

<vs-button @click="$vs.notify({
  time:8000,
  title:'Time 8s (8000)',
  text:'Lorem ipsum dolor sit amet consectetur',
  color:'primary',
  icon:'query_builder'
})" vs-type="primary-flat">Time 8s (8000)</vs-button>
```

</div>
</vuecode>

</box>
