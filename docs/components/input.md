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
 - name: label
   type: String
   parameters: null
   description: Label for the input element.
   default: null
 - name: label-placeholder
   type: String
   parameters: null
   description: Label label with placeholder shape for the entry element.
   default: null
 - name: autofocus
   type: Boolean,String
   parameters: null
   description: Same as `autofocus` in native input
   default: false
 - name: icon
   type: String
   parameters: icon name
   description: Element icon.
   default: null
 - name: val-icon-success
   type: String
   parameters: icon name
   description: The icon to use for success validations
   default: null
 - name: val-icon-danger
   type: String
   parameters: icon name
   description: The icon to use for danger validations
   default: null
 - name: val-icon-warning
   type: String
   parameters: icon name
   description: The icon to use for warning validations
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: icon-no-border
   type: Boolean
   parameters: boolean bind
   description: If true, remove the border-right of the icon (separator between the icon and the input)
   default: false
 - name: val-icon-pack
   type: String
   parameters: Validation Icon Pack Class Name
   description: Icon Pack to be used by the Validation Icons. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: icon-after
   type: Boolean,String
   parameters: null
   description: If true, sets icon to appear after input.
   default: false
 - name: color
   type: String
   parameters: primary,success,danger,warning,dark,RGB,HEX
   description: Input and text color.
   default: primary
 - name: size
   type: String
   parameters: small,normal,large
   description: Size of input.
   default: normal
 - name: type
   type: String
   parameters: email, number, url, password, custom
   description: The type of element input.
   default: text
 - name: success
   type: Boolean
   parameters: boolean bind
   description: Activate the status of success in the input.
   default: false
 - name: danger
   type: Boolean
   parameters: boolean bind
   description: Activate the status of danger in the input.
   default: false
 - name: warning
   type: Boolean
   parameters: boolean bind
   description: Activate the status of warning in the input.
   default: false
 - name: description-text
   type: String
   parameters: null
   description: Add a description text to the input.
   default: false
 - name: danger-text
   type: String
   parameters: null
   description: Text to show when the item is invalid.
   default: null
 - name: success-text
   type: String
   parameters: null
   description: Text to show when the item is valid.
   default: null
 - name: warning-text
   type: String
   parameters: null
   description: Text that is displayed in the warning state.
   default: null
 - name: v-on:icon-click
   type: Function
   parameters: null
   description: Event to trigger on click on icon
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

Add a label to the input with the property `label`.

<vuecode md>
<div slot="demo">
  <Demos-Input-Label />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx labelx">
    <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
    <vs-input type="password" label="Password" placeholder="Disabled" v-model="value2"/>
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

The placeholder can become a label when the input is focused. Use the property `label-placeholder` for making this.

:::warning
This property overrides the `label` and the` placeholder`
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Labelplaceholder />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input label-placeholder="Label-placeholder" v-model="value1"/>
    <vs-input disabled="true" label-placeholder="Label-placeholder-disabled" v-model="value2"/>
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

The input can have icons. Use the property `icon`. You can also also manipulate the icon's position with the property `icon-after`.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `icon-pack` and `val-icon-pack` parameters with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx icons-example">
    <vs-input icon="search" placeholder="Search" v-model="value1"/>
    <vs-input icon-after="true" label-placeholder="icon-after" icon="mode_edit" placeholder="Nombre" v-model="value2"/>
    <vs-input icon="add" label-placeholder="Label-placeholder" v-model="value3"/>
    <vs-input icon-after="true"  icon="shopping_cart" label-placeholder="Label-placeholder" v-model="value4"/>
    <vs-input disabled="true" icon="error_outline" label-placeholder="icon-disabled" v-model="value5"/>
    <vs-input icon-after="true" disabled="true" icon="email" label-placeholder="icon-disabled" v-model="value6"/>
    <vs-input icon-no-border icon="account_circle" label-placeholder="icon-no-border" v-model="value7"/>
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
    margin 15px
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
    <vs-input label-placeholder="Default" v-model="value1"/>
    <vs-input color="success" label-placeholder="Success" v-model="value2"/>
    <vs-input color="danger" label-placeholder="Danger" v-model="value3"/>
    <vs-input color="warning" label-placeholder="Warning" v-model="value4"/>
    <vs-input color="dark" label-placeholder="Dark" v-model="value5"/>
    <vs-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
    <vs-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value7"/>
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

You can add a state for example of in affirmative response to a validation with `success` and if it is necessary to add a description or help to the user you can do it with the property `description`

:::tip
  Each of the states you can change the text, for example in the case of `danger-text` for the state of danger.
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
      :success="true"
      success-text="The mail is valid"
      placeholder="Email Success"
      v-model="value1"/>
      <vs-input
      :danger="true"
      danger-text="The password does not meet the standards"
      placeholder="Password Danger"
      v-model="value2"/>
      <vs-input
      :warning="true"
      warning-text="The entered data could not be verified"
      placeholder="Date Warning"
      v-model="value3"/>
      <vs-input
      description-text="Just enter the first two numbers of your phone"
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

<box>

## Size



<vuecode md>
<div slot="demo">
  <Demos-Input-Size />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="size-example">
    <vs-input size="large" placeholder="Size large" v-model="value1" />
    <vs-input size="default" placeholder="Size default" v-model="value2" />
    <vs-input size="small" placeholder="Size small" v-model="value3" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:''
    }
  }
}
</script>

<style lang="stylus">
.size-example
  .vs-input
    margin 6px;
</style>
```

</div>
</vuecode>

</box>
