<template>
    <div class="contents">
        <div class="column">
            <DocumentationSidebar/>
            <div class="main">
                <div class="c-chapter-docs">
                    <div class="c-chapter-docs__container">
                        <div class="c-chapter-docs__head">
                            <h1 class="c-ttl c-ttl--docs">FAQ</h1>
                        </div>
                        <div class="wysiwyg">
                            <p>Kurocoの利用方法や設定について、困ったときはこちらをご覧ください。</p>
                            <p>FAQで解決しない場合は<span class="c-txt-attention"><a href="https://join.slack.com/t/kurocojp/shared_invite/zt-l6p3hkw0-vdqK5vjRdOEx9n_PoDXmzw">Kuroco Slackコミュニティ</a></span>へご参加ください。サポート担当者と直接やり取りすることができます。</P>
                        </div>
                        <div class="c-block-intro-wrapper">
                            
                            <List 
                                :responseData="faq"
                                category="kurocoについて"
                            ></List>
                            <List 
                                :responseData="faq"
                                category="料金プランについて"
                            ></List>
                             <List 
                                :responseData="faq"
                                category="その他"
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
import DocumentationSidebar from '@theme/components/DocumentationSidebar.vue'

import List from "../List";
export default {
    data () {
      return {
        faq: null
      }
    },
    mounted() {
        var pages = this.$site.pages.filter((post) => {
            return post.path.startsWith("/documentations/faq/")
        })
        this.faq = pages
    },
    layout: 'documentation',
    components: {
        List,
        DocumentationSidebar
    },
}
</script>