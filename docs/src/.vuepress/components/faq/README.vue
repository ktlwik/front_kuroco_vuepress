<template>
    <div class="contents">
        <div class="column">
            <DocumentationSidebar />
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
                            <!--
                            <List 
                                :responseData="faq"
                                category="kurocoについて"
                            ></List>
                            <List 
                                :responseData="faq"
                                category="料金プランについて"
                            ></List>
                            -->
                            <!-- [/c-box-docs] -->
                            
                            <!-- TODO ドキュメント揃ったらcomponent化する-->
                            <section id="anchor-1" class="c-box-docs">
                                <div v-for="n in faq" :key="n.slug" class="c-block-intro__link-area">
                                    <nuxt-link :to="'/documentations/faq/'+ n.slug" class="c-block-intro__link">{{n.title}}</nuxt-link>
                                </div>
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

<style scoped>
section.c-block-intro.c-block-intro--half {
    margin-top: 60px;
}
</style>

<script>
import List from "@/components/List";
export default {
    async asyncData ({ $content, params }) {
    const faq = await $content('faq', params.slug)
        //.only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('weight', 'desc')
        .fetch()
    return { faq }
    },
    layout: 'documentation',
    components: {
        List,
    },
}
</script>