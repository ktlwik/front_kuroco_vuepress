<template>
    <section class="c-block-intro c-block-intro--half">
        <div class="c-block-intro__inner c-block-intro__inner--half">
            <h2 class="c-block-intro__ttl">{{ category }}</h2>
            <div class="c-block-intro__link-area">
                <nuxt-link v-for="n in responseData" :key="n.slug" :to="'/documentations'+ n.dir + '/' + n.slug" class="c-block-intro__link">
                    <template v-if="n.category=== category ">
                        {{n.title}}
                    </template>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        responseData: {},
        category: String,
    },
layout: 'documentation',
}
</script>