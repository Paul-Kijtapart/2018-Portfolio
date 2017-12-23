<template>
    <g transform="scale(3)"class="skill-graph">
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axis-label v-for="(stat, index) in stats"
                    :key="stat.name"
                    :stat="stat"
                    :index="index"
                    :total="stats.length">
        </axis-label>
    </g>
</template>

<script type="text/babel">
    // utils
    import {
        valueToPoint
    } from './utils';

    // Components
    import AxisLabel from './components/AxisLabel';

    export default {
        name: 'skill-graph',
        components: {
            AxisLabel,
        },
        props: {
            stats: {
                type: Array,
                required: true
            }
        },
        computed: {
            points: function () {
                const total = this.stats.length;
                return this.stats.map(function (stat, i) {
                    let point = valueToPoint(stat.value, i, total);
                    return point.x + ',' + point.y
                }).join(' ')
            }
        },
        methods: {}
    };
</script>

<style lang="scss">
    polygon {
        fill: #42b983;
        opacity: .75;
    }
    circle {
        fill: transparent;
        stroke: #999;
    }
</style>