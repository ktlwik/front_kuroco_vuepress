<template>
   <div id="wrapper  is-documentation">
   	<DocumentationHeader/>
    <Content/>
    <DocumentationFooter/>
  </div>

</template>

<script>

import DocumentationHeader from '@theme/components/DocumentationHeader.vue'
import DocumentationFooter from '@theme/components/DocumentationFooter.vue'

export default {
  name: 'LayoutDocumentationMain',
  components: {
    DocumentationHeader,
    DocumentationFooter,
  },
}
</script>


<style>
</style>
