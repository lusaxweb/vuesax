---
API:
 - name: active
   type: Boolean
   parameters: true, false
   description: Determines if the component is visible.
   default: false
   link: /api/active
 - name: title
   type: String
   parameters: null
   description: Title of the alert
   default: null
 - name: closable
   type: Boolean
   parameters: null
   description: Determines if the alert can be closed by the user
   default: false
 - name: color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color of the alert
   default: false
 - name: icon
   type: String
   parameters: null
   description: Determines the alert icon
   default: null
 - name: close-icon
   type: String
   parameters: null
   description: Determines the close icon
   default: close
 - name: icon-pack
   type: String
   parameters: null
   description: Determines the icon pack. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
---

# Input

<card>

  ## Default

  VuePress uses `Prism to highlight` language syntax in markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:

  Icon
  Button components can contain an `Icon`. This is done by setting the icon property or placing an Icon component within the Button

::: tip
  This is a tip
:::

  If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.

<div slot="example">

  <vs-button color="danger"/>
  <vs-button color="success"/>
  <vs-button color="warning"/>
  <vs-button color="dark"/>

</div>

<div slot="code">

  ```html
    <vs-button color="danger"/>
    <vs-button color="success"/>
    <vs-button color="warning"/>
    <vs-button color="dark"/>
  ```

  ```js
    export default {
      name: 'MyComponent',
      // ...
    }
  ```

</div>



</card>


