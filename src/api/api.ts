import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export const api = axios.create({
  baseURL: "http://localhost:8787/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json", // 设置请求头
  },
});

// 请求拦截器，在请求发送前添加 Authorization 头
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
