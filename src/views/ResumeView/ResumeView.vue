<template>
    <div class="resume-view">
        <div class="skills">
            <div class="description">
            </div>
        </div>

        <!-- list of experiences -->
        <div class="experiences">
            <!-- invidual exp -->
            <div v-for="exp in expCollection.getExpList()"
                 :key="exp.name"
                 class="experience">
                <!-- illustration -->
                <div v-if="exp.images && exp.images.length > 0"
                     class="showcases">
                    <el-carousel trigger="click">
                        <el-carousel-item v-for="img in exp.images"
                                          :key="img.name">
                            <h4> {{ img.name }} </h4>
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
            </div>
        </div>

        <div class="education">
            <div class="description">
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    // Server exps
    import experiences from '@/assets/paul-experience.json';

    // managers
    import {
        ExperienceAdapter,
        ExperienceCollections
    } from '@/collections/ExperienceCollection';

    export default {
        name: 'ResumeView',
        data: function () {
            return {
                expCollection: new ExperienceCollections(experiences)
            };
        },
        methods: {}
    };
</script>

<style lang="scss">
    .resume-view {
        height: 100%;
        width: 100%;

        .section {
            margin: 10px;
        }

        .skills {
            @extend .section;

        }

        // List of experiences
        .experiences {
            /*background: susy-svg-grid() no-repeat scroll;*/
            @extend .section;

            // individual experience
            .experience {
                display: flex;
                flex-flow: row wrap;

                background-color: white;
                border: 1px solid black;
                padding: 20px 10px;

                // illustration
                .showcases {
                    height: 100%;
                    width: 50%;

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
                }

                // description part
                .description {
                    display: flex;
                    flex-flow: column wrap;
                    align-items: start;
                    justify-content: center;

                    width: 50%;

                    .experience-title {
                        @include experience-title-font;
                    }
                    .experience-body {

                        // list of roles
                        .roles {
                            list-style: none;
                            .role {
                            }
                        }
                    }
                    .experience-languages {

                        // list of languages used in this experience
                        .exp-languages {

                            .exp-lang {

                            }
                        }
                    }
                }
            }
        }

        .education {
            @extend .section;
        }
    }
</style>