import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const progress = ref(0)
  const step = ref('loading')

  const setStep = (value) => {
    step.value = value
  }

  return { progress, step, setStep }
})
