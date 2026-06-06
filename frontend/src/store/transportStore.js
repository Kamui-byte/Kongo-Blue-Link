import create from 'zustand'
import api from '../services/api'

const useTransportStore = create((set) => ({
  transports: [],
  currentTransport: null,
  isLoading: false,
  error: null,

  fetchTransports: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.get('/transports/')
      set({ transports: response.data })
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  createTransport: async (transportData) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.post('/transports/', transportData)
      set((state) => ({
        transports: [...state.transports, response.data],
      }))
      return response.data
    } catch (error) {
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  fetchTransportById: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.get(`/transports/${id}`)
      set({ currentTransport: response.data })
      return response.data
    } catch (error) {
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },
}))

export { useTransportStore }
