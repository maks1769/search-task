<template>
  <v-container>
    <NuxtLink to="/">
      Return to home page
    </NuxtLink>
    <SearchSelect/>
    <div class="text">
      Stats for <strong>{{ playerName }}</strong>:
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laborum.</p>
    </div>
  </v-container>
</template>

<script>
import SearchSelect from '../../components/search-select';

export default {
  name: 'PlayerItem',

  components: {
    SearchSelect,
  },

  data: () => ({
    playerName: '',
  }),

  mounted() {
    console.log(this.$route)
    this.playerName = this.$route.params.id;
  }
};
</script>

<style lang="scss"
>

.text,
.link {
  margin-top: 2rem;
}

</style>
