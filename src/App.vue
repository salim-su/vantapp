<template>
    <!--  <div id="app">-->


    <!--  </div>-->
    <router-view/>

</template>

<script>

    export default {

        name: 'App',

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .left-label {
        width: 50px;
    }

    .c6A79B7 {
        color: #6A79B7;
    }
    .van-field__right-icon{
        color: #1DBD65 !important;
        margin-right: 20px;
    }
    .popstyle .van-icon{
        top: 0;
        right: 0;
    }
    .flex{
        display: flex;
    }
    .fs12{
        font-size: 12px;
    }
    .fs10{
        font-size: 10px;
    }
    .fs14{
        font-size: 14px;
    }
    .mr5{
        margin-right: 5px;
    }
</style>
