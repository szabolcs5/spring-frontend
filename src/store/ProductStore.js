import { defineStore } from 'pinia';
import { getItems } from '../service/ItemService';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    cart: [],
  }),
  actions: {
    async getProducts() {
      const response = await getItems();
      this.products = response.data;
    },
  },
});
