<template>
  <header class="header">
      <div class="navbar">
        <div class="_container">
        <div class="navbar-content">
          <theLogo />
          <theSearch />
          <navBar />
        </div>
      </div>
    </div>
  </header>
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
    return {

    }
  }
}
</script>
