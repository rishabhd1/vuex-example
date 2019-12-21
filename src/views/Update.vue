<template>
  <div class="main">
    <md-field>
      <label>Type here!</label>
      <md-input v-model="type"></md-input>
      <span class="md-helper-text">Helper text</span>
    </md-field>
    <md-field>
      <label>Type here!</label>
      <md-input v-model="type"></md-input>
      <span class="md-helper-text">Helper text</span>
    </md-field>
    <md-button class="md-raised md-primary">Save</md-button>
  </div>
</template>

<script>
export default {
  name: "Update"
};
</script>

<style></style>
