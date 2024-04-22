import { defineStore } from 'pinia'

export const useAllPartnersStore = defineStore({
  id: 'partners',
  state: () => ({
    partners: [],
  }),
  actions: {
    async fetchPartners() {
      try {
        const response = await fetch('/db/partners.json')
        if (!response.ok) {
          throw new Error('Failed to fetch partners')
        }
        const partnersData = await response.json()
        this.partners = partnersData
      } catch (error) {
        console.error('Error fetching partners:', error)
      }
    },
    setPartners(partners) {
      this.partners = partners
    },
  },
})
