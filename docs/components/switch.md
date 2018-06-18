---
API:
 - name: v-model
   type: boolean || Array
   parameters: true || false || []
   description: Link values.
   default: null
 - name: vs-value
   type: String
   parameters:
   description: Value if different from a boolean.
   default: null
 - name: vs-type
   type: String
   parameters: type || HEX || RGB
   description: Type of element or color.
   default: primary
 - name: vs-icon
   type: String
   parameters: icon material
   description: Icon within the element.
   default: null
 - name: change
   type: Event
   parameters: function
   description: Event that is executed when changing data in the component.
   default: null
---
# Switch

<box header>

 Simple and functional.

</box>

<box>

## State

To implement a switch element in the application, we add the component `vs-switch`.

<vuecode md>
<div slot="demo">
  <Demos-Switch-State/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">true / active</label>
      <vs-switch vs-type="primary" v-model="switch1"/>
    </li>
    <li>
      <label for="">false / inactive</label>
      <vs-switch vs-type="primary" v-model="switch2"/>
    </li>
    <li>
      <label for="">disabled / active</label>
      <vs-switch disabled="true" vs-type="primary" v-model="switch3"/>
    </li>
    <li>
      <label for="">disabled / inactive</label>
      <vs-switch disabled="true" vs-type="primary" v-model="switch4"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:false,
      switch3:true,
      switch4:false,
    }
  }
}
</script>

<style lang="css">
  .con-s{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .con-s li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
```

</div>
</vuecode>

</box>


<box>

## Type

You can choose the default **Switch** type like: `primary`, `danger`, `success`, `dark`, `warning` or also put the color to your liking.

:::warning
  Supported colors are **RGB** and **HEX**
:::

<vuecode md>
<div slot="demo">
  <Demos-Switch-Type/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vs-switch vs-type="primary" v-model="switch1"/>
    </li>
    <li>
      <label for="">success</label>
      <vs-switch vs-type="success" v-model="switch2"/>
    </li>
    <li>
      <label for="">danger</label>
      <vs-switch vs-type="danger" v-model="switch3"/>
    </li>
    <li>
      <label for="">warning</label>
      <vs-switch vs-type="warning" v-model="switch4"/>
    </li>
    <li>
      <label for="">dark</label>
      <vs-switch vs-type="dark" v-model="switch5"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vs-switch vs-type="rgb(177, 9, 165)" v-model="switch6"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
      switch6:true,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color with the same vs-type directive but passing as a value a color **RGB** or **HEX**, Example: `vs-type ="rgb (232, 167, 28)"`

<vuecode md>
<div slot="demo">
  <Demos-Switch-Color/>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="">
    <input v-model="color" type="color" name="" value="">
    <label for="">Color: <span>{{color}}</span></label>
    <vs-switch :vs-type="color" v-model="switch1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      color:'#5a3cc4',
      switch1:true,
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

We can add a representative icon inside our switch with the property `vs-icon`.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md>
<div slot="demo">
  <Demos-Switch-Icons/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vs-switch vs-type="primary" v-model="switch1" vs-icon="notifications_none"/>
    </li>
    <li>
      <label for="">success</label>
      <vs-switch vs-type="success" v-model="switch2" vs-icon="done"/>
    </li>
    <li>
      <label for="">danger</label>
      <vs-switch vs-type="danger" v-model="switch3" vs-icon="close"/>
    </li>
    <li>
      <label for="">warning</label>
      <vs-switch vs-type="warning" v-model="switch4" vs-icon="error_outline"/>
    </li>
    <li>
      <label for="">dark</label>
      <vs-switch vs-type="dark" v-model="switch5" vs-icon="volume_off"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vs-switch vs-type="rgb(51, 53, 83)" v-model="switch6" vs-icon="photo_camera"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false
    }
  }
}
</script>

<style lang="css">
</style>
```

</div>
</vuecode>
</box>

<box>

## Array Value
<!-- TODO es -->
For saving the values in an array, you could simple pass it as a value.

:::warning
  <!-- TODO es -->
  for using an array as a value we need to use the `vs-value` property inside the switch component. That is the value that will be added to the array.
:::

<vuecode md>
<div slot="demo">
  <Demos-Switch-Array/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="ul">
    <li class="modelx">
      {{switchArray}}
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="luis">Luis</vs-switch>
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="carols">Carols</vs-switch>
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="summer">Summer</vs-switch>
    </li>
    <li>
      <vs-switch vs-type="success" v-model="switchArray" vs-value="lyon">Lyon</vs-switch>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switchArray:['luis'],
    }
  }
}
</script>

<style lang="css">
.ul {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.modelx {
  padding: 10px;
  margin-left: 10px;
  background: rgb(235, 235, 235);
  border-radius: 5px;
}
</style>
```

</div>
</vuecode>

</box>
