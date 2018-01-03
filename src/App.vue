<template>
    <div class="home-page">
        <!-- Navigation bar -->
        <div id="top-nav-bar">
            <!--<div class="nav-title">-->
            <!--PN-->
            <!--</div>-->

            <!-- Navigation Content -->
            <div class="nav-content">
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
                                <i class="fab fa-github-square"></i> {{ $t('Github') }}
                            </a>
                        </el-button>
                    </li>


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

                <ul class="nav-menu resume-menu">
                    <!-- About -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a><i class="far fa-user"></i> {{ $t('About') }}</a>
                        </el-button>
                    </li>

                    <!-- Objectives -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a><i class="fas fa-key"></i> {{ $t('Objectives') }}</a>
                        </el-button>
                    </li>

                    <!-- Skill -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a><i class="far fas fa-gem"></i> {{ $t('Skills') }}</a>
                        </el-button>
                    </li>

                    <!-- Experience -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a><i class="fas fa-briefcase"></i> {{ $t('Experience') }}</a>
                        </el-button>
                    </li>

                    <!-- Education -->
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a><i class="far fa-calendar-alt"></i> {{ $t('Education') }}</a>
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
                                <i class="fab fa-github-square"></i> {{ $t('Github') }}
                            </a>
                        </el-button>
                    </li>
                </ul>
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
            margin-left: span(2);

            width: span(8);
            height: $nav-height;
            z-index: $nav-z-index;

            background: $navbar-bg-color;
            border-bottom-right-radius: 25px;
            border-bottom-left-radius: 25px;
            text-align: center;

            // Navigation content
            .nav-content {
                height: 100%;

                // Navigation menu
                .nav-menu {
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: flex-start;

                    height: 100%;
                    list-style: none;

                    .nav-option {
                        width: span(12) / 5;

                        // Nav-btn to activate
                        .nav-option-btn {
                            height: 100%;
                            width: span(11);

                            background-color: $navbar-btn-bg-color;

                            &:hover {
                                background-color: $black0;
                                box-shadow: 0px 0px 20px $blue0;

                                a {
                                    color: $black8;
                                }
                            }

                            a {
                                text-decoration: none;
                                @include nav-font;

                                margin-left: span(1);
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
            padding-top: $nav-height;
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