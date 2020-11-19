<template id="demo">
    　
    <div id="qrcode"></div>

</template>

<script>
    import QRCode from 'qrcodejs2'

    export default {
        name: 'HelloWorld',
        mounted () {
            this.qrcode();

        },
        methods: {
            qrcode() {
                let qrcode = new QRCode('qrcode', {
                    width: 132,
                    height: 132,
                    text: 'https://www.baidu.com', // 二维码地址
                })
            },
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
