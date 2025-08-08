<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const projects = {
  'health-app': {
    title: '健康管理 App',
    description: '紀錄血壓、血糖、血脂並提供圖表與健康提醒。',
    tech: 'Vue 3, Node.js, Express, MySQL',
    github: 'https://github.com/AnHengHealthApp'
  },
  'escooter-rent': {
    title: '校內租車系統 App',
    description: '學生在線租借滑板車，含地圖與狀態顯示。',
    tech: 'Java, Spring Boot, MySQL, Google Maps API',
    github: 'https://github.com/orgs/SA-Group1/repositories'
  },
  'game-web': {
    title: '小遊戲網站',
    description: '整合多款小遊戲的平台，含分數排行與登入。',
    tech: 'JavaScript, HTML/CSS',
    github: 'https://github.com/Henry930127/gameWeb'
  },
  'leetcode-practice': {
    title: 'LeetCode 練習紀錄',
    description: '演算法練習彙整',
    tech: 'Java, Python',
    github: 'https://github.com/Henry930127/leetcode_java'
  }
}

const project = projects[route.params.id]
</script>

<template>
  <main style="padding:16px" v-if="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>

    <h3>技術棧</h3>
    <p>{{ project.tech }}</p>

    <p><a :href="project.github" target="_blank" rel="noreferrer">前往 GitHub</a></p>
  </main>

  <main v-else style="padding:16px">
    <h2>找不到專案</h2>
    <router-link to="/">回首頁</router-link>
  </main>
</template>