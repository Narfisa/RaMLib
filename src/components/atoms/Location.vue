<template>
  <v-card class="my-12 location-root" width="200" v-if="location">
    <router-link class="link" :to="'/location/' + String(location.id)">
      <v-card-title class="title"> {{ location.name }}</v-card-title>

      <v-card-text> {{ location.type }} </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text> {{ location.dimension }} </v-card-text>
    </router-link>
  </v-card>
</template>

<script>
export default {
  props: ["location"],
};
</script>

<style scoped>
.title {
  word-break: normal;
  word-wrap: normal;
  overflow-wrap: normal;
}

.location-root:hover {
  cursor: pointer;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
