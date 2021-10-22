<template>
  <div class="episodes-root">
    <v-row>
      <v-col cols="8">
        <v-text-field v-model="search" label="Search" />
      </v-col>
      <v-col cols="4">
        <v-select v-model="select" :items="seasons" label="Seasons"></v-select>
      </v-col>
    </v-row>
    <v-sheet class="m-auto p-auto">
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
  margin-right: 20px;
}

.episodes-root {
  padding: 30px;
}
</style>

<script>
import Episode from "./atoms/Episode.vue";
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/episode";

export default {
  components: { Episode },
  data: () => ({
    episodes: [],
    search: "",
    seasons: ["Season 1", "Season 2", "Season 3", "Season 4"],
    select: "",
  }),

  mounted() {
    this.getAllEpisodes();
  },

  computed: {
    filteredList() {
      let filterArr = this.episodes;
      if (this.select != "") {
        filterArr = filterArr.filter((item) => {
          let season = this.seasons.indexOf(this.select) + 1;
          return item.episode.includes(`S0${season}`);
        });
      }
      return filterArr.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    async getAllEpisodes() {
      let next = URL;
      while (next) {
        await axios.get(next).then((response) => {
          next = response.data.info.next;
          this.episodes.push(...response.data.results);
        });
      }
    },
  },
};
</script>
