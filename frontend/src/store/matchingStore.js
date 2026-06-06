import create from 'zustand'
import api from '../services/api'

const useMatchingStore = create((set) => ({
  matches: [],
  isLoading: false,
  error: null,

  findMatches: async (transportId) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.post('/matching/find-matches', { transport_id: transportId })
      set({ matches: response.data })
      return response.data
    } catch (error) {
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  proposeMatch: async (transportId, offerId) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.post('/matching/propose-match', {
        transport_id: transportId,
        offer_id: offerId,
      })
      return response.data
    } catch (error) {
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  acceptMatch: async (matchId) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.post('/matching/accept-match', { match_id: matchId })
      return response.data
    } catch (error) {
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },
}))

export { useMatchingStore }
