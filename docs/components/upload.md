---
API:
 - name: vs-file
   type: bind
   parameters: null
   description: Value of the component (No multiple).
   default: null
 - name: vs-file-list
   type: bind
   parameters: null
   description: Value of the Multiple image component.
   default: null
---

# Upload

<box header>

  Upload images easily and with nice effect

</box>


<box>

## Default

To add a component to upload files and visualize them we have `vs-upload`, use the `vs-file.sync` property to save the name of the file.

<vuecode md>
<div slot="demo">
  <Demos-Upload-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-upload :vs-file.sync="url1" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      url1:'',
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Multiple

You can have a multiple upload by adding the multiple property within the component

:::tip
  When you need a multiple upload to bin the value the property is used `vs-file-list.sync`.
:::

<vuecode md>
<div slot="demo">
  <Demos-Upload-Multiple />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-upload :vs-file-list.sync="urls1" multiple />
    <pre class="pre">{{urls1}}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      urls1:[],
    }
  }
}
</script>

<style lang="css">
.pre {
  width: 100%;
  color: rgba(255, 255, 255,.7);
}
</style>
```

</div>
</vuecode>
</box>
