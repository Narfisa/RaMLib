<template>
  <div class="episodes-root">
    <v-text-field clearable v-model="search" label="Search" />
    <v-sheet>
      <v-slide-group show-arrows class="grey lighten-3">
        <v-slide-item v-for="episode in filteredList" :key="episode.id">
          <episode class="item" :episode="episode" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<style scoped>
.item {
  margin-right: 0.18%;
}

.episodes-root {
  padding: 10px;
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
    search: "",
  }),

  mounted() {
    this.getAllEpisodes();
  },

  computed: {
    filteredList() {
      return this.episodes.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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
