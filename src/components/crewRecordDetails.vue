<template>
    <div class="crewRecordDetails">
        <div class="back">
            <div class="flex back-banci">
                <img class="banci-img" src="../assets/img/goback.png" alt="" @click="goBack">
                <span>详细信息</span>
            </div>
        </div>

        <div class="content">
            <div class="info">
                <div class="info-top">
                    <div class="name">
                        {{crewRecordDetails.name}}
                    </div>
                    <div class="sex fs12">
                        <span class="mr5">{{crewRecordDetails.nationalityName}}</span>
                        <span class="mr5">|</span>
                        <span>{{crewRecordDetails.genderName}}</span>
                    </div>
                </div>

                <div class="info-content">
                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                上船时间
                            </div>
                            <div>
                                {{crewRecordDetails.boardingTime}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                下船时间
                            </div>
                            <div>
                                {{crewRecordDetails.getOutTime}}
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                联系电话
                            </div>
                            <div>
                                {{crewRecordDetails.phone}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                身份证号
                            </div>
                            <div>
                                {{crewRecordDetails.idCard}}
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                亲属紧急联系电话
                            </div>
                            <div>
                                {{crewRecordDetails.emergencyContactNumberRelatives}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                检查健康码
                            </div>
                            <div>
                                {{crewRecordDetails.isCheckHealthCodeName}}
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                工种
                            </div>
                            <div>
                                {{crewRecordDetails.typeWork}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                登轮办事事由
                            </div>
                            <div>
                                {{crewRecordDetails.boardDuty}}
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                乘坐交通工具
                            </div>
                            <div>
                                {{crewRecordDetails.transport?'是':'否'}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                公安码
                            </div>
                            <div>
                                {{crewRecordDetails.policeCodeInput}}
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                防护装备穿戴情况
                            </div>
                            <div>
                                {{crewRecordDetails.wearingProtectiveEquipment?'是':'否'}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                体温
                            </div>
                            <div>
                                {{crewRecordDetails.bodyTemperature}}
                            </div>
                        </div>
                    </div>

                    <div class="flex">
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                是否咳嗽
                            </div>
                            <div>
                                {{crewRecordDetails.isWhetherCough?'是':'否'}}
                            </div>
                        </div>
                        <div style="width: 50%;">
                            <div class="c6A79B7">
                                家庭住址
                            </div>
                            <div>
                                {{crewRecordDetails.address}}
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
                crewRecordDetails: ''
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
            goBack() {
                const data = {
                    classesId: this.crewRecordDetails.classesId
                }
                let obj = JSON.stringify(data);
                this.$router.push("/crewRecord?obj=" + encodeURIComponent(obj))
            },
        },
        mounted() {
            if (this.$route.query.obj){
                var list = decodeURIComponent(this.$route.query.obj);
                this.crewRecordDetails = JSON.parse(list);
            }
        }
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
    .back {
        padding: 20px;
        padding-left: 0;
        padding-top: 0;
        padding-bottom: 0;
        color: #ffffff;
        font-size: 12px;
        height: 60px;
        line-height: 60px;
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
    .back-banci{
        align-items: center;
    }
    .banci-img{
        width: 28px;
        height: 28px;
    }
</style>
