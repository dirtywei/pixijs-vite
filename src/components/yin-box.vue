<template>
  <div class="yin-box">
    <img class="text" :src="yinImg" alt="" />
  </div>
</template>

<script setup>
import yinImg from '@/assets/img/yin/text.png'
</script>

<style scoped>
.yin-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 3.422rem;
  width: 8rem;
  overflow: hidden;
  animation: frameHeight 1.6s;
  pointer-events: none;
}
.text {
  width: 8rem;
}
@keyframes frameHeight {
  0% {
    height: 0;
  }
  100% {
    height: 3.422rem;
  }
}
</style>
