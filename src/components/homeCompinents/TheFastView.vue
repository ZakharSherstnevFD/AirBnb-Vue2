<template>
  <div class="_container">
    <div class="fast__view__title">
      <h2>{{ fastView.title }}</h2>
      <router-link :to="fastView.url">
        <p>See all ></p>
      </router-link>
    </div>
    <div class="fast__view__card">
      <router-link v-for="(card, index) in fastView.preview" :key="index" to="/card">
        <card :card="card"/>
      </router-link>
    </div>
  </div>
</template>
<script>
import card from '@/components/homeCompinents/TheFastViewCard.vue'

export default {
  components: {card},
  props: {
    fastView: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.fast__view__title h2 {
  color: #383838;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 25px;
  margin-top: 70px;
}

.fast__view__card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}

.fast__view__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
