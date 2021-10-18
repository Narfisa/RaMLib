<template>
  <v-sheet>
    <v-slide-group show-arrows class="grey lighten-3">
      <v-slide-item v-for="episode in episodes" :key="episode.id">
        <episode class="item" :episode="episode" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<style scoped>
.item {
  margin-right: 0.18%;
}
</style>

<script>
import Episode from "./atoms/Episode.vue";
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/";

export default {
  components: { Episode },
  data: () => ({
    episodes: [],
  }),

  mounted() {
    this.getAllEpisodes();
  },

  methods: {
    getAllEpisodes() {
      let next = URL + "episode";
      axios.get(next).then((response) => {
        this.episodes = response.data.results;
        let next = response.data.info.next;
        axios.get(next).then((response) => {
          this.episodes.push(...response.data.results);
          next = response.data.info.next;
          axios.get(next).then((response) => {
            this.episodes.push(...response.data.results);
          });
        });
      });
    },
  },
};
</script>
