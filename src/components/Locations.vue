<template>
  <div class="episodes-root">
    <v-text-field v-model="search" label="Search" />
    <v-sheet class="m-auto p-auto">
      <v-slide-group show-arrows class="grey lighten-3">
        <v-slide-item v-for="location in filteredList" :key="location.id">
          <location class="item" :location="location" />
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
import Location from "./atoms/Location.vue";
const axios = require("axios").default;
const URL = "https://rickandmortyapi.com/api/location";

export default {
  components: { Location },
  data: () => ({
    locations: [],
    search: "",
  }),

  mounted() {
    this.getAllLocations();
  },

  computed: {
    filteredList() {
      return this.locations.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    async getAllLocations() {
      let next = URL;
      while (next) {
        await axios.get(next).then((response) => {
          next = response.data.info.next;
          this.locations.push(...response.data.results);
        });
      }
    },
  },
};
</script>
