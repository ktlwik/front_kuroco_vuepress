<template>
    <aside class="sidebar">
            <div class="sidebar__container">
                <div class="sidebar__head">
                    <!--<span class="sidebar__ttl">Documentation</span>-->
                    <span class="sidebar__ttl">ドキュメント</span>
                </div>
                <!--
                <div class="sidebar__body">
                    <ul class="sidebar__list">
                        <li class="sidebar__list-item">
                            <a href="/documentations" class="sidebar__list-link">Introduction</a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="/documentations/getting-start" class="sidebar__list-link">Getting started</a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="/documentations/management-screen" class="sidebar__list-link">Management Screen</a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="/documentations/api" class="sidebar__list-link">API</a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="/documentations/reference" class="sidebar__list-link">Reference docs</a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="/documentations/tools" class="sidebar__list-link">Tools</a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="/documentations/faq" class="sidebar__list-link">FAQ</a>
                        </li>
                        <li class="sidebar__list-item">
                            <nuxt-link to="/documentations/management" class="sidebar__list-link">管理画面</nuxt-link>
                        </li>
                    </ul>
                </div>
                -->
                <div class="sidebar__body">
                    <ul class="sidebar__list">
                        <li v-for="item in sidebarItems[0].children" class="sidebar__list-item">
                            <router-link :to="item.path" class="sidebar__list-link">{{item.title}}</router-link> 
                        </li>
                    </ul>
                </div>
            </div>

    </aside>
</template>

<script>
import { resolveSidebarItems } from '@theme/util'

export default {
   name: 'LayoutDocumentationMain',
   components: {
   },
   computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  },
  mounted() {
  }
}
</script>