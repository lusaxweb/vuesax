---
API:
 - name: v-model
   type: String / bolean / array
   parameters: null
   description: link values.
   default: null
 - name: vs-color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color options for checkBox.
   default: primary
 - name: vs-value
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Value if different from a boolean.
   default: null
---

# CheckBox

<box header>

Aggressive and impacting effect and the most important functional

</box>

<box>

## State

To add a checkBox to the application, we have the `vs-checkbox` component, which as principal parameters needs `v-model` that would be our value.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-State />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">Primary - active</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox2">Primary - inactive</vs-checkbox>
      </li>
      <li>
        <vs-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vs-checkbox>
      </li>
      <li>
        <vs-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:true,
      checkBox4:false,
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

You can change the color of the checkBox with the property `vs-color`, as a value you can use the main `primary`,` success`, `danger`,` warning`, `dark` or any color **RGB** or **HEX**.

:::warning
  Only RGB and HEX colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">Primary</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-color="success" v-model="checkBox2">Success</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-color="danger" v-model="checkBox3">Danger</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-color="warning" v-model="checkBox4">Warning</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-color="dark" v-model="checkBox5">Dark</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vs-checkbox>
      </li>
      <li>
        <vs-checkbox vs-color="#720ea8" v-model="checkBox7">Color HEX</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Boolean Value

The most normal thing is to work with the boolean data type when working with a checkBox for it, you just have to link a boolean value in `v-model`.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Boolean />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">{{checkBox1}}</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox2">{{checkBox2}}</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## String Value

You can pass as a value a string by giving it as a value of the property `vs-value`.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-String />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="ul">
      <li class="modelx">
        {{checkBox1==null?'null':checkBox1}}
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="Luis Daniel" >luis daniel</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:null,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Array Values

You can have several checkBoxs linked to the same array only by using `v-model` with a value of **Array**.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Array />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <ul class="centerx">
      <li class="modelx">
        {{checkBox1}}
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="luis">Luis</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="carols">carols</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="summer">summer</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="lyon">Lyon</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:['luis']
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Array Object values

There are times when you need to link an object as a value when selecting a checkBox for it, you only have to put as value in `vs-value` an object either literal or linked.

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Arrayobjects />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <div class="modelx">
      {{form.regions}}
    </div>
    <vs-col v-for="(region, index) in regions" :key="index">
      <vs-checkbox v-model="form.regions" :vs-value="region" >{{ region.name }}</vs-checkbox>
    </vs-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
    regions: []
  },
  regions: [
    { id: 1, name: 'Queensland' },
    { id: 2, name: 'South Australia' },
    { id: 3, name: 'New South Wales' },
  ]
})
}
</script>
```

</div>
</vuecode>
</box>
