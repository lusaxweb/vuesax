---
API:
 - name: v-model
   type: bind
   parameters: null
   description: Link values.
   default: null
 - name: placeholder
   type: String
   parameters: null
   description: Brief suggestion describing the expected value of the input field.
   default: null
 - name: vs-label
   type: String
   parameters: null
   description: Label for the input element.
   default: null
 - name: vs-label-placeholder
   type: String
   parameters: null
   description: Label label with placeholder shape for the entry element.
   default: null
 - name: vs-icon
   type: String
   parameters: Material Icon
   description: Element icon.
   default: null
 - name: vs-icon-pack
   type: String
   parameters: Icon Pack
   description: Icon Pack Description. If not use, vs-icon will base in Material Icons.
   default: null
 - name: vs-icon-after
   type: String
   parameters: null
   description: Position of the icon after input.
   default: false
 - name: color
   type: String
   parameters: primary,success,danger,warning,dark,RGB,HEX
   description: Input and text color.
   default: primary
 - name: type
   type: String
   parameters: email, number, url, password, custom
   description: The type of element input.
   default: text
 - name: vs-success
   type: Boolean
   parameters: boolean bind
   description: Activate the status of success in the input.
   default: false
 - name: vs-danger
   type: Boolean
   parameters: boolean bind
   description: Activate the status of danger in the input.
   default: false
 - name: vs-warning
   type: Boolean
   parameters: boolean bind
   description: Activate the status of warning in the input.
   default: false
 - name: vs-description-text
   type: String
   parameters: null
   description: Add a description text to the input.
   default: false
 - name: vs-danger-text
   type: String
   parameters: null
   description: Text to show when the item is invalid.
   default: null
 - name: vs-success-text
   type: String
   parameters: null
   description: Text to show when the item is valid.
   default: null
 - name: vs-warning-text
   type: String
   parameters: null
   description: Text that is displayed in the warning state.
   default: null
contributors:
 - cristijora
---

# Input

<box header>

  Nice inputs with many variants.

</box>


<box>

## Default

The input is a functional part in an application, For implementing it we have the `vs-input` component.

<vuecode md>
<div slot="demo">
  <Demos-Input-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx default-input">
     <vs-input class="inputx" placeholder="Placeholder" v-model="value1"/>
     <vs-input disabled class="inputx" placeholder="Disabled" v-model="value2"/>
   </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<style lang="stylus">
.default-input
  .inputx
    margin 10px
</style>
```

</div>
</vuecode>

</box>

<box>

## Label

Add a label to the input with the property `vs-label`.

<vuecode md>
<div slot="demo">
  <Demos-Input-Label />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx labelx">
    <vs-input vs-label="Name" vs-placeholder="Placeholder" v-model="value1"/>
    <vs-input type="password" vs-label="Password" vs-placeholder="Disabled" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<style lang="stylus">
  .labelx
    .vs-input
      margin 10px;
</style>
```

</div>
</vuecode>

</box>


<box>

## Label Placeholder

The placeholder can become a label when the input is focused. Use the property `vs-label-placeholder` for making this.

:::warning
This property overrides the `vs-label` and the` placeholder`
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Labelplaceholder />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input vs-label-placeholder="Label-placeholder" v-model="value1"/>
    <vs-input disabled="true" vs-label-placeholder="Label-placeholder-disabled" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
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

The input can have icons. Use the property `vs-icon`. You can also also manipulate the icon's position with the property `vs-icon-after`.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `vs-icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx icons-example">
    <vs-input vs-icon="search" placeholder="Search" v-model="value1"/>
    <vs-input vs-icon-after="true" vs-label-placeholder="icon-after" vs-icon="mode_edit" vs-placeholder="Nombre" v-model="value2"/>
    <vs-input vs-icon="add" vs-label-placeholder="Label-placeholder" v-model="value3"/>
    <vs-input vs-icon-after="true"  vs-icon="shopping_cart" vs-label-placeholder="Label-placeholder" v-model="value4"/>
    <vs-input disabled="true" vs-icon="error_outline" vs-label-placeholder="icon-disabled" v-model="value5"/>
    <vs-input vs-icon-after="true" disabled="true" vs-icon="email" vs-label-placeholder="icon-disabled" v-model="value6"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:'',
      value8: ''
    }
  }
}
</script>

<style lang="stylus">
.icons-example
  .vs-input
    margin 6px;
</style>
```

</div>
</vuecode>

</box>

<box>

## Colors

You can change the color of the borders when the focus the input with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
There is only support for **HEX** and **RGB** colors
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Colors />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx colors-example">
    <vs-input vs-label-placeholder="Default" v-model="value1"/>
    <vs-input color="success" vs-label-placeholder="Success" v-model="value2"/>
    <vs-input color="danger" vs-label-placeholder="Danger" v-model="value3"/>
    <vs-input color="warning" vs-label-placeholder="Warning" v-model="value4"/>
    <vs-input color="dark" vs-label-placeholder="Dark" v-model="value5"/>
    <vs-input color="rgb(213, 14, 151)" vs-label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
    <vs-input color="#11e988" vs-label-placeholder="HEX: #11e988" v-model="value7"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:''
    }
  }
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;
</style>
```

</div>
</vuecode>

</box>


<box>

## Validations

You can add a state for example of in affirmative response to a validation with `vs-success` and if it is necessary to add a description or help to the user you can do it with the property `vs-description`

:::tip
  Each of the states you can change the text, for example in the case of `vs-danger-text` for the state of danger.
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Validation />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vs-input
      :vs-success="true"
      vs-success-text="The mail is valid"
      placeholder="Email Success"
      v-model="value1"/>
      <vs-input
      :vs-danger="true"
      vs-danger-text="The password does not meet the standards"
      placeholder="Password Danger"
      v-model="value2"/>
      <vs-input
      :vs-warning="true"
      vs-warning-text="The entered data could not be verified"
      placeholder="Date Warning"
      v-model="value3"/>
      <vs-input
      vs-description-text="Just enter the first two numbers of your phone"
      placeholder="Phone Description"
      v-model="value4"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
    }
  }
}
</script>

<style lang="css" scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
  }
</style>
```

</div>
</vuecode>

</box>
