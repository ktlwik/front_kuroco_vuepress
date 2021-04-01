<template>
  <div class="wrapper">
    <Header/>
    <Content/>
    <Footer/>
  </div>

</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  name: 'LayoutMain',
  components: {
    Header,
    Footer,
  },
}
</script>



<style>
</style>
