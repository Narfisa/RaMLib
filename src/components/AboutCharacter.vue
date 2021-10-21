<template>
  <div class="my-10 root" v-if="character">
    <div class="about">
      <div class="img-div">
        <img :src="character.image" />
      </div>
      <div class="text-div">
        <p class="name">{{ character.name }}</p>
        <p class="mt-6 text">{{ character.status }}</p>
        <p class="mt-4 airdate">{{ character.species }}</p>
        <p class="mt-4 gender">Gender: {{ character.gender }}</p>
      </div>
    </div>

    <div>
      <p class="episodes">Episodes with the character:</p>
      <v-sheet>
        <v-slide-group show-arrows class="grey lighten-3">
          <v-slide-item v-for="episode in character.episode" :key="episode">
            <episode class="mx-2" :link="episode" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import Episode from "./atoms/Episode.vue";
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/character/";

export default {
  components: { Episode },

  data: () => ({
    character: "",
    text: "",
  }),

  mounted() {
    axios.get(URL + this.$route.params.id).then((response) => {
      this.character = response.data;
    });
  },
};
</script>

<style scoped>
.episodes {
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
