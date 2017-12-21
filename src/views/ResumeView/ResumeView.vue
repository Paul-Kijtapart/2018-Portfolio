<template>
    <div class="resume-view">
        <div class="skills-section">
            <div class="skills">
            </div>
        </div>

        <!-- Experience section -->
        <div class="experience-section">
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
                                 :alt="img.name">
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
            <div class="education">
                <div class="education-title">
                    {{ $t("2016 Computer Science University Of British Columbia") }}
                </div>
                <div class="education-body">
                </div>
                <div class="education-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    // Server exps
    import experiences from '@/assets/paul-experience.json';
    import skills from '@/assets/paul-skills.json';

    // Components
    import SkillGraph from '@/components/SkillGraph';

    // managers
    import {
        ExperienceAdapter,
        ExperienceCollection
    } from '@/collections/ExperienceCollection';
    import SkillGraph from "../../components/SkillGraph/SkillGraph";

    export default {
        components: {SkillGraph},
        name: 'ResumeView',
        component: {
            SkillGraph
        },
        data: function () {
            return {
                expCollection: new ExperienceCollection(experiences)
            };
        },
        methods: {}
    };
</script>

<style lang="scss">
    .resume-view {
        height: 100%;
        width: 100%;

        // Resume section
        .section {
            /*margin: 10px;*/
        }

        .skills-section {
            @extend .section;

            .skills {
                @include card;
            }
        }

        // List of experiences
        .experience-section {
            /*background: susy-svg-grid() no-repeat scroll;*/
            @extend .section;

            // individual experience
            .experience {
                @include card;

                display: flex;
                flex-flow: row wrap;
                justify-content: center;

                // illustration
                .showcases {
                    height: 100%;
                    width: 50%;

                    // Overwrite element ui
                    .el-carousel__item h3 {
                        color: #475669;
                        font-size: 14px;
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
                }

                // description part
                .description {
                    display: flex;
                    flex-flow: column wrap;
                    align-items: start;
                    justify-content: center;

                    margin: 10px;
                    width: 45%;

                    font: {
                        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif";
                        size: 1.2em;
                    }

                    .sub-section {
                        width: 100%;
                        margin-bottom: 10px;
                    }

                    .experience-title {
                        @extend .sub-section;
                        @include experience-title-font;

                        margin-bottom: 20px;

                        text-align: center;
                    }
                    .experience-body {
                        @extend .sub-section;

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
                                    family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif";
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

            .education {
                @include card;

            }
        }
    }
</style>