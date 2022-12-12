import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  // site config
  base: '/eazy-music-doc/',
  lang: 'zh-CN',
  title: '音乐App全栈开发',
  description: '音乐App实战项目',
  // theme and its config
  theme: defaultTheme({
    logo: '/images/logo.png',
  })
})