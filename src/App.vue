<template>
    <div class="home-page">
        <!-- Navigation bar -->
        <div id="left-nav-bar">

            <!-- Navigation Content -->
            <div class="nav-content">
                <div class="profile-img">
                    My Image here
                </div>

                <ul class="nav-menu">
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn">
                            <router-link to="/about"> {{ $t('About') }}</router-link>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn">
                            <router-link to="/resume"> {{ $t('Resume') }}</router-link>
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn">
                            {{ $t('Github') }}
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn">
                            <router-link to="/contact"> {{ $t('Contact') }} </router-link>
                        </el-button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Content -->
        <div id="main-content">
            <div id="content-header">
                Header
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

            width: span(1 at 1);
            height: 100%;

            background: $navbar-bg-color;

            // Navigation content
            .nav-content {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

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
                            width: 100%;

                            background-color: $navbar-btn-bg-color;
                            @include nav-font;
                        }
                    }
                }
            }
        }

        // Content
        #main-content {
            float: right;

            width: span(12 at 2);

            height: 100%;

            // Content header
            #content-header {
                width: span(12, $main-content-layout); // Starting here, main-content-layout is Susy config

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

            // Content header
            #content-body {
                width: span(12, $main-content-layout); // Starting here, main-content-layout is Susy config
                height: 90%;

                background: lightyellow;

                #content-body {

                }
            }
        }
    }
</style>