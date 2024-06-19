import { defineStore } from 'pinia';

export default defineStore('category', {
  state: () =>
    ({
      items: [],
    }),

  actions: {
    async getMany() {
      return this.items;
    },
  },
});
