import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // User information
    user: {
      balance: 100
    },

    // Available Packs for Subscription
    packs: [
      {
        name: "Silver Pack",
        price: 50,
        channels: ["Zee", "Sony", "Star Plus"]
      },
      {
        name: "Gold Pack",
        price: 100,
        channels: ["Zee", "Sony", "Star Plus", "Discovery", "NatGeo"]
      }
    ],

    // Available Channels for Subscription
    channels: [
      { name: "Zee", price: "10" },
      { name: "Sony", price: "15" },
      { name: "Star Plus", price: "20" },
      { name: "Discovery", price: "10" },
      { name: "NatGeo", price: "20" }
    ],

    // Available Services for Subscription
    services: [
      { name: "LearnEnglish", price: "200" },
      { name: "LearnCooking", price: "100" }
    ]
  },
  mutations: {
    rechargeBalance: (state, payload) => {
      state.user.balance += parseInt(payload, 10);
    }
  },
  actions: {
    rechargeBalance: (context, payload) => {
      context.commit("rechargeBalance", payload);
    }
  },
  modules: {}
});
