<template>
  <v-card class="my-12" width="200" v-if="episodeData">
    <router-link :to="'/episode/' + String(episodeData.id)">
      <v-img
        class="img"
        height="150"
        src="https://cdnimg.rg.ru/i/gallery/2cff9087/1_cbc57cab.jpg"
      />
    </router-link>
    <v-card-title class="title"> {{ episodeData.name }}</v-card-title>

    <v-card-text> {{ text }} </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text> {{ episodeData.air_date }} </v-card-text>
  </v-card>
</template>

<script>
const axios = require("axios").default;

export default {
  props: ["episode", "link"],
  data: () => ({
    episodeData: "",
  }),

  mounted() {
    if (this.link)
      axios.get(this.link).then((response) => {
        this.episodeData = response.data;
      });
    else {
      this.episodeData = this.episode;
    }
  },

  computed: {
    text() {
      let season = Number(this.episodeData.episode.substr(1, 2));
      let number = Number(this.episodeData.episode.substr(4, 2));
      return `Season ${season}, episode ${number}`;
    },
  },
};
</script>

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
