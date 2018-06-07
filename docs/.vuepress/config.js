
module.exports = {
  base: '/vuesax/',
  head: [
    ['title',{},'hola'],
    ['link', { rel: 'icon', href: `/favicon-vuesax.png` }],
  ],
  docsDir: 'docs',
  host:'localhost',
  port: 7070,
  title: 'Vuesax',
  description: 'We love what we do. Let us help you do what <b>You love.</b>',
  vueThemes:{
    linksHome:[],
    links:{
      github:'https://github.com/lusaxweb/vuesax',
    },
    footer:[
      {
        title:'Social',
        items:[
          {
            text:'Github',
            link:'https://github.com/lusaxweb/vuesax'
          },
          {
            text:'Twitter',
            link:'https://twitter.com/vuesax'
          },
          {
            text:'Facebook',
            link:'https://www.facebook.com/vuesax/'
          },
          {
            text:'Behance',
            link:'https://www.behance.net/ManuelRovira'
          },
          {
            text:'Dribbble',
            link:'https://dribbble.com/ManuelRovira'
          },
          {
            text:'Codepen',
            link:'https://codepen.io/lusaxweb/'
          },
        ]
      },
      {
        title:'Help',
        items:[
          {
            text:'Issues',
            link:'https://github.com/lusaxweb/vuesax/issues'
          },
          {
            text:'Edit Page',
            link:'https://github.com/lusaxweb/vuesax/tree/master/docs'
          },
          {
            text:'Latest Releases',
            link:'https://github.com/lusaxweb/vuesax/releases'
          },
          {
            text:'Stackoverflow',
            link:'https://stackoverflow.com/questions/tagged/vuesax'
          },
          {
            text:'FAQ',
            link:'https://github.com/lusaxweb/vuesax/wiki'
          },
        ]
      },
      {
        title:'Más',
        items:[
          {
            text:'Lusaxweb',
            link:'http://www.lusaxweb.com.ve/'
          },
          {
            text:'Email',
            link:'mailto:vuesax@gmail.com'
          },
          {
            text:'Chat',
            link:'https://gitter.im/vuesax/Lobby'
          },
          {
            text:'Pull request',
            link:'https://github.com/lusaxweb/vuesax/pulls'
          },
          {
            text:'Codepen Template',
            link:'https://codepen.io/lusaxweb/pen/mxMKYr'
          },
        ]
      }
    ]
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'lusaxweb/vuesax',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'lusaxweb/vuesax',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuesax-logo-vertical.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documents', link: '/vuesax/' },
      { text: 'Contribuitors', link: '/contribuitors/' },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'Github', link: 'https://github.com/lusaxweb/vuesax' },
              { text: 'Twitter', link: 'https://twitter.com/vuesax' },
              { text: 'Facebook', link: 'https://www.facebook.com/vuesax/' },
              { text: 'Behance', link: 'https://www.behance.net/ManuelRovira' },
              { text: 'Dribbble', link: 'https://dribbble.com/ManuelRovira' },
              { text: 'Codepen', link: 'https://codepen.io/lusaxweb/' },
              { text: 'Medium', link: 'https://medium.com/@luisdanielrovira8' }
            ]
          },
          {
            text: 'Help',
            items: [
              { text: 'Issues', link: 'https://github.com/lusaxweb/vuesax/issues' },
              { text: 'Edit Page', link: 'https://github.com/lusaxweb/vuesax' },
              { text: 'Latest Releases', link: 'https://github.com/lusaxweb/vuesax/releases' },
              { text: 'FAQ', link: 'https://github.com/lusaxweb/vuesax/wiki' }
            ]
          },
          {
            text: 'Contact',
            items: [
              { text: 'Lusaxweb', link: 'http://www.lusaxweb.com' },
              { text: 'Email', link: 'mailto:vuesax@gmail.com' },
              { text: 'Chat', link: 'https://gitter.im/vuesax/Lobby' },
              { text: 'Pull Request', link: 'https://github.com/lusaxweb/vuesax/pulls' },
              { text: 'Codepen Template', link: 'https://codepen.io/lusaxweb/pen/mxMKYr' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Vuesax',
        collapsable: false,
        children: [
          '/vuesax/',
          '/vuesax/contributing',
          '/vuesax/whyVuesax',
         ]
      },
      {
        title: 'Layout',
        collapsable: false,
        children: [
          '/layout/',
         ]
      },
      {
        title: 'Theme',
        collapsable: false,
        children: [
          '/theme/',
         ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/',
          '/components/selects',
          '/components/notifications',
          '/components/switch',
          '/components/checkbox',
          '/components/radio',
          '/components/input',
          '/components/dialog',
          '/components/tabs',
          '/components/slider',
          '/components/number',
          '/components/tooltip',
          '/components/upload',
          '/components/loading',
          '/components/popup',
          '/components/alert',
          '/components/chip',
          '/components/progress',
          '/components/card',
          '/components/avatar',
          '/components/list',
          '/components/pagination',
          '/components/breadcrumb',
          '/components/topbar',
          '/components/sideBar',
          /*New Component*/
        ]
      },
    ]
  }
}
