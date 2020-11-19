<template>
    <div class="crewRecord">
        <div class="search flex" @click="search()">
            <div class="back">
                <
            </div>
            <van-search
                v-model="value"
                @search="onSearch"
                @cancel="onCancel"
                left-icon=""
                label="船员记录"
                right-icon="search"
                disabled
            />
        </div>

        <div class="content">

            <div v-for="item of [1,2,3,4]" class="card-item">
                <div class="card-item-content">
                    <!--title-->
                    <div class="card-item-content-title">
                        <span style="color: #1F75FF">salimsu</span>
                        <span class="country">中国</span>
                        <span class="sex">男</span>
                        <img @click="goDetails()" class="more" src="../assets/img/more.png" alt="">
                    </div>

                    <div class="card-item-content-info">
                        <div class="flex content-item">
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">上船时间</span>
                                <span>2020-02-02</span>
                            </div>
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">下船时间</span>
                                <span>2020-02-02</span>
                            </div>
                        </div>
                        <div class="flex content-item">
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">联系电话</span>
                                <span>15822442114</span>
                            </div>
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">身份证号</span>
                                <span>610323199905041189</span>
                            </div>
                        </div>
                        <div class="flex content-item">
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">亲属电话</span>
                                <span>2020-02-02</span>
                            </div>
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">检查健康吗</span>
                                <span>是</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>


        <van-popup v-model:show="show" position="top" :style="{ height: '50%' }">
            <div class="pop-search">
                <div class="pop-search-title">
                    <span>条件查询</span>
                </div>

                <van-form @submit="onSubmit">
                    <van-field
                        v-model="name"
                        name="name"
                        label="姓名"
                        placeholder="姓名"
                    />
                    <van-field
                        v-model="idcard"
                        name="idcard"
                        label="身份证号"
                        placeholder="身份证号"
                    />
                    <div style="margin: 16px;" class="flex btn">
                        <!--                        <van-button round block type="primary" native-type="submit">-->
                        <!--                            提交-->
                        <!--                        </van-button>-->

                        <van-button type="primary" native-type="submit">确认</van-button>

                        <van-button type="warning" @click="cancel()">取消</van-button>
                    </div>
                </van-form>


            </div>
        </van-popup>
    </div>
</template>

<script>
    import {ActionSheet, Button, Field, Form, Popup, Search, Toast} from "vant";

    export default {
        name: "crewRecord",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                value: "",
                show: false,
                name: '',
                idcard: '',
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
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
            goDetails() {
                this.$router.push('/crewRecordDetails');
            },
            search() {
                this.show = true;
            },
            onSubmit(values) {
                console.log('submit', values);
            },
            cancel() {
                this.show = false;
            }
        },
        mounted() {
        },
    }
</script>

<style scoped>
    .crewRecord {
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/img/pad-bg.png");
        background-size: cover;
        position: relative;
        font-size: 10px;
    }

    .pop-search {
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    .pop-search-title {
        padding: 10px;
        font-size: 12px;
        color: #636C8C;
        border-bottom: 1px solid #AFD0FF;
    }

    .search {
        height: 60px;
        width: 100vw;
        display: flex;
        align-items: center;
        /*background: #42b983;*/
    }

    .back {
        font-size: 12px;
        color: #fff;
    }

    .van-search {
        background: unset !important;
        flex-grow: 1;
    }

    .van-search__content {
        background-color: unset !important;
        border-bottom-style: solid;
        border-bottom-color: #AEC2DC;
        padding-left: 0;
    }

    .van-search__label {
        color: #ffffff;
    }

    .content {
        height: calc(100vh - 60px);
        width: 100vw;
        overflow: auto;
    }

    .card-item {
        margin-left: 22px;
        margin-top: 20px;
    }

    .card-item-content {
        width: 300px;
        min-height: 150px;
        background: #fff;
        box-shadow: #D8E5F4 1px 0px 5px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .card-item-content-title {
        font-size: 12px;
        height: 35px;
        line-height: 35px;
        /*background: #42b983;*/
        border-bottom: 1px solid #1E75FE;
    }

    .country, .sex {
        padding-left: 20px;
        font-size: 10px;
        color: #6A79B7;
    }

    .more {
        margin-top: 7px;
        float: right;
        height: 20px;
        width: 20px;
    }

    .content-item {
        padding: 10px 0;
    }

    .btn {
        justify-content: space-around;
    }

    .pop-search .van-button--normal {
        padding: 0 30px;
        margin-top: 30px;
    }

    .pop-search .van-cell {
        margin-top: 10px;
    }
</style>
