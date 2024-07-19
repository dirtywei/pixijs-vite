<template>
  <div class="loading-box">
    <div class="loading-logo"></div>
    <div class="loading-slogan"></div>
    <div class="loading-progress">
      <div class="progress">{{ userStore.progress }}%</div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
</script>

<style scoped lang="less">
.loading-box {
  position: absolute;
  top: 0;
  background: url(../assets/img/loading/bg.png) center/100% no-repeat;
  background-color: #000;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: 9;
  .loading-logo {
    position: absolute;
    left: 50%;
    margin-left: -38.75rem;
    top: 0.48rem;
    background: url(../assets/img/loading/LOGO.png) top/100% no-repeat;
    width: 5.14rem;
    height: 0.55rem;
  }
  .loading-slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -0.32rem;
    background: url(../assets/img/loading/reverse.png) top/100% no-repeat;
    width: 6.76rem;
    height: 3.02rem;
  }
  .loading-progress {
    background: url(../assets/img/loading/倒计时.png) center/100% no-repeat;
    width: 1.14rem;
    height: 1.15rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.22rem;
    color: #d2910f;
  }
}
</style>
