---
API:
 - name: vsValue
   type: String
   parameters: null
   description: Radius value.
   default: null
 - name: vsColor
   type: String
   parameters: primary,success,danger,warning,dark,RGB,HEX
   description: Radio color.
   default: primary
 - name: disabled
   type: Boolean
   parameters: null
   description: Property to define if the radio is disabled.
   default: false
---

# Radio

<box header>

  Radio with a nice effect, very easy to implement.

</box>


<box>

## Default

To implement a radio button you just have to add the `vs-radio` component and add a `v-model`.

:::warning
The **Radio Button** is always going to replace the current value.
:::

<vuecode md>
<div slot="demo">
  <Demos-Radio-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="leftx">
    <li class="modelx">
      {{radios1}}
    </li>
    <li>
      <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
    </li>
    <li>
      <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
    </li>
    <li>
      <vs-radio v-model="radios1" vs-value="summer">summer</vs-radio>
    </li>
    <li>
      <vs-radio disabled="true" v-model="radios1" vs-value="lyon">Lyon - disabled</vs-radio>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      radios1:'luis',
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Colors

You can change the color with the property `vs-color`. Also, you could pass as value the default colors: `primary`, `success`, `danger`, `warning`, `dark` or a RGB or HEX color.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Radio-Colors />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="leftx">
      <li class="modelx">
        {{radios2}}
      </li>
      <li>
        <vs-radio v-model="radios2" vs-value="primary">Primary</vs-radio>
      </li>
      <li>
        <vs-radio vs-color="success" v-model="radios2" vs-value="Success">Success</vs-radio>
      </li>
      <li>
        <vs-radio vs-color="danger" v-model="radios2" vs-value="Danger">Danger</vs-radio>
      </li>
      <li>
        <vs-radio vs-color="warning" v-model="radios2" vs-value="Warning">Warning</vs-radio>
      </li>
      <li>
        <vs-radio vs-color="dark" v-model="radios2" vs-value="Dark">Dark</vs-radio>
      </li>
      <li>
        <vs-radio vs-color="rgb(87, 251, 187)" v-model="radios2" vs-value="RGB">RGB</vs-radio>
      </li>
      <li>
        <vs-radio vs-color="#e48346" v-model="radios2" vs-value="HEX">HEX</vs-radio>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      radios2:'primary',
    }
  }
}
</script>
```

</div>
</vuecode>

</box>
