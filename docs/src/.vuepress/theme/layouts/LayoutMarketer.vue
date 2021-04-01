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
import DocumentationHeader from '@theme/components/DocumentationHeader.vue'
import DocumentationFooter from '@theme/components/DocumentationFooter.vue'
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'

export default {
  name: 'LayoutMain',
  components: {
    DocumentationHeader,
    DocumentationFooter,
    DocumentationSidebar,
    Header,
    Footer,
  },
}
</script>



<style>
</style>
