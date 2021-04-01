<template>
   <div id="wrapper">
   <DocumentationHeader/>
   <div class="contents">
        <div class="column">
            <DocumentationSidebar/>
            <div class="main">
                <div class="wysiwyg">
                        <div class="c-chapter-docs__head">
                            <h1 class="c-ttl c-ttl--docs">{{this.$page.title}}</h1>
                        </div>
                    <Content/>
                </div>
            </div>
            <!-- [/main] -->
        </div>
        <!-- [/column] -->
    </div>
    <DocumentationFooter/>
  </div>
</template>

<script>
import DocumentationHeader from '@theme/components/DocumentationHeader.vue'
import DocumentationFooter from '@theme/components/DocumentationFooter.vue'
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'
import Header from '@parent-theme/components/Navbar.vue'

export default {
  name: 'Layout',
   data () {
    return {
      isSidebarOpen: false
    }
  },
  components: {
    DocumentationHeader,
    DocumentationFooter,
    DocumentationSidebar,
    Header,
  },
}
</script>



<style>

</style>
