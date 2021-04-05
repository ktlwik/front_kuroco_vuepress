<template>
    <div class="contents">
        <div class="column">
            <DocumentationSidebar/>
            <div class="main">
                <div class="c-chapter-docs">
                    <div class="c-chapter-docs__container">
                        <div class="c-chapter-docs__head">
                            <h1 class="c-ttl c-ttl--docs">リファレンス</h1>
                        </div>
                        <div class="wysiwyg">
                            <p>Kurocoの利用方法を説明します。</p>
                        </div>
                        <div class="c-block-intro-wrapper">
                            <List 
                                :responseData="reference"
                                category="アカウント管理"
                            ></List>
                             <List 
                                :responseData="reference"
                                category="コンテンツ管理"
                            ></List>
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

<style scoped>
section.c-block-intro.c-block-intro--half {
    margin-top: 60px;
}
</style>

<script>
import List from "../List";
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'
export default {
    data () {
      return {
        reference: null
      }
    },
    mounted() {
        var pages = this.$site.pages.filter((post) => {
            return post.path.startsWith("/documentations/reference/")
        }).sort(function(a, b){
            if (a.frontmatter.weight>b.frontmatter.weight) {
                return -1
            } 
            return 1;
        })
    
        this.reference = pages
    },
    layout: 'documentation',
    components: {
        List,
        DocumentationSidebar
    },
}
</script>