export const ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get BLOOD_TYPES() {
    return `${this.BASE}/blood_types`;
  },

  get CREDIT_CARDS() {
    return `${this.BASE}/credit_cards`;
  },

  get BEERS() {
    return `${this.BASE}/beers`;
  },

  get BANKS() {
    return `${this.BASE}/banks`;
  },
};
