<template>
  <div class="wrapper">
    <theHeader />
    <router-view></router-view>
    <theFooter/>
  </div>
</template>

<script>
import theHeader from '@/components/headerComponents/TheHeader.vue'
import theFooter from '@/components/footerComponents/TheFooter.vue'
export default {
  components:{theHeader,theFooter},
  data() {
    return {};
  },
};
</script>

<style>
.router-link-exact-active {
  color: #5247e7;
}
</style>
