export  default {
  state: {
    fastView: [
      {
        title: 'Experiences',
        url: '/experiencesPage',
        preview: [
          {
            img: require('@/assets/img/ex1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/ex1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/ex1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/ex1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/ex1.png'),
            price: '$29 Forest therapy'
          },
        ]
      },
      {
        title: 'Homes',
        url: '/homesPage',
        preview: [
          {
            img: require('@/assets/img/home1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/home1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/home1.png'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/home1.png'),
            price: '$29 Forest therapy'
          },

        ]
      },
      {
        title: 'Popular reservations around the world',
        url: '/restaurantsPage',
        preview: [
          {
            img: require('@/assets/img/res1.svg'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/res1.svg'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/res1.svg'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/res1.svg'),
            price: '$29 Forest therapy'
          },
          {
            img: require('@/assets/img/res1.svg'),
            price: '$29 Forest therapy'
          },
        ]
      },
    ],
    title: 'Experiences'
  },
  getters: {
    getFastView(state) {
      return state.fastView
    }
  }
}
