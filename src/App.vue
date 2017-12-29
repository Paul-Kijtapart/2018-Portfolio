<template>
    <div class="home-page">
        <!-- Navigation bar -->
        <div id="left-nav-bar">
            <div class="nav-title">
                PN
            </div>

            <!-- Navigation Content -->
            <div class="nav-content">
                <ul class="nav-menu">
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
                                    placement="right"
                                    width="160"
                                    v-model="showNavGitConfirm">
                            <p> Go to github page? </p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text"
                                           @click="showNavGitConfirm = false">
                                    cancel
                                </el-button>
                                <el-button type="primary"
                                           size="mini"
                                           @click="handleGithubBtn">
                                    confirm
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
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/contact"><i class="far fa-envelope"></i> {{ $t('Contact') }}
                            </router-link>
                        </el-button>
                    </li>
                </ul>
            </div>

            <!-- lang edit -->
            <el-select :value="language"
                       class="lang-change-btn"
                       popper-class="language-options"
                       @change="setLanguage($event)">
                <el-option class="option"
                           v-for="langOption in languageOptions"
                           :key="langOption.value"
                           :label="langOption.label"
                           :value="langOption.value">
                </el-option>
            </el-select>
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
        #left-nav-bar {
            position: fixed;
            float: left;

            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;

            width: span(1 at 1, $main-content-layout);
            height: 100%;

            background: $navbar-bg-color;

            // Navigation content
            .nav-content {
                width: span(12);

                text-align: center;

                // Navigation menu
                .nav-menu {
                    width: span(12);

                    text-decoration: none;

                    .nav-option {
                        display: flex;
                        flex-flow: row wrap;
                        align-items: center;
                        justify-content: center;

                        width: span(12);

                        // Nav-btn to activate
                        .nav-option-btn {
                            margin: 0 gutter(of 4) gutter(of 4) gutter(of 4);
                            width: span(12);

                            text-align: left;

                            background-color: $navbar-btn-bg-color;

                            a {
                                text-decoration: none;
                                @include nav-font;

                                margin-left: span(2);
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
            float: right;
            width: span(12 at 2, $main-content-layout);
            height: 100%;
        }
    }

    // Overwrite element ui
    .language-options {
        background-color: $black2;

        .option {
            @include nav-input;
        }
    }
</style>