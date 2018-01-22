<template>
    <div class="home-page">
        <!-- Navigation bar -->
        <!--<div style="display: none" id="top-nav-bar">-->

            <!--&lt;!&ndash; Navigation Content &ndash;&gt;-->
            <!--<div class="nav-content">-->
                <!--&lt;!&ndash; Main menu &ndash;&gt;-->
                <!--<ul class="main-menu">-->
                    <!--<li class="nav-option">-->
                        <!--<el-button type="info"-->
                                   <!--class="nav-option-btn">-->
                            <!--<router-link to="/about"><i class="far fa-user"></i> {{ $t('About') }}</router-link>-->
                        <!--</el-button>-->
                    <!--</li>-->

                    <!--<li class="nav-option">-->
                        <!--<el-button type="info"-->
                                   <!--class="nav-option-btn">-->
                            <!--<router-link to="/resume"><i class="far fa-file-alt"></i> {{ $t('Resume') }}</router-link>-->
                        <!--</el-button>-->
                    <!--</li>-->
                <!--</ul>-->

                <!--&lt;!&ndash; Resume menu xs up &ndash;&gt;-->
                <!--<ul class="resume-menu">-->
                    <!--&lt;!&ndash; About &ndash;&gt;-->
                    <!--<li class="nav-option">-->
                        <!--<a v-scroll-to="'#about'"><i class="far fa-user"></i>-->
                            <!--<span class="nav-text"> {{ $t('About')}} </span>-->
                        <!--</a>-->
                    <!--</li>-->

                    <!--&lt;!&ndash; Objectives &ndash;&gt;-->
                    <!--<li class="nav-option">-->

                        <!--<a v-scroll-to="'#objectives'">-->
                            <!--<i class="fas fa-key"></i>-->
                            <!--<span class="nav-text"> {{ $t('Objectives') }} </span>-->
                        <!--</a>-->

                    <!--</li>-->

                    <!--&lt;!&ndash; Skill &ndash;&gt;-->
                    <!--<li class="nav-option">-->

                        <!--<a v-scroll-to="'#skills'">-->
                            <!--<i class="far fas fa-gem"></i>-->
                            <!--<span class="nav-text"> {{ $t('Skills') }} </span>-->
                        <!--</a>-->

                    <!--</li>-->

                    <!--&lt;!&ndash; Experience &ndash;&gt;-->
                    <!--<li class="nav-option">-->
                        <!--<a v-scroll-to="'#experience'">-->
                            <!--<i class="fas fa-briefcase"></i>-->
                            <!--<span class="nav-text"> {{ $t('Experience') }} </span>-->
                        <!--</a>-->
                    <!--</li>-->

                    <!--&lt;!&ndash; Education &ndash;&gt;-->
                    <!--<li class="nav-option">-->
                        <!--<a v-scroll-to="'#education'">-->
                            <!--<i class="fas fa-graduation-cap"></i>-->
                            <!--<span class="nav-text"> {{ $t('Education') }} </span>-->
                        <!--</a>-->
                    <!--</li>-->

                    <!--&lt;!&ndash; Confirmation &ndash;&gt;-->
                    <!--<li class="nav-option">-->
                        <!--<el-popover ref="nav-github-confirm"-->
                                    <!--popper-class="nav-github-confirm"-->
                                    <!--placement="bottom"-->
                                    <!--trigger="click"-->
                                    <!--v-model="showNavGitConfirm"-->
                                    <!--width="160">-->
                            <!--<p> {{ $t("Go to github page?") }} </p>-->
                            <!--<div class="actions">-->
                                <!--<el-button size="mini" type="text"-->
                                           <!--@click="showNavGitConfirm = false">-->
                                    <!--{{ $t("Cancel") }}-->
                                <!--</el-button>-->
                                <!--<el-button type="primary"-->
                                           <!--class="confirm-btn"-->
                                           <!--size="mini"-->
                                           <!--@click="handleGithubBtn"-->
                                           <!--round>-->
                                    <!--{{ $t("Confirm") }}-->
                                <!--</el-button>-->
                            <!--</div>-->
                        <!--</el-popover>-->
                        <!--<el-button type="info"-->
                                   <!--v-popover:nav-github-confirm-->
                                   <!--class="nav-option-btn"-->
                                   <!--@click.stop.prevent="showNavGitConfirm = true"-->
                                   <!--round>-->
                            <!--<a href="https://github.com/Paul-Kijtapart" target="_blank">-->
                                <!--<i class="fab fa-github-square"></i>-->
                                <!--<span class="nav-text"> {{ $t('Github') }} </span>-->
                            <!--</a>-->
                        <!--</el-button>-->
                    <!--</li>-->
                <!--</ul>-->
                <!--<div class="resume-menu-mobile">-->
                    <!--&lt;!&ndash; Activate options &ndash;&gt;-->
                    <!--<div class="toggle"-->
                         <!--@click.stop.prevent="showNavOptions = !showNavOptions">-->
                        <!--<i style="font-size: 30px; align-self: center" class="fas fa-align-justify"></i>-->
                    <!--</div>-->

                    <!--&lt;!&ndash; Options &ndash;&gt;-->
                    <!--<ul v-if="showNavOptions"-->
                        <!--class="resume-menu-mobile-options">-->
                        <!--&lt;!&ndash; About &ndash;&gt;-->
                        <!--<li class="nav-option">-->
                            <!--<el-button type="info"-->
                                       <!--class="nav-option-btn"-->
                                       <!--round>-->
                                <!--<a v-scroll-to="'#about'"><i class="far fa-user"></i>-->
                                    <!--<span class="nav-text"> {{ $t('About')}} </span>-->
                                <!--</a>-->
                            <!--</el-button>-->
                        <!--</li>-->

                        <!--&lt;!&ndash; Objectives &ndash;&gt;-->
                        <!--<li class="nav-option">-->
                            <!--<el-button type="info"-->
                                       <!--class="nav-option-btn"-->
                                       <!--round>-->
                                <!--<a v-scroll-to="'#objectives'">-->
                                    <!--<i class="fas fa-key"></i>-->
                                    <!--<span class="nav-text"> {{ $t('Objectives') }} </span>-->
                                <!--</a>-->
                            <!--</el-button>-->
                        <!--</li>-->

                        <!--&lt;!&ndash; Skill &ndash;&gt;-->
                        <!--<li class="nav-option">-->
                            <!--<el-button type="info"-->
                                       <!--class="nav-option-btn"-->
                                       <!--round>-->
                                <!--<a v-scroll-to="'#skills'">-->
                                    <!--<i class="far fas fa-gem"></i>-->
                                    <!--<span class="nav-text"> {{ $t('Skills') }} </span>-->
                                <!--</a>-->
                            <!--</el-button>-->
                        <!--</li>-->

                        <!--&lt;!&ndash; Experience &ndash;&gt;-->
                        <!--<li class="nav-option">-->
                            <!--<el-button type="info"-->
                                       <!--class="nav-option-btn"-->
                                       <!--round>-->
                                <!--<a v-scroll-to="'#experience'">-->
                                    <!--<i class="fas fa-briefcase"></i>-->
                                    <!--<span class="nav-text"> {{ $t('Experience') }} </span>-->
                                <!--</a>-->
                            <!--</el-button>-->
                        <!--</li>-->

                        <!--&lt;!&ndash; Education &ndash;&gt;-->
                        <!--<li class="nav-option">-->
                            <!--<el-button type="info"-->
                                       <!--class="nav-option-btn"-->
                                       <!--round>-->
                                <!--<a v-scroll-to="'#education'">-->
                                    <!--<i class="fas fa-graduation-cap"></i>-->
                                    <!--<span class="nav-text"> {{ $t('Education') }} </span>-->
                                <!--</a>-->
                            <!--</el-button>-->
                        <!--</li>-->

                        <!--&lt;!&ndash; Confirmation &ndash;&gt;-->
                        <!--<li class="nav-option">-->
                            <!--<el-popover ref="nav-github-confirm-mobile"-->
                                        <!--popper-class="nav-github-confirm"-->
                                        <!--placement="bottom"-->
                                        <!--trigger="click"-->
                                        <!--v-model="showMobileNavGitConfirm"-->
                                        <!--width="160">-->
                                <!--<p> {{ $t("Go to github page?") }} </p>-->
                                <!--<div class="actions">-->
                                    <!--<el-button size="mini" type="text"-->
                                               <!--@click="showMobileNavGitConfirm = false">-->
                                        <!--{{ $t("Cancel") }}-->
                                    <!--</el-button>-->
                                    <!--<el-button type="primary"-->
                                               <!--class="confirm-btn"-->
                                               <!--size="mini"-->
                                               <!--@click="handleGithubBtn"-->
                                               <!--round>-->
                                        <!--{{ $t("Confirm") }}-->
                                    <!--</el-button>-->
                                <!--</div>-->
                            <!--</el-popover>-->
                            <!--<el-button type="info"-->
                                       <!--v-popover:nav-github-confirm-mobile-->
                                       <!--class="nav-option-btn"-->
                                       <!--@click.stop.prevent="showMobileNavGitConfirm = !showMobileNavGitConfirm"-->
                                       <!--round>-->
                                <!--<a href="https://github.com/Paul-Kijtapart" target="_blank">-->
                                    <!--<i class="fab fa-github-square"></i>-->
                                    <!--<span class="nav-text"> {{ $t('Github') }} </span>-->
                                <!--</a>-->
                            <!--</el-button>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!-- Bottom left menu -->
        <div class="nav-trigger"
             title="Click to toggle menu"
             @click.stop.prevent="showMenu = !showMenu">
            <i ref="home-icon"
               id="home-icon"
               class="fas fa-ellipsis-h"></i>
        </div>
        <transition name="bounce">
            <div v-show="showMenu"
                 class="nav-view">
                <!--<ul v-if="$route.name === 'home'"-->
                    <!--ref="home-options"-->
                    <!--class="home-options">-->
                    <!--<li class="option">-->
                        <!--<router-link to="/resume">{{ $t('RESUME') }}</router-link>-->
                    <!--</li>-->
                <!--</ul>-->
                <!--v-else-if="$route.name === 'resume'"-->
                <ul ref="resume-options"
                    class="resume-options">

                    <!-- About -->
                    <li class="option">
                        <a v-scroll-to="'#about'"><i class="far fa-user"></i>
                            <span class="nav-text"> {{ $t('About')}} </span>
                        </a>
                    </li>

                    <!-- Objectives -->
                    <li class="option">

                        <a v-scroll-to="'#objectives'">
                            <i class="list-icon fas fa-key"></i>
                            <span class="nav-text"> {{ $t('Objectives') }} </span>
                        </a>

                    </li>

                    <!-- Skill -->
                    <li class="option">

                        <a v-scroll-to="'#skills'">
                            <i class="list-icon far fas fa-gem"></i>
                            <span class="nav-text"> {{ $t('Skills') }} </span>
                        </a>

                    </li>

                    <!-- Experience -->
                    <li class="option">
                        <a v-scroll-to="'#experience'">
                            <i class="list-icon fas fa-briefcase"></i>
                            <span class="nav-text"> {{ $t('Experience') }} </span>
                        </a>
                    </li>

                    <!-- Education -->
                    <li class="option">
                        <a v-scroll-to="'#education'">
                            <i class="list-icon fas fa-graduation-cap"></i>
                            <span class="nav-text"> {{ $t('Education') }} </span>
                        </a>
                    </li>

                    <!-- Confirmation -->
                    <li class="option">
                        <el-popover ref="nav-github-confirm"
                                    popper-class="nav-github-confirm"
                                    placement="bottom"
                                    trigger="click"
                                    v-model="showNavGitConfirm"
                                    width="160">
                            <p> {{ $t("Go to github page?") }} </p>
                            <div class="actions">
                                <el-button size="mini" type="text"
                                           @click="showNavGitConfirm = false">
                                    {{ $t("Cancel") }}
                                </el-button>
                                <el-button type="primary"
                                           class="confirm-btn"
                                           size="mini"
                                           @click="handleGithubBtn"
                                           round>
                                    {{ $t("Confirm") }}
                                </el-button>
                            </div>
                        </el-popover>
                        <a href="https://github.com/Paul-Kijtapart"
                           target="_blank"
                           v-popover:nav-github-confirm
                           @click.stop.prevent="showNavGitConfirm = true">
                            <i class="fab fa-github-square"></i>
                            <span class="nav-text"> {{ $t('Github') }} </span>
                        </a>
                    </li>
                </ul>
                <!--<div v-else>-->
                    <!--No handler for route {{ $route.name }}-->
                <!--</div>-->

                <!--lang edit-->
                <!--<el-select :value="language"-->
                <!--class="lang-change-btn"-->
                <!--popper-class="language-options"-->
                <!--@change="setLanguage($event)">-->
                <!--<el-option class="option"-->
                <!--v-for="langOption in languageOptions"-->
                <!--:key="langOption.value"-->
                <!--:label="langOption.label"-->
                <!--:value="langOption.value">-->
                <!--</el-option>-->
                <!--</el-select>-->

                <!-- Overlay -->
                <div id="home-base-overlay">
                </div>
                <div id="home-circle-overlay">
                </div>
            </div>
        </transition>

        <!-- Social media menu -->
        <transition name="bounce">
            <div v-show="showMenu"
                 class="social-media-view">
                <ul ref="social-options"
                    class="social-options">
                    <li class="option">
                        <a href="https://www.linkedin.com/in/aornawattranakul/"
                           :title="$t('Linkedin')"
                           target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="option">
                        <a href="https://github.com/Paul-Kijtapart"
                           :title="$t('Github')"
                           target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li class="option">
                        <a href="https://twitter.com/Paul_Nawat"
                           :title="$t('Twitter')"
                           target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>

                <!-- Overlay -->
                <div class="social-base-overlay">
                </div>
                <div class="social-circle-overlay">
                </div>
            </div>
        </transition>

        <!-- Content -->
        <div id="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/babel">
    // Vuex
    import {
        mapMutations,
        mapState
    } from 'vuex';

    //    import './style.scss';
    export default {
        name: 'home-page',
        data: function () {
            return {
                showMenu: false,

                // toggle states
                showNavGitConfirm: false,
                showMobileNavGitConfirm: false,

                showNavOptions: false
            }
        },
        computed: {
            ...mapState({
                language: state => state.language.language,
                languageOptions: state => state.language.languageOptions
            })
        },
        watch: {

            // IMPORTANT: update vue-i18n language globally
            language(newLanguage) {
                this.$i18n.locale = newLanguage;
            }
        },
        created: function () {
        },
        mounted: function () {
            this.showMenu = true;
        },
        methods: {
            ...mapMutations([
                'setLanguage'
            ]),

            handleGithubBtn: function () {
                window.open("https://github.com/Paul-Kijtapart");
            }
        }
    };
</script>

<style lang="scss">
    .home-page {
        // Navigation
        #top-nav-bar {
            position: fixed;

            width: span(12);
            height: $nav-height;

            z-index: $nav-z-index;

            // Navigation content
            .nav-content {
                @include display-width;
                height: 100%;
                margin: 0 auto;

                background-color: $navbar-bg-color;

                text-align: center;

                // Navigation menu
                .nav-menu {
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: flex-start;

                    width: span(12);
                    height: 100%;

                    list-style: none;

                    .nav-option {
                        // divide by the number of nav options
                        width: span(12) / 6;

                        // Nav-btn to activate
                        .nav-option-btn {
                            width: span(11);
                            height: 100%;

                            background-color: $navbar-btn-bg-color;

                            @include btn-hover;

                            // Click link
                            a {
                                width: span(12);
                                height: 100%;

                                text-decoration: none;
                                @include nav-font;

                                margin-left: span(1);

                                // Nav-text detail
                                .nav-text {
                                }
                            }
                        }
                    }
                }

                .main-menu {
                    @extend .nav-menu;

                    display: none;
                }

                .resume-menu {
                    @extend .nav-menu;

                    @include breakpoint($xs) {
                        display: none;
                    }
                }

                .resume-menu-mobile {
                    @extend .nav-menu;

                    border-radius: 0;
                    display: none;

                    @include breakpoint($xs) {
                        display: block;
                    }

                    .toggle {
                        width: span(12);
                        height: 100%;

                        display: flex;
                        justify-content: center;
                        align-self: center;

                        border-radius: 0;
                    }

                    ul.resume-menu-mobile-options {
                        width: span(12);

                        list-style: none;

                        li.nav-option {
                            width: span(12);

                            .nav-option-btn {
                                width: span(12);
                                border-radius: 0;
                                text-align: left;

                                a {
                                    margin-left: span(4 wider);
                                }
                            }
                        }
                    }
                }
            }

            // language change
            .lang-change-btn {
                margin: 0 gutter(of 4) gutter(of 4) gutter(of 4);
                width: span(4);

                i {
                    color: $black8;
                }

                // overwrite
                .el-input__inner {
                    @include nav-input;
                    border: transparent;
                }
            }
        }

        // Bottom left menu
        .nav-trigger {
            position: fixed;
            right: gutter(of 6);
            top: gutter(of 6);
            padding: 10px;

            border-radius: 50%;
            background-color: $blue3;
            color: $black0;

            z-index: 6;

            #home-icon {
                font-size: 1.7em;
            }

            &:hover {
                background-color: $blue8;
                color: $blue0;
                cursor: pointer;
            }
        }
        .nav-view {
            position: fixed;
            bottom: -600px;
            left: -1 * span(3);
            padding: 10px;
            z-index: 5;

            width: span(6);
            @include breakpoint($sm-down) {
                width: span(11);
            }
            height: 1000px;

            .nav-options {
                position: absolute;
                top: 15%;
                left: span(6);

                display: flex;
                flex-flow: column nowrap;

                width: span(12);
                list-style: none;

                .option {
                    margin-left: span(1 wider);
                    z-index: 200;

                    @include breakpoint($sm-down) {
                        margin-left: 0;
                    }

                    .list-icon {
                        font-size: 20px;
                    }

                    a {
                        font-size: 1.5em;
                        text-decoration: none;
                        color: $black8;

                        &:hover {
                            cursor: pointer;
                            color: $black0;

                            &:before {
                                content: '';
                                height: 4px;
                                width: 15px;
                                background-color: $black0;
                                position: absolute;
                                margin-top: 10px;
                                margin-left: -20px;
                            }

                            &:after {
                                content: '';
                                height: 4px;
                                width: 15px;
                                background-color: $black0;
                                position: absolute;
                                margin-top: 10px;
                                margin-left: 5px;
                            }
                        }
                    }
                }

                @include breakpoint($sm-down) {
                    top: 15%;
                    left: span(5);
                }
            }

            // Options
            .home-options {
                @extend .nav-options;
            }
            .resume-options {
                @extend .nav-options;

                line-height: 1.5;
            }

            // Overlay
            #home-base-overlay {
                position: absolute;

                width: 100%;
                height: 100%;

                background-color: $blue3;
                border-radius: 50%;
                opacity: 0.7;

                z-index: 2;
            }
            #home-circle-overlay {
                position: absolute;
                top: -5%;
                left: -5%;

                width: 100%;
                height: 100%;

                background-color: $blue1;
                border-radius: 50%;
                opacity: 0.8;

                z-index: 1;
            }
        }

        // Top-right menu
        .social-media-view {
            position: fixed;
            top: -600px;
            right: -1 * span(3);

            width: span(6);
            height: 1000px;

            z-index: 5;

            .social-options {
                position: absolute;
                top: 70%;
                left: span(2 wider);

                display: flex;
                flex-flow: column nowrap;

                width: span(4);
                list-style: none;
                line-height: 3em;

                .option {
                    text-align: center;
                    z-index: 200;

                    a {
                        font-size: 2.0em;
                        text-decoration: none;
                        color: $black8;

                        &:hover {
                            cursor: pointer;
                            color: $black0;
                        }
                    }
                }
            }

            .social-base-overlay {
                position: absolute;

                width: 100%;
                height: 100%;

                background-color: $blue3;
                border-radius: 50%;
                opacity: 0.7;

                z-index: 2;
            }
            .social-circle-overlay {
                position: absolute;
                top: -5%;
                left: -5%;

                width: 100%;
                height: 100%;

                background-color: $blue1;
                border-radius: 50%;
                opacity: 0.8;

                z-index: 1;
            }
        }

        // Content
        #main-content {
            width: span(12);
        }
    }

    // Overwrite element ui
    .language-options {
        background-color: $black2;

        .option {
            @include nav-input;
        }
    }

    .nav-github-confirm {
        font: {
            size: 16px
        }

        .actions {
            margin-top: 10px;
            text-align: center;

            btn {
                font: {
                    size: 16px
                }
            }

            .confirm-btn {
                color: $black0;
            }
        }
    }

    // Animation for Home
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>