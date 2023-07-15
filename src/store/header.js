export default {
  state:{
    logo: require('@/assets/img/logo.png'),
    searchPlaceholder: 'Try “Miami”',
    links: [
      {
        title: "Become a host",
      },
      {
        title: "Help",
      },
      {
        title: "Sign Up",
      },
      {
        title: "Log In",
      },
    ],
  },
  mutations:{},
  actions:{},
  getters: {
    getLogo(state) {
      return state.logo
    },
    getSearchPlaceholder(state) {
      return state.searchPlaceholder
    },
    getLinks(state) {
      return state.links
    }
  }
}
