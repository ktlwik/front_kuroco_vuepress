<template>
    <div class="contents">
        <div class="column">
            <DocumentationSidebar/>
            <div class="main">
                <div class="c-chapter-docs">
                    <div class="c-chapter-docs__container">
                        
                        <div class="c-chapter-docs__body wysiwyg">
                            <section id="anchor-1" class="c-box-docs">
                                <Content slot-key="api"/>
                            </section>
                            <!-- [/c-box-docs] -->
                        </div>
                    </div>
                </div>
                <!-- [/c-chapter-docs] -->
            </div>
            <!-- [/main] -->
        </div>
        <!-- [/column] -->
    </div>
</template>
<script>
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'
export default {
  layout: 'api',
  components: {
      DocumentationSidebar
   },
}
</script>