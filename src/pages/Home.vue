<script setup>
import profileImg from '../assets/avatar.jpg' // 匯入檔案
</script>

<template>
  <main class="wrap">
    <!-- 自我介紹區塊 -->
    <section class="about">
      <!-- 頭像圖片 -->
      <img class="avatar" :src="profileImg" alt="我的照片" />

      <!-- 自我介紹文字 -->
      <div>
        <h2>自我介紹</h2>
        <p>我的名字叫李忠翰，來自台中，目前就讀雲林科技大學資訊管理系四年級，</p>  
        <p>在學期間參與了多項專案，培養了我團隊合作與專案管理的能力。</p>
        <p>我具有 Android App 前端設計與實作的經驗，熟悉 API 串接與基本後端開發，</p>  
        <p>也有網頁前端工程的經驗，能靈活運用多種技術實現功能與優化介面。</p>
      </div>
    </section>

    <!-- 技能、軟實力、學歷 -->
    <section class="detail">
      <div>
        <!-- 技能 -->
        <h2>相關技能</h2>
        <ul>
          <li>前端：Vue.js／HTML／CSS／JavaScript</li>
          <li>後端：Python／JAVA／JavaScript</li>
          <li>資料庫：MySQL</li>
        </ul>

        <!-- 軟實力 -->
        <h2>興趣與軟實力</h2>
        <ul>
          <li>溝通技巧：校內擔任專案小組組長職位，擅長與不同人共同協作與調和組內矛盾。</li>
          <li>快速適應：快速適應不同的工作環境，並積極學習與嘗試新的技術。</li>
        </ul>
      </div>
      
      <!-- 學歷 -->
      <div>
        <h2>學歷背景</h2>
        <ul>
          <li class="edu-item"> 
            大學：雲林科技大學 資訊管理系
            <p class="edu-year"> |2022 ~ 在學中</p>
          </li>
          <li class="edu-item"> 
            高中：臺中工業高級中等學校
            <p class="edu-year"> |畢業</p>
          </li>
          <li class="edu-item"> 
            國中：臺中市立大墩國中
            <p class="edu-year"> |畢業</p>
          </li>
          <li class="edu-item"> 
            國小：臺中市立南屯國小
            <p class="edu-year"> |畢業</p>
          </li>
        </ul>
      </div>
    </section>


    <!-- 專案清單 -->
    <section class="project">
      <div>
        <h2>專案清單</h2>
        <ul>
          <li><router-link :to="{ name:'project', params:{ id:'health-app' } }">健康管理 App</router-link></li>
          <li><router-link :to="{ name:'project', params:{ id:'escooter-rent' } }">校內租車系統 App</router-link></li>
          <li><router-link :to="{ name:'project', params:{ id:'game-web' } }">小遊戲網站</router-link></li>
          <li><router-link :to="{ name:'project', params:{ id:'leetcode-practice' } }">LeetCode 練習紀錄</router-link></li>
        </ul>
      </div>
    </section>

    <!-- 聯絡資訊 -->
     <section class="contact">
      <div>
        <h2>聯絡資訊</h2>
        <ul>
          <li class="contact-info"><a href="tel:+886909893352">電話：+886 0909 893 352</a></li>
          <li class="contact-info"><a href="mailto:henry60109@gmail.com">信箱：henry60109@gmail.com</a></li>
        </ul>
      </div>
     </section>
  </main>
</template>

<style scoped>
/* 主內容容器 */
.wrap {
  padding: 16px;
}

/* 自我介紹區塊：頭像 + 文字左右排列 */
.about {
  display: flex;
  gap: 16px;
  align-items: center;
}
.about div{ max-width: 420px; } /* 視覺更穩定 */

/* 頭像樣式：240x240 圓形 */
.avatar {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover; /* 確保圖片比例正確填滿 */
}

/* 技能/學歷區塊 */
.detail{
  display:grid;
  grid-template-columns: 1fr 1fr; /* 左右兩欄 */
  gap:24px;
}

/* 如果使用手機的話 */
@media (max-width: 768px){
  .about{ flex-direction:column; align-items:flex-start; }
  .detail{ grid-template-columns: 1fr; }
}

/* 專案區塊 */
.project {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* 聯絡資訊區塊 */
.contact{
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* 學歷 li 樣式 */
.edu-item {
  margin-bottom: 10px;
}

/* 學歷年份樣式 */
.edu-year {
  text-align: center;
  margin: 0px;
  font-size: 16px;
  color: #3b3b3b;
}

/* 聯絡資訊內容樣式 */
.contact-info{
  list-style: none;
}
</style>