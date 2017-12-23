<template>
    <div class="resume-view">
        <!-- Objective -->
        <div class="objectives-section">
            <div class="objectives-title">
                {{ $t('Objectives') }}
            </div>
            <div class="objectives-body">
            </div>
        </div>

        <!-- Skills -->
        <div class="skills-section">
            <div class="skill-title">
                {{ $t('Skills') }}
            </div>
            <div class="skill-body">
                <ul class="skills">
                    <li>
                        <span class="icon-javascript">
                        </span>
                        <strong> JavaScript </strong>
                        Vue, React, Redux, JQuery, Cordova
                    </li>

                    <li>
                         <span class="icon-python">
                        </span>
                        <strong> Python </strong>
                        Django, Django REST framework
                    </li>
                    <li>
                         <span class="icon-java">
                        </span>
                        <strong> Java </strong>
                        Spring, JUnit, Socket, Thread
                    </li>
                    <li>
                         <span class="icon-database">
                        </span>
                        <strong> Database </strong>
                        MySQL, PostgreSQL, MongoDB
                    </li>
                    <li>
                         <span class="icon-javascript">
                        </span>
                        <strong> Web Development </strong>
                        Azure, Webpack, Babel, HTML5/CSS3, SASS/SCSS
                    </li>
                </ul>
            </div>
        </div>

        <!-- Experience section -->
        <div class="experience-section">
            <div class="experience-title">
                {{ $t('Experience') }}
            </div>

            <!-- invidual exp -->
            <section v-for="exp in expCollection.getExpList()"
                     :key="exp.name"
                     class="experience">
                <!-- illustration -->
                <div v-if="exp.images && exp.images.length > 0"
                     class="showcases">
                    <el-carousel :autoplay="false"
                                 trigger="click">
                        <el-carousel-item v-for="img in exp.images"
                                          :key="img.name"
                                          class="slide">
                            <img :src="'./assets/experiences/' + img.url"
                                 :alt="img.name"
                                 class="showcase-img">
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <!-- Description -->
                <div class="description">
                    <div class="experience-title">
                        {{ exp.name}}
                    </div>
                    <div class="experience-body">
                        <ul class="roles">
                            <li v-for="(role, index) in exp.roles"
                                :key="index"
                                class="role">
                                {{ role.description }}
                            </li>
                        </ul>
                    </div>
                    <div class="experience-languages">
                        <div class="exp-languages">
                            <el-tag v-for="lang in exp.languages"
                                    :key="lang.name"
                                    type="info"
                                    class="exp-lang">
                                {{ lang.name }}
                            </el-tag>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Education section -->
        <div class="education-section">
            <div class="education-title">
                {{ $t("2016 Computer Science University Of British Columbia") }}
            </div>
            <div class="education-body">
            </div>
            <div class="education-footer">
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    // Experiences
    import experiences from '@/assets/paul-experience.json';
    import {
        ExperienceAdapter,
        ExperienceCollection
    } from '@/collections/ExperienceCollection';

    // Skills
    import skills from '@/assets/paul-skills.json';
    import SkillGraph from '@/components/SkillGraph';

    // Vuex state management
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'

    export default {
        name: 'ResumeView',
        components: {SkillGraph},
        data: function () {
            return {
                expCollection: new ExperienceCollection(experiences),
            };
        },
        computed: {
            ...mapGetters([
                'getSkillList'
            ])
        },
        created: function () {
            this.loadSkills(skills);
        },
        /**
         * When vm.$destory() is called,
         * Teardown watchers, child components and event listeners
         */
        beforeDestroy: function () {
            this.clearSkills();
        },
        methods: {
            // Synchronous
            ...mapMutations([
                'clearSkills'
            ]),

            // Async
            ...mapActions([
                'loadSkills'
            ])
        }
    };
</script>

<style lang="scss">
    .resume-view {
        height: 100%;
        width: 100%;

        // section styles to be shared
        .section {
            @include card;
        }

        .objectives-section {
            @extend .section;
            .objectives-title {
                @include card-title;
            }
        }

        .skills-section {
            @extend .section;

            .skill-title {
                @include card-title;
            }

            .skill-body {
                .skills {
                    list-style: none;
                    line-height: 1.5;

                    .icon {
                        width: 20px;
                        height: 20px;
                    }

                    .icon-javascript {
                        @extend .icon;
                    }

                    .icon-python {
                        @extend .icon;
                    }

                    .icon-java {
                        @extend .icon;
                    }

                    .icon-database {
                        @extend .icon;
                    }
                }
            }
        }

        .experience-section {
            /*background: susy-svg-grid() no-repeat scroll;*/
            @extend .section;

            .experience-title {
                @include card-title;
            }

            // individual experience
            .experience {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;

                &:not(:last-child) {
                    margin-bottom: 40px;
                    padding-bottom: 40px;
                    border-bottom: 1px solid $black1;
                }

                // illustration
                .showcases {
                    height: 100%;
                    width: 50%;

                    // Overwrite element ui
                    .el-carousel__item h3 {
                        color: #475669;
                        font-size: 16px;
                        opacity: 0.75;
                        line-height: 150px;
                        margin: 0;
                    }
                    .el-carousel__item:nth-child(2n) {
                        background-color: #99a9bf;
                    }
                    .el-carousel__item:nth-child(2n+1) {
                        background-color: #d3dce6;
                    }

                    // slide
                    .slide {
                        text-align: center;
                    }

                    .showcase-img {
                        height: 100%;
                    }
                }

                // description part
                .description {
                    display: flex;
                    flex-flow: column wrap;
                    align-items: start;
                    justify-content: center;

                    margin: 10px;
                    width: 45%;

                    // shared style for experience title, body, and footer
                    .sub-section {
                        width: 100%;
                        margin-bottom: 10px;
                    }

                    .experience-title {
                        @extend .sub-section;

                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .experience-body {
                        @extend .sub-section;

                        line-height: 1.5;

                        // list of roles
                        .roles {
                            margin-left: 20px;

                            .role {
                            }
                        }
                    }
                    .experience-languages {
                        @extend .sub-section;

                        // list of languages used in this experience
                        .exp-languages {
                            .exp-lang {
                                font: {
                                    family: $base-font-family;
                                    size: 1.0em;
                                }

                            }
                        }
                    }
                }
            }
        }

        .education-section {
            @extend .section;

            .education-title {
                @include card-title;
            }
        }
    }
</style>