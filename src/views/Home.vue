<template>
  <div class="root">
    <p class="episodes-title">Episodes</p>
    <episodes />
  </div>
</template>

<script>
import Episodes from "../components/Episodes";

export default {
  name: "Home",

  components: {
    Episodes,
  },
};
</script>

<style scoped>
.episodes-title {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 1.5rem;
}
</style>
