<template>
    <div class="resume-view">
        <div class="profile">
            <!-- Experience list -->
            <div v-for="exp in expCollection.getExpList()"
                 :key="exp.name"
                 class="description">
                <div class="description-title">
                    {{ exp.name}}
                </div>

                <div class="description-body">
                    <ul class="roles">
                        <li v-for="(role, index) in exp.roles"
                            :key="index">
                            {{ role.description }}
                        </li>
                    </ul>
                </div>

                <div class="description-skills">
                </div>
            </div>
        </div>

        <div class="skills">
            <div class="description">
            </div>
        </div>

        <div class="experience">
            <div class="description">
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
        width: span(12);

        .section {
            border: 1px solid black;
            margin-bottom: 20px;

            background-color: white;
        }

        .skills {
            @extend .section;

        }

        .profile {
            @extend .section;

            .description-body {
                .roles {
                    list-style: none;
                }
            }
        }

        .experience {
            @extend .section;
        }

        .education {
            @extend .section;
        }
    }
</style>