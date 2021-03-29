<template>
    <div class="contents">
        <div class="column">
            <div class="main">
                <div class="c-chapter-docs">
                    <div class="c-chapter-docs__container">
                        <div class="c-chapter-docs__head">
                            <h1 class="c-ttl c-ttl--docs">Kurocoについて</h1>
                        </div>
                        <div class="c-chapter-docs__body wysiwyg">
                            <section id="anchor-1" class="c-box-docs">
                                <Content slot-key="about"/>
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
export default {
  layout: 'documentation',
}
</script>

<style scoped>
.main h1 {
    margin-bottom: 68px;
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.2;
}

.main h2 {
    margin-bottom: 21px;
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 1.5;
}
.main h3 {
    margin-bottom: 10px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.4;
}
.main p {
    line-height: 1.7;
}
</style>


<script>
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'
export default {
  layout: 'documentation', 
  components: {
    DocumentationSidebar, 
  }
}

</script>