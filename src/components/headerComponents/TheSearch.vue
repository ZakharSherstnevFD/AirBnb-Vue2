<template>
  <div style="position:relative;" class="search__header">
    <input :placeholder="this.$store.getters.getSearchPlaceholder" type="text">
    <img src="../../assets/img/search.svg" alt="">
  </div>
</template>


<style scoped>
input {
  width: 392px;
  height: 48px;
  padding-left: 40px;
  color: #383838;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 5px;
}
.search__header img {
  position: absolute;
  left: 10px;
  top: 25%;
}
</style>
