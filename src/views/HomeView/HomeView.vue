<template>
    <div id="home-view">
        <!-- Bottom left menu -->
        <div v-show="!showMenu"
             class="nav-trigger"
             @click.stop.prevent="showMenu = true">
            <i ref="home-icon"
               id="home-icon"
               class="fas fa-ellipsis-h"></i>
        </div>
        <div v-show="showMenu"
             class="nav-view">
            <ul ref="home-options"
                class="home-options">
                <li class="option"> <router-link to="/resume">{{ $t('RESUME') }}</router-link></li>
            </ul>
            <!-- Overlay -->
            <div id="home-base-overlay">
            </div>
            <div id="home-circle-overlay">
            </div>
        </div>

        <!-- Top right menu -->
        <div v-show="showMenu"
             class="social-media-view">
            <ul ref="social-options"
                class="social-options">
                <li class="option"> {{ $t("Linkedin") }} </li>
                <li class="option"> {{ $t("Github") }} </li>
                <li class="option"> {{ $t("Twitter") }} </li>
            </ul>

            <!-- Overlay -->
            <div class="social-base-overlay">
            </div>
            <div class="social-circle-overlay">
            </div>
        </div>

        <!-- Main bg -->
        <div id="home-bg">
            <div class="description">
                Paul Nawat
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: "HomeView",
        data: function () {
            return {
                showMenu: true
            };
        }
    };
</script>

<style lang="scss">
    #home-view {
        // Bottom left menu
        .nav-trigger {
            position: fixed;
            bottom: 1%;
            left: 1%;
            padding: 10px;

            border-radius: 50%;
            background-color: $blue3;
            color: $black0;

            #home-icon {
                font-size: 1.7em;
            }
        }
        .nav-view {
            position: fixed;
            bottom: -600px;
            left: -1 * span(3);
            padding: 10px;

            width: span(6);
            height: 1000px;

            // Options
            .home-options {
                position: absolute;
                top: 15%;
                left: span(6);

                display: flex;
                flex-flow: column nowrap;

                width: span(4);
                list-style: none;

                .option {
                    text-align: center;
                    z-index: 200;

                    a {
                        font-family: fantasy;
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
            }
            // Overlay
            #home-base-overlay {
                position: absolute;

                width: 100%;
                height: 100%;

                background-color: $blue3;
                border-radius: 50%;
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
                    font-family: fantasy;
                    font-size: 1.5em;
                    text-align: center;
                    color: $black8;
                    z-index: 200;

                    &:hover {
                        cursor: pointer;
                        color: $black0;

                        &:before {
                            content: '';
                            height: 4px;
                            width: 15px;
                            background-color: $black0;
                            position: absolute;
                            margin-top: 20px;
                            margin-left: -20px;
                        }

                        &:after {
                            content: '';
                            height: 4px;
                            width: 15px;
                            background-color: $black0;
                            position: absolute;
                            margin-top: 20px;
                            margin-left: 5px;
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
                z-index: 1;
            }
        }

        #home-bg {
            width: 100%;
            height: 100vh;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: $black0;

            .description {
                font: {
                    family: 'Lobster', cursive;
                    size: 5em
                }
            }
        }
    }
</style>