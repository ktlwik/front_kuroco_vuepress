<template>
    <header class="header">

        <div class="header-container">

            <div class="header-logo">
                <router-link to="/" class="header-logo__link">Kuroco</router-link>
            </div>
            <!-- [/header-logo] -->

            <nav class="header-nav">
                <ul class="header-nav__list">
                    <li class="header-nav__list-item">
                        <router-link to="/documentations" class="header-nav__link">Documentation</router-link>
                    </li>
                    <li class="header-nav__list-item">
                        <router-link to="/documentations/support" class="header-nav__link">Support</router-link>
                    </li>
                    <li class="header-nav__list-item">
                    <!-- <li class="header-nav__list-item header-nav__list-item--current"> -->
                        <router-link to="/about" class="header-nav__link">About</router-link>
                    </li>
                </ul>
                <div class="header-nav__btn">
                    <router-link to="/free_trial" class="header-nav__btn-link">Free Trial</router-link>
                    <!-- <a href="dummy" class="header-nav__btn-link">Get started</a> -->
                </div>
            </nav>
            <!-- [/header-nav] -->

        </div>
        <!-- [/header-container] -->

    </header>

</template>

<style>
</style>
