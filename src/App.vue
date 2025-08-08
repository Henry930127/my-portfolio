<template>
  <header style="padding:16px;border-bottom:1px solid #eee">
    <h1>個人履歷網頁</h1>
    <nav><router-link to="/">回到主頁</router-link></nav>
  </header>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
