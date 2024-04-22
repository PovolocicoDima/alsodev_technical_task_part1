import { defineStore } from 'pinia'
import { useAllPartnersStore } from '@/store/useAllPartners'

export const usePartnerStore = defineStore({
  id: 'partner',
  state: () => ({
    menu: {},
    data: {},
  }),
  actions: {
    async fetchPartner(partnerName) {
      try {
        const response = await fetch(`/db/${partnerName}.json`)
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
      this.menu[partnerName] = partnerData
    },
    getPartnersData(name) {
      const allPartnersStore = useAllPartnersStore()
      const partners = allPartnersStore.partners
      return partners.filter((partner) => partner.name === name)[0]
    },
  },
})
