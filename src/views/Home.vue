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
                            {{ $t('About') }}
                        </el-button>
                    </li>
                    <li class="nav-option">
                        <el-button type="info"
                                   class="nav-option-btn">
                            {{ $t('Resume') }}
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
                            {{ $t('Contact') }}
                        </el-button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Content -->
        <div id="main-content">
            <div id="content-header"> Header </div>
            <div id="content-body"></div>
        </div>
    </div>
</template>

<script type="text/babel">
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";

    //    import './style.scss';
    export default {
        components: {ElButton},
        name: 'home-page'
    };
</script>

<style lang="scss">
    .home-page {
        // Navigation
        #left-nav-bar {
            position: fixed;
            float: left;

            width: span(1 wide at 1);
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
                        width: 100%;

                        // Nav-btn to activate
                        .nav-option-btn {
                            width: 100%;
                            background-color: $navbar-btn-bg-color;
                            font: {
                                family: $title-font-family;
                                size: 1.4em;
                            }
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
                width: span(13);

                background: lightgreen;
            }

            // Content header
            #content-body {
                width: span(13);
                height: 90%;

                background: lightyellow;
            }
        }
    }
</style>