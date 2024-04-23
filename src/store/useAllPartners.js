import { defineStore } from 'pinia'

export const useAllPartnersStore = defineStore({
  id: 'partners',
  state: () => ({
    partners: [],
    db: {},
    productFoundList: [],
    productFound: false,
  }),
  getters: {
    getProductFoundStatus: (state) => state.productFound,
    getProductFoundList: (state) => state.productFoundList,
  },
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
    async fetchDB() {
      try {
        const response = await fetch('/db/db.json')
        if (!response.ok) {
          throw new Error('Failed to fetch partners')
        }
        const dbData = await response.json()
        this.db = { ...dbData.db }
      } catch (error) {
        console.error('Error fetching partners:', error)
      }
    },
    findSome(queryString) {
      queryString = queryString.toLowerCase()
      const foundPartners = this.db.partners.filter((partner) => {
        const partnerName = partner.name.toLowerCase()
        return partnerName.includes(queryString)
      })
      const existedPartners = [
        'food-band',
        'gusi-lebedi',
        'palki-skalki',
        'pizza-burger',
        'pizza-plus',
        'tanuki',
      ]
      const foundDishesNames = existedPartners.map((partner) => {
        return this.db[partner].filter((dish) => {
          const dishName = dish.name.toLowerCase()
          return dishName.includes(queryString)
        })
      })

      const foundDishesDescription = existedPartners.map((partner) => {
        return this.db[partner].filter((dish) => {
          const dishName = dish.description.toLowerCase()
          return dishName.includes(queryString)
        })
      })

      if (foundDishesNames.length || foundDishesDescription.length) {
        this.productFound = true
        this.productFoundList = foundDishesNames.concat(foundDishesDescription)
      }

      this.partners = foundPartners
    },
    setPartners(partners) {
      this.partners = partners
    },
    disableProductMode() {
      this.productFound = false
    },
  },
})
