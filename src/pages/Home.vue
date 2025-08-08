<template>
  <main style="padding:16px">
    <h2>關於我</h2>
    <p>我是 李忠翰，專長 XXX。</p>

    <h2>履歷</h2>
    <ul>
      <li>技能：Vue、Node.js…</li>
      <li>學歷：…</li>
      <li>經歷：…</li>
    </ul>

    <h2>專案清單</h2>
    <ul>
      <li><router-link :to="{ name:'project', params:{ id:'health-app' } }">健康管理 App</router-link></li>
      <li><router-link :to="{ name:'project', params:{ id:'escooter-rent' } }">校內租車系統 App</router-link></li>
      <li><router-link :to="{ name:'project', params:{ id:'game-web' } }">小遊戲網站</router-link></li>
      <li><router-link :to="{ name:'project', params:{ id:'leetcode-practice' } }">LeetCode練習紀錄</router-link></li>
    </ul>
  </main>
</template>