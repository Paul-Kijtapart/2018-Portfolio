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
                            <router-link to="/about"> {{ $t('About') }}</router-link>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/resume"> {{ $t('Resume') }}</router-link>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <a href="https://github.com/Paul-Kijtapart" target="_blank">{{ $t('Github') }}</a>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn"
                                   round>
                            <router-link to="/contact"> {{ $t('Contact') }} </router-link>
                        </el-button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Content -->
        <div id="main-content">
            <div id="content-header">
                <div class="right-actions">
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
            </div>
            <div id="content-body">
                <router-view></router-view>
            </div>
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
                width: 100%;

                text-align: center;

                .nav-menu {
                    width: 100%;

                    text-decoration: none;

                    .nav-option {
                        display: flex;
                        flex-flow: row wrap;
                        align-items: center;
                        justify-content: center;

                        width: 100%;

                        // Nav-btn to activate
                        .nav-option-btn {

                            margin: 0 10px 10px 10px;
                            width: 100%;

                            background-color: $navbar-btn-bg-color;

                            a {
                                text-decoration: none;
                                @include nav-font;
                            }
                        }
                    }
                }
            }
        }

        // Content
        #main-content {
            float: right;

            width: span(12 at 2, $main-content-layout);

            height: 100%;

            // Content header
            #content-header {
                width: span(12); // Starting here, main-content-layout is Susy config

                background-color: $content-header-bg-color;

                @include clearfix;

                .right-actions {
                    float: right;

                    .lang-change-btn {
                        @include nav-font;

                        background: $lang-change-btn-bgcolor;
                    }
                }
            }

            // Content header (hold views)
            #content-body {
                width: span(12); // Starting here, main-content-layout is Susy config
                height: 90%;
            }
        }
    }
</style>