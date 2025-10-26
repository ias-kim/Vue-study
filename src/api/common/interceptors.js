import { useUserStore } from "@/store/index";


// src/api/interceptors.js
export function setInterceptors(instance) {
  instance.interceptors.request.use(async (config) => {
    // 여기서 가져오면 Pinia가 이미 준비된 뒤에 실행됨 + 순환 의존 끊김
    const { useUserStore } = await import('@/store/index')
    const userStore = useUserStore()

    if (userStore.token) {
      // 서버가 Bearer 스킴을 기대하면 아래처럼:
      config.headers.Authorization = `Bearer ${userStore.token}`
      // 만약 그냥 토큰만이면: config.headers.Authorization = userStore.token
    }
    return config
  }, (error) => Promise.reject(error))

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  )

  return instance
}