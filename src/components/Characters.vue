<template>
  <div class="episodes-root" v-if="characters">
    <v-row>
      <v-col cols="8">
        <v-text-field v-model="search" label="Search" />
      </v-col>
      <v-col cols="4">
        <v-select v-model="select" :items="status" label="Status"></v-select>
      </v-col>
    </v-row>
    <v-sheet class="m-auto p-auto">
      <v-slide-group show-arrows class="grey lighten-3">
        <v-slide-item v-for="character in filteredList" :key="character.id">
          <character class="item" :link="character.url" />
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
import Character from "./atoms/Character.vue";
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/character";

export default {
  components: { Character },
  data: () => ({
    characters: [],
    search: "",
    status: ["Alive", "Dead", "unknown"],
    select: "",
  }),

  mounted() {
    this.getAllCharacters();
  },

  computed: {
    filteredList() {
      let filterArr = this.characters;
      if (this.select != "") {
        filterArr = filterArr.filter((item) => {
          return item.status.includes(this.select);
        });
      }
      return filterArr.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    async getAllCharacters() {
      let next = URL;
      while (next) {
        await axios.get(next).then((response) => {
          next = response.data.info.next;
          this.characters.push(...response.data.results);
        });
      }
      console.log(this.characters);
    },
  },
};
</script>
