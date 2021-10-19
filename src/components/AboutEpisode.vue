<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="6">
        <v-img src="https://cdnimg.rg.ru/i/gallery/2cff9087/1_cbc57cab.jpg" />
      </v-col>
      <v-col cols="5" class="mx-6 mt-1">
        <p class="name">{{ episode.name }}</p>
        <p class="mt-6 text">{{ text }}</p>

        <v-divider class="mt-8"></v-divider>
        <p class="mt-4 airdate">{{ episode.air_date }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/episode/";

export default {
  data: () => ({
    episode: {},
    text: "",
  }),

  mounted() {
    axios.get(URL + this.$route.params.id).then((response) => {
      this.episode = response.data;
      let season = Number(this.episode.episode.substr(1, 2));
      let number = Number(this.episode.episode.substr(4, 2));
      this.text = `Season ${season}, episode ${number}`;
    });
  },
};
</script>

<style scoped>
.name {
  font-size: 2.5em;
}

.text {
  font-size: 1.5em;
}

.airdate {
  font-size: 1em;
}
</style>
