<template>
    <footer class="footer">

        <div class="footer-container">

            <div class="footer-top">

                <p class="footer-logo">
                    <router-link to="/" class="footer-logo__link">Kuroco</router-link>
                </p>
                <!-- [/footer-logo] -->

                <div class="footer-nav-wrap">

                    <section class="footer-nav-sec">
                        <h2 class="footer-nav-sec__ttl">株式会社ディバータ</h2>
                        <div class="footer-nav-sec__body">
                            <p class="footer-nav-sec__txt">162 - 0823 <br>東京都新宿区神楽河岸１－１<br>セントラルプラザ６F</p>
                        </div>
                    </section>
                    
                    <section class="footer-nav-sec">
                        <h2 class="footer-nav-sec__ttl">サイトマップ</h2>
                        <div class="footer-nav-sec__body">
                            <nav class="footer-nav">
                                <ul class="footer-nav__list">
                                    <li class="footer-nav__list-item">
                                        <router-link to="/documentations" class="footer-nav__link">ドキュメント</router-link>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <router-link to="/documentations/support" class="footer-nav__link">サポート</router-link>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <router-link to="/about" class="footer-nav__link">Kurocoについて</router-link>
                                    </li>
                                </ul>
                            </nav>
                            
                        </div>
                    </section>
                   

                    <section class="footer-nav-sec">
                        <h2 class="footer-nav-sec__ttl">会社情報</h2>
                        <div class="footer-nav-sec__body">

                            <nav class="footer-nav">
                                <ul class="footer-nav__list">
                                    <li class="footer-nav__list-item">
                                        <router-link to="/contact" class="footer-nav__link">お問い合わせ</router-link>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <router-link to="/tos" class="footer-nav__link">利用規約</router-link>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <router-link to="https://www.diverta.co.jp/privacy/" class="footer-nav__link">プライバシーポリシー</router-link>
                                    </li>
                                </ul>
                            </nav>
                         

                        </div>
                    </section>

                </div>

                <!-- [/footer-nav-wrap] -->

            </div>
            <!-- [/footer-top] -->

            <div class="footer-bottom">

                <p class="footer-catch">
                    <span class="footer-catch__txt">Made in Japan with love</span><span class="footer-catch__ico"><img src="/files/user/img/common/ico/ico_heart_1-2.svg" alt=""></span>
                </p>
                <!-- [/footer-catch] -->

                <div class="footer-copyright">
                    <small class="footer-copyright__txt">Copyright &copy; 2021 Diverta Inc. All rights reserved.</small>
                </div>
                <!-- [/footer-copyright] -->

            </div>
            <!-- [/footer-bottom] -->

        </div>
        <!-- [/footer-container] -->

    </footer>
</template>

<style>
</style>
