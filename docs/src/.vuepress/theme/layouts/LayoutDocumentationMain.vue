<template>
   <div id="documentation-layout">
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
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@parent-theme/util'
import Header from '@parent-theme/components/Navbar.vue'

export default {
  name: 'LayoutDocumentationMain',
   data () {
    return {
      isSidebarOpen: false
    }
  },
  components: {
    DocumentationHeader,
    DocumentationFooter,
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
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
  	toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }

  }
}
</script>



<style>
.sidebar {
}

</style>
