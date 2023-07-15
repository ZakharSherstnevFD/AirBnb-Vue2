<template>
  <div class="wrapper">
    <theHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import theHeader from '@/components/headerComponents/TheHeader.vue'
export default {
  components:{theHeader},
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
