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
contributors:
  - fergardi
---

# Card

<box header>

  Cards contain content and actions about a single subject.

</box>

<box>

## Color

You can change the overall color of the card

<vuecode md center>
<div slot="demo" style="display: flex;">
  <vs-card vsColor="danger">
    <vs-card-header vsBackgroundColor="danger" vsTitle="A nice title" vsIcon="error"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card vsColor="warning">
    <vs-card-header vsBackgroundColor="warning" vsTitle="Another nice title" vsSubtitle="A nice subtitle" vsIcon="warning"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-card vsColor="danger">
      <vs-card-header vsBackgroundColor="danger" vsTitle="A nice title" vsIcon="error"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
    </vs-card>
    <vs-card vsColor="warning">
      <vs-card-header vsBackgroundColor="warning" vsTitle="Another nice title" vsSubtitle="A nice subtitle" vsIcon="warning"></vs-card-header>
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

## Image

You can add a cool image to the card, even changing the orders of the components to fit your needs!

<vuecode md center>
<div slot="demo" style="display: flex;">
  <vs-card vsColor="success">
    <vs-card-media vsMedia="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-header vsBackgroundColor="success" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="check"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card vsColor="success">
    <vs-card-header vsBackgroundColor="success" vsTitle="A nice title" vsIcon="check"></vs-card-header>
    <vs-card-media vsMedia="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <vs-card vsColor="success">
    <vs-card-media vsMedia="https://placeimg.com/640/480/any"></vs-card-media>
    <vs-card-header vsBackgroundColor="success" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="check"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
  </vs-card>
  <vs-card vsColor="success">
    <vs-card-header vsBackgroundColor="success" vsTitle="A nice title" vsIcon="check"></vs-card-header>
    <vs-card-media vsMedia="https://placeimg.com/640/480/any"></vs-card-media>
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
  <vs-card vsColor="dark">
    <vs-card-header vsBackgroundColor="dark" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="account_circle"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
    <vs-card-actions>
      <vs-button vsColor="dark">One action</vs-button>
      <vs-button vsColor="dark">Another action</vs-button>
    </vs-card-actions>
  </vs-card>
  <vs-card vsColor="dark">
    <vs-card-header vsBackgroundColor="dark" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="account_circle"></vs-card-header>
    <vs-card-body>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </vs-card-body>
    <vs-card-actions>
      <vs-button vsColor="dark">One action</vs-button>
      <vs-button vsColor="dark">Another action</vs-button>
    </vs-card-actions>
  </vs-card>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vs-card vsColor="dark">
      <vs-card-header vsBackgroundColor="dark" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="account_circle"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button vsColor="dark">One action</vs-button>
        <vs-button vsColor="dark">Another action</vs-button>
      </vs-card-actions>
    </vs-card>
    <vs-card vsColor="dark">
      <vs-card-header vsBackgroundColor="dark" vsTitle="A nice title" vsSubtitle="A nice subtitle" vsIcon="account_circle"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button vsColor="dark">One action</vs-button>
        <vs-button vsColor="dark">Another action</vs-button>
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
