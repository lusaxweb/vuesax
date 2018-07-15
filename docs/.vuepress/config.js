
module.exports = {
  base: '/vuesax/',
  head: [
    ['title',{},'hola'],
    ['link', { rel: 'icon', href: `/favicon-vuesax.png` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['script',{},`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:816179,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`]
    // ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.0.13/css/all.css` }],
  ],
  ga:'UA-122319353-1',
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
            text:'Discord',
            link:'https://discord.gg/9dsKtvB'
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
      { text: 'Contributors', link: '/contributors/' },
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
          '/components/avatar',
          '/components/breadcrumb',
          '/components/button',
          '/components/card',
          '/components/checkbox',
          '/components/chip',
          // '/components/collapse',
          '/components/dialog',
          '/components/divider',
          '/components/dropDown',
          '/components/input',
          '/components/list',
          '/components/loading',
          '/components/notifications',
          '/components/number',
          '/components/pagination',
          '/components/popup',
          '/components/progress',
          '/components/radio',
          '/components/selects',
          '/components/sideBar',
          '/components/slider',
          '/components/switch',
          '/components/tabs',
          '/components/tooltip',
          '/components/topbar',
          '/components/upload'
        ]
      },
    ]
  }
}
