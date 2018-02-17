<p align="center">
<a href="https://lusaxweb.github.io/vuesax/#/"><img src="https://lusaxweb.github.io/vuesax/static2/img/vuesax-logo-2.0ab2286.png" alt="vuesax"></a>
  </p>

# Introduccion

Vuesax es una libreria de frontend basada en vue js que te ayuda a desarrollar mas rapido y con un impacto visual en pocos pasos esta en proceso de crecimiento y progreso.

# Demo and Documentation

[Demo](https://lusaxweb.github.io/vuesax/#/docs/getting-started)

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
    <vs-button vs-type="primary-filled">Hola Mundo</vs-button>
  </div>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuesax/dsit/vuesax.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

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

```javascript
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)
```

## Lusaxweb

Esta libreria fue creada y es soportada por [Lusaxweb](http://www.lusaxweb.com.ve/)
