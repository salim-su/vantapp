<template>
    <div class="login">

        <div class="login-center">

            <van-form @submit="onSubmit" class="van-form">
                <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    label-class="left-label"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    label-class="left-label"

                />
                <div style="margin: 16px;">
                    <van-button block type="info" native-type="submit">登 &nbsp; 录</van-button>
                </div>
            </van-form>

        </div>


    </div>
</template>

<script>
    import {Button, Toast} from "vant";
    import {Form} from 'vant';
    import {Field} from 'vant';
    export default {
        name: "login",
        components: {
            [Button.name]: Button,
            [Form.name]: Form,
            [Field.name]: Field,
            [Toast.name]: Toast,

        },
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit(values) {
                this.$axios({
                        method: 'post',
                        url: `blade-auth/oauth/token?tenantId=000000&username=${this.username}&password=${this.password}&grant_type=password&scope=all&type=account`,
                        headers: {
                            Authorization: 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
                            // 'token': window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
                        }
                    },
                ).then(res => {
                    if (res.status === 200) {
                        localStorage.setItem('token',res.data.access_token)
                        this.$router.push('/dlinfo');
                    }
                }).catch(req => {
                    Toast('用户名密码错误');
                });



                // this.$axios({
                //         method: 'GET',
                //         url: `blade-auth/oauth/captcha`,
                //         headers: {
                //             Authorization: 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
                //             // 'token': window.localStorage.getItem('token')　　　　//由于是多页面应用所以token存储在本地localStorage中
                //         }
                //     },
                // ).then(res => {
                //     console.log(res)
                // }).catch(req => {
                //     console.log(req)
                // })


                // this.$router.push('/dlinfo');url: `/blade-auth/oauth/token`,/blade-auth/oauth/captcha
            },
        },

    }
</script>

<style scoped>
    .login {
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/img/pad-login.png");
        background-size: cover;
        position: relative;
    }

    .adad {
        width: 100px;
        height: 100px;
        background: #42b983
    }

    .login-center {
        padding: 0 20px;
        box-sizing: border-box;
        width: 245px;
        height: 263px;
        background-image: url("../assets/img/login-center.png");
        background-size: cover;
        position: absolute;
        top: 140px;
        left: 50%;
        margin-left: -122px;

    }

    .van-button {
        margin-top: 20px;
        height: 35px;
    }

    .van-form {
        margin-top: 70px;
    }

    .left-label {
        width: 50px;
    }
</style>
