---
API:
  - name: vs-color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: vs-title
    type: String
    parameters:
    description: Header title
    default: null
  - name: vs-subtitle
    type: String
    parameters:
    description: Header subtitle
    default: null
  - name: vs-fill
    type: Boolean
    parameters:
    description: Header filled with color
    default: false
  - name: vs-icon
    type: String
    parameters:
    description: Header material icon
    default: null
  - name: vs-background
    type: String
    parameters:
    description: Header background color
    default: 'primary'
  - name: vs-media
    type: String
    parameters:
    description: Media image src
    default: null
  - name: actionable
    type: Bool
    parameters:
    description: Hover effect
    default: false
contributors:
  - fergardi
  - RodSwanston
---

# Card <!--#new-->

<box header>

  Cards contain content and actions about a single subject.

</box>

<box>

## Default

To add a card we have the components `vs-card`, `vs-card-header`, `vs-card-body`, `vs-card-media`, `vs-card-actions` each one has its own functionality inside of the card but an initial structure would be like this:


<vuecode md>
<div slot="demo">
<vs-card>
  <vs-card-header vs-title="Default Card" />
  <vs-card-body>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
  </vs-card-body>
</vs-card>
</div>
<div slot="code">

```html
<vs-card>
  <vs-card-header vs-title="Default Card" />
  <vs-card-body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </vs-card-body>
</vs-card>
```

</div>
</vuecode>
</box>


<box>

## Color

You can change the overall color of the card with property `vs-color` and `vs-background-color` for the component `vs-card-header`. You can make the color fill with `vs-fill`.

::: tip
Vuesax use the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/).
:::

<vuecode md center>
<div slot="demo" style="display: flex;">
  <vs-card vs-color="danger">
    <vs-card-header vs-background-color="danger" vs-title="A nice title" vs-icon="error" :vs-fill="true"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card vs-color="warning">
    <vs-card-header vs-background-color="warning" vs-title="Another nice title" vs-subtitle="A nice subtitle" vs-icon="warning"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-card vs-color="danger">
      <vs-card-header vs-background-color="danger" vs-title="A nice title" vs-icon="error" :vs-fill="true"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
    <vs-card vs-color="warning">
      <vs-card-header vs-background-color="warning" vs-title="Another nice title" vs-subtitle="A nice subtitle" vs-icon="warning"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Avatar and actionable state

You can pass custom component as a child of `vs-card-header` <br>
The actionable state enable a hover effect

<script>
export default {
  methods: {
    vClick() {
      alert('Click!')
    }
  }
}
</script>

<vuecode md center>
<div slot="demo" style="display: flex;">
  <vs-card actionable @vs-click="vClick()">
    <vs-card-header vs-title="A nice title" :vs-fill="true">
      <vs-avatar vs-size="large" vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
    </vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card actionable>
    <vs-card-header vs-title="A nice title" vs-subtitle="A nice subtitle"  :vs-fill="true">
      <vs-avatar vs-size="large" vs-text="Luis Daniel"/>
    </vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-card actionable @vs-click="vClick()">
      <vs-card-header vs-title="A nice title" :vs-fill="true">
        <vs-avatar vs-size="large" vs-src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
      </vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
    <vs-card actionable>
      <vs-card-header vs-title="A nice title" vs-subtitle="A nice subtitle"  :vs-fill="true">
        <vs-avatar vs-size="large" vs-text="Luis Daniel"/>
      </vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
  </div>
</template>

<script>
export default {
  methods: {
    vClick() {
      alert('Click!')
    }
  }
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Image

You can add a cool image to the card, even changing the orders of the components to fit your needs!

<vuecode md center>
<div slot="demo" style="display: flex;">
  <vs-card vs-color="success">
    <vs-card-media vs-media="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-header vs-background-color="success" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="check"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card vs-color="success">
    <vs-card-header vs-background-color="success" vs-title="A nice title" vs-icon="check"></vs-card-header>
    <vs-card-media vs-media="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <vs-card vs-color="success">
    <vs-card-media vs-media="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-header vs-background-color="success" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="check"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card vs-color="success">
    <vs-card-header vs-background-color="success" vs-title="A nice title" vs-icon="check"></vs-card-header>
    <vs-card-media vs-media="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Actions

A space for action buttons in the card

<vuecode md center>
<div slot="demo" style="display: flex;">
  <vs-card vs-color="primary">
    <vs-card-header vs-background-color="primary" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="account_circle"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
    <vs-card-actions>
      <vs-button vs-color="primary">One action</vs-button>
      <vs-button vs-color="primary">Another action</vs-button>
    </vs-card-actions>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-card vs-color="dark">
      <vs-card-header vs-background-color="dark" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="account_circle"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button vs-color="dark">One action</vs-button>
        <vs-button vs-color="dark">Another action</vs-button>
      </vs-card-actions>
    </vs-card>
    <vs-card vs-color="dark">
      <vs-card-header vs-background-color="dark" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="account_circle"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button vs-color="dark">One action</vs-button>
        <vs-button vs-color="dark">Another action</vs-button>
      </vs-card-actions>
    </vs-card>
  </div>
</template>

<script>
export default {
}
</script>
```

</div>
</vuecode>

</box>
