<template>
  <div class="app-wrapper">
    <header class="navbar">
      <div class="navbar-content">
        <div class="logo">主页</div>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :router="true"
          :ellipsis="false"
          class="custom-menu"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="blog" @click="goToBlog">博客</el-menu-item>
          <el-menu-item index="/tools">工具</el-menu-item>
        </el-menu>
      </div>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <footer class="footer">
      <p>© 2025 wendaining.</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = computed(() => route.path)

const goToBlog = () => {
  window.location.href = 'http://blog.wendaining.top'
}
</script>

<style>
/* 全局重置 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #f9f9f9; /* 极淡的灰色背景，比纯白护眼 */
  color: #2c3e50;
}

/* 导航栏样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px); /* 磨砂玻璃效果 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.navbar-content {
  width: 100%;
  max-width: 800px; /* 限制最大宽度 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* 覆盖 Element Plus 菜单默认样式，去掉底部的线 */
.custom-menu {
  background: transparent !important;
  border-bottom: none !important;
  width: 300px;
  justify-content: flex-end;
}

.main-content {
  margin-top: 80px; /* 留出导航栏的高度 */
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
}

.footer {
  text-align: center;
  padding: 30px;
  color: #bdc3c7;
  font-size: 12px;
  letter-spacing: 1px;
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>