import { defineStore } from 'pinia'

export const usePartnerStore = defineStore({
  id: 'partner',
  state: () => ({
    partners: {},
  }),
  actions: {
    async fetchPartner(partnerName) {
      try {
        const response = await fetch(`/api/partners/${partnerName}`)
        if (!response.ok) {
          throw new Error('Failed to fetch partner')
        }
        const partnerData = await response.json()
        this.setPartner(partnerName, partnerData)
      } catch (error) {
        console.error(error)
      }
    },
    setPartner(partnerName, partnerData) {
      this.partners[partnerName] = partnerData
    },
  },
})
