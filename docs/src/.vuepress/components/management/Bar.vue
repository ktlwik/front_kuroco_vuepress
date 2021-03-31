<template>
    <div class="contents">
        <div class="column">
            <div class="main">
                <div class="c-chapter-docs">
                    <div class="c-chapter-docs__container">
                        <div class="c-chapter-docs__head">
                            <h1 class="c-ttl c-ttl--docs">管理画面マニュアル</h1>
                        </div>
                    </div>
                    <div class="wysiwyg">
                        <p>Kurocoの管理画面を紹介します。<br />
                        Kurocoアカウントを登録し、ログインするとあなたのKuroco管理画面が作成されます。下記のような画面が表示されます。</p>
                        <p>
                            <a href="https://diverta.gyazo.com/023a7d0bfe1e4e45fff9aa4b0dac94df" target="_blank">
                                <img src="https://t.gyazo.com/teams/diverta/023a7d0bfe1e4e45fff9aa4b0dac94df.jpg" alt="Kuroco管理画面" />
                            </a>
                        </p>
                    </div>
                    <div class="c-block-intro-wrapper">          
                        <p>Kurocoは以下のメニューから成り立ちます。</p>
                        <!-- List.vueに渡す-->
                        <List 
                            :responseData="management"
                            category="コンテンツ定義"
                        ></List>
                        <List 
                            :responseData="management"
                            category="コンテンツ"
                        ></List>
                        <List 
                            :responseData="management"
                            category="API"
                        ></List>
                        <List 
                            :responseData="management"
                            category="キャンペーン"
                        ></List>
                        <List 
                            :responseData="management"
                            category="オペレーション"
                        ></List>
                        <List 
                            :responseData="management"
                            category="EC"
                        ></List>
                        <List 
                            :responseData="management"
                            category="ファイルマネージャー"
                        ></List>
                        <List 
                            :responseData="management"
                            category="アカウント設定"
                        ></List>
                    </div>
                </div>
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
export default {
    data () {
      return {
        management: null
      }
    },
    mounted() {
        console.log(this.$site.pages)
        var pages = this.$site.pages.filter((post) => {
            console.log(post.path)
            return post.path.startsWith("/documentations/management/")
        })
        this.management = pages
        console.log(pages)
    },
    layout: 'documentation',
    components: {
        List,
    },
}
</script>