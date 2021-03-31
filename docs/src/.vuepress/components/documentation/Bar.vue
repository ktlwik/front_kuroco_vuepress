<template>
    <div class="contents">
        <div class="column">
                <div class="main">
                    <div class="c-chapter-docs">
                        <div class="c-chapter-docs__container">
                            <div class="c-chapter-docs__head">
                                <h1 class="c-ttl c-ttl--docs">Kurocoドキュメント</h1>
                                <!-- [/c-ttl] -->
                            </div>
                            <div class="c-chapter-docs__body wysiwyg">
                                <p>Kurocoドキュメントへようこそ！</P>
                                <p>このサイトでは、Kurocoの機能の紹介や使い方、APIのリファレンスドキュメントを見つけることができます。</p>
                                <p class="c-txt-attention">まだ整備中のドキュメントになりますので、不正確・未完成なページもあります。ご注意ください。</p>
                                <p>サイト内で解決しない場合は<a href="https://join.slack.com/t/kurocojp/shared_invite/zt-l6p3hkw0-vdqK5vjRdOEx9n_PoDXmzw">Kuroco Slackコミュニティ</a></span>へご参加ください。サポート担当者と直接やり取りすることができます。</P>
                            </div>
                        </div>
                        <div class="c-block-intro-wrapper">
                            <!-- Kurocoとは -->
                            <TopPrimarylist
                                title="Kurocoとは" 
                                description="Kurocoで何ができるのか、Kurocoの特徴をお伝えします。"
                                url="/documentations/about"
                                urltitle="Kurocoについて"
                                imglight="/files/user/img/documentation/image_5.png"
                                imglightalt="Kurocoとは"
                                imgdark="/files/user/img/documentation/image_5.png"
                                imgdarkalt="Kurocoとは"
                            ></TopPrimarylist>

                            <!-- 管理画面マニュアル -->
                            <TopPrimarylist
                                title="管理画面マニュアル" 
                                description="柔軟で多機能な管理画面を用意しています。独自に拡張、パーソナライズ可能です。"
                                url="/documentations/management"
                                urltitle="管理画面マニュアルを表示"
                                imglight="/files/user/img/documentation/image22.png"
                                imglightalt="管理画面マニュアル"
                                imgdark="/files/user/img/documentation/image21.png"
                                imgdarkalt="管理画面マニュアル"
                            ></TopPrimarylist>
                            <!-- [/c-block-intro] -->

                            <TopSecondlist
                                title="API" 
                                description="Kurocoで作成したコンテンツはAPI経由で取得できます。APIの利用方法を説明します。"
                                url="/documentations/api"
                                urltitle="APIを表示"
                            ></TopSecondlist>
                            <TopSecondlist
                                title="リファレンス" 
                                description="Kurocoの利用方法、拡張方法を説明します。"
                                url="/documentations/reference"
                                urltitle="リファレンスを表示"
                            ></TopSecondlist>
                            <TopSecondlist
                                title="ツール" 
                                description="Kurocoをより柔軟に使うためのツールを紹介します。"
                                url="/documentations/tools"
                                urltitle="ツールを表示"
                            ></TopSecondlist>
                            <TopSecondlist
                                title="FAQ" 
                                description="よくある質問とその回答を紹介します。"
                                url="/documentations/faq"
                                urltitle="FAQを表示"
                            ></TopSecondlist>
                            <!-- [/c-block-intro] -->
                        </div>
                        <!-- [/c-block-intro-wrapper] -->
                    </div>
                    <!-- [/c-chapter-docs] -->
                </div>
                <!-- [/main] -->
        </div>
        <!-- [/column] -->
    </div>
</template>

<style scoped>
.main p {
    line-height: 1.7;
}
</style>

<script>
import TopPrimarylist from "../TopPrimarylist";
import TopSecondlist from "../TopSecondlist";
export default {
  layout: 'documentation',
  components: {
      TopPrimarylist,
      TopSecondlist,
   },
}
</script>