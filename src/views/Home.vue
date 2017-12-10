<template>
    <div class="home-page">
        <!-- Navigation bar -->
        <div id="left-nav-bar">

            <div class="nav-content">
            </div>
        </div>

        <!-- Content -->
        <div id="main-content">
            <div id="content-header"> Header </div>
            <div id="content-body"></div>
        </div>
    </div>
</template>

<script type="text/babel">
    //    import './style.scss';
    export default {
        name: 'home-page'
    };
</script>

<style lang="scss">
    .home-page {
        // Navigation
        #left-nav-bar {
            position: fixed;
            float: left;
            height: 100vh;
            width: span(1 wide at 1);

            background: lightcoral;
        }

        // Content
        #main-content {
            background: lightblue;
            width: span(12 at 2);
            float: right;

            // Content header
            #content-header {
                background: lightgreen;
                width: span(13);
            }

            // Content header
            #content-body {
                background: lightyellow;
                width: span(13);
            }
        }
    }
</style>