<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'


export default {
  components: { Footer, Header },
  name: "app",
};
</script>

<style lang="scss">
@import './scss/main.scss';

.is-active{
  border: 3px solid #23d160;
}

</style>
