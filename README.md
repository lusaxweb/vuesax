<p align="center">
  <a href="https://lusaxweb.github.io/vuesax/">
<img width="40%" src="https://github.com/lusaxweb/vuesax/blob/master/public/vuesax-logo-beta.png" alt="vuesax" />
<img src="https://github.com/lusaxweb/vuesax/blob/master/public/vuesax-components.gif" alt="vuesax" />
   </a>
  </p>

  </br>

  <p align="center">
  <a href="https://travis-ci.org/lusaxweb/vuesax">
    <img src="https://img.shields.io/travis/lusaxweb/vuesax.svg" alt="travis ci badge">
  </a>
  <a href="https://www.npmjs.com/package/vuesax">
    <img src="https://img.shields.io/npm/dm/vuesax.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vuesax">
    <img src="https://img.shields.io/npm/v/vuesax.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vuesax"><img src="https://img.shields.io/npm/l/vuesax.svg" /></a>
</p>

# Introduction

[Vuesax](https://lusaxweb.github.io/vuesax/) is a framework of components based on [vue.js](https://vuejs.org/), it is a framework that is designed from scratch to be incrementally adoptable.

The framework is focused on facilitating the development of applications, improving the design of the same without removing the necessary functionality. we want all the components to be independent in colors, shapes and design for a freedom that we like all front-end but without losing the speed of creation and production.

# Components

- [Buttons](https://lusaxweb.github.io/vuesax/components/)
- [Selects](https://lusaxweb.github.io/vuesax/components/selects.html)
- [Notifications](https://lusaxweb.github.io/vuesax/components/notifications.html)
- [Switch](https://lusaxweb.github.io/vuesax/components/switch.html)
- [CheckBox](https://lusaxweb.github.io/vuesax/components/checkbox.html)
- [Radio](https://lusaxweb.github.io/vuesax/components/radio.html)
- [Input](https://lusaxweb.github.io/vuesax/components/input.html)
- [Dialogs](https://lusaxweb.github.io/vuesax/components/dialog.html)
- [Tabs](https://lusaxweb.github.io/vuesax/components/tabs.html)
- [Slider](https://lusaxweb.github.io/vuesax/components/slider.html)
- [InputNumber](https://lusaxweb.github.io/vuesax/components/number.html)
- [Tooltip](https://lusaxweb.github.io/vuesax/components/tooltip.html)
- [Upload](https://lusaxweb.github.io/vuesax/components/upload.html)
- [Loading](https://lusaxweb.github.io/vuesax/components/loading.html)
- [Grid](https://lusaxweb.github.io/vuesax/layout/)
- [Chip](https://lusaxweb.github.io/vuesax/components/chip.html)
- [Popup](https://lusaxweb.github.io/vuesax/components/popup.html)
- [Progress](https://lusaxweb.github.io/vuesax/components/progress.html)
- [Alert](https://lusaxweb.github.io/vuesax/components/alert.html)
- [Card](https://lusaxweb.github.io/vuesax/components/card.html)
- [Avatar](https://lusaxweb.github.io/vuesax/components/avatar.html)
- [List](https://lusaxweb.github.io/vuesax/components/list.html)
- [Pagination](https://lusaxweb.github.io/vuesax/components/pagination.html)
- [Topbar](https://lusaxweb.github.io/vuesax/components/topbar.html)
- [Breadcrumb](https://lusaxweb.github.io/vuesax/components/breadcrumb.html)
- [SideBar](https://lusaxweb.github.io/vuesax/components/sideBar.html)
- [DropDown](https://lusaxweb.github.io/vuesax/components/dropDown.html)
- [Divider](https://lusaxweb.github.io/vuesax/components/divider.html)

# Demo and Documentation

[Documentation](https://lusaxweb.github.io/vuesax/#/)

# Browser Support
Recent versions of **Firefox**, **Chrome**, **Edge**, **Opera** and **Safari**. **IE10+**

# Quick-start CDN

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <vs-button vs-type="filled">Hello World</vs-button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.umd.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

# CDN

- https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.umd.js
- https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css

# install en Proyecto NPM
``` bash
# npm
npm install vuesax
```

``` bash
# yarn
yarn add vuesax
```

## Use

### All components

```javascript
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)
```

### Or use individual components:

```javascript
import Vue from 'vue'
import { vsButton, vsSelect, vsPopup } from 'vuesax/dist/components'
import 'vuesax/dist/vuesax.css'

Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)
```

### Or use only the functions:

```javascript
import Vue from 'vue'
import vsFunctions from 'vuesax/dist/functions'
import 'vuesax/dist/vuesax.css'

Vue.use(vsFunctions)
```

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/lusaxweb/vuesax/blob/master/CONTRIBUTING.md) before making a pull request.

## Become a Patron

Vuesax is an open source [MIT](https://github.com/lusaxweb/vuesax/blob/master/LICENSE) project if you want to contribute to keep improving, If you are interested in supporting this project, please consider becoming a patron. [[patron](https://www.patreon.com/luisdanielroviracontreras)]

<p align="center">
  <a href="https://www.patreon.com/luisdanielroviracontreras">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" />
  </a>
</p>

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/vuesax#backer)]

## Lusaxweb

This library was created and is supported by [Lusaxweb](http://www.lusaxweb.com.ve/)

## License

[MIT](https://github.com/lusaxweb/vuesax/blob/master/LICENSE)
