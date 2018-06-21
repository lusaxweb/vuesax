---
API:
 - name: vs-title
   type: String
   parameters: null
   description: Popup title.
   default: null
 - name: vs-active
   type: Boolean
   parameters: null
   description: Determines if the popup is active (visible).
   default: null
 - name: vs-cancel
   type: Function
   parameters: null
   description: Function that is executed when clicking on the close button.
   default: null
 - name: vs-fullscreen
   type: Boolean
   parameters: null
   description: Determines if the popup has the full size of the screen.
   default: null
 - name: vs-background-color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Change the color of the popup.
   default: null
 - name: :vs-close-button-color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Change the color of the Button cancel popup .
   default: null
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
    <vs-button @click="popupActivo=true" vs-color="primary" vs-type="border">Open Default popup</vs-button>
    <vs-popup class="holamundo"  vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo" @vs-cancel="popupActivo=false">
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
    <vs-button @click="popupActivo2=true" vs-color="primary" vs-type="filled">Open Pupup</vs-button>
    <vs-popup  vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo2" @vs-cancel="popupActivo2=false">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      </p>
      <vs-button @click="popupActivo3=true" vs-color="primary" vs-type="filled">Open Inner Pupup</vs-button>
      <vs-popup vs-title="Inner popup" :vs-active="popupActivo3" @vs-cancel="popupActivo3=false">
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
      popupActivo2:false,
      popupActivo3:false
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Fullscreen

the popup can be full screen you just have to add the property `vs-fullscreen`.

<vuecode md>
<div slot="demo">
  <Demos-Popup-Fullscreen />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo4=true" vs-color="danger" vs-type="border">Open fullscreen popup</vs-button>
    <vs-popup vs-fullscreen vs-title="fullscreen" :vs-active="popupActivo4" @vs-cancel="popupActivo4=false">
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

You can change the color of the property with the property `vs-background`

<vuecode md>
<div slot="demo">
  <Demos-Popup-Background />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-button :vs-color="colorx" @click="popupActivo5=true" vs-color="warning" vs-type="filled">Open background popup</vs-button>

    <vs-popup :vs-background-color="colorx" vs-title="background" :vs-active="popupActivo5" @vs-cancel="popupActivo5=false">
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
      colorx:"#339898",
      popupActivo5:false
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Color Button

You can change the color of the button with the property `vs-close-button-color`.

<vuecode md>
<div slot="demo">
  <Demos-Popup-Colorbutton />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input v-model="colorx2" type="color" name="" value="">
    <vs-button :vs-color="colorx2" @click="popupActivo6=true" vs-color="dark" vs-type="border">Open color button popup</vs-button>

    <vs-popup :vs-close-button-color="colorx2" vs-title="Color Button" :vs-active="popupActivo6" @vs-cancel="popupActivo6=false">
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
      popupActivo6:false,
      colorx2:'#dd7617',
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
