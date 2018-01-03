<template>
    <div class="resume-view">
        <!-- About section -->
        <div class="about-section">
            <div class="img-display">
                <svg class="img-wrapper"
                     width="400px" height="400px"
                     key="img-display">
                    <image x="0%" y="0%"
                           width="400" height="400"
                           href="assets/about/profilePic.introduction.jpg">
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
                        <a href="https://github.com/Paul-Kijtapart" target="_blank"> <i
                                class="fab fa-github-square"></i> {{ $t("Github") }} </a>
                    </dd>
                    <dd class="social-link">
                        <a href="https://www.linkedin.com/in/aornawattranakul/" target="_blank"><i
                                class="fab fa-linkedin"></i> {{ $t("Linkedin") }} </a>
                    </dd>
                </dl>
            </div>
        </div>

        <!-- Objective -->
        <div class="objectives-section">
            <div class="objectives-title">
                <i class="fas fa-key"></i> {{ $t('Objectives') }}
            </div>
            <div class="objectives-body">
                <ul class="objectives">
                    <li class="objtive">
                        I am currently working as a <strong> full-stack developer </strong> at
                        <a style="text-decoration: none;" href="http://www.panevo.com/" target="_blank">Panevo </a>.
                    </li>
                    <li class="objtive"><strong>3+ years </strong> of developing Scalable Web applications.</li>
                </ul>
            </div>
        </div>

        <!-- Skills -->
        <div class="skills-section">
            <div class="skill-title">
                <i class="fas fa-gem"></i> {{ $t('Skills') }}
            </div>
            <div class="skill-body">
                <div class="skill-info">
                    <ul class="skills">
                        <li v-for="skill in skillList"
                            :key="skill.name"
                            class="skill"
                            @click.stop.prevent="focusSkill(skill)">

                            <div :class="[skillInFocus.name === skill.name? 'active-skill': 'content']">
                                <span class="title">
                                    <img v-if="skill.name === 'Java'"
                                         class="icon-python icon-java"
                                         src="assets/skills/icon/java.svg"/>
                                    <i :class="skill.icon" v-else></i>
                                    {{ skill.name }}
                                </span>
                            </div>
                            <highcharts :options="skill.toHighchartProgressbar()"
                                        :key="skill.name"
                                        ref="skill-info"
                                        style="height: 60px">
                            </highcharts>
                        </li>
                    </ul>
                </div>

                <!-- Compare skills -->
                <div v-if="skillInFocus"
                     class="focus-skill">
                    <highcharts style=" width: 100%; height: 100%;"
                                key="focus-skill"
                                ref="focus-skill-chart"
                                :options="skillInFocusHighchart">
                    </highcharts>
                </div>
            </div>
        </div>

        <!-- Experience section -->
        <div class="experience-section">
            <div class="experience-title">
                <i class="fas fa-briefcase"></i> {{ $t('Experience') }}
            </div>

            <!-- invidual exp -->
            <section v-for="exp in expCollection.getExpList()"
                     :key="exp.name"
                     class="experience">
                <!-- Type -->
                <div class="exp-type">
                    <span v-if="exp.eventType === 'work'"
                          class="display">
                        <i class=""></i>
                        {{ exp.eventType | capitalize}}
                    </span>
                    <span v-else-if="exp.eventType === 'volunteer'"
                          class="display">
                        <i class=""></i>
                        {{ exp.eventType | capitalize }}
                    </span>
                    <span v-else-if="exp.eventType === 'academic'"
                          class="display">
                        <i class=""></i>
                        {{ exp.eventType | capitalize}}
                    </span>
                    <span v-else-if="exp.eventType === 'academic'"
                          class="display">
                        <i class=""></i>
                        {{ exp.eventType | capitalize }}
                    </span>
                    <span v-else-if="exp.eventType === 'academic'"
                          class="display">
                        <i class=""></i>
                        {{ exp.eventType | capitalize}}
                    </span>
                    <span class="display"
                          v-else>
                        {{ exp.eventType | capitalize}}
                    </span>
                </div>

                <!-- Timeline -->
                <el-tag class="datetime-display">
                    <i class="far fa-calendar-alt"></i> {{ exp.getTimeframe() }}
                </el-tag>

                <!-- illustration -->
                <div v-if="exp.images && exp.images.length > 0"
                     class="showcases">
                    <el-carousel :autoplay="false"
                                 trigger="click">
                        trigger="click">
                        <el-carousel-item v-for="img in exp.images"
                                          :key="img.name"
                                          class="slide">
                            <img :src="'assets/experiences/' + img.url"
                                 :alt="img.name"
                                 class="showcase-img">
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <!-- Description -->
                <div class="description">
                    <div class="experience-title">
                        <a class="card-name"
                           :href="exp.url"
                           target="_blank">
                            {{ exp.name}}
                        </a>
                    </div>
                    <div class="experience-body">
                        <ul class="roles">
                            <li v-for="(role, index) in exp.roles"
                                :key="index"
                                class="role">
                                <i v-if="role.icon" :class="['role-icon', role.icon]" :style="role.iconStyle"></i>
                                <i class="role-icon fas fa-caret-right"
                                   v-else>
                                </i>
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
            <div class="education-section-title">
                <i class="fas fa-graduation-cap"></i> {{ $t("Education") }}
            </div>

            <!-- Each education -->
            <div v-for="edu in spiderWebEducation"
                 :key="edu.name"
                 class="education">
                <!--<div class="education-title">-->
                <!--{{ $t(edu.description) }}-->
                <!--</div>-->
                <div class="education-body">
                    <highcharts :options="edu.highchart" ref="education-chart">
                    </highcharts>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // Components
    import Radarchart from '@/components/Radarchart';

    // Skills
    import skills from '@/assets/paul-skills.json';
    console.log(skills);

    // Experiences
    import experiences from '@/assets/paul-experience.json';
    import {
        ExperienceAdapter,
        ExperienceCollection
    } from '@/collections/ExperienceCollection';

    // Education
    import educations from '@/assets/paul-educations.json';

    // Vuex state management
    import {
        mapState,
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'

    export default {
        name: 'ResumeView',
        components: {Radarchart},
        data: function () {
            return {
                expCollection: new ExperienceCollection(experiences),
                educations: educations,

                // test
                options: {
                    chart: {
                        polar: true,
                        type: 'line'
                    },

                    title: {
                        text: 'Budget vs spending',
                        x: -80
                    },

                    pane: {
                        size: '100%'
                    },

                    xAxis: {
                        categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                            'Information Technology', 'Administration'],
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },

                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },

                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                    },

                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },

                    series: [{
                        name: 'Allocated Budget',
                        data: [43000, 19000, 60000, 35000, 17000, 10000],
                        pointPlacement: 'on'
                    }, {
                        name: 'Actual Spending',
                        data: [50000, 39000, 42000, 31000, 26000, 14000],
                        pointPlacement: 'on'
                    }]

                }
            };
        },
        computed: {
            ...mapState({
                'skillInFocus': state => state.skill.skillInFocus,
                'skillList': state => state.skill.skillList,
            }),

            ...mapGetters([
                'getSkillById',
                'getSkillByName',
                'spiderWebEducation'
            ]),

            skillInFocusHighchart: function () {
                let vm = this;

                let skillInFocus = this.skillInFocus;

                return {
                    chart: {
                        polar: true,
                        type: 'line'
                    },
                    title: false,
                    pane: {
                        size: '80%'
                    },
                    xAxis: {
                        categories: skillInFocus.children.map(skill => {
                            return skill.name;
                        }),
                        labels: {
                            style: {
                                fontSize: "16px"
                            }
                        },
                        events: {},
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0,
                        max: 100
                    },
                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
                    },
                    legend: {
                        visible: false,
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },
                    series: [{
                        showInLegend: false,
                        name: skillInFocus.name,
                        data: skillInFocus.children.map(skill => {
                            return skill.value
                        }),
                        pointPlacement: 'on',
                        events: {
                            click: function (event) {
                                console.log('focus', event);
//                                let clickedCategory = event.point.category;
//                                let targetSkill =
//                                    vm.skillInFocus.children.find(skill => skill.name === clickedCategory);

                                // if found skill with clickedCategory
//                                if (targetSkill) {
//                                    vm.focusSkill(targetSkill);
//                                }
                            }
                        }
                    }]
                };
            }
        },
        created: function () {
            // Set up skills
            this.loadSkills(skills);
            let skillList = this.skillList;
            this.focusSkill(skillList[0]);

            // Set up education
            this.loadEducation(educations);
        },
        /**
         * When vm.$destory() is called,
         * Teardown watchers, child components and event listeners
         */
        beforeDestroy: function () {
            this.clearSkills();
            this.clearEducation();
        },
        methods: {
            // Synchronous
            ...mapMutations([
                'clearSkills',
                'clearEducation',
                'focusSkill'
            ]),

            // Async
            ...mapActions([
                'loadSkills',
                'loadEducation'
            ]),

            handleSkillNameClick: function (skill) {
                console.log('handleSkillNameClick ', skill);

            }
        }
    };
</script>

<style lang="scss">
    .resume-view {
        height: 100%;
        width: span(9);
        margin: 0 auto;

        // section styles to be shared
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

        .objectives-section {
            @extend .section;

            // Section title
            .objectives-title {
                @include card-title;
            }

            .objectives-body {
                ul.objectives {
                    margin-left: 20px;
                }
            }
        }

        .skills-section {
            @include clearfix;
            @extend .section;

            // Section title
            .skill-title {
                @include card-title;
            }

            .skill-body {
                display: flex;

                .skill-info {
                    width: 50%;

                    display: flex;
                    align-items: center;

                    .skills {
                        list-style: none;
                        line-height: 1.5;
                        width: 100%;

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

                        .icon-web-dev {
                            @extend .icon;
                        }

                        // Invidual skill
                        .skill {
                            cursor: pointer;

                            .content {
                                margin-left: 15px;
                                .title {
                                    padding: 5px 0px 5px 10px;

                                    &:hover {

                                        &:after {
                                            content: "Click to focus this skill.";
                                            color: $blue8;
                                            background-color: $blue1;
                                            border-radius: 25px;
                                            box-shadow: inset 0 0 7px 4px rgba(255, 255, 255, .5);
                                        }
                                    }
                                }
                            }

                            .active-skill {
                                margin-left: 15px;

                                .title {
                                    padding: 5px 0px 5px 10px;

                                    color: $black0;
                                    border-radius: 25px;
                                    background-color: $green3;
                                    box-shadow: inset 0 0 7px 4px rgba(255, 255, 255, .5);
                                }

                                .title:after {
                                    content: 'Active';
                                    border-radius: 25px;
                                    background-color: $green7;
                                    padding: 5px;
                                    z-index: 2;
                                }
                            }
                        }
                    }
                }

                .focus-skill {
                    width: 50%;
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

                position: relative;

                &:not(:last-child) {
                    margin-bottom: 40px;
                    padding-bottom: 40px;
                    border-bottom: 1px solid $black1;
                }

                // Type
                .exp-type {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 3;

                    .display {
                        background-color: $black0;
                        color: $black8;
                        padding: 5px 10px;
                        border-radius: 25px;
                    }
                }

                // Timeline
                .datetime-display {
                    position: absolute;
                    top: 0;
                    right: 0px;

                    font: {
                        family: $base-font-family;
                        size: 16px
                    }
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

                            list-style: none;

                            // Role
                            .role {
                                .role-icon {
                                    width: 20px;
                                    height: 20px;
                                }
                            }
                        }
                    }
                    .experience-languages {
                        @extend .sub-section;

                        // list of languages used in this experience
                        .exp-languages {
                            margin-left: 40px;

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

            // Section title
            .education-section-title {
                @include card-title;
            }

            // Each school
            .education {
                .education-title {
                }

                // Where we display performance in graph
                .education-body {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .course-display {
                        width: 900px; // todo: check this on responsive
                        height: 600px;
                    }
                }
            }
        }
    }

    // highchart
    .skill-label {
        font: {
            size: 20px;
        }
    }
</style>