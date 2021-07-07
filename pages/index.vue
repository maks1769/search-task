<template>
  <v-container class="p-5">
    <TablePage/>
  </v-container>
</template>

<script>
import TablePage from "../pages/players";

export default {
  name: 'Homepage',

  components: {
    TablePage,
  },

};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
