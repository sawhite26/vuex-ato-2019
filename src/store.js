import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    games: []
  },

  getters: {},

  mutations: {
    addGame(state, game) {
      state.games.push(game);
    },
    setGames(state, games) {
      state.games = games;
    },
    removeGame(game) {
      this.$store.dispatch("removeGame", game);
    }
  },

  actions: {
    addGame(context, game) {
      if (typeof game !== "object" && game !== null) return;
      context.commit("addGame", game);
    },
    removeGame({ commit, state }, game) {
      const games = [...state.games];
      const storedGame = games.find(g => g.title === game.title);
      if (!storedGame) return;

      games.splice(games.indexOf(storedGame), 1);
      commit("setGames", games);
    }
  }
});

export default store;
