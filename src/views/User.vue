<template>
  <div class="main">
    <h3>Email: {{ user.email }}</h3>
    <h3>Phone: {{ user.phone }}</h3>
    <div class="user-info">
      <md-card>
        <div>
          <md-card-header>
            <div class="md-title">Current Balance</div>
          </md-card-header>

          <md-card-content
            >Your Current Balance Is: {{ user.balance }}</md-card-content
          >
        </div>
        <md-card-actions>
          <md-button @click="rechargeDialog = true">Recharge</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">Pack</div>
        </md-card-header>

        <md-card-content>Active Pack: {{ user.activePack }}</md-card-content>
        <md-card-content
          >Active Channels: {{ user.activeChannels }}</md-card-content
        >
        <md-card-content
          >Active Services: {{ user.activeServices }}</md-card-content
        >
      </md-card>
    </div>
    <md-dialog-prompt
      :md-active.sync="rechargeDialog"
      v-model="rechargeAmount"
      md-title="Recharge Amount"
      md-input-placeholder="Amount"
      md-confirm-text="OK"
      @md-confirm="rechargeBalance(rechargeAmount)"
    />
  </div>
</template>

<script>
export default {
  name: "User",

  data() {
    return {
      pack: undefined,
      rechargeDialog: false,
      rechargeAmount: undefined
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },

  methods: {
    rechargeBalance: function(rechargeAmount) {
      this.$store.dispatch("rechargeBalance", rechargeAmount);
    }
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.user-info .md-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-info .md-card {
  width: 350px;
}
</style>
