<template>
  <div class="home-container">
    <div class="profile-section">
      <div class="avatar-wrapper">
        <el-avatar :size="120" src="https://q1.qlogo.cn/g?b=qq&nk=2215589975&s=640" class="avatar" />
      </div>
      
      <h1 class="name">wendaining</h1>
      
      <p class="quote">「彼方の向こうに、何かが見える。」"</p>
      <div class="info-tags">
        <span class="tag">Majored in SE</span>
        <span class="tag">Tech Lover</span>
        <span class="tag">Vocaloid Music</span>
        <span class="tag">Anime</span>
        <span class="tag">ein bisschen Deutsch(A2)</span>
        <span class="tag">... And so on / Und so weiter</span>
      </div>

      <div class="divider"></div>

      <div class="social-links">
        <el-tooltip content="访问我的 GitHub" placement="top">
          <a href="https://github.com/wendaining" target="_blank" class="social-btn github">
            <svg height="24" viewBox="0 0 16 16" width="24" class="icon"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </el-tooltip>
        <el-tooltip content="访问我的知乎" placement="top">
          <a href="https://www.zhihu.com/profile/rionon-12" target="_blank" class="social-btn zhihu">
            <img src="https://www.zhihu.com/favicon.ico" alt="知乎" height="24" width="24" class="icon" />
          </a>
        </el-tooltip>
        <el-tooltip content="访问我的B站" placement="top">
          <a href="https://space.bilibili.com/13428960" target="_blank" class="social-btn bilibili">
            <img src="https://www.bilibili.com/favicon.ico" alt="哔哩哔哩" height="24" width="24" class="icon" />
          </a>
        </el-tooltip>
      </div>

      <!-- <div class="about-section">
        <h2 class="section-title">关于我</h2>
        <div class="about-content">
          <p class="about-text">
            👋 你好！我是一名热爱技术的软件工程专业学生，对编程充满热情。
          </p>
          <p class="about-text">
            💡 平时喜欢探索新技术，折腾各种有趣的项目。从前端到后端，从Web开发到移动应用，
            我都愿意去尝试和学习。相信代码可以改变世界，技术可以让生活更美好。
          </p>
          <p class="about-text">
            🎵 除了敲代码，我还是一名Vocaloid音乐爱好者。闲暇时间会听听虚拟歌姬的歌曲，
            感受那些充满创意和情感的旋律。
          </p>
          <p class="about-text">
            🌟 目前正在不断学习中，希望能在软件工程的道路上越走越远，
            创造出更多有价值的作品。欢迎志同道合的朋友一起交流学习！
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.profile-section {
  text-align: center;
  animation: slideUp 0.8s ease;
}

.avatar {
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: rotate(360deg) scale(1.05);
}

.name {
  margin-top: 20px;
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  letter-spacing: -1px;
}

.quote {
  font-family: 'Georgia', serif;
  font-style: italic;
  color: #7f8c8d;
  margin: 10px 0 30px;
}

.info-tags {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.tag {
  background: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  color: #34495e;
}

.divider {
  width: 50px;
  height: 2px;
  background: #eee;
  margin: 40px auto;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-btn {
  color: #333;
  transition: all 0.2s;
  padding: 10px;
  border-radius: 50%;
}
.social-btn:hover {
  background-color: #f0f0f0;
  transform: translateY(-3px);
  color: #409EFF; /* 悬停变蓝 */
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.about-section {
  margin-top: 60px;
  text-align: left;
  max-width: 600px;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.about-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.about-text {
  line-height: 1.8;
  color: #555;
  margin-bottom: 16px;
  font-size: 15px;
}

.about-text:last-child {
  margin-bottom: 0;
}
</style>