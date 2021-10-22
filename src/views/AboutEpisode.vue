<template>
  <div class="my-10 root">
    <div class="about">
      <div class="img-div">
        <img src="https://cdnimg.rg.ru/i/gallery/2cff9087/1_cbc57cab.jpg" />
      </div>
      <div class="text-div">
        <p class="name">{{ episode.name }}</p>
        <p class="mt-6 text">{{ text }}</p>

        <v-divider class="divider"></v-divider>
        <p class="mt-4 airdate">{{ episode.air_date }}</p>
      </div>
    </div>

    <div>
      <p class="characters">Characters in the episode:</p>
      <v-sheet>
        <v-slide-group show-arrows class="grey lighten-3">
          <v-slide-item
            v-for="character in episode.characters"
            :key="character"
          >
            <character class="mx-2" :link="character" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import Character from "../components/atoms/Character.vue";
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/episode/";

export default {
  components: { Character },

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
.characters {
  font-size: 2em;
  text-align: center;
  margin-top: 5%;
}

.about {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.text-div {
  margin-left: 5%;
}

.name {
  font-size: 2.5em;
}

.text {
  font-size: 1.5em;
}

.airdate {
  font-size: 1em;
}

.divider {
  margin-top: 10%;
}

.item {
  margin-right: 0.18%;
}

.root {
  padding: 30px;
}
</style>
