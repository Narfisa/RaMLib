<template>
  <v-sheet>
    <v-slide-group show-arrows class="grey lighten-2">
      <v-slide-item v-for="n in 25" :key="n">
        <episode class="item" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<style scoped>
.item {
  margin-right: 1%;
}
</style>

<script>
import Episode from "./atoms/Episode.vue";
export default {
  components: { Episode },
  data: () => ({ drawer: null }),
};
</script>
