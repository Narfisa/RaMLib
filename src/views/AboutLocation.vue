<template>
  <div class="my-10 root">
    <div class="about">
      <img src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg" />
      <div class="text-div">
        <p class="name">{{ location.name }}</p>
        <p class="mt-6 text">{{ location.type }}</p>

        <v-divider class="divider"></v-divider>
        <p class="mt-4 airdate">{{ location.dimension }}</p>
      </div>
    </div>

    <div>
      <p class="characters">Who lives here:</p>
      <v-sheet>
        <v-slide-group show-arrows class="grey lighten-3">
          <v-slide-item
            v-for="character in location.residents"
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
const URL = "https://rickandmortyapi.com/api/location/";

export default {
  components: { Character },

  data: () => ({
    location: {},
    text: "",
  }),

  mounted() {
    axios.get(URL + this.$route.params.id).then((response) => {
      this.location = response.data;
    });
  },
};
</script>

<style scoped>
img {
  width: 50%;
}

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
