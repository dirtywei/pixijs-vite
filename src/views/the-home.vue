<template>
  <div class="sl-wrapper">
    <webgl-content></webgl-content>
    <div class="sl-frame">
      <Frame-content></Frame-content>
    </div>
  </div>
</template>
<script setup>
import FrameContent from '@/components/frame-content.vue'
import webglContent from '@/components/webgl-content.vue'
</script>

<style scoped>
.sl-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.sl-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
