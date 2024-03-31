<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visiable" width="960">
            <el-row>
                <!-- 左侧 -->
                <el-col :span="12">
                    <div class="login">
                        <div v-show="scene == 0">
                            <el-form>
                                <el-form-item>
                                    <h3>手机号码</h3>
                                    <el-input :prefix-icon="User" placeholder="请输入手机号码"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <h3>验证码</h3>
                                    <el-input :prefix-icon="Lock" placeholder="请输入验证码"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button style="width: 50%;" size="default" @click="" disabled>获取验证码</el-button>
                                </el-form-item>
                            </el-form>
                            <div class="bottom">
                                <el-button style="width: 100%;" type="primary" size="default" @click=""
                                    disabled>用户登录</el-button>
                                <div class="wxLogin" @click="wxLogin(1)">
                                    <p>微信扫码登陆</p>
                                    <svg t="1711849647975" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="5777" width="32" height="32">
                                        <path
                                            d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                                            fill="#28C445" p-id="5778"></path>
                                        <path
                                            d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                                            fill="#28C445" p-id="5779"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-show="scene == 1">
                            <div class="wxCode">
                                <h2>微信登录</h2>
                                <img src="../../assets/code_app.png" alt="">
                                <p>使用微信扫一扫登录</p>
                                <p> “尚硅谷”</p>
                            </div>
                            <div class="bottom">
                                <div class="wxLogin" @click="wxLogin(0)">
                                    <svg t="1711853021826" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/32/svg" p-id="8932" width="32" height="32"
                                        data-spm-anchor-id="a313x.search_index.0.i27.59253a814igsQx">
                                        <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                            fill="#1296db" p-id="8933"
                                            data-spm-anchor-id="a313x.search_index.0.i25.59253a814igsQx" class="">
                                        </path>
                                        <path
                                            d="M698.1888 153.6H325.8112A69.7088 69.7088 0 0 0 256 223.2064V826.368A69.7088 69.7088 0 0 0 325.8112 896h372.3776A69.7088 69.7088 0 0 0 768 826.3936V223.232A69.7088 69.7088 0 0 0 698.1888 153.6zM716.8 821.9392a22.912 22.912 0 0 1-22.7584 22.8608H329.984a22.7072 22.7072 0 0 1-22.7584-22.8608V227.6608A22.784 22.784 0 0 1 329.9584 204.8h68.2752c0.6144 23.1936 19.456 41.728 42.5472 41.8304h142.208A42.88 42.88 0 0 0 625.5616 204.8h68.2496a22.7072 22.7072 0 0 1 22.784 22.8608L716.8 821.9392z"
                                            fill="#ffffff" p-id="8934"
                                            data-spm-anchor-id="a313x.search_index.0.i24.59253a814igsQx" class="">
                                        </path>
                                        <path d="M409.6 742.4h204.8v51.2h-204.8z" fill="#ffffff" p-id="8935"
                                            data-spm-anchor-id="a313x.search_index.0.i28.59253a814igsQx" class="">
                                        </path>
                                    </svg>
                                    <p>手机短信验证码登录</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="12">
                    <div class="rightContent">
                        <div class="top">
                            <div class="box">
                                <img src="../../assets/code_login_wechat.png" alt="">
                                <svg t="1711850055714" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6932" width="32" height="32">
                                    <path
                                        d="M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z"
                                        fill="#24DB5A" p-id="6933"></path>
                                    <path
                                        d="M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z"
                                        fill="#24DB5A" p-id="6934"></path>
                                </svg>
                                <p>微信扫一扫关注</p>
                                <p>“快速预约挂号”</p>
                            </div>
                            <div class="box">
                                <img src="../../assets/code_app.png" alt="">
                                <p>扫一扫下载</p>
                                <p>“预约挂号”APP</p>
                            </div>
                        </div>
                        <div class="bottom">
                            <h2>xxxxxx官方指定平台</h2>
                            <h2>快速挂号 安全放心</h2>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script lang='ts' setup>
import useUserStore from '@/store/modules/user'
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue';

var userStore = useUserStore()

//登录场景 0代表验证码登录 1代表微信扫码登录
var scene = ref<number>(0)

const wxLogin = (value: number) => {
    scene.value = value
}

</script>

<style lang='scss' scoped>
.login_container {
    :deep(.el-dialog__body) {
        background-image: url('../../assets/dialog_bg.png');
        background-color: #f7fbff;
    }

    .login {
        margin: 30px 30px;
        padding: 10px 50px;
        height: 450px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 1px #ddf5ff;

        .wxCode {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            img {
                border: 1px solid rgb(206, 206, 206);
                padding: 10px 10px;
            }
        }

        .bottom {
            display: flex;
            flex-direction: column;
            align-items: center;


            .wxLogin {
                margin-top: 20px;
                display: flex;
                align-items: center;
                flex-direction: column;

                &:hover {
                    cursor: pointer;
                    color: rgb(156, 156, 156);

                }
            }
        }
    }

    .rightContent {
        padding: 50px 30px;
        height: 500px;

        .top {
            display: flex;
            justify-content: space-around;

            .box {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 50px;

                img {
                    width: 150px;
                    margin-bottom: 20px;
                }
            }
        }

        .bottom {
            font-style: italic;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;
        }
    }
}
</style>