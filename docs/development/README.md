---
API:
 - title: Options
   name: rtl
   type: Boolean
   parameters: null
   description: enable or disable RTL
   default: false
---
# Getting Started

<box header>

Vuesax is a library of Vuejs components that facilitates front-end development and streamlines work with great visual quality.

</box>


<box>

## Quick-start CDN

Start a project quickly using a CDN and let Vuesax do the magic.

<Scrimba href="https://scrimba.com/c/crEd8hq" text="Try this lesson on Scrimba" />

<iframe width="100%" height="300" src="//jsfiddle.net/luisdanielroviracontreras/txzqp7ny/362/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

</box>

<box>

## Install in project via NPM or YARN

```bash

# install
npm install vuesax # OR yarn add vuesax

```


</box>

<box>

## Use

Vuesax is a Vuejs library. To use it, add the code below:

```js
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})
```

[All options](/development/#vs-api)

</box>

<box>

### Or use individual components:

```javascript

import Vue from 'vue'
import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)

```

</box>




<box>

## Material Icons

Material icons used by this framework are currently not included. Please add them manually or add to your project for self hosting via:

```bash
npm install material-icons --save
```
Then Import it to your project:
```js
import 'material-icons/iconfont/material-icons.css';
```

Also, please check the available icons from the following.
[https://material.io/tools/icons/](https://material.io/tools/icons/)

</box>

<box>

## Lusaxweb

This library was created and is supported by [Lusaxweb](https://lusaxweb.net)

</box>
