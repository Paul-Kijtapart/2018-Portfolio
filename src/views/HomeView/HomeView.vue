<template>
    <div id="home-view">
        <!-- Main bg -->
        <div id="home-bg">
            <transition @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @enter-cancelled="enterCancelled"
                        @leave="leave"
                        :css="false">
                <div v-show="showMenu"
                     ref="description"
                     class="description">
                    {{ name }}
                </div>
            </transition>
        </div>
    </div>
</template>

<script type="text/babel">
    import {
        TweenLite,
        TimelineLite
    } from "gsap";

    export default {
        name: "HomeView",
        data: function () {
            return {
                showMenu: false,
                name: "Paul Nawat",
                tl: new TimelineLite()
            };
        },
        mounted: function () {
            this.showMenu = true;
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0;
                console.log("beforeEnter");
            },
            // the done callback is optional when
            // used in combination with CSS
            enter: function (element, done) {
                let tl = this.tl;

                tl.add(TweenLite.to(element,7, {opacity: 1}));

                done()
            },
            leave: function (el, done) {
                let tl = this.tl;

                tl.reverse();
            },
            afterEnter: function (el) {
            },
            enterCancelled: function (el) {
            }
        }
    };
</script>

<style lang="scss">
    #home-view {
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