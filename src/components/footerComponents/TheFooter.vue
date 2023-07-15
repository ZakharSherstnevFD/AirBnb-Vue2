<template>
  <footer class="footer">
    <div class="_container">
      <div class="footer__content">
        <theLogo/>
        <navBar/>
      </div>
    </div>
  </footer>
</template>

<script>
import theLogo from '@/components/headerComponents/TheLogo.vue'
import theSearch from '@/components/headerComponents/TheSearch.vue'
import navBar from '@/components/headerComponents/TheNavBar.vue'

export default {
  components: {
    theLogo,
    theSearch,
    navBar
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.footer {
  margin-top: 25px;
}
.footer__content {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  border-top: 1px solid #999;
}
</style>
