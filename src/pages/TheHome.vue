<template>
  <div class="wrapper-content wrapper-content--fixed">
    <explore/>
    <div class="main-fast__view">
      <div v-for="fastView in this.$store.getters.getFastView" :key="fastView.title" class="box__fast__view">
        <fastView :fastView="fastView"/>
      </div>
    </div>
  </div>
</template>
<script>
import explore from '@/components/homeCompinents/TheExplore.vue'
import fastView from '@/components/homeCompinents/TheFastView.vue'

export default {
  components: {explore, fastView}
}
</script>
