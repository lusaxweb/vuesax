---
API:
 - name: title
   type: String
   parameters: null
   description: Popup title.
   default: null
 - name: active.sync
   type: Boolean
   parameters: null
   description: Determines if the popup is active (visible).
   default: null
 - name: fullscreen
   type: Boolean
   parameters: null
   description: Determines if the popup has the full size of the screen.
   default: null
 - name: background-color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Change the color of the popup content.
   default: rgba(0,0,0,.5)
 - name: background-color-popup
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Change the color of the popup only.
   default: rgb(255,255,255)
 - name: button-close-hidden
   type: Boolean
   parameters: null
   description: Remove button cancel in header.
   default: false
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: icon-close
   type: String
   parameters: icon name
   description: Element icon.
   default: close


---

# Popup

<box header>

  Functional Popup and easy to implement.

</box>


<box>

## Default

To implement the popup we have the component `vs-popup`.

<vuecode md>
<div slot="demo">
  <Demos-Popup-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo=true" color="primary" type="border">Open Default popup</vs-button>
    <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </p>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      popupActivo:false,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Inner Popup

You can add one popup inside another.

<vuecode md>
<div slot="demo">
  <Demos-Popup-Nested />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo2=true" color="primary" type="filled">Open Popup</vs-button>
    <vs-popup classContent="popup-example"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo2">
      <vs-input class="inputx" placeholder="Placeholder" v-model="value1"/>
      <vs-input disabled class="inputx" placeholder="Disabled" v-model="value2"/>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      </p>
      <vs-select
      label="Figuras"
      v-model="select1"
      >
        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
      </vs-select>
      <vs-button @click="popupActivo3=true" color="primary" type="filled">Open Inner Popup</vs-button>
      <vs-popup title="Inner popup" :active.sync="popupActivo3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br><br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br><br>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </vs-popup>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1:3,
      options1:[
        {text:'IT',value:0},
        {text:'Blade Runner',value:2},
        {text:'Thor Ragnarok',value:3},
      ],
      value1:'',
      value2:'',
      popupActivo2:false,
      popupActivo3:false
    }
  }
}
</script>

<style lang="stylus">
.popup-example
  .vs-input
    float left
    width 50%
    margin 10px
    margin-top 5px
  .con-select
    margin-left 10px
    width 50%
    margin-bottom 10px
</style>
```

</div>
</vuecode>
</box>


<box>

## Fullscreen

the popup can be full screen you just have to add the property `fullscreen`.

<vuecode md>
<div slot="demo">
  <Demos-Popup-Fullscreen />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo4=true" color="danger" type="border">Open fullscreen popup</vs-button>
    <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      popupActivo4:false
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Background

You can change the background of the property with the property `background-color` or if you want to change the color of the popup you can use the property `background-color-popup`

<vuecode md>
<div slot="demo">
  <Demos-Popup-Background />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-button :color="colorx" @click="popupActivo5=true" type="filled">Open background popup</vs-button>

    <vs-popup
      style="color:rgb(255,255,255)"
      background-color="rgba(255,255,255,.6)"
      :background-color-popup="colorx" title="background" :active.sync="popupActivo5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br>
        <br>
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:"#4a5153",
      popupActivo5:false
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
