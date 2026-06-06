import { useCallback } from 'react'
import { useTransportStore } from '../store/transportStore'

const useTransport = () => {
  const {
    transports,
    currentTransport,
    isLoading,
    error,
    fetchTransports,
    createTransport,
    fetchTransportById,
  } = useTransportStore()

  const handleFetchTransports = useCallback(async () => {
    await fetchTransports()
  }, [fetchTransports])

  const handleCreateTransport = useCallback(
    async (transportData) => {
      try {
        await createTransport(transportData)
        return true
      } catch (error) {
        console.error('Create transport error:', error)
        return false
      }
    },
    [createTransport]
  )

  const handleFetchTransportById = useCallback(
    async (id) => {
      await fetchTransportById(id)
    },
    [fetchTransportById]
  )

  return {
    transports,
    currentTransport,
    isLoading,
    error,
    fetchTransports: handleFetchTransports,
    createTransport: handleCreateTransport,
    fetchTransportById: handleFetchTransportById,
  }
}

export { useTransport }
