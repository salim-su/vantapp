<template>
    <div class="crewRecord">
        <div class="search flex">
            <div class="back" @click="goBack">
                <img class="banci-img" src="../assets/img/goback.png" alt="">
            </div>
            <van-search
                @click="search"
                v-model="value"
                @cancel="onCancel"
                disabled
                left-icon=""
                label="船员记录"
                right-icon="search"
            />
        </div>

        <div class="content">

            <div v-for="item of crewRecord" class="card-item">
                <div class="card-item-content">
                    <!--title-->
                    <div class="card-item-content-title">
                        <span style="color: #1F75FF">{{item.name}}</span>
                        <span class="country">{{item.nationalityName}}</span>
                        <span class="sex">{{item.genderName}}</span>
                        <img @click="goDetails(item)" class="more" src="../assets/img/more.png" alt="">
                    </div>

                    <div class="card-item-content-info">
                        <div class="flex content-item">
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">上船时间</span>
                                <span>{{item.boardingTime}}</span>
                            </div>
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">下船时间</span>
                                <span>{{item.getOutTime}}</span>
                            </div>
                        </div>
                        <div class="flex content-item">
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">联系电话</span>
                                <span>{{item.phone}}</span>
                            </div>
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">身份证号</span>
                                <span>{{item.idCard}}</span>
                            </div>
                        </div>
                        <div class="flex content-item">
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">亲属电话</span>
                                <span>{{item.emergencyContactNumberRelatives}}</span>
                            </div>
                            <div style="width: 50%;">
                                <span class="c6A79B7 fs10">检查健康码</span>
                                <span>{{item.isCheckHealthCodeName}}</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>


        <van-popup v-model:show="show" position="top" :style="{ height: '100%' }">
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
                crewRecord:''
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
                this.$router.push('/dlinfo');
            },
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
            goDetails(item) {
                let obj= JSON.stringify(item);

                this.$router.push("/crewRecordDetails?obj=" + encodeURIComponent(obj))
            },
            search() {
                this.show = true;
            },
            onSubmit(values) {
                this.show = false;
                this.getCrewRecord();
            },
            cancel() {
                this.show = false;
            },
            getCrewRecord(){
                this.$axios({
                        method: 'GET',
                        url: `epidemic/seamanrecord/list?classesId=${this.classesId}&name=${this.name}`,
                        headers: {
                            'Blade-Auth': 'bearer ' + window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
                        }
                    },
                ).then(res => {
                    this.crewRecord = res.data.data;
                }).catch(req => {
                    this.$router.push('/');
                })
            }

        },
        mounted() {
            if (this.$route.query.obj){
                var list = decodeURIComponent(this.$route.query.obj);
                this.classesId = JSON.parse(list).classesId;
                this.getCrewRecord();
            }
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
        padding-left: 0;
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
    .banci-img{
        width: 28px;
        height: 28px;
    }
    .van-button{
        height: 30px;
    }
</style>
