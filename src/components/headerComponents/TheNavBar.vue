<template>
  <nav class="nav">
    <ul class="navbar-list">
      <li v-for="link in links" :key="link.title" class="navbar-item">
        <a href="#" class="navbar-link">
          {{link.title}}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: this.$store.getters.getLinks,
    }
  }
}
</script>

<style>
.navbar-item a {
  color: #383838;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
