<template>
    <section class="c-block-intro c-block-intro--half">
        <div class="c-block-intro__inner c-block-intro__inner--half">
            <h2 class="c-block-intro__ttl">{{ category }}</h2>
            <div class="c-block-intro__link-area">
                <router-link v-for="n in responseData" :key="n.key" :to="n.path" class="c-block-intro__link">
                    <template v-if="category == 'その他' || n.frontmatter.category=== category ">
                        {{n.title}}
                    </template>
                </router-link>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
    },
    props: {
        responseData: {},
        category: String,
    },
    layout: 'documentation',
}
</script>