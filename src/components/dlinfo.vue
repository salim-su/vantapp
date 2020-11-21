<template>


    <div class="dlinfo">

        <div class="search">
            <van-search
                v-model="value"
                @search="onSearch"
                @cancel="onCancel"
                label="登轮信息"
                left-icon=""
                right-icon="search"
            />
        </div>

        <div class="content">

            <div class="card-item" v-for="i of shipInfo">
                <div class="card-item-top">
                    <span>开工时间 - </span>
                    <span>{{i.startingTimeStr}}</span>
                </div>
                <div class="card-item-content">
                    <!--title-->
                    <div class="card-item-content-title">
                        <span style="color: #1F75FF">{{i.name}}</span>
                        <span class="country">{{i.nationalityName}}</span>
                        <span class="fx">{{i.riskLevelName}}</span>

                        <!--                        <img @click="goMore('1')" class="more" src="../assets/img/more.png" alt="">-->
                        <img @click="goAdd(i)" class="add" src="../assets/img/add.png" alt="">


                    </div>
                    <!--content-->

                    <template v-if="i.seamanClassesList.length > 0">
                        <div class="card-item-content-item" v-for="item of i.seamanClassesList">

                            <span class="bc">{{item.name}}</span>
                            <span class="fg">-</span>
                            <span class="time">{{item.date}}</span>

                            <img class="qr" src="../assets/img/scan.png" alt="" @click="showPopup(item,i)">

                            <img class="cz" src="../assets/img/cz.png" alt="" @click="show = true,selItem = item">

                        </div>
                    </template>


                    <template v-else>
                        <div class="card-item-content-item">
                            暂无班次
                        </div>
                    </template>


                    <!--end-->
                    <div class="card-item-content-end">
                        <span class="c6A79B7">上港靠岸 - </span>
                        <span>{{i.onPort}}</span>
                        <span class="c6A79B7 jg">进港泊位 -</span>
                        <span>{{i.enterPortBerth}}</span>
                    </div>

                </div>
            </div>


            <van-action-sheet
                v-model="show"
                :actions="actions"
                cancel-text="取消"
                close-on-click-action
                @select="onSelect"
            />

            <van-popup closeable v-model="showPop" class="popstyle">
                <div>{{this.shipName}}</div>
                <div>

                    <span>{{this.banciName}}</span>
                    <span class="ml5">{{this.banciDate}}</span>
                </div>

                <div id="qrcode"></div>
                <div>请扫描二维码如实填写信息</div>
            </van-popup>
        </div>
    </div>
</template>


<script>
    import {Button, Field, Form, ActionSheet, Toast, Search, Popup} from "vant";
    import QRCode from 'qrcodejs2';

    export default {
        name: "dlinfo",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                show: false,
                actions: [{name: '编辑', key: 1}, {name: '船员记录', key: 2}, {name: '删除', color: '#ee0a24', key: 3}],
                selItem: '',
                value: '',
                showPop: false,
                shipInfo: [],
                name:'',
                shipName:'',
                banciName:'',
                banciDate:''
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
        mounted() {
            this.getshipList();
        },
        methods: {
            onSelect(item) {
                console.log(item.key);
                if (item.key === 1) {
                    const data = {
                        shipId: this.selItem.shipId,
                        id: this.selItem.id,
                        startTime: this.selItem.startTime,
                        endTime: this.selItem.endTime,
                        date: this.selItem.date,
                    }
                    let objEdit = JSON.stringify(data);
                    this.$router.push("/banci?objEdit=" + encodeURIComponent(objEdit))
                }

                if (item.key === 2) {

                    const data = {
                        classesId: this.selItem.id
                    }
                    let obj = JSON.stringify(data);
                    this.$router.push("/crewRecord?obj=" + encodeURIComponent(obj))

                    // this.$router.push('/crewRecord');
                }

                if (item.key === 3) {
                    this.$axios({
                            method: 'post',
                            url: `epidemic/seamanclasses/remove?ids=${this.selItem.id}`,
                            headers: {
                                'Blade-Auth': 'bearer ' + window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
                            }
                        },
                    ).then(res => {
                        Toast("删除班次信息成功");
                        this.getshipList();
                    }).catch(req => {
                    })
                }
                this.show = false;
            },
            goMore(item) {

            },
            goAdd(item) {

                console.log(item);


                let data = {
                    shipId: item.id
                };
                let objAdd = JSON.stringify(data);

                this.$router.push("/banci?objAdd=" + encodeURIComponent(objAdd))
                // this.$router.push('/banci');
            },
            onSearch(val) {
                this.name = val;
                this.getshipList();
            },
            onCancel() {
                Toast('取消');
            },
            showPopup(item,i) {
                this.showPop = true;
                setTimeout(res => {
                    this.qrcode(item,i);
                }, 300)
            },

            qrcode(item,i) {
                console.log(item);
                console.log(i);
                this.shipName = i.name;
                this.banciDate = item.date;
                this.banciName = item.name;



                let code = document.getElementById("qrcode");
                if (code.childNodes.length > 0) {
                    code.innerHTML = "";
                }
                console.log("加载二维码")
                let qrcode = new QRCode('qrcode', {
                    width: 150,
                    height: 150,
                    text: 'http://192.168.19.3:8867/index.html?classesId=' + item.id, // 二维码地址
                })
            },

            getshipList(){
                this.$axios({
                        method: 'GET',
                        url: `epidemic/ship/list?name=${this.name}`,
                        headers: {
                            'Blade-Auth': 'bearer ' + window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
                        }
                    },
                ).then(res => {
                    console.log(res.data.data);
                    this.shipInfo = res.data.data;
                }).catch(req => {
                    console.log(req)
                })
            }
        },
    }
</script>

<style scoped>
    .dlinfo {
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/img/pad-bg.png");
        background-size: cover;
        position: relative;
        font-size: 10px;
    }

    .search {
        height: 60px;
        width: 100vw;
        /*background: #42b983;*/
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

    .card-item-top {
        height: 25px;
        background: #7BADE5;
        width: 140px;
        font-size: 12px;
        line-height: 25px;
        color: #fff;
        padding-left: 10px;
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

    .bc {
        font-size: 10px;
        color: #6A79B7;
    }

    .country, .fx {
        padding-left: 20px;
        font-size: 10px;
        color: #6A79B7;
    }

    .fg {
        padding-left: 10px;
        padding-right: 10px;
    }

    .card-item-content-item {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px double #E0E0E0;
    }

    .card-item-content-end {
        height: 40px;
        line-height: 40px;
    }

    .jg {
        margin-left: 40px;
    }

    .qr, .cz {
        margin-top: 7px;
        margin-right: 7px;
        float: right;
        height: 25px;
        width: 25px;
    }

    .add {
        margin-top: 7px;
        margin-right: 18px;
        float: right;
        height: 20px;
        width: 20px;
    }

    .more {
        margin-top: 7px;
        float: right;
        height: 20px;
        width: 20px;
    }

    .van-search {
        background: unset !important;
    }

    .van-search__content {
        background-color: unset !important;
        border-bottom-style: solid;
        border-bottom-color: #AEC2DC;
    }

    .van-search__label {
        color: #ffffff;
    }

    .popstyle {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .van-popup__close-icon--top-right {
        top: 0;
        right: 0;
    }

    .van-icon {
        top: 0;
        right: 0;
    }

    #qrcode {
        border: 1px solid #1DBD65;
        padding: 6px;
    }

</style>
