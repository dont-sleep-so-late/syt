<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visiable" draggable :show-close="false" width="960" @close="close">
            <el-row>
                <!-- 左侧 -->
                <el-col :span="12">
                    <div class="login">
                        <div v-show="scene == 0">
                            <el-form :model="loginData" :rules="rules" ref="ruleFormRef">
                                <el-form-item prop="phone">
                                    <h3>手机号码</h3>
                                    <el-input :prefix-icon="User" placeholder="请输入手机号码"
                                        v-model="loginData.phone"></el-input>
                                </el-form-item>
                                <el-form-item prop="code">
                                    <h3>验证码</h3>
                                    <el-input :prefix-icon="Lock" placeholder="请输入验证码"
                                        v-model="loginData.code"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button style="width: 50%;margin:10px 0" size="default" @click="getCode"
                                        :disabled="!isPhone || flag">
                                        <span v-if="!flag">获取验证码</span>
                                        <CountDown v-else @getFlag="getFlag" :flag="flag" />
                                    </el-button>
                                </el-form-item>
                            </el-form>
                            <div class="wxbottom">
                                <el-button style="width: 100%;" type="primary" size="default" @click="login"
                                    :disabled="!isPhone || loginData.code.length < 6 ? true : false">用户登录</el-button>
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
                                <div id="login_container"></div>
                            </div>
                            <div class="phonebottom">
                                <div class="phoneLogin" @click="wxLogin(0)">
                                    <p>手机短信验证码登录</p>
                                    <svg t="1712654474708" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4387" width="32" height="32">
                                        <path
                                            d="M341.333333 896H256V128h512v768H341.333333z m0-85.333333h341.333334V213.333333H341.333333v597.333334z m85.333334-42.666667v-85.333333h170.666666v85.333333h-170.666666z"
                                            fill="#444444" p-id="4388"></path>
                                    </svg>
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
import { ElMessage, type FormRules } from 'element-plus';
import { ref, reactive, computed, watch } from 'vue';
import { LoginData, UserCodeResponseData } from '@/api/user/type'
//引入倒计时组件
import CountDown from '@/components/countdown/index.vue'
import { reqWxLogin } from '@/api/user';
var userStore = useUserStore()

var flag = ref<boolean>(false)

//登录场景 0代表验证码登录 1代表微信扫码登录
var scene = ref<number>(0)
//收集表单数据--手机号码
var loginData = reactive<LoginData>({
    phone: '',
    code: ''
})
const ruleFormRef = ref()

//判断手机号
var isPhone = computed(() => {
    const reg = /^(13[0-9]|14|15[0-35-9]|16|17[0-8]|18[0-9]|19)\d{8}$/
    return reg.test(loginData.phone)
})
const getCode = () => {
    flag.value = true;
    try {
        //获取验证码成功
        userStore.getCode(loginData.phone);
        setTimeout(() => {
            loginData.code = userStore.code;
        }, 500);

    } catch (error) {
        //获取验证码失败
        ElMessage({
            type: 'error',
            message: (error as Error).message
        })
    }
}
//登录
const login = async () => {
    await ruleFormRef.value.validate()
    //发起登录请求
    //登录请求成功:顶部组件需要展示用户名字、对话框关闭
    //登录请求失败:弹出对应登录失败的错误信息
    await userStore.userLogin(loginData).then(() => {
        userStore.visiable = false;
        ElMessage({
            type: 'success',
            message: '登陆成功'
        })
    }, (error) => {
        ElMessage({
            type: 'error',
            message: (error as Error).message
        })
    })
}
const getFlag = (value: boolean) => {
    flag.value = value
}
const wxLogin = async (value: number) => {
    scene.value = value
    let redirect_URL = encodeURIComponent(window.location.origin + "/wxlogin")
    let result: UserCodeResponseData = await reqWxLogin(redirect_URL)

    //@ts-ignore
    var obj = new WxLogin({
        self_redirect: true,
        id: "login_container",
        appid: result.data.appid,
        scope: "snsapi_login",
        redirect_uri: result.data.redirectUri,
        state: result.data.state,
        style: "black",
        href: ""
    });
}
//自定义校验手机
const validatorPhone = (_rule: any, value: any, callback: any) => {
    //rule:即为表单校验规则对象
    //value:即为当前文本的内容
    //callBack:回调函数
    const reg = /^(13[0-9]|14|15[0-35-9]|16|17[0-8]|18[0-9]|19)\d{8}$/
    if (reg.test(value)) {
        callback()
    }
    else {
        callback(new Error('请输入正确的手机号码格式'))
    }
}
const validatorCode = (_rule: any, value: any, callback: any) => {
    //rule:即为表单校验规则对象
    //value:即为当前文本的内容
    //callBack:回调函数
    if (/^\d{6}$/.test(value)) {
        callback()
    }
    else {
        callback(new Error('请输入正确的验证码'))
    }
}
const rules = reactive<FormRules<LoginData>>({
    // phone: [
    //     { required: true, message: '请输入正确的手机号', trigger: 'blur', min: 11, max: 11 },
    // ],
    // code: [
    //     {
    //         required: true,
    //         message: '请输入正确的验证码',
    //         trigger: 'blur',
    //     },
    // ],
    phone: [{ trigger: 'blur', validator: validatorPhone }],
    code: [{ trigger: 'blur', validator: validatorCode }]
})

//对话框关闭回调
const close = () => {
    Object.assign(loginData, { phone: '', code: '' })
}
//监听场景的数据
watch(() => scene.value, (val: number) => {
    if (val === 1) {
        userStore.queryState()
    }
})
</script>

<style lang='scss' scoped>
.login_container {
    :deep(.el-dialog__body) {
        background-image: url('../../assets/dialog_bg.png');
        background-color: #f7fbff;
    }

    :deep(.el-dialog) {
        // 取消阴影和背景色
        background: rgba(0, 0, 0, 0);
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
    }

    .login {
        margin: 30px 30px;
        padding: 30px 50px;
        height: 500px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 1px #ddf5ff;

        .el-form {
            margin-top: 30px
        }

        .wxCode {
            min-height: 400px;
        }

        .wxbottom {
            display: flex;
            flex-direction: column;
            align-items: center;


            .wxLogin {
                display: flex;
                align-items: center;
                flex-direction: column;
                margin-top: 100px;

                &:hover {
                    cursor: pointer;
                    color: rgb(156, 156, 156);

                    svg {
                        transition: .5s;
                        transform: rotate(720deg);
                    }
                }
            }


        }

        .phonebottom {
            display: flex;
            flex-direction: column;
            align-items: center;

            .phoneLogin {
                display: flex;
                align-items: center;
                flex-direction: column;

                margin-top: -10px;

                &:hover {
                    cursor: pointer;
                    color: rgb(156, 156, 156);

                    svg {
                        transition: .5s;
                        transform: rotate(720deg);
                    }
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
            margin-top: 50px;
        }
    }
}
</style>