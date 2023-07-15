<template>
  <div class="explore__card">
    <div class="explore__card__img">
      <img :src="exploreCard.img" alt="">
    </div>
    <div class="explore__card__name">
      <p>{{ exploreCard.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    exploreCard: {
      type: Object,
      require: true,
    }
  }
}
</script>
<style scoped>
.explore__card {
  display: flex;
  align-items: center;
  width: 310px;
  height: 72px;
  flex-shrink: 0;
  border: 2px solid #DCDFE6;
  border-radius: 5px;
}
.explore__card__name p {
  color: #383838;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 25px;
}
</style>
