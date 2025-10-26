import { useUserStore } from "@/store/index";
const userStore = useUserStore();

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
    //   console.log(config);
      config.headers.Authorization = userStore.token;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  return instance;
}
