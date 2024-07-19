<template>
  <div class="main-box">
    <div class="flex-box">
      <img :src="logo" class="logo" alt="" />
      <div class="btn-wrap">
        <div class="user-info">
          <span> 这是我的名字<span @click="logout">【退出】</span></span>
          <span class="avatar btn"></span>
          <span class="question btn"></span>
          <span class="music btn"></span>
        </div>
      </div>
    </div>
    <div class="btn-video"></div>
    <div class="btn-join" @click="handleJoin">
      <div class="click-area"></div>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/img/main/logo.png'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const logout = () => {
  console.log('logout')
}
const handleJoin = () => {
  userStore.setStep('yin')
  window.webglGame.initYin()
}
</script>

<style scoped lang="less">
.main-box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .flex-box {
    max-width: 15rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    position: relative;

    width: 4.17rem;
  }
  .btn-wrap {
    position: relative;
    top: -0.1rem;
    right: 0.5rem;
    text-align: right;
    color: #fff;
    font-size: 0.22rem;
    .user-info {
      display: flex;
      align-items: center;
    }
    .avatar {
      background: url(../assets/img/main/avatar.png) center/100% no-repeat;
    }
    .question {
      background: url(../assets/img/main/question.png) center/100% no-repeat;
      display: block;
    }
    .btn {
      margin-left: 0.12rem;
      width: 0.71rem;
      height: 0.7rem;
    }
    .music {
      background: url(../assets/img/main/music-off.png) top/100% no-repeat;
      &.on {
        background: url(../assets/img/main/music-on.png) top/100% no-repeat;
      }
    }
  }
  .btn-video {
    background: url(../assets/img/main/btn-video.png) center/100% no-repeat;
    width: 1.03rem;
    height: 1.03rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn-join {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.5rem;
    background: url(../assets/img/main/join.png) center/100% no-repeat;
    width: 8.03rem;
    height: 4.48rem;
    .click-area {
      position: absolute;
      width: 3.6rem;
      height: 1rem;
      top: 2.1rem;
      left: 2.2rem;
    }
  }
}
</style>
