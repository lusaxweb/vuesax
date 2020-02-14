
module.exports = {
  base: '/vuesax/',
  head: [
    ['link', { rel: 'icon', href: `/favicon-vuesax.png` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    // ['script',{},`(function(h,o,t,j,a,r){
    //         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //         h._hjSettings={hjid:816179,hjsv:6};
    //         a=o.getElementsByTagName('head')[0];
    //         r=o.createElement('script');r.async=1;
    //         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //         a.appendChild(r);
    //     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`]
  ],
  ga:'UA-122319353-1',
  docsDir: 'docs',
  host:'localhost',
  port: 7070,
  title: 'Vue.js Framework Components - Vuesax',
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
            text:'GitHub',
            link:'https://github.com/lusaxweb/vuesax'
          },
          {
            text:'Discord',
            link:'https://discord.gg/6AZNXEa'
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
        title:'More',
        items:[
          { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/' },
          {
            text:'Lusaxweb',
            link:'http://lusaxweb.net/'
          },
          {
            text:'Email',
            link:'mailto:vuesax@gmail.com'
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
      { text: 'Documentation', link: '/development/' },
      // { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/articles/' },
      { text: 'Contributors', link: '/contributors/' },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'GitHub', link: 'https://github.com/lusaxweb/vuesax' },
              { text: 'Discord', link: 'https://discord.gg/6AZNXEa' },
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
            ]
          },
          {
            text: 'Contact',
            items: [
              { text: 'Lusaxweb', link: 'http://lusaxweb.net' },
              { text: 'Email', link: 'mailto:vuesax@gmail.com' },
              { text: 'Pull Request', link: 'https://github.com/lusaxweb/vuesax/pulls' },
              { text: 'Codepen Template', link: 'https://codepen.io/lusaxweb/pen/mxMKYr' }
            ]
          }
        ]
      },
      { text: 'Vuesax 4', link: 'https://vuesax.com/', new: true },
    ],
    sidebar: [
      {
        title: 'Development',
        collapsable: false,
        children: [
          '/development/',
          '/development/contributing',
          '/development/whyVuesax',
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
          '/theme/icon'
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
          '/components/avatar',
          '/components/breadcrumb',
          '/components/alert',
          '/components/chip',
          '/components/divider',
          '/components/progress',
          '/components/card',
          '/components/list',
          '/components/pagination',
          '/components/navbar',
          '/components/sideBar',
          '/components/dropDown',
          '/components/table',
          '/components/textarea',
          '/components/collapse',
          '/components/images'
          // '/components/timePicker',
          /*New Component*/
        ]
      },
    ]
  }
}
