import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/type/auth'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user = ref<User>(null)
  const isAuth = computed(() => !!token.value)

  const setUser = (User): void => {
    
  }
})
