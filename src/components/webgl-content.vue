<template>
  <div class="sl-webgl" ref="webglRef"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { webglGame } from '@/utils/new'

const webglRef = ref()

onMounted(() => {
  window.webglGame = new webglGame({
    container: webglRef.value
  })
})
</script>

<style scoped>
.sl-webgl {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
