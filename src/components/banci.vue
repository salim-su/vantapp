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
                    name="classesDate"
                    v-model="classesDate"
                    label="班次日期"
                    placeholder="点击选择日期"
                    @click="showCalendar = true"
                />
                <van-field
                    readonly
                    clickable
                    v-model="classesStartTime"
                    name="classesStartTime"
                    label="班次开始时间"
                    placeholder="点击选择时间"
                    @click="showPickerBegin = true"
                />
                <van-field
                    readonly
                    clickable
                    name="classesEndTime"
                    v-model="classesEndTime"
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
                classesStartTime: "",
                classesEndTime: "",
                classesDate: "",
                shipId: "",
                id: "",
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
                this.classesStartTime = time+':00';
                this.showPickerBegin = false;
            },
            onConfirmEnd(time) {
                this.classesEndTime = time+':00';
                this.showPickerEnd = false;
            },
            onConfirmCalendar(date) {
                // this.calendar = `${date.getMonth() + 1}/${date.getDate()}`;
                this.classesDate = this.$moment(date).format('YYYY-MM-DD');
                this.showCalendar = false;
            },
            onSubmit(values) {
                values['shipId'] = this.shipId;
                values['id'] = this.id;
                this.$axios({
                        method: 'post',
                        url: `epidemic/seamanclasses/submit`,
                        data:values,
                        headers: {
                            'Blade-Auth': 'bearer ' + window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
                        }
                    },
                ).then(res => {
                    this.$router.push('/dlinfo');
                }).catch(req => {
                    console.log(req)
                })
            },
        },
        mounted() {

            if (this.$route.query.objAdd){
                var list = decodeURIComponent(this.$route.query.objAdd);
                this.shipId = JSON.parse(list).shipId;
                console.log(list);
            }

            if (this.$route.query.objEdit){
                var list = decodeURIComponent(this.$route.query.objEdit);
                this.shipId = JSON.parse(list).shipId;
                this.id = JSON.parse(list).id;
                this.classesDate = JSON.parse(list).date;
                this.classesStartTime =  this.$moment(JSON.parse(list).startTime).format('hh:mm:ss');
                this.classesEndTime = this.$moment(JSON.parse(list).endTime).format('hh:mm:ss');

                console.log(list);
            }


            console.log();
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
