---
API:
 - name: v-model
   type: String / boolean / array
   parameters: null
   description: Link values.
   default: null
 - name: color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color options for checkBox.
   default: primary
 - name: vs-value
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Value if different from a boolean.
   default: null
 - name: icon
   type: String
   parameters: Material Icons
   description: Change the checkBox icon.
   default: checked
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
---

# CheckBox

<box header>

Aggressive and impacting effect and the most important functional

</box>

<box>

## State

To add a checkBox, we have the `vs-checkbox` component which expects a principal parameter `v-model` that would be our value.

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

You can change the color of the checkBox with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

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
        <vs-checkbox color="success" v-model="checkBox2">Success</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="danger" v-model="checkBox3">Danger</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="warning" v-model="checkBox4">Warning</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="dark" v-model="checkBox5">Dark</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vs-checkbox>
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

In most cases you will need a boolean data type while working with checkBoxes. For making this possible you have to link a boolean value in `v-model`.

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
        <vs-checkbox v-model="checkBox1" vs-value="Luis Daniel" >Luis Daniel</vs-checkbox>
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

You can have several checkBoxs linked to the same array only by using `v-model` with a value of **array**.

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
        <vs-checkbox v-model="checkBox1" vs-value="carols">Carols</vs-checkbox>
      </li>
      <li>
        <vs-checkbox v-model="checkBox1" vs-value="summer">Summer</vs-checkbox>
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

Sometimes you need to link an object as a value when selecting a checkBox for it, you only have to put it as value in `vs-value` an object either literal or linked.

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


<box>

## Change Icon

Sometimes we want to change the internal icon inside the checkbox. To do so, we have the property `icon`

::: tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.

:::

<vuecode md>
<div slot="demo">
  <Demos-Checkbox-Icons />
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
        <vs-checkbox icon="sms" color="success" v-model="checkBox2">SMS</vs-checkbox>
      </li>
      <li>
        <vs-checkbox icon="close" color="danger" v-model="checkBox3">Cancel</vs-checkbox>
      </li>
      <li>
        <vs-checkbox icon="attach_file" color="warning" v-model="checkBox4">File</vs-checkbox>
      </li>
      <li>
        <vs-checkbox icon="format_bold" color="dark" v-model="checkBox5">Bold</vs-checkbox>
      </li>
      <li>
        <vs-checkbox icon="location_searching" color="rgb(38, 187, 174)" v-model="checkBox6">Location</vs-checkbox>
      </li>
      <li>
        <vs-checkbox icon="camera_alt" color="#720ea8" v-model="checkBox7">Camera</vs-checkbox>
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
