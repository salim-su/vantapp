<template>
    <div class="crewRecordDetails">


        <div class="top fs12" >
            详细信息
        </div>

        <div class="content">
            <div class="info">
                <div class="info-top">
                    <div class="name">
                        速速速
                    </div>
                    <div class="sex fs12">
                        <span class="mr5">中国</span>
                        <span class="mr5">|</span>
                        <span>男</span>
                    </div>
                </div>

                <div class="info-content">
                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                上船时间
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                下船时间
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                联系电话
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                身份证号
                            </div>
                            <div>
                                620302199402871198
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                亲属紧急联系电话
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                检查健康吗
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                工种
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                登轮办事事由
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                乘坐交通工具
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                公安码
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                防护装备穿戴情况
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                体温
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                是否咳嗽
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                家庭住址
                            </div>
                            <div>
                                2020-02-02
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div>
                            手签名
                        </div>
                        <div>
                            <img src=../assets/img/scan.png alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import {ActionSheet, Button, Field, Form, Popup, Search, Toast} from "vant";

    export default {
        name: "crewRecordDetails",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                value: "",
            }
        },
        components: {
            [Button.name]: Button,
            [Form.name]: Form,
            [Field.name]: Field,
            [ActionSheet.name]: ActionSheet,
            [Toast.name]: Toast,
            [Search.name]: Search,
            [Popup.name]: Popup,
        },
        methods: {

        },
    }
</script>

<style scoped>
    .crewRecordDetails {
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/img/pad-bg.png");
        background-size: cover;
        position: relative;
        font-size: 10px;
    }

    .top {
        height: 60px;
    }

    .info-top {
        padding-bottom: 10px;
        border-bottom: 1px solid #BED9FF;
    }

    .content {
        height: calc(100vh - 60px);
        width: 100vw;
        overflow: auto;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }

    .info {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        box-shadow: #D8E5F4 1px 0px 5px;
        border-radius: 3px;
        padding: 20px;
        box-sizing: border-box;
    }

    .name {
        color: #0564FE;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .sex {
        color: #6A79B7;
        font-size: 10px;
    }

    .info-content .flex {
        padding: 10px 20px;
    }
</style>
