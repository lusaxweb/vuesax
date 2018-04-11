import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from '@/sections/PageNotFound.vue'
import home from '@/sections/home'
import doc from '@/sections/documentation.vue'

import gettingStarted from '@/sections/doc/gettingStarted.vue'
import contributing from '@/sections/doc/contributing.vue'

//layout
import grid from '@/sections/doc/layout/grid.vue'

//components
import buttons from '@/sections/doc/components/btns.vue'
import selects from '@/sections/doc/components/selects.vue'
import notys from '@/sections/doc/components/notys.vue'
import switchs from '@/sections/doc/components/switch.vue'
import checkBox from '@/sections/doc/components/checkBoxs.vue'
import radios from '@/sections/doc/components/radios.vue'
import inputs from '@/sections/doc/components/inputs.vue'
import messageBox from '@/sections/doc/components/messageBox.vue'
import tabs from '@/sections/doc/components/tabs.vue'
import slider from '@/sections/doc/components/slider.vue'
import inputNumber from '@/sections/doc/components/inputNumbers.vue'
import Tooltips from '@/sections/doc/components/Tooltips.vue'
import Upload from '@/sections/doc/components/Upload.vue'
import Loading from '@/sections/doc/components/Loadings.vue'
import popup from '@/sections/doc/components/popup.vue'
import alert from '@/sections/doc/components/alert.vue'
import dropDown from '@/sections/doc/components/DropDown.vue'



export const children = [
    {
      path: '/',
      redirect: 'vuesax/getting-started'
    },
    {
      padre:true,
      name:'vuesax',
      path: 'vuesax/',
      redirect: 'vuesax/getting-started',
      component: doc,
      children:[
        {
          name:'Getting Started',
          path: 'getting-started',
          component: gettingStarted
        },
        {
          new:'new',
          name:'Contributing',
          path: 'contributing',
          component: contributing
        },
      ]
    },
    //Layout
    {
      padre:true,
      name:'layout',
      path: 'layout/',
      redirect: 'layout/grid',
      component: doc,
      children:[
        {
          new:'new',
          path: 'grid',
          component: grid
        },
      ]
    },

    {
      padre:true,
      name:'components',
      path: 'components/',
      redirect: 'components/buttons',
      component: doc,
      children:[
        //components
        {
          new:'upload',
          path: 'buttons',
          component: buttons
        },
        {
          path: 'selects',
          component: selects
        },
        {
          new:'upload',
          path: 'Notifications',
          component: notys
        },
        {
          path: 'switch',
          component: switchs
        },
        {
          new:'upload',
          path: 'checkBox',
          component: checkBox
        },
        {
          path: 'radio',
          component: radios
        },
        {
          path: 'input',
          component: inputs
        },
        {
          path: 'Dialogs',
          component: messageBox
        },
        {
          path: 'tabs',
          component: tabs
        },
        {
          path: 'slider',
          component: slider
        },
        {
          path: 'inputNumber',
          component: inputNumber
        },
        {
          path: 'Tooltip',
          component: Tooltips
        },
        {
          path: 'upload',
          component: Upload
        },
        {
          path: 'loading',
          component: Loading
        },
        {
          new:'upload',
          path: 'popup',
          component: popup
        },
        {
          new:'new',
          path: 'alert',
          component: alert
        },
        {
          new:'new',
          path: 'dropdown',
          component: dropDown
        },
      ]
    },
  ]


Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/en/home',
      component:home,
    },
    {
      path: '/:lang/home',
      component:home,
    },
    {
      path: '/:lang/docs',
      component: doc,
      children: children,
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})
export default router
