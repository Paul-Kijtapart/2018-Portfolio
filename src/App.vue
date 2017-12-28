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
                            <router-link to="/about"> <i class="far fa-user"></i> {{ $t('About') }}</router-link>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/resume"><i class="far fa-file-alt"></i> {{ $t('Resume') }}</router-link>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a href="https://github.com/Paul-Kijtapart" target="_blank"><i class="fab fa-github-square"></i> {{ $t('Github') }}</a>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/contact"><i class="far fa-envelope"></i> {{ $t('Contact') }} </router-link>
                        </el-button>
                    </li>
                </ul>
            </div>

            <!-- lang edit -->
            <el-select :value="language"
                       class="lang-change-btn"
                       @change="setLanguage($event)">
                <el-option v-for="langOption in languageOptions"
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
            return {}
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
        methods: {
            ...mapMutations([
                'setLanguage'
            ])
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
            }
        }

        // Content
        #main-content {
            float: right;
            width: span(12 at 2, $main-content-layout);
            height: 100%;
        }
    }
</style>