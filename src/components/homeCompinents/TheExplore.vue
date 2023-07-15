<template>
  <section class="explore">
    <div class="_container">
      <div class="explore__title">
        <h2>{{ this.$store.getters.getTitle }}</h2>
      </div>
      <div class="explore__card-box">
        <router-link v-for="exploreCard in this.$store.getters.getExploreCard" :key="exploreCard.title"
                     :to="exploreCard.url">
          <exploreCard :exploreCard="exploreCard"/>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import exploreCard from '@/components/homeCompinents/exploreCard.vue'

export default {
  components: {exploreCard}
}
</script>

<style scoped>
.explore h2 {
  color: #383838;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
}

.explore__card-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}
</style>
