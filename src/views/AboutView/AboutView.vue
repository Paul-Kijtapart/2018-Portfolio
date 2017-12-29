<template>
    <div class="about-view">
        <div class="about-section">
            <div class="img-display">
                <svg class="img-wrapper"
                     width="400px" height="400px"
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
                    <dd class="value"> Kijtapart Nawattranakul</dd>


                    <dt> Location </dt>
                    <dd class="value"> Vancouver</dd>


                    <dt> Occupation </dt>
                    <dd class="value"> Software Developer/ Web designer </dd>


                    <dt> Status </dt>
                    <dd class="value"> Working as a full-stack developer. </dd>
                </dl>

                <!-- Social contact -->
                <dl class="social-info">
                    <dt class="social-title">
                        {{ $t("Profiles") }}
                    </dt>
                    <dd class="social-link">
                        <a href="https://github.com/Paul-Kijtapart" target="_blank"> <i class="fab fa-github-square"></i> {{ $t("Github") }} </a>
                    </dd>
                    <dd class="social-link">
                        <a href="https://www.linkedin.com/in/aornawattranakul/" target="_blank"><i class="fab fa-linkedin"></i> {{ $t("Linkedin") }} </a>
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
            @include base-font;
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
                    dt {
                        font: {
                            size: 1.0em;
                        }
                    }
                    dd {
                        font: {
                            family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif";
                            size: 1.2em;
                        }
                    }
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

                    .social-link {
                        font-weight: bold;

                        a {
                            text-decoration: none;
                            color: $black8;
                        }
                    }
                }
            }
        }

        .who-am-i-section {
            @extend .section;
        }

    }
</style>