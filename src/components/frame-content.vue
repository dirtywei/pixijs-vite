<template>
  <div class="frame-content">
    <loading-box v-show="userStore.step === 'loading'"></loading-box>
    <main-box v-show="userStore.step === 'main'"></main-box>
    <yin-box v-show="userStore.step === 'yin'"></yin-box>
  </div>
</template>

<script setup>
import LoadingBox from '@/components/loading-box.vue'
import MainBox from '@/components/main-box.vue'
import YinBox from '@/components/yin-box.vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
</script>

<style scoped lang="less">
.frame-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
