<template>
    <div class="home-page">
        <!-- Navigation bar -->
        <div v-if="$route.name === 'resume'"
             id="top-nav-bar">
            <!--<div class="nav-title">-->
            <!--PN-->
            <!--</div>-->

            <!-- Navigation Content -->
            <div class="nav-content">
                <!-- Main menu -->
                <ul class="main-menu">
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/about"><i class="far fa-user"></i> {{ $t('About') }}</router-link>
                        </el-button>
                    </li>

                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/resume"><i class="far fa-file-alt"></i> {{ $t('Resume') }}</router-link>
                        </el-button>
                    </li>

                    <!-- Confirmation -->
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
                    <!--<i class="fab fa-github-square"></i> {{ $t('Github') }}-->
                    <!--</a>-->
                    <!--</el-button>-->
                    <!--</li>-->


                    <!-- Btn -->
                    <!--<li class="nav-option">-->
                    <!--<el-button type="info"-->
                    <!--class="nav-option-btn"-->
                    <!--round>-->
                    <!--<router-link to="/contact"><i class="far fa-envelope"></i> {{ $t('Contact') }}-->
                    <!--</router-link>-->
                    <!--</el-button>-->
                    <!--</li>-->
                </ul>

                <!-- Resume menu xs up -->
                <ul class="resume-menu">
                    <!-- About -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a v-scroll-to="'#about'"><i class="far fa-user"></i>
                                <span class="nav-text"> {{ $t('About')}} </span>
                            </a>
                        </el-button>
                    </li>

                    <!-- Objectives -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a v-scroll-to="'#objectives'">
                                <i class="fas fa-key"></i>
                                <span class="nav-text"> {{ $t('Objectives') }} </span>
                            </a>
                        </el-button>
                    </li>

                    <!-- Skill -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a v-scroll-to="'#skills'">
                                <i class="far fas fa-gem"></i>
                                <span class="nav-text"> {{ $t('Skills') }} </span>
                            </a>
                        </el-button>
                    </li>

                    <!-- Experience -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a v-scroll-to="'#experience'">
                                <i class="fas fa-briefcase"></i>
                                <span class="nav-text"> {{ $t('Experience') }} </span>
                            </a>
                        </el-button>
                    </li>

                    <!-- Education -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a v-scroll-to="'#education'">
                                <i class="fas fa-graduation-cap"></i>
                                <span class="nav-text"> {{ $t('Education') }} </span>
                            </a>
                        </el-button>
                    </li>

                    <!-- Confirmation -->
                    <li class="nav-option">
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
                        <el-button type="info"
                                   v-popover:nav-github-confirm
                                   class="nav-option-btn"
                                   @click.stop.prevent="showNavGitConfirm = true"
                                   round>
                            <a href="https://github.com/Paul-Kijtapart" target="_blank">
                                <i class="fab fa-github-square"></i>
                                <span class="nav-text"> {{ $t('Github') }} </span>
                            </a>
                        </el-button>
                    </li>
                </ul>
                <div class="resume-menu-mobile">
                    <!-- Activate options -->
                    <div class="toggle"
                         @click.stop.prevent="showNavOptions = !showNavOptions">
                        <i style="font-size: 30px; align-self: center" class="fas fa-align-justify"></i>
                    </div>

                    <!-- Options -->
                    <ul v-if="showNavOptions"
                        class="resume-menu-mobile-options">
                        <!-- About -->
                        <li class="nav-option">
                            <el-button type="info"
                                       class="nav-option-btn"
                                       round>
                                <a v-scroll-to="'#about'"><i class="far fa-user"></i>
                                    <span class="nav-text"> {{ $t('About')}} </span>
                                </a>
                            </el-button>
                        </li>

                        <!-- Objectives -->
                        <li class="nav-option">
                            <el-button type="info"
                                       class="nav-option-btn"
                                       round>
                                <a v-scroll-to="'#objectives'">
                                    <i class="fas fa-key"></i>
                                    <span class="nav-text"> {{ $t('Objectives') }} </span>
                                </a>
                            </el-button>
                        </li>

                        <!-- Skill -->
                        <li class="nav-option">
                            <el-button type="info"
                                       class="nav-option-btn"
                                       round>
                                <a v-scroll-to="'#skills'">
                                    <i class="far fas fa-gem"></i>
                                    <span class="nav-text"> {{ $t('Skills') }} </span>
                                </a>
                            </el-button>
                        </li>

                        <!-- Experience -->
                        <li class="nav-option">
                            <el-button type="info"
                                       class="nav-option-btn"
                                       round>
                                <a v-scroll-to="'#experience'">
                                    <i class="fas fa-briefcase"></i>
                                    <span class="nav-text"> {{ $t('Experience') }} </span>
                                </a>
                            </el-button>
                        </li>

                        <!-- Education -->
                        <li class="nav-option">
                            <el-button type="info"
                                       class="nav-option-btn"
                                       round>
                                <a v-scroll-to="'#education'">
                                    <i class="fas fa-graduation-cap"></i>
                                    <span class="nav-text"> {{ $t('Education') }} </span>
                                </a>
                            </el-button>
                        </li>

                        <!-- Confirmation -->
                        <li class="nav-option">
                            <el-popover ref="nav-github-confirm-mobile"
                                        popper-class="nav-github-confirm"
                                        placement="bottom"
                                        trigger="click"
                                        v-model="showMobileNavGitConfirm"
                                        width="160">
                                <p> {{ $t("Go to github page?") }} </p>
                                <div class="actions">
                                    <el-button size="mini" type="text"
                                               @click="showMobileNavGitConfirm = false">
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
                            <el-button type="info"
                                       v-popover:nav-github-confirm-mobile
                                       class="nav-option-btn"
                                       @click.stop.prevent="showMobileNavGitConfirm = !showMobileNavGitConfirm"
                                       round>
                                <a href="https://github.com/Paul-Kijtapart" target="_blank">
                                    <i class="fab fa-github-square"></i>
                                    <span class="nav-text"> {{ $t('Github') }} </span>
                                </a>
                            </el-button>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- lang edit -->
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
        </div>

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
</style>