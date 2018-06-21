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

<!-- Default -->
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
    <vs-button @click="openLoading" vs-type="filled" vs-color="primary">Loading Default</vs-button>
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

<!-- Color -->
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
    <vs-button @click="openLoadingColor" vs-color="danger" vs-type="gradient">Primary</vs-button>
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


<!-- Background -->
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

<!-- Contained -->
<box>

## Contained

To add a loading within a container, call the `$ vs.loading ()` global function passing the `container` and the `scale` parameters. When you want to remove it we have `$ vs.loading.close ()`, passing the same `container` parameter.

:::tip
For the examples, the request or the delay is simulated with `setTimeout`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Loading-Contained />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button id="button-with-loading" class="vs-con-loading__container" @click="openLoadingContained" vs-type="filled" vs-color="primary">Button with Loading</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'primary',
      colorLoading:'#fff',
    }
  },
  methods:{
    openLoadingContained(){
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-with-loading',
        scale: 0.3
      })
      setTimeout( ()=> {
        this.$vs.loading.close({
          container: '#button-with-loading > .vs-con-loading'
        })
      }, 2000);
    },
    openLoadingInDiv(){
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=> {
        this.$vs.loading.close({
          container: '#div-with-loading > .vs-con-loading'
        })
      }, 2000);
    },
  }
}
</script>

<style lang="css">
.fill-row {
  flex: 0 0 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
#div-with-loading {
  width: 200px;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #444;
  border-radius: 5px;
}
</style>
```

</div>
</vuecode>

</box>
