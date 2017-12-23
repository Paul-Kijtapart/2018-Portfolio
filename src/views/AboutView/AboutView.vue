<template>
    <div class="about-view">
        <div class="about-section">
            <div class="img-display">
                <svg class="img-wrapper" width="400px" height="400px"
                     key="img-display">
                    <image x="0%" y="0%"
                           width="400" height="400"
                           href="/assets/about/profilePic.introduction.jpg">
                    </image>
                </svg>
            </div>

            <div class="info">
                <!-- General info -->
                <dl class="general-info">
                    <dt> Name </dt>
                    <dd> Kijtapart Nawattranakul</dd>


                    <dt> Location </dt>
                    <dd> Vancouver</dd>


                    <dt> Occupation </dt>
                    <dd> Software Developer/ Web designer </dd>


                    <dt> Status </dt>
                    <dd> Working as a full-stack developer. </dd>

                    <dt> Interests </dt>
                    <dd> VueJS, ReactJS </dd>
                    <dd> SASS/SCSS,SVG </dd>
                    <dd> Python, Django </dd>
                    <dd> Webpack, Git </dd>
                </dl>

                <!-- Social contact -->
                <dl class="social-info">
                    <dt class="social-title">
                        Profiles
                    </dt>
                    <dd class="link">
                        <a href="https://github.com/Paul-Kijtapart" target="_blank"> Github </a>
                    </dd>
                    <dd class="link">
                        <a href="https://www.linkedin.com/in/aornawattranakul/" target="_blank"> Linkedin </a>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="who-am-i-section">
            <h1> Who am I? </h1>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'AboutView'
    };
</script>

<style lang="scss">
    .about-view {

        .section {
            @include card;
        }

        .about-section {
            @extend .section;

            display: flex;
            flex-flow: row-reverse wrap;
            justify-content: center;
            align-items: center;

            .img-display {
                .img-wrapper {
                }
            }

            .info {
                .info-section {
                    dd {
                        margin-left: 40px;
                    }

                    font: {
                        size: medium;
                    }
                }

                .general-info {
                    @extend .info-section;

                    width: 400px;
                    max-width: 100%;

                    .value {
                        font-weight: bold;
                    }
                }

                .social-info {
                    @extend .info-section;

                    .social-links {
                        list-style: none;
                    }
                }
            }
        }

        .who-am-i-section {
            @extend .section;
        }

    }
</style>