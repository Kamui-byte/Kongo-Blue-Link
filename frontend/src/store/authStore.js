import create from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../services/api'

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true })
        try {
          const response = await api.post('/auth/login', { email, password })
          const { access_token } = response.data
          localStorage.setItem('token', access_token)
          api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
          set({ token: access_token, isAuthenticated: true })
          return response.data
        } catch (error) {
          throw error
        } finally {
          set({ isLoading: false })
        }
      },

      register: async (userData) => {
        set({ isLoading: true })
        try {
          const response = await api.post('/auth/register', userData)
          return response.data
        } catch (error) {
          throw error
        } finally {
          set({ isLoading: false })
        }
      },

      logout: () => {
        localStorage.removeItem('token')
        delete api.defaults.headers.common['Authorization']
        set({ user: null, token: null, isAuthenticated: false })
      },

      checkAuth: () => {
        const token = localStorage.getItem('token')
        if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`
          set({ token, isAuthenticated: true })
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)

export { useAuthStore }
