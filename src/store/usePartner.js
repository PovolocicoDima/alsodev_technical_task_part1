import { defineStore } from 'pinia'
import { router } from 'vue-router'

export const usePartnerStore = defineStore({
  id: 'partner',
  state: () => ({
    partners: {},
  }),
  actions: {
    async fetchPartner(partnerName) {
      const allowedPartnerNames = [
        'food-band',
        'gusi-lebedi',
        'palki-skalki',
        'pizza-burger',
        'pizza-plus',
        'tanuki',
      ]
      try {
        const response = await fetch(`/db/${partnerName}`)
        if (!response.ok) {
          throw new Error('Failed to fetch partner')
        } else if (!allowedPartnerNames.includes(partnerName)) {
          router.redirect('/404')
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
