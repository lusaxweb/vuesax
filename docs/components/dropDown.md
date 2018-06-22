---
API:
 - name: vs-color
   type: String
   parameters: null
   description: Change the color of the dropdown.
   default: primary
 - name: vs-trigger-click
   type: Boolean
   parameters: null
   description: Determine if the dropdown opens when you click, changing the default functionality.
   default: false
 - name: vs-divider
   type: Boolean
   parameters: null
   description: Add a top line to split a link from others.
   default: false
 - name: vs-label
   type: String
   parameters: null
   description: Title of the item group (vs-dropdown-group).
   default: Options
 - name: vs-custom-content
   type: Boolean
   parameters: null
   description: Determines whether the component will contain custom elements.
   default: false
 - name: vs-collapse
   type: Boolean
   parameters: null
   description: Determines if the group of options is closed until the user poses in the title (vs-dropdown-group).
   default: false
---

# DropDown <!--#new-->

<box header>

  Easy to implement options that seem only when the user needs them

</box>

<box>

## Default

To add the Dropdown we have three types of components the main `vs-dropdown` that contains the element that makes the` vs-dropdown-menu` appear and to add each item within it we have the component `vs-dropdown-item`

:::tip Links
  To add an internal link using [vue-router](https://router.vuejs.org/) you can do them simply by adding the property [to](https://router.vuejs.org/api/#to) as if it were a [vue-router](https://router.vuejs.org/) link

  In case you need an external link or normal html, simply do it with the href property

  ```html
    <!-- to: internal link -->
    <vs-dropdown-item to="/myLink">
      my Link name
    </vs-dropdown-item>

    <!-- href: external link-->
    <vs-dropdown-item href="/myLink">
      my Link name
    </vs-dropdown-item>
  ```
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">

    <vs-dropdown >
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>
        <vs-dropdown-item vs-divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown >
      <a class="a-icon" href.prevent>
        Dropdown Option Disabled
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item disabled>
          Option 2
        </vs-dropdown-item >
        <vs-dropdown-item disabled vs-divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</div>
</vuecode>
</box>


<box>

## Color

You can change the color of the component with the property `vs-color`

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">

    <input type="color" v-model="colorx">

    <vs-dropdown :vs-color="colorx">
      <a class="a-icon" href="#">
        Dropdown hover
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-item vs-divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'#c80948'
  }),
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="color"]
    border: 0px;
    width: 30px;
    height: 30px;
    display: block;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</div>
</vuecode>
</box>

<box>

## Option Group

If you need to group the options you can use the subcomponent `vs-dropdown-group` which as a required parameter is `vs-label` to define the group title

:::tip
  The group can be hidden from the user and only open when it is sitting on the property with the `vs-collapse` property
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Group />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">
    <vs-dropdown @focus="logx">
      <a class="a-icon" href.prevent>
        Dropdown Option Group
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>
        <vs-dropdown-group>
          <vs-dropdown-item>
            Option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            Option 2
          </vs-dropdown-item>

          <vs-dropdown-group>
            <vs-dropdown-item>
              sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              sub Options 2
            </vs-dropdown-item>
          </vs-dropdown-group>

        </vs-dropdown-group>
        <vs-dropdown-item vs-divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown  >
      <!-- <vs-button vs-color="primary" vs-type="filled">Segundo</vs-button> -->
      <a class="a-icon" href.prevent>
        Dropdown Group Collapse
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item to="/components/">
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>

        <vs-dropdown-group vs-collapse vs-label="Group Collapse">
          <vs-dropdown-item>
            Option Collapse 1
          </vs-dropdown-item>
          <vs-dropdown-item >
           Option Collapse 2
          </vs-dropdown-item>
          <vs-dropdown-group>
            <vs-dropdown-item>
              Sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              Sub Options 2
            </vs-dropdown-item>

            <vs-dropdown-group vs-collapse>
              <vs-dropdown-item vs-label="Sub Collapse">
                Sub Collapse 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                Sub Collapse 2
              </vs-dropdown-item>
            </vs-dropdown-group>

          </vs-dropdown-group>
        </vs-dropdown-group>

        <vs-dropdown-item vs-divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</div>
</vuecode>
</box>

<box>

## Custom Content

Sometimes when we need something more personalized and not necessarily a menu for it you can add any content and have the dropdown functionality with the property `vs-custom-content`

:::tip
  For better functionality in the user's aspect when doing some interaction with the custom dropdown you can add that it is only activated and deactivated by a click event with the property `vs-trigger-click`
:::


<vuecode md>
<div slot="demo">
  <Demos-DropDown-Custom />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">

    <vs-dropdown vs-custom-content vs-trigger-click >
      <a class="a-icon" href.prevent>
        Click me open login
        <i class="material-icons">
        expand_more
        </i>
      </a>

      <vs-dropdown-menu class="loginx">
        <h3>Login</h3>
        <p>Welcome to vuesax, add your data to enter</p>


        <vs-input
    :vs-valid.sync="valid.email"
    vs-success-text="Correo Valido"
    vs-danger-text="The email does not meet the requirements"
    vs-type="email" vs-label-placeholder="Email" v-model="value1"/>

    <vs-input
        :vs-valid.sync="valid.password"
        vs-success-text="Password Valida"
        vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character"
        vs-type="password"
        vs-label-placeholder="Password" v-model="value2"/>

        <vs-button vs-width="100%" vs-color="success" vs-type="gradient">Login</vs-button>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    value1:'',
    value2:'',
    valid:{
      email:false,
      password:false,
    }
  }),
  methods:{
    logx(){
      console.log("click");
    }
  }
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
.vs-dropdown-menu
  .con-input
    margin-bottom: 20px;
.loginx
  h3
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  p
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
</style>
```

</div>
</vuecode>
</box>


<box>

## Buttom

You can customize the component or element that initialize the dropdown in this case is a Buttom that is the most common

:::tip
  The component or element that initializes the dropdown is the one inside it with the possibility of total customization and flexibility in the required use

```html
<vs-dropdown>
  <!-- element that initializes the dropdown -->

  <vs-dropdown-menu>
    <!-- items and elements within the menu or custom dropdown -->
  </vs-dropdown-menu>
</vs-dropdown>
```  
:::

<vuecode md>
<div slot="demo">
  <Demos-DropDown-Buttom />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="examplex">
    <vs-button class="btnx" vs-type="filled">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" vs-type="filled" vs-icon="expand_more"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-group >
          <vs-dropdown-item>
            option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            option 2
          </vs-dropdown-item>

        </vs-dropdown-group>
        <vs-dropdown-item vs-divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx" vs-type="success-gradient">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" vs-type="success-gradient" vs-icon="more_horiz"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Home
        </vs-dropdown-item>
        <vs-dropdown-item>
          Contributors
        </vs-dropdown-item>
        <vs-dropdown-item vs-divider>
          Logout
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx" vs-type="danger-line-down">Icons</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" vs-type="danger-line-down" vs-icon="mood"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          <i class="material-icons">
            mood
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            mood_bad
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_dissatisfied
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_satisfied
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_very_dissatisfied
          </i>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <i class="material-icons">
            sentiment_very_satisfied
          </i>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  button
    margin: 0px !important
    &.btnx
      margin-left: 10px !important;
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
```

</div>
</vuecode>
</box>
