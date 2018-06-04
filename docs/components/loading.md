---
API:
 - name: $vs.loading()
   type: Function
   parameters: Object
   description: function to open loading.
   default: null
 - name: $vs.loading.close()
   type: Function
   parameters:
   description: function to close loading.
   default: null
 - name: color
   type: String
   parameters: RGB, HEX, primary, danger, success, dark, warning
   description: Color of loading.
   default: null
 - name: background
   type: String
   parameters: RGB, HEX, primary, danger, success, dark, warning
   description: loading background.
   default: rgba(255, 255, 255,.8)
---

# Loading

<box header>

  Very simple to implement and remove.

</box>


<box>

## Default

To add a loading in any part of your application we have the global function `$ vs.loading ()`, and then when you want to remove it we have `$ vs.loading.close ()`.

:::tip
For the examples, the request or the delay is simulated with `setTimeout`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="openLoading" vs-type="primary-filled">Loading Default</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    openLoading(){
      this.$vs.loading()
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Color

You can change the color of the loading with the property `vs-color`.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorLoading" name="" value="">
    <vs-button @click="openLoadingColor" vs-type="danger-gradient">Primary</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorLoading:'#7d0c3f',
    }
  },
  methods:{
    openLoadingColor(){
      this.$vs.loading({color:this.colorLoading})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Background

If you need to change the background of the loading, you can use the property `vs-background`

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Background />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input type="color" v-model="backgroundLoading" name="" value="">
    <vs-button @click="openLoadingBackground" vs-type="success-gradient">Primary</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'#22c16b',
    }
  },
  methods:{
    openLoadingBackground(){
      this.$vs.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>
```

</div>
</vuecode>
</box>
