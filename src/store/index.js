import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // User information
    user: {
      email: "john@doe.com",
      phone: 9923251513,
      balance: 100,
      activePack: "You don't have any pack active",
      activeChannels: "You don't have any channels active",
      activeServices: "You don't have any services active"
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
    },

    confirmSubscribe: (state, payload) => {
      state.user.balance -= payload.price;
      state.user.activePack = payload.name;
    },

    changeUserInfo: (state, payload) => {
      state.user.phone = payload.phone;
      state.user.email = payload.email;
    }
  },

  actions: {
    rechargeBalance: (context, payload) => {
      context.commit("rechargeBalance", payload);
    },

    confirmSubscribe: (context, payload) => {
      context.commit("confirmSubscribe", payload);
    },

    changeUserInfo: (context, payload) => {
      context.commit("changeUserInfo", payload);
    }
  },

  modules: {}
});
