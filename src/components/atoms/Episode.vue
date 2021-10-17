<template>
  <v-card class="my-12" max-width="300">
    <v-img
      height="150"
      width="220"
      src="https://cdnimg.rg.ru/i/gallery/2cff9087/1_cbc57cab.jpg"
    ></v-img>

    <v-card-title> {{ title }}</v-card-title>

    <v-card-text> {{ number }} </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text> {{ published }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    number: Number,
    published: Date,
  },

  data: () => ({ drawer: null }),
};
</script>
