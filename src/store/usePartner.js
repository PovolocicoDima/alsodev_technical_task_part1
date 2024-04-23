import { defineStore } from 'pinia'

export const usePartnerStore = defineStore({
  id: 'partner',
  state: () => ({
    menu: {},
    info: {},
    partnerName: '',
  }),
  getters: {
    getPartnerInfo: (state) => state.info,
  },
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
      this.partnerName = partnerName
      this.menu[partnerName] = partnerData
    },
    setInfo(info) {
      this.info = info
    },
    sortAscending() {
      this.menu[this.partnerName] = this.menu[this.partnerName].sort(
        (a, b) => a.price < b.price
      )
    },
    sortDescending() {
      this.menu[this.partnerName] = this.menu[this.partnerName].sort(
        (a, b) => a.price > b.price
      )
    },
  },
})
