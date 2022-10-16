import { defineConfig } from 'vitepress'

const ogDescription = '一个朴实无华的3D制作流程学习文档'
const ogImage = 'https://pic1.imgdb.cn/item/634aeeb016f2c2beb12028d7.jpg'
const ogTitle = 'Learnder'
const ogUrl = 'https://learnder.org'

export default defineConfig({
  title: 'Learnder',
  description: '知识分享库',
  lang: 'zh-CN',
  cleanUrls: 'with-subfolders',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }]
  ],

  lastUpdated: true,

  themeConfig: {
    logo: '/logo-hero.png',
    lastUpdatedText: '最后更新时间',

    outline: 'deep',
    outlineTitle: '指南大纲',

    nav: nav(),

    sidebar: {
      '/guide/blender': sidebarBlender(),
      '/guide/sfm': sidebarSFM()
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019 - 2022 Loudomian.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Loudomian/learnder' },
    ],

    algolia: {
      appId: 'PBW2PP7F1D',
      apiKey: '174b0e89131dc13ba9ec9d47473e5b92',
      indexName: 'learnder',
      searchParameters: {
        facetFilters: ['lang:zh-CN']
      }
    },

    editLink: {
      pattern: 'https://github.com/Loudomian/learnder/edit/main/docs/:path',
      text: '完善文档'
    },
  }
})

/**
 * 侧边栏和导航
*/

function nav() {
  return [
    { text: '关于本站', link: '/about', activeMatch: '/about' },
    {
      text: '文档',
      items: [
        {
          text: 'Blender',
          link: '/guide/blender/intro',
        },
        {
          text: 'Source Filmaker',
          link: '/guide/sfm/intro',
        },
      ],
      activeMatch: '/guide/'
    },
    { text: '创作者', link: '/team', activeMatch: '/team' },
    { text: '网站导航', link: 'https://nav.learnder.org' }
  ]
}

function sidebarBlender() {
  return [
    {
      text: '🚀入门',
      collapsible: true,
      items: [
        { text: '引言', link: '/guide/blender/intro' },
        //{ text: 'EEVEE 设置', link: '/guide/blender/basics/eevee-setting' },
      ]
    },
    {
      text: '📚进阶',
      collapsible: true,
      items: [
        { text: '服务器云渲染', link: '/guide/blender/advanced/cloud-render' }
      ]
    }
  ]
}

function sidebarSFM() {
  return [
    {
      text: '📓海报实例',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '引言', link: '/guide/sfm/instance/monika-poster/intro' },
        { text: '摆好动作', link: '/guide/sfm/instance/monika-poster/posting-well' },
        { text: '镜头与布景', link: '/guide/sfm/instance/monika-poster/lens-scenebuild' },
        { text: '打光', link: '/guide/sfm/instance/monika-poster/lighting' }
      ]
    },
    {
      text: '🚀入门',
      collapsible: true,
      items: [
        { text: '引言', link: '/guide/sfm/intro' },
        { text: '下载 Source Filmmaker', link: '/guide/sfm/getting-start/download-sfm' },
        { text: '汉化补丁', link: '/guide/sfm/getting-start/hanization-patch' },
        { text: '获取社区资产', link: '/guide/sfm/getting-start/getting-model' },
        { text: '增加视频编码器', link: '/guide/sfm/getting-start/add-media-encoder' }
      ]
    },
    {
      text: '💡基础',
      collapsible: true,
      items: [
        { text: '基础打光', link: '/guide/sfm/basics/lighting' },
        { text: 'Rig', link: '/guide/sfm/basics/rig' },
        //{ text: '导出成片', link: '/guide/sfm/basics/export' }
      ]
    },
    {
      text: '📚进阶',
      collapsible: true,
      items: [
        { text: '让模型富有光泽', link: '/guide/sfm/advanced/make-the-model-shiny' },
        { text: '模型换头', link: '/guide/sfm/advanced/headswap' },
        { text: 'JiggleBone（动骨）', link: '/guide/sfm/advanced/jigglebone' },
        { text: 'Auto Rigger（自动装配）', link: '/guide/sfm/advanced/auto-rigger' }
      ]
    },
    {
      text: '💀混沌',
      collapsible: true,
      items: [
        { text: '初识 vmt', link: '/guide/sfm/chaos/vmt-meet' },
        { text: '自发光 vmt', link: '/guide/sfm/chaos/vmt-self-luminous' },
        { text: '冯氏高光 vmt', link: '/guide/sfm/chaos/vmt-phong' }
      ]
    },
    {
      text: '🥶冷知识',
      collapsable: true,
      items: [
        { text: '音频格式', link: '/guide/sfm/trivia/sound-format' },
        { text: '调整分辨率', link: '/guide/sfm/trivia/resolutions' },
        { text: 'Source SDK', link: '/guide/sfm/trivia/sdk' },
        { text: '离线启动', link: '/guide/sfm/trivia/nosteam' }
      ]
    },
    {
      text: '💩BUG',
      collapsable: true,
      items: [
        { text: '屏闪', link: '/guide/sfm/bug/flash-screen' },
        { text: '环境错误', link: '/guide/sfm/bug/env-error' },
        { text: '汉化补丁', link: '/guide/sfm/bug/hanization-patch-bug' },
        { text: '七彩眩光', link: '/guide/sfm/bug/7-color' },
        { text: '文档损坏', link: '/guide/sfm/bug/document-broke' },
        { text: '屏闪后崩溃', link: '/guide/sfm/bug/crash-after-flash' }
      ]
    }
  ]
}