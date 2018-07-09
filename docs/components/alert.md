---
API:
 - name: vs-active
   type: Boolean
   parameters: true, false
   description: Determines if the component is visible.
   default: false
 - name: vs-title
   type: String
   parameters: null
   description: Title of the alert
   default: null
 - name: vs-closable
   type: Boolean
   parameters: null
   description: Determines if the alert can be closed by the user
   default: false
 - name: vs-color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color of the alert
   default: false
 - name: vs-margin
   type: String
   parameters: null
   description: Mangin of the alert (top, bottom)
   default: 10px
 - name: vs-icon
   type: String
   parameters: null
   description: Determines the alert icon
   default: null
---

# Alert

<box header>

  Notifications to the user in time of execution with good animation and functionality

</box>


<box>

## Default

To add a notification we have the `vs-alert` component that as the main parameter needs the `vs-active` property that determines if the alert is visible or not.

<vuecode md>
<div slot="demo">
<vs-alert vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
</div>
<div slot="code">

```html
<vs-alert vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
```

</div>
</vuecode>
</box>

<box>

## Title

The alert can have a title with the property `vs-title` and its value would be the desired title

<vuecode md>
<div slot="demo">
<vs-alert vs-title="Lorem ipsum dolor sit amet" vs-color="rgb(231, 154, 23)" vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
</div>
<div slot="code">

```html
<vs-alert vs-title="Lorem ipsum dolor sit amet" vs-color="rgb(231, 154, 23)" vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the alert with the property `vs-color`, the colors can be the main` primary`, `success`,` danger`, `warning`,` dark` or the colors **RGB**, **HEX**.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<vs-alert vs-title="Primary" vs-active="true" vs-color="primary">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
</vs-alert>
<vs-alert vs-title="Success" vs-active="true" vs-color="success">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-title="Danger" vs-active="true" vs-color="danger">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</vs-alert>
<vs-alert vs-title="Danger" vs-active="true" vs-color="warning">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</vs-alert>
<vs-alert vs-title="Dark" vs-active="true" vs-color="dark">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-title="RGB" vs-active="true" vs-color="rgb(41, 147, 138)">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-title="HEX" vs-active="true" vs-color="#842993">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
</div>
<div slot="code">

```html
<vs-alert
  vs-color="primary"
  vs-title="Primary" vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
</vs-alert>
<vs-alert vs-title="Success" vs-active="true" vs-color="success">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-title="Danger" vs-active="true" vs-color="danger">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</vs-alert>
<vs-alert vs-title="Danger" vs-active="true" vs-color="warning">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</vs-alert>
<vs-alert vs-title="Dark" vs-active="true" vs-color="dark">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-title="RGB" vs-active="true" vs-color="rgb(41, 147, 138)">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-title="HEX" vs-active="true" vs-color="#842993">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
```

</div>
</vuecode>
</box>

<box>

## Closable

You can show and hide the alert by means of `vs-active.sync` and a Boolean bind as value.

The property to determine if the alert can be closed is `vs-closable`.

<vuecode md>
<div slot="demo">
  <Demos-Alert-Closable />
</div>
<div slot="code">

```html {5,6}
<template lang="html">
  <div class="centerx">
    <vs-button @click="active1=!active1" vs-color="primary" vs-type="filled">{{!active1?'Open Alert':'Close Alert'}}</vs-button>
    <vs-alert
    :vs-active.sync="active1"
    vs-closable>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active1:true,
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

You can add to the alert a descriptive icon with the property `vs-icon` and as a value the icon of [Material Icons](https://material.io/icons/)

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md>
<div slot="demo">
  <Demos-Alert-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <selected-icons :vs-icon.sync="icon1"/>
   <vs-alert vs-active="true" vs-color="rgb(111, 38, 224)" :vs-icon="icon1" >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
   </vs-alert>
  </div>
</template>

<script>
import selectedIcons from '../../selectedIcons.vue'
export default {
  components:{
    selectedIcons
  },
  data(){
    return {
      icon1: 'sms',
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Example of use

An example of serious use to have an input and when a condition is met show the **vs-alert**.

<vuecode md>
<div slot="demo">
  <Demos-Alert-Exampleofuse />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input vs-label="Enter only numbers" vs-placeholder="0123456789" v-model="value1"/>
    <vs-alert :vs-active="inputValido" vs-color="danger" vs-icon="new_releases" >
      the value is <b>invalid</b> you can only enter numbers
    </vs-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
    }
  },
  computed:{
    inputValido(){
      if(/^\d+$/.test(this.value1)){
        return false
      } else {
        return true
      }
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
