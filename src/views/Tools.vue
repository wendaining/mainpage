<template>
  <div class="tools-wrapper">
    <div class="header-section">
      <h2>🛠️ 实验室</h2>
      <p>Code locally, deploy globally. 这里存放我自己开发的小工具。</p>
    </div>
    
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" v-for="tool in tools" :key="tool.title">
        <a :href="tool.link" target="_blank" class="card-link">
          <el-card shadow="hover" class="tool-card">
            <div class="card-inner">
              
              <div class="icon-wrapper" :style="{ background: tool.color }">
                <span class="emoji-icon">{{ tool.icon }}</span>
              </div>
              
              <div class="text-wrapper">
                <h3 class="tool-title">{{ tool.title }}</h3>
                <p class="tool-desc">{{ tool.desc }}</p>
              </div>
              
              <div class="arrow">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

const tools = [
  {
    title: '网易云歌单分析', // 名字长一点也不怕
    desc: '分析歌单重复度、与不同歌单的交集', // 描述长一点也能放下
    icon: '🎵',
    color: '#ff4d4f',
    link: '/tools/music-analysis' 
  },
  {
    title: '待开发工具',
    desc: '更多实用功能正在开发中',
    icon: '⏳',
    color: '#e0e0e0',
    link: '#'
  }
]
</script>

<style scoped>
.tools-wrapper {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.header-section {
  margin-bottom: 40px;
  text-align: left;
}

.header-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 12px;
}

.header-section p {
  color: #8c8c8c;
  font-size: 16px;
}

.card-link {
  text-decoration: none;
  display: block;
  margin-bottom: 30px; /* 垂直间距加大 */
}

.tool-card {
  border: 1px solid #f0f0f0;
  border-radius: 16px; /* 更大的圆角 */
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
  border-color: transparent;
}

/* 核心布局：宽敞的 Flex */
.card-inner {
  display: flex;
  align-items: center;
  padding: 24px 20px; /* 🔴 内部填充大幅增加，呼吸感来源 */
}

.icon-wrapper {
  width: 56px;         /* 图标稍大一点，撑得起来 */
  height: 56px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: white;
  margin-right: 24px;  /* 🔴 图标和文字拉开距离 */
  flex-shrink: 0;
}

.text-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tool-title {
  margin: 0 0 8px 0;
  font-size: 18px;     /* 标题字号加大 */
  font-weight: 700;
  color: #262626;
  line-height: 1.2;
}

.tool-desc {
  margin: 0;
  font-size: 14px;
  color: #8c8c8c;
  line-height: 1.6;    /* 行高加大，防止文字挤在一起 */
  font-weight: 400;
}

.arrow {
  margin-left: 20px;
  color: #d9d9d9;
  font-size: 18px;
}

/* 手机端适配：虽然是宽卡片，但在极窄屏幕上还是要注意 */
@media screen and (max-width: 768px) {
  .card-inner {
    padding: 16px;
  }
  .icon-wrapper {
    width: 48px;
    height: 48px;
    font-size: 24px;
    margin-right: 16px;
  }
  .tool-title {
    font-size: 16px;
  }
}
</style>