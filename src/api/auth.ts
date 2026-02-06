import { api } from "./api";

// 定义用户类型，参考后端 schema 定义
export interface User {
  id: number;
  username: string;
  email: string;
  createTime: string;
  updateTime: string;
}

// 登录响应类型
export interface LoginResponse {
  message?: string;
  token: string;
  user: User;
}

// 注册请求参数
export interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

// 登录请求参数
export interface LoginParams {
  email: string;
  password: string;
}

// 更新用户请求参数
export interface UpdateUserParams {
  username?: string;
  email?: string;
  password?: string;
}

// 注册
export const register = async (params: RegisterParams) => {
  const response = await api.post<User>("/auth/register", params);
  return response.data;
};

// 登录
export const login = async (params: LoginParams) => {
  const response = await api.post<LoginResponse>("/auth/login", params);
  return response.data;
};

// 根据 ID 获取用户
export const getUserById = async (id: number) => {
  const response = await api.get<User>(`/auth/id/${id}`);
  return response.data;
};

// 根据 Email 获取用户
export const getUserByEmail = async (email: string) => {
  const response = await api.get<User>(`/auth/email/${email}`);
  return response.data;
};

// 根据 Username 获取用户
export const getUserByUsername = async (username: string) => {
  const response = await api.get<User>(`/auth/username/${username}`);
  return response.data;
};

// 更新用户信息
export const updateUser = async (id: number, params: UpdateUserParams) => {
  const response = await api.put<User>(`/auth/id/${id}`, params);
  return response.data;
};

export const authApi = {
  register,
  login,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  updateUser,
};
