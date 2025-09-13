import axios from 'axios';
import { LoginFormData, SignupFormData, User } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: async (data: SignupFormData): Promise<{ user: User; token: string; message: string }> => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  login: async (data: LoginFormData): Promise<{ user: User; token: string; message: string }> => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  logout: async (): Promise<{ message: string }> => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  getProfile: async (): Promise<{ user: User }> => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
};

export const productsAPI = {
  getProducts: async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  },
};