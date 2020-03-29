---
API:
 - name: v-model
   type: Boolean
   parameters: null
   description: Link values.
   default: null
 - name: color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color options for checkBox.
   default: primary
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

# CheckButton

<box header>

Looks like a button. Behaves like a checkbox.

</box>

<box>

## State

To add a checkButton, we have the `vs-check-button` component which expects a principal parameter `v-model` that would be our value.

<vuecode md>
<div slot="demo">
  <Demos-CheckButton-Default />
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
