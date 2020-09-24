---
API:
 - name: vs-value
   type: String
   parameters: null
   description: Radius value.
   default: null
 - name: vs-name
   type: String
   parameters: null
   description: Radius name.
   default: null  
 - name: color
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

To implement a radio button you just add the `vs-radio` component and add a `v-model`.

You can give a name to a radio button with `vs-name`

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
      <vs-radio v-model="radios1" vs-name="radios1" vs-value="luis">Luis</vs-radio>
    </li>
    <li>
      <vs-radio v-model="radios1" vs-name="radios1" vs-value="carols">Carols</vs-radio>
    </li>
    <li>
      <vs-radio v-model="radios1" vs-name="radios1" vs-value="summer">Summer</vs-radio>
    </li>
    <li>
      <vs-radio disabled="true" v-model="radios1" vs-name="radios1" vs-value="lyon">Lyon - disabled</vs-radio>
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

You can change the color with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

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
        <vs-radio color="success" v-model="radios2" vs-value="Success">Success</vs-radio>
      </li>
      <li>
        <vs-radio color="danger" v-model="radios2" vs-value="Danger">Danger</vs-radio>
      </li>
      <li>
        <vs-radio color="warning" v-model="radios2" vs-value="Warning">Warning</vs-radio>
      </li>
      <li>
        <vs-radio color="dark" v-model="radios2" vs-value="Dark">Dark</vs-radio>
      </li>
      <li>
        <vs-radio color="rgb(87, 251, 187)" v-model="radios2" vs-value="RGB">RGB</vs-radio>
      </li>
      <li>
        <vs-radio color="#e48346" v-model="radios2" vs-value="HEX">HEX</vs-radio>
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
