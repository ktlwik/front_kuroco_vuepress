<template>
        <header class="header-docs">

            <div class="header-docs-container">

                <div class="header-docs-logo">
                    <router-link to="/documentations" class="header-docs-logo__link">Kuroco</router-link>
                </div>
                <!-- [/header-docs-logo] -->

                <router-link to="/" class="header-docs-back-link">Back to website</router-link>
                <!-- [/header-docs-back-link] -->

                
                <div class="header-docs-sub-container">
                     <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
                    <!-- 
                    <form class="header-docs-form" action="dummy" method="get">
                        <div class="header-docs-form__inner">
                            <input class="header-docs-form__box" name="dummy" placeholder="検索" type="text"/>
                          
                            <button type="submit" class="header-docs-form__btn">
                                <span class="header-docs-form__btn-icon">search</span>
                            </button>
                            
                        </div>
                    </form>
                    -->
                    <!-- [/header-docs-form] -->

                    <nav class="header-docs-nav">
                        <ul class="header-docs-nav__list">
                            <li class="header-docs-nav__list-item">
                                <router-link to="/documentations/support" class="header-docs-nav__link">サポート</router-link>
                            </li>
                            <li class="header-docs-nav__list-item header-docs-nav__list-item--opa">

                                <span class="header-docs-nav__link">

                                    <label class="header-toggle-txt">
                                        <input type="checkbox" class="header-toggle-txt__input js-color-toggle">
                                        <span class="header-toggle-txt__txt"></span>
                                    </label>
                                    <!-- [/header-toggle-txt] -->

                                </span>

                                <!-- <span class="header-docs-nav__link">Settings</span> -->

                                <!-- <div class="header-docs-sub-nav">
                                    <div class="header-docs-sub-nav__toggle">

                                        <label class="header-toggle">
                                            <span class="header-toggle__txt">dark</span>
                                            <input type="checkbox" class="header-toggle__input js-color-toggle">
                                            <span class="header-toggle__trigger"></span>
                                            <span class="header-toggle__txt">light</span>
                                        </label>

                                    </div>
                                    <ul class="header-docs-sub-nav__list">
                                        <li class="header-docs-sub-nav__item">
                                            <a href="dummy" class="header-docs-sub-nav__link">Setting number 2</a>
                                        </li>
                                        <li class="header-docs-sub-nav__item">
                                            <a href="dummy" class="header-docs-sub-nav__link">Setting number 3</a>
                                        </li>
                                        <li class="header-docs-sub-nav__item">
                                            <a href="dummy" class="header-docs-sub-nav__link">Setting number 4</a>
                                        </li>
                                    </ul>
                                </div> -->
                                <!-- [/header-docs-sub-nav] -->

                            </li>
                            <!-- <li class="header-docs-nav__list-item js-show-toggle-scope">
                                <span class="header-docs-nav__link header-docs-nav__link--icon js-show-toggle-trigger">English</span>
                                <div class="header-docs-sub-nav js-show-toggle-target">
                                    <ul class="header-docs-sub-nav__list">
                                        <li class="header-docs-sub-nav__item">
                                            <a href="dummy" class="header-docs-sub-nav__link">日本語</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> -->
                        </ul>
                        <!-- <div class="header-docs-nav__btn">
                            <a href="dummy" class="header-docs-nav__btn-link">Get started</a>
                        </div> -->
                    </nav>
                    <!-- [/header-docs-nav] -->

                </div>
                <!-- [/header-docs-sub-container] -->

            </div>
            <!-- [/header-docs-container] -->

        </header>
</template>

<script>
import SearchBox from '@SearchBox'
import AlgoliaSearchBox from "./AlgoliaSearchBox";

export default {
  components: { SearchBox, AlgoliaSearchBox },
  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },
    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
}
</script>