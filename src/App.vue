<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ title }}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text" @click="pageTitle">
              <router-link to="/">Home</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text" @click="pageTitle">
              <router-link to="/user">User</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text" @click="pageTitle">
              <router-link to="/packs">Packs</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text" @click="pageTitle">
              <router-link to="/update">Update</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      title: "Home"
    };
  },

  mounted() {
    this.pageTitle();
  },

  methods: {
    pageTitle() {
      this.title = window.location.hash.replace("#/", "");
      if (this.title.length === 0) {
        this.title = "Home";
      }
      this.title = this.title.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
