<template>
  <v-card class="my-12" width="200">
    <router-link :to="'/character/' + String(character.id)">
      <v-img class="img" height="150" :src="character.image" />
    </router-link>
    <v-card-title class="title"> {{ character.name }}</v-card-title>

    <v-card-text> {{ character.status }} </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text> {{ character.species }} </v-card-text>
  </v-card>
</template>

<style scoped>
.title {
  word-break: normal;
  word-wrap: normal;
  overflow-wrap: normal;
}

.img:hover {
  cursor: pointer;
}
</style>

<script>
const axios = require("axios").default;

export default {
  props: ["link"],

  data: () => ({
    character: "",
  }),

  mounted() {
    axios.get(this.link).then((response) => {
      this.character = response.data;
    });
  },
};
</script>
