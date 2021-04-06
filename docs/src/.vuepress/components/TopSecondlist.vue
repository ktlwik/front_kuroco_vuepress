<template>
    <section class="c-block-intro c-block-intro--half">
        <div class="c-block-intro__inner c-block-intro__inner--half">
            <h2 class="c-block-intro__ttl">{{ title }}</h2>
            <p class="c-block-intro__txt c-block-intro__txt--half">{{ description }}</p>
            <div class="c-block-intro__link-area">
                <router-link :to="url" class="c-block-intro__link"> {{ urltitle }} </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default{
   props: {
    title: String,
    description: String,
    url: String,
    urltitle: String,
  }
}
</script>