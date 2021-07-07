<template>
  <div class="select">
    <p class="select__label">Search player:</p>
    <div class="select__block">
      <multiselect v-model="query"
                   :options="options"
                   track-by="name"
                   class="select__item"
                   :preserveSearch="true"
                   :preselectFirst="true"
                   :customLabel="nameWithPlatform"
                   @search-change="debouncedSearchChange"
                   @select="dispatchAction($event)"
      >
        <template slot="singleLabel"
                  slot-scope="{ option }"
        >
          <span>{{ query }}</span>
        </template>
      </multiselect>
      <v-btn :disabled="!query"
             @click="handleSearch"
      >
        search
      </v-btn>
    </div>

  </div>
</template>

<script>
import { debounce } from 'throttle-debounce';
import Multiselect from 'vue-multiselect'
import {mapActions, mapState} from "vuex";

export default {
  name: "SearchSelect",

  components: {
    Multiselect,
  },

  data: () => ({
    query: '',
    options: []
  }),

  computed: {
    ...mapState('list', [
      'players',
      'playersAutocomplete',
    ]),
  },

  watch: {
    playersAutocomplete(e) {
      this.options = e
    }
  },

  methods: {
    ...mapActions('list', [
      'fetchPlayers',
      'fetchAutocompletePlayers',
    ]),

    handleSearch() {
      this.fetchPlayers(this.query);
    },

    dispatchAction(e) {
      this.$router.push({ path: `/players/${e.name}` }, () => {});
    },

    nameWithPlatform({ name }) {
      return `${name}`;
    },

    debouncedSearchChange: debounce(1000, function (val) {
      if (val.length >= 3) {
        this.query = val;
        this.fetchAutocompletePlayers(this.query);
      }
    }),
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.select__block {
  display: flex;
}

.select__item {
  width: 400px;
  margin-right: 1rem;
}

.select__label {
  margin-bottom: 1rem;
}
</style>
