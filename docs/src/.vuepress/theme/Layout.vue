<template>
   <div id="global-layout">
   	<DocumentationHeader/>
  	<Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    <Content/>
    <DocumentationFooter/>
  </div>

</template>

<script>
import DocumentationHeader from '@theme/components/DocumentationHeader.vue'
import DocumentationFooter from '@theme/components/DocumentationFooter.vue'
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@parent-theme/util'
import Header from '@parent-theme/components/Navbar.vue'

export default {
  name: 'Layout',
  components: {
    DocumentationHeader,
    DocumentationFooter,
    DocumentationSidebar,
    Header,
    Sidebar
  },
  computed: {
  	 sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  }
}
</script>



<style>
.sidebar {
}

</style>
