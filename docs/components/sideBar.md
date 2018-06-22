---
API:
 - name: vs-active.sync
   type: Boolean
   parameters: null
   description: Determines if the sidebar is active (visible), if it is a vs-sidebar-item, determine if the link is active.
   default: false
 - name: vs-icon
   type: String
   parameters: null
   description: Add the icon to the item or group label.
   default: none
 - name: vs-parent
   type: Element (#idx | .classx)
   parameters: #parent | .parent
   description: Determine the parent of the sidebar .
   default: body
 - name: vs-static
   type: String
   parameters: #parent | .parent
   description: Determines if the component is static and has a relative position.
   default: false
 - name: vs-label (vs-sidebar-group)
   type: String
   parameters: null
   description: Label of the group of links.
   default: null
 - name: vs-open (vs-sidebar-group)
   type: Boolean
   parameters: null
   description: Determines if the group of links is open.
   default: false
 - name: vs-reduce-expand
   type: Boolean
   parameters: null
   description: Add functionality to expand and collapse icons to sidebar.
   default: false
 - name: vs-reduce
   type: Boolean
   parameters: null
   description: Determines if the sidebar is of only icons.
   default: false
 - name: vs-icon-reduce
   type: Boolean
   parameters: null
   description: Add the icon that will only be displayed when the sidebar is in reduced mode.
   default: false
---

# SideBar <!--#new-->

<box header>

  SideBar is important for a website, it helps users jump from one site section to another quickly

</box>

<box>

## Default

One of the most common features is to have the hidden sidebar to show it when the user presses a button or makes an action, to add a sidebar we have the component `vs-sidebar`

:::tip Links
  To add an internal link using [vue-router](https://router.vuejs.org/) you can do them simply by adding the property [to](https://router.vuejs.org/api/#to) as if it were a [vue-router](https://router.vuejs.org/) link

  In case you need an external link or normal html, simply do it with the href property
:::

:::tip Active Link
  To make the link is in an active state we have the property `vs-active`
:::

<vuecode md center>
<div slot="demo">
  <Demos-SideBar-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div id="parentx">
    <vs-button @click="active=!active" vs-type="filled">Open Sidebar</vs-button>
    <vs-sidebar :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="verified_user">
         Settings
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="account_box">
         Profile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>

    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
    actives:2,
  })
}
</script>
```

</div>
</vuecode>
</box>



<box>

## Parent

You can change the parent of the sidebar with the property `vs-parent` that as a value requires an element of the DOM (**#idx**, **.classx**)

:::tip
  By default the father of the sidebar is the body
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Parent />
</div>
<div slot="code">

```html
<template lang="html">
  <div id="parentx2" class="con-example-sidebar">
    <vs-button @click="active=!active" vs-color="primary" vs-type="filled">Open Sidebar</vs-button>
    <vs-sidebar

      vs-parent="#parentx2"
      :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="verified_user">
         Settings
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="account_box">
         Profile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>

    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
    actives:2,
  })
}
</script>

<style lang="stylus">
.con-example-sidebar
  height: 500px;
  position: relative;
</style>
```

</div>
</vuecode>
</box>


<box>

## Static

You can also use the sidebar in static mode with the property `vs-static`

:::tip
  when putting the sidebar in static mode its position becomes relative for better manipulation
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Static />
</div>
<div slot="code">

```html
<template lang="html">
  <div id="parentx3" class="con-example-sidebar">
    <vs-sidebar
      style="width:200px"
      vs-static
      vs-parent="#parentx3"
      :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="verified_user">
         Settings
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="account_box">
         Profile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>

    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
    actives:2,
  })
}
</script>

<style lang="stylus">
.con-example-sidebar
  height: 500px;
</style>
```

</div>
</vuecode>
</box>

<box>


## Group Collapsed

You can have groups of sub menus with the component `vs-slider-group` that as a required parameter we have the `vs-label`, you can add as many groups as you need, including internally from the same component.

:::tip
  By default the component is closed but if you need to initialize open you can use the property `vs-open`
:::

<vuecode md center>
<div slot="demo">
  <Demos-SideBar-Submenu />
</div>
<div slot="code">

```html
<template lang="html">
  <div id="parentx">
    <vs-button @click="active=!active" vs-type="filled">Open Sidebar</vs-button>
    <vs-sidebar :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>

      <vs-sidebar-group vs-label="Phone">
        <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="phonelink_erase">
           Link
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="phonelink_lock">
           Lock
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="phonelink_ring">
           Ring
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=6" :vs-active="actives==6" vs-icon="phonelink_setup">
           Setup
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-group vs-open vs-icon="image" vs-label="Image">
        <vs-sidebar-item @click="actives=7" :vs-active="actives==7" vs-icon="camera_roll">
           Camera Roll
        </vs-sidebar-item>

        <vs-sidebar-group vs-icon="filter" vs-label="Filter">
          <vs-sidebar-item @click="actives=8" :vs-active="actives==8" vs-icon="filter_b_and_w">
            B and W
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=9" :vs-active="actives==9" vs-icon="filter_center_focus">
            Center Focus
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=10" :vs-active="actives==10" vs-icon="filter_drama">
            Drama
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=11" :vs-active="actives==11" vs-icon="filter_frames">
            Frames
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=12" :vs-active="actives==12" vs-icon="filter_hdr">
            Hdr
          </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-item @click="actives=13" :vs-active="actives==13" vs-icon="color_lens">
           Color
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=14" :vs-active="actives==14" vs-icon="camera_alt">
           Camera
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item @click="actives=15" :vs-active="actives==15" vs-icon="verified_user">
         Settings
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=16" :vs-active="actives==16" vs-icon="account_box">
         Profile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=17" :vs-active="actives==17" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>



    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
    actives:2,
  })
}
</script>

<style lang="stylus">
.con-example-sidebar
  height: 500px;
</style>
```

</div>
</vuecode>
</box>


<box>

## Reduce and Expand

You can add the beautiful functionality of reducing the sidebar to single icons or expand it by adding the property `vs-reduce-expand`, also if necessary you can only have the component rededited to icons with the property `vs-reduce`.

:::tip
  If you have a sidebar without icons and you only need to visualize when it is reduced you can use the property `vs-icon-reduce` .
:::

:::warning
  If no icon is specified by either `vs-icon` or `vs-icon-reduce` the link will be displayed in white please add some of them for a desired functionality.
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Reduceexpand />
</div>
<div slot="code">

```html
<template lang="html">
  <div id="parentx">
    <vs-button @click="active=!active,reducex=false" vs-type="filled">Open Sidebar Reduce and expand</vs-button>
    <vs-button @click="active=!active,reducex=true" vs-type="filled">Open Sidebar Only Reduce</vs-button>
    <vs-sidebar :vs-reduce="reducex" :vs-reduce-expand="!reducex" :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>

      <vs-sidebar-group vs-icon-reduce="phone_iphone" vs-label="Phone">
        <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="phonelink_erase">
           Link
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="phonelink_lock">
           Lock
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="phonelink_ring">
           Ring
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=6" :vs-active="actives==6" vs-icon="phonelink_setup">
           Setup
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-group vs-open vs-icon="image" vs-label="Image">
        <vs-sidebar-item @click="actives=7" :vs-active="actives==7" vs-icon="camera_roll">
           Camera Roll
        </vs-sidebar-item>

        <vs-sidebar-group vs-icon="filter" vs-label="Filter">
          <vs-sidebar-item @click="actives=8" :vs-active="actives==8" vs-icon="filter_b_and_w">
            B and W
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=9" :vs-active="actives==9" vs-icon="filter_center_focus">
            Center Focus
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=10" :vs-active="actives==10" vs-icon="filter_drama">
            Drama
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=11" :vs-active="actives==11" vs-icon="filter_frames">
            Frames
          </vs-sidebar-item>
          <vs-sidebar-item @click="actives=12" :vs-active="actives==12" vs-icon="filter_hdr">
            Hdr
          </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-item @click="actives=13" :vs-active="actives==13" vs-icon="color_lens">
           Color
        </vs-sidebar-item>
        <vs-sidebar-item @click="actives=14" :vs-active="actives==14" vs-icon="camera_alt">
           Camera
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item @click="actives=15" :vs-active="actives==15" vs-icon="verified_user">
         Settings
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=16" :vs-active="actives==16" vs-icon="account_box">
         Profile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=17" :vs-active="actives==17" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>



    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
    actives:2,
    reducex:false
  })
}
</script>

<style lang="stylus">
.con-example-sidebar
  height: 500px;
</style>
```

</div>
</vuecode>
</box>
