import { defineStore } from 'pinia'

export const useAllPartnersStore = defineStore({
  id: 'partners',
  state: () => ({
    partners: [],
  }),
  actions: {
    async fetchPartners() {
      try {
        const response = await fetch('/api/partners')
        if (!response.ok) {
          throw new Error('Failed to fetch partners')
        }
        const partners = await response.json()
        this.setPartners(partners)
      } catch (error) {
        console.error(error)
      }
    },
    setPartners(partners) {
      this.partners = partners
    },
  },
})
