<template>
  <div class="main">
    <div v-for="pack in packs" :key="pack.name">
      <md-card class="md-primary">
        <md-card-header>
          <div class="md-title">{{ pack.name }}</div>
        </md-card-header>

        <md-card-content>
          Channels:
          <li v-for="channel in pack.channels" :key="channel">
            {{ channel }}
          </li>
          Price: {{ pack.price }}
        </md-card-content>

        <md-card-actions>
          <md-button @click="subscribeDialog = true">Subscribe</md-button>
        </md-card-actions>
      </md-card>
    </div>

    <md-dialog-prompt
      :md-active.sync="subscribeDialog"
      v-model="numberOfMonths"
      md-title="Enter the Number of Months"
      md-input-placeholder="Number of Months"
      md-confirm-text="OK"
      @md-confirm="confirmDialog = true"
      @md-cancel="subscribeDialog = false"
    />

    <md-dialog :md-active.sync="confirmDialog">
      <md-dialog-title>Confirm</md-dialog-title>

      <md-dialog-actions>
        <md-button class="md-primary" @click="confirmDialog = false"
          >Close</md-button
        >
        <md-button class="md-primary" @click="confirmDialog = false"
          >Save</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "Packs",

  data() {
    return {
      subscribeDialog: false,
      confirmDialog: false,
      numberOfMonths: undefined
    };
  },

  computed: {
    packs() {
      return this.$store.state.packs;
    }
  },

  methods: {}
};
</script>

<style></style>
