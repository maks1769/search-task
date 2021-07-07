<template>
  <v-container>
    <SearchSelect/>
    <v-simple-table v-if="players.length">
      <thead>
        <tr>
          <th>№</th>
          <th>Имя пользователя</th>
          <th>Бои</th>
          <th>Победы</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(player, index) in players">
          <tr :key="`player-${player.spa_id}`"
              class=""
          >
            <td>{{ index +1 }}</td>
            <td>
              <NuxtLink :to="{ path: `/players/${player.name}` }">
                {{ player.name }}
              </NuxtLink>
            </td>
            <td>{{ player.statistics.pvp ? player.statistics.pvp.battles_count : '-' }}</td>
            <td>{{ player.statistics.pvp ? player.statistics.pvp.wins : '-' }}</td>
          </tr>
        </template>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
import SearchSelect from '../../components/search-select';

export default {
  name: 'TablePage',

  components: {
    SearchSelect,
  },

  computed: {
    ...mapState('list', ['players']),
  },
};
</script>

<style lang="scss"
>
table {
  text-align: left;
}
</style>
