<template>
  <v-card class="my-12 card-root" max-width="250">
    <v-img
      height="150"
      src="https://cdnimg.rg.ru/i/gallery/2cff9087/1_cbc57cab.jpg"
    ></v-img>

    <v-card-title class="title"> {{ episode.name }}</v-card-title>

    <v-card-text> {{ text }} </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text> {{ episode.air_date }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    episode: {
      name: String,
      episode: Number,
      air_date: Date,
    },
  },

  computed: {
    text() {
      let season = Number(this.episode.episode.substr(1, 2));
      let number = Number(this.episode.episode.substr(4, 2));
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

.card-root:hover {
  cursor: pointer;
}
</style>
