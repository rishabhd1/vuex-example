<template>
  <div class="main">
    <md-field>
      <label>Email</label>
      <md-input v-model="user.email"></md-input>
    </md-field>
    <md-field>
      <label>Phone</label>
      <md-input v-model="user.phone"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" @click="onSave">Save</md-button>
    <md-snackbar md-position="center" :md-active.sync="updateNotification">
      <span>Update Notification Sent Succesfully</span>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "Update",

  data() {
    return {
      updateNotification: false
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },

  methods: {
    onSave() {
      const payload = {
        email: this.user.email,
        phone: this.user.phone
      };
      this.$store.dispatch("changeUserInfo", payload);
      this.updateNotification = true;
    }
  }
};
</script>

<style></style>
