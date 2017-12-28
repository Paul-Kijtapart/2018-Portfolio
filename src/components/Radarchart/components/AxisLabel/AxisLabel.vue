<template>
    <g>
        <text :x="point.x" :y="point.y"
              @click.stop.prevent="handleLabelClick"
              class="skill-label">
            {{stat.name}}
        </text>
    </g>
</template>

<script type="text/babel">
    // utils
    import {
        valueToPoint
    } from '../../utils';

    export default {
        name: "axis-label",
        props: {
            stat: {
                type: Object
            },
            index: {
                type: Number
            },
            total: {
                type: Number
            }
        },
        computed: {
            point: function () {
                return valueToPoint(
                    +this.stat.value + 20,
                    this.index,
                    this.total,
                    350, 200
                )
            }
        },
        methods: {
            handleLabelClick: function () {
                console.log('handleLabelClick', this.stat);
            }
        }
    };
</script>

<style lang="scss">
    text {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 10px;
        fill: #666;
    }
</style>