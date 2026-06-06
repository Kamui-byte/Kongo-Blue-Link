import { useCallback } from 'react'
import { useMatchingStore } from '../store/matchingStore'

const useMatching = () => {
  const { matches, isLoading, error, findMatches, proposeMatch, acceptMatch } =
    useMatchingStore()

  const handleFindMatches = useCallback(
    async (transportId) => {
      try {
        await findMatches(transportId)
        return true
      } catch (error) {
        console.error('Find matches error:', error)
        return false
      }
    },
    [findMatches]
  )

  const handleProposeMatch = useCallback(
    async (transportId, offerId) => {
      try {
        await proposeMatch(transportId, offerId)
        return true
      } catch (error) {
        console.error('Propose match error:', error)
        return false
      }
    },
    [proposeMatch]
  )

  const handleAcceptMatch = useCallback(
    async (matchId) => {
      try {
        await acceptMatch(matchId)
        return true
      } catch (error) {
        console.error('Accept match error:', error)
        return false
      }
    },
    [acceptMatch]
  )

  return {
    matches,
    isLoading,
    error,
    findMatches: handleFindMatches,
    proposeMatch: handleProposeMatch,
    acceptMatch: handleAcceptMatch,
  }
}

export { useMatching }
