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
                        <h2 class="footer-nav-sec__ttl">CONTACT</h2>
                        <div class="footer-nav-sec__body">
                            <p class="footer-nav-sec__txt">162 - 0823 <br>CentralPlaza6F 1-1 <br>Kaguragashi Shinkyuku-ku <br>Tokyo Japan</p>
                        </div>
                    </section>
                    
                    <section class="footer-nav-sec">
                        <h2 class="footer-nav-sec__ttl">SITEMAP</h2>
                        <div class="footer-nav-sec__body">
                            <nav class="footer-nav">
                                <ul class="footer-nav__list">
                                    <li class="footer-nav__list-item">
                                        <router-link to="/documentations" class="footer-nav__link">Documentation</router-link>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <router-link to="/documentations/support" class="footer-nav__link">Support</router-link>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <router-link to="/about" class="footer-nav__link">About</router-link>
                                    </li>
                                </ul>
                            </nav>
                            
                        </div>
                    </section>
                   

                    <section class="footer-nav-sec">
                        <h2 class="footer-nav-sec__ttl">COMPANY</h2>
                        <div class="footer-nav-sec__body">

                            <nav class="footer-nav">
                                <ul class="footer-nav__list">
                                    <li class="footer-nav__list-item">
                                        <a href="https://www.diverta.co.jp/en/contact/" class="footer-nav__link">Contact us</a>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <a href="/tos" class="footer-nav__link">Terms & conditions</a>
                                    </li>
                                    <li class="footer-nav__list-item">
                                        <a href="https://www.diverta.co.jp/en/privacy/" class="footer-nav__link">Privacy Policy</a>
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
