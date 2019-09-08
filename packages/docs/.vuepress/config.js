module.exports = {
  base: '/vuesax/',
  head: [
    ['link', { rel: 'icon', href: '/favicon-vuesax.png' }]
  ],
  plugins: [
    // ['vuepress-plugin-smooth-scroll', true],
    ['@vuepress/active-header-links'],
    ['container', {
      type: 'tip',
      defaultTitle: '',
    }],
    ['container', {
      type: 'warning',
      defaultTitle: '',
    }],
    ['container', {
      type: 'danger',
      defaultTitle: '',
    }],
  ],
  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
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
    // editLinks: true,
    // // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuesax-logo-vertical.png',
    // sidebar: 'auto',
    sidebar: {
      '/components/': [
        'alert',
        'avatar',
        'breadcrumb',
        'button',
        // 'card'
      ]
    },
    nav: [
      { text: 'Components', link: '/components/' },
      {
        text: 'docs',
        items: [
          { text: 'Guides', link: '/guides/' },
          { text: 'Reference', link: '/reference/' },
          { text: 'Samples', link: '/samples/' },
        ]
      },
      {
        text: 'Learn More',
        items: [
          { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/articles/' },
          { text: 'Tips', link: 'https://lusaxweb.github.io/vuesax-blog/tips/' },
          { text: 'Help Us', link: '/help-us/' },
          { text: 'API', link: '/api/' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Contributors', link: '/contributors/' },
          { text: 'For Designers', link: '/designers/' },
        ]
      },
      {
        text: 'Support Vuesax',
        items: [
          { text: 'Pro', link: '/pro/' },
          { text: 'One-time Donations', link: '/support-vuesax/#One-time-Donations' },
          { text: 'Recurring Pledges', link: '/support-vuesax/#Recurring-Pledges' },
          { text: 'T-Shirt Shop', link: 'https://www.threadless.com/' },
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'GitHub', link: 'https://github.com/lusaxweb/vuesax' },
              { text: 'Discord', link: 'https://discord.gg/9dsKtvB' },
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
              { text: 'Lusaxweb', link: 'http://www.lusaxweb.com.ve' },
              { text: 'Email', link: 'mailto:vuesax@gmail.com' },
              { text: 'Chat', link: 'https://gitter.im/vuesax/Lobby' },
              { text: 'Pull Request', link: 'https://github.com/lusaxweb/vuesax/pulls' },
              { text: 'Codepen Template', link: 'https://codepen.io/lusaxweb/pen/mxMKYr' }
            ]
          }
        ]
      },


    ]
  }
}
