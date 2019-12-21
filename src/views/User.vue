<template>
  <div class="main">
    <md-card>
      <md-card-header>
        <div class="md-title">Current Balance</div>
      </md-card-header>

      <md-card-content
        >Your Current Balance Is: {{ user.balance }}</md-card-content
      >

      <md-card-actions>
        <md-button @click="rechargeDialog = true">Recharge</md-button>
      </md-card-actions>
    </md-card>
    <md-card>
      <md-card-header>
        <div class="md-title">Pack</div>
      </md-card-header>

      <md-card-content>Active Packs: {{ pack }}</md-card-content>
    </md-card>
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

<style lang="stylus" scoped></style>
