---
API:
 - name: v-model
   type: bind
   parameters: null
   description: link values.
   default: null
 - name: vs-placeholder
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
   parameters: Icon Material
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
 - name: vs-color
   type: String
   parameters: primary,success,danger,warning,dark,RGB,HEX
   description: Input and text color.
   default: primary
 - name: vs-type
   type: String
   parameters: email, number, url, password, custom
   description: The type of element.
   default: text
 - name: vs-valid.sync
   type: Boolean
   parameters: boolean bind
   description: Returns if the item is valid or not.
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
 - name: vs-validation-function
   type: function
   parameters: value
   description: A custom validation function. Accepts input value as parameter.
   default: null
 - name: vs-width
   type: String
   parameters:
   description: Change the width of the default element is 100% automatic for the total of the parent width.
   default: null
contributors:
 - cristijora
---

# Input <!--#update-->

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
  <div slot="centerx">
     <vs-input vs-placeholder="Nombre" v-model="value1"/>
     <vs-input disabled="true" vs-placeholder="Disabled" v-model="value2"/>
   </div>
</template>

<script>
export default {
  data(){
    return {
      value1:"",
      value2:""
    }
  }
}
</script>
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
  <div class="centerx">
    <vs-input vs-label="Label" vs-placeholder="Placeholder" v-model="value1"/>
    <vs-input disabled="true" vs-label="Label" vs-placeholder="Disabled" v-model="value2"/>
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

## Label Placeholder

The placeholder can become a label when the input is focused. Use the property `vs-label-placeholder` for making this.

:::warning
This property overrides the `vs-label` and the` vs-placeholder`
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

The input can have icons. The property that makes this possible is `vs-icon`, and we could also manipulate the icon's position with the property `vs-icon-after`.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).

FontAwesome and other fonts library are supported. Simply use the `vs-icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-input
      vs-icon="search"
      vs-placeholder="Search" v-model="value1"/>
    <vs-input
      vs-icon-after="true"
      vs-label="Icon after" vs-icon="mode_edit" vs-placeholder="Nombre" v-model="value2"/>
    <vs-input vs-icon="add" vs-label-placeholder="Label-placeholder" v-model="value3"/>
    <vs-input vs-icon-after="true"  vs-icon="shopping_cart" vs-label-placeholder="Label-placeholder" v-model="value4"/>
    <vs-input disabled="true" vs-icon="error_outline" vs-label-placeholder="icon-disabled" v-model="value5"/>
    <vs-input vs-icon-after="true" disabled="true" vs-icon="email" vs-label-placeholder="icon-disabled" v-model="value6"/>
    <vs-input vs-icon="fa-user" vs-icon-pack="fas" vs-placeholder="FontAwesome" v-model="value7"/>
    <vs-input vs-icon-after="true" vs-icon="fa-user" vs-icon-pack="fas" vs-placeholder="FontAwesome" v-model="value7"/>
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
```

</div>
</vuecode>

</box>

<box>

## Colors

You can change the color of the borders when the focus the input with the property `vs-color`. You could use the main colors: `primary`,`success`, `danger`,`warning`, `dark` or HEX and RGB colors.

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
  <div class="centerx">
    <vs-input vs-label-placeholder="Default" v-model="value1"/>
    <vs-input vs-color="success" vs-label-placeholder="Success" v-model="value2"/>
    <vs-input vs-color="danger" vs-label-placeholder="Danger" v-model="value3"/>
    <vs-input vs-color="warning" vs-label-placeholder="Warning" v-model="value4"/>
    <vs-input vs-color="dark" vs-label-placeholder="Dark" v-model="value5"/>
    <vs-input vs-color="rgb(213, 14, 151)" vs-label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
    <vs-input vs-color="#11e988" vs-label-placeholder="HEX: #11e988" v-model="value7"/>
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
```

</div>
</vuecode>

</box>


<box>

## Validations

You can validate the input in a simple way and without so many complications by using the property `vs-valid.sync`. It will return us if the input is valid or not, to be able to know what the validation type is use the property`vs-type`.

If you need a custom validation, use the property `vs-validation-function`.

<vuecode md>
<div slot="demo">
  <Demos-Input-Validation />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <pre class="pre">Valid: {{validos}}</pre>

    <vs-input
    :vs-valid.sync="validos.email"
    vs-success-text="Correo Valido"
    vs-danger-text="The email does not meet the requirements"
    vs-type="email" vs-label-placeholder="Email" v-model="value1"/>

    <vs-input
    :vs-valid.sync="validos.number"
    vs-success-text="Numero Valido"
    vs-danger-text="The minimum is 10 and the maximum 20"
    vs-max="20"
    vs-min="10"
    vs-type="number"
    vs-label-placeholder="Number" v-model="value2"/>

    <vs-input
    :vs-valid.sync="validos.url"
    vs-success-text="Correo Valido"
    vs-danger-text="The email does not meet the requirements"
    vs-type="url"
    vs-label-placeholder="url" v-model="value3"/>

    <vs-input
    :vs-valid.sync="validos.password"
    vs-success-text="Password Valida"
    vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character"
    vs-type="password"
    vs-label-placeholder="Password" v-model="value4"/>

    <vs-input
    :vs-valid.sync="validos.custom"
    vs-success-text="Field is valid"
    vs-danger-text="Field must have at least 5 characters"
    :vs-validation-function="(value) => value.length > 5"
    vs-type="custom" vs-label-placeholder="Custom" v-model="value5"/>
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
      validos:{
        email:false,
        number:false,
        url:false,
        password:false,
        custom: false
      },
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
