const { description } = require('../../package')
const pageSuffix = '/'
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Kuroco',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
 
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  head: [
    [ 
        'meta', { charset: 'utf-8',},
    ],
    [
        'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    [
        'link', {
            rel: "stylesheet", 
            href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600&family=Inter:wght@500;600;700&family=Karla&display=swap" 
        }
    ],
    [
        'link', { 
          rel: "icon", 
          type: "image/x-icon",
           href: "/favicon.ico" 
        }
    ],  
    ['script', {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}],
    [
        'script',{ src: '/files/js/front/user/lib/lib.js',},
    ],
    [
        'script',{ src: '/files/js/front/user/common.js',},
    ],
  ],
  themeConfig: {
    repo: '',
    activeHeaderLinks: false,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    algolia: {
      apiKey: '25626fae796133dc1e734c6bcaaeac3c',
      indexName: 'docsearch',
      //appId: ''
    },
    nav: [
      {
        text: 'Documentations',
        link: '/documentations/'
      },
    ],
    sidebar: {
      '/documentations/': [
        {
          title: 'ドキュメント',
          collapsable: false,
          children: [
            ['', 'ホーム'],
            ['about', 'Kurocoについて'],
            ['management', '管理画面マニュアル'],
            ['api', 'API'],
            ['reference', 'リファレンス'],
            ['tools', 'ツール'],
            ['faq', 'FAQ']
          ]
        }
      ],
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
 plugins: [
      [
          'vuepress-plugin-clean-urls',
          {
          
          },
      ],
      [
          '@vuepress/search', 
          {
            searchMaxSuggestions: 10
          }
      ]
  ],
}
