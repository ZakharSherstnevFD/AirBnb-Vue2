export default {
  state: {
    title: 'Explore Airbnb',
    exploreCard: [
      {
        img: require('@/assets/img/exploreHome.svg'),
        title: 'Homes',
        url: '/homesPage'
      },
      {
        img: require('@/assets/img/exploreExperiens.svg'),
        title: 'Experiences',
        url: '/experiencesPage'
      },
      {
        img: require('@/assets/img/exploreRestoraunt.png'),
        title: 'Restaurants',
        url: '/restaurantsPage'
      }
    ]
  },
  getters: {
    getTitle(state) {
      return state.title
    },
    getExploreCard(state) {
      return state.exploreCard
    }
  }
}
