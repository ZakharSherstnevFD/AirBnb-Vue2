<template>
    <div class="card">
      <img :src="card.img">

      <p>{{ card.price }}</p>
    </div>
</template>
<script>

export default {
  props: {
    card: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.card img {
  margin-bottom: 15px;
}
.card p {
  color: #383838;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>
