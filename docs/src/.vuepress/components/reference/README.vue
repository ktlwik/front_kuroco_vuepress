<template>
    <div class="contents">
        <div class="column">
            <DocumentationSidebar />
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
                            <!--
                            <List 
                                :responseData="reference"
                                category="アカウント管理"
                            ></List>
                             <List 
                                :responseData="reference"
                                category="コンテンツ管理"
                            ></List>
                            -->
                            <!-- TODO ドキュメント揃ったらcomponent化する-->
                            <section id="anchor-1" class="c-box-docs">
                                <div v-for="n in reference" :key="n.slug" class="c-block-intro__link-area">
                                    <nuxt-link :to="'/documentations/reference/'+ n.slug" class="c-block-intro__link">{{n.title}}</nuxt-link>
                                </div>
                            </section>
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
        const reference = await $content('reference', params.slug)
        .sortBy('weight', 'desc')
        .fetch()
        return { 
            reference
        }
    },
    layout: 'documentation',
    components: {
        List,
    },
}
</script>