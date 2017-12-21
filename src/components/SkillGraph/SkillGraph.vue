<template>
    <div class="skill-graph">
        <svg>
        </svg>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'skill-graph',
        props: {
            skills: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="scss">
</style>