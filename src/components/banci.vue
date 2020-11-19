<template>
    <div class="banci">
        <div class="back">
            <div class="flex back-banci">
                <img class="banci-img" src="../assets/img/goback.png" alt="" @click="goBack">
                <span>班次信息</span>
            </div>
        </div>

        <div class="card-item-content">

            <div class="title">
                东风号
            </div>

            <van-form validate-first @submit="onSubmit">
                <van-field
                    readonly
                    clickable
                    name="calendar"
                    v-model="calendar"
                    label="班次日期"
                    placeholder="点击选择日期"
                    @click="showCalendar = true"
                />
                <van-field
                    readonly
                    clickable
                    v-model="begin"
                    name="begin"
                    label="班次开始时间"
                    placeholder="点击选择时间"
                    @click="showPickerBegin = true"
                />
                <van-field
                    readonly
                    clickable
                    name="end"
                    v-model="end"
                    label="班次结束时间"
                    placeholder="点击选择时间"
                    @click="showPickerEnd = true"
                />
                <van-button square block type="primary" native-type="submit">
                    提交
                </van-button>
            </van-form>


        </div>

        <van-popup v-model="showPickerBegin" position="bottom">
            <van-datetime-picker
                type="time"
                @confirm="onConfirmBegin"
                @cancel="showPickerBegin = false"
            />
        </van-popup>

        <van-popup v-model="showPickerEnd" position="bottom">
            <van-datetime-picker
                type="time"
                @confirm="onConfirmEnd"
                @cancel="showPickerEnd = false"
            />
        </van-popup>

        <van-popup v-model="showCalendar" position="bottom">
            <van-calendar v-model="showCalendar" @confirm="onConfirmCalendar"/>
        </van-popup>
    </div>
</template>

<script>
    import {Button, Field, Form, DatetimePicker, Popup, Calendar} from "vant";

    export default {
        name: "banci",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                showPickerEnd: false,
                showPickerBegin: false,
                showCalendar: false,
                begin: "",
                end: "",
                calendar: "",
            }
        },
        components: {
            [Button.name]: Button,
            [Form.name]: Form,
            [Field.name]: Field,
            [DatetimePicker.name]: DatetimePicker,
            [Popup.name]: Popup,
            [Calendar.name]: Calendar,
        },
        methods: {



            goBack() {
                this.$router.push('/dlinfo');
            },
            onConfirmBegin(time) {
                this.begin = time;
                this.showPickerBegin = false;
            },
            onConfirmEnd(time) {
                this.end = time;
                this.showPickerEnd = false;
            },
            onConfirmCalendar(date) {
                // this.calendar = `${date.getMonth() + 1}/${date.getDate()}`;
                this.calendar = this.$moment(date).format('YYYY-MM-DD');
                this.showCalendar = false;
            },
            onSubmit(values) {
                console.log('submit', values);
            },
        },
        mounted() {

            if (this.$route.query.obj){
                var list = decodeURIComponent(this.$route.query.obj);
                this.begin = JSON.parse(list).begin;
                this.end = JSON.parse(list).end;
            }


            console.log(this.$moment(new Date()).format('YYYY-MM-DD'));;
            // this.$axios({
            //         method: 'GET',
            //         url: `/infoList?limit=${2}`,
            //         headers: {
            //             'token': window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
            //         }
            //     },
            // ).then(res => {
            //     console.log(res)
            // }).catch(req => {
            //     console.log(req)
            // })

            // this.$axios({
            //         method: 'post',
            //         url: `/infoList`,
            //         data:{
            //             a:'1'
            //         }
            //     },
            // ).then(res => {
            //     console.log(res)
            // }).catch(req => {
            //     console.log(req)
            // })
        }
    }
</script>

<style scoped>
    .banci {
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/img/pad-bg.png");
        background-size: cover;
        position: relative;
        font-size: 10px;
    }

    .back {
        padding: 20px;
        padding-left: 0;
        color: #ffffff;
        font-size: 12px;
    }

    .card-item-content {
        margin-left: 20px;
        width: 300px;
        min-height: 300px;
        background: #fff;
        box-shadow: #D8E5F4 1px 0px 5px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .title{
        color: #1E75FD;
        font-size: 12px;
        padding: 10px;
        border-bottom: 1px solid #1F74FE;
    }
    .van-cell{
        margin-bottom: 10px;
    }
    button{
        margin-top: 30px;
    }
    .back-banci{
        align-items: center;
    }
    .banci-img{
        width: 32px;
        height: 32px;
    }
</style>
