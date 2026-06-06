import { useCallback } from 'react'
import { useAuthStore } from '../store/authStore'

const useAuth = () => {
  const { user, isAuthenticated, token, login, logout, register } = useAuthStore()

  const handleLogin = useCallback(
    async (email, password) => {
      try {
        await login(email, password)
        return true
      } catch (error) {
        console.error('Login error:', error)
        return false
      }
    },
    [login]
  )

  const handleRegister = useCallback(
    async (userData) => {
      try {
        await register(userData)
        return true
      } catch (error) {
        console.error('Register error:', error)
        return false
      }
    },
    [register]
  )

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  return {
    user,
    isAuthenticated,
    token,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
  }
}

export { useAuth }
