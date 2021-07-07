export const state = () => ({
  players: [],
  playersAutocomplete: [],
});

export const mutations = {
  setPlayersList(state, payload) {
    state.players = payload;
  },

  setPlayersAutocompleteList(state, payload) {
    state.playersAutocomplete = payload;
  },
};

export const actions = {
  async fetchPlayers({commit}, params) {
    try {
      const data = await this.$axios.$get(`https://vortex.worldofwarships.ru/api/accounts/search/${params}`);

      commit('setPlayersList', data.data);
    } catch (err) {
      console.error(err);
    }
  },

  async fetchAutocompletePlayers({commit}, params) {
    try {
      const data = await this.$axios.$get(`https://vortex.worldofwarships.ru/api/accounts/search/autocomplete/${params}`);

      commit('setPlayersAutocompleteList', data.data);
    } catch (err) {
      console.error(err);
    }
  },
};
