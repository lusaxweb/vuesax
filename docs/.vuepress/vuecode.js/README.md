<p align="center">
<img width="400px" src="https://github.com/lusaxweb/vuecode/blob/master/public/img/vuecode.svg" alt="vuecode">
  </p>

## Browser Support
Recent versions of **Firefox**, **Chrome**, **Edge**, **Opera** and **Safari**. **IE10**+

## Quick-start CDN

```html
<!DOCTYPE html>
<title>vuecode demo</title>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuecode.js/dist/vuecode.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/vuecode.js/dist/vuecode.css">

<div id="app">
  <vuecode title="Add new proyect vuecode">
    <div slot="demo">
      <button class="btn" type="button" name="button">Example</button>
    </div>

    <div slot="code">
```js{1,6}
var btn = document.querySelector('.btn')

btn.addEventListener( 'click' , function(){
console.log('click')
})
``/`
    </div>
  </vuecode>
</div>

<script>
new Vue({
}).$mount('#app')
</script>
```

## CDN

- https://unpkg.com/vuecode.js/dist/vuecode.umd.js
- https://unpkg.com/vuecode.js/dist/vuecode.css

## Install en Proyecto NPM
``` bash
# npm
npm install vuecode.js
```

``` bash
# yarn
yarn add vuecode.js
```

## Use

```javascript
import Vue from 'vue'
import Vuecode from 'vuecode.js'

import 'vuecode.js/dist/vuecode.css'
Vue.use(Vuecode)
```
## Become a Patron

Vuecode is an open source MIT project if you want to contribute to keep improving, If you are interested in supporting this project, please consider becoming a patron. [[patron](https://www.patreon.com/bePatron?c=1567892)]

## Lusaxweb

This library was created and is supported by [Lusaxweb](http://www.lusaxweb.com.ve/)
