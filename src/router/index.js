import { createRouter, createWebHistory } from 'vue-router'
// 稍后我们会创建这两个组件
import Home from '../views/Home.vue'
import Tools from '../views/Tools.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }
]

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 历史模式，URL 不带 #
  routes
})

export default router