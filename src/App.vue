<template>
  <div class="app-wrapper">
    <header class="navbar">
      <div class="navbar-content">
        <div class="logo">wendaining</div>
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
        <button @click="toggleTheme" class="theme-toggle" :title="isDark ? '切换到浅色模式' : '切换到深色模式'">
          <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
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
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = computed(() => route.path)
const isDark = ref(false)

const goToBlog = () => {
  window.location.href = 'http://blog.wendaining.top'
}

// 初始化主题
onMounted(() => {
  // 优先从 localStorage 读取用户选择
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // 如果没有保存的选择，则读取浏览器/系统主题偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()

  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      applyTheme()
    }
  })
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style>
/* CSS 变量定义 */
:root {
  --bg-color: #f9f9f9;
  --text-color: #2c3e50;
  --navbar-bg: rgba(255, 255, 255, 0.8);
  --card-bg: #ffffff;
  --shadow: rgba(0, 0, 0, 0.05);
  --border-color: #eee;
  --tag-bg: #ffffff;
  --tag-text: #34495e;
  --quote-color: #7f8c8d;
  --footer-text: #bdc3c7;
}

:root.dark {
  --bg-color: #1a1a1a;
  --text-color: #e4e4e7;
  --navbar-bg: rgba(30, 30, 30, 0.8);
  --card-bg: #262626;
  --shadow: rgba(0, 0, 0, 0.3);
  --border-color: #3f3f46;
  --tag-bg: #262626;
  --tag-text: #a1a1aa;
  --quote-color: #9ca3af;
  --footer-text: #71717a;
}

/* 全局重置 */
body {
  margin: 0;
  font-family: "LXGW WenKai Screen", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 导航栏样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: var(--navbar-bg);
  backdrop-filter: blur(10px); /* 磨砂玻璃效果 */
  box-shadow: 0 1px 2px var(--shadow);
  z-index: 1000;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
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
  color: var(--text-color);
}

/* 覆盖 Element Plus 菜单默认样式，去掉底部的线 */
.custom-menu {
  background: transparent !important;
  border-bottom: none !important;
  width: 300px;
  justify-content: flex-end;
}

/* Element Plus 菜单项样式 - 深色模式适配 */
.custom-menu .el-menu-item {
  color: var(--text-color) !important;
  transition: color 0.3s ease;
}

.custom-menu .el-menu-item:hover {
  background-color: var(--shadow) !important;
}

.custom-menu .el-menu-item.is-active {
  color: #409EFF !important;
  border-bottom-color: #409EFF !important;
}

:root.dark .custom-menu .el-menu-item {
  color: #e4e4e7 !important;
}

:root.dark .custom-menu .el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* 主题切换按钮 */
.theme-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  border-radius: 8px;
  transition: background-color 0.2s ease;
  margin-left: 15px;
}

.theme-toggle:hover {
  background-color: var(--shadow);
}

.theme-toggle svg {
  transition: transform 0.3s ease;
}

.theme-toggle:hover svg {
  transform: rotate(20deg);
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
  color: var(--footer-text);
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