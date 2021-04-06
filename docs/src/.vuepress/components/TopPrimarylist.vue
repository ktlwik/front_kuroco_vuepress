<template>
    <section class="c-block-intro">
        <div class="c-block-intro__inner">
            <h2 class="c-block-intro__ttl">{{ title }}</h2>
            <p class="c-block-intro__txt">{{ description }}</p>
            <div class="c-block-intro__link-area">
                <router-link :to="url" class="c-block-intro__link"> {{ urltitle }} </router-link>
            </div>
        </div>
        <div class="c-block-intro__img">
            <img :src="imglight" :alt="imglightalt">
        </div>
        <div class="c-block-intro__img c-block-intro__img--dark">
            <img :src="imgdark" :alt="imgdarkalt">
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
    imglight: String,
    imglightalt: String,
    imgdark: String,
    imgdarkalt: String,
  }
}
</script>