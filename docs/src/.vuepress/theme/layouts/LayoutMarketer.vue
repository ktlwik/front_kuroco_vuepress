<template>
  <div class="wrapper is-marketers">
    <Header/>
    <Content/>
    <Footer/>
  </div>

</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  name: 'LayoutMarketer',
  components: {
    Header,
    Footer,
  },
}
</script>



<style>
</style>
