import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import {
  authApi,
  type User,
  type LoginParams,
  type RegisterParams,
} from "@/api/auth";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (params: LoginParams) => Promise<void>;
  register: (params: RegisterParams) => Promise<void>;
  logout: () => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    immer((set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (params) => {
        set((state) => {
          state.isLoading = true;
          state.error = null;
        });
        try {
          const response = await authApi.login(params);
          set((state) => {
            state.user = response.user;
            state.token = response.token;
            state.isAuthenticated = true;
            state.isLoading = false;
          });
          // 持久化 Token 和 User
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
        } catch (error: any) {
          set((state) => {
            state.error =
              error.response?.data?.message ||
              "登录失败，请检查您的电子邮件和密码";
            state.isLoading = false;
          });
          throw error;
        }
      },

      register: async (params) => {
        set((state) => {
          state.isLoading = true;
          state.error = null;
        });
        try {
          await authApi.register(params);
          set((state) => {
            state.isLoading = false;
          });
        } catch (error: any) {
          set((state) => {
            state.error = error.response?.data?.message || "注册失败";
            state.isLoading = false;
          });
          throw error;
        }
      },

      logout: () => {
        set((state) => {
          state.user = null;
          state.token = null;
          state.isAuthenticated = false;
          state.error = null;
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      },

      setError: (error) => {
        set((state) => {
          state.error = error;
        });
      },
    })),
    {
      name: "auth-storage", // 存储在 localStorage 中的 key
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }), // 只持久化这些字段
    },
  ),
);
