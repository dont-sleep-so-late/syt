<template>
    <div class="top">
        <div class="content">
            <!-- 左侧 -->
            <div class="left" @click="goHome">
                <img src="@/assets/logo.png" alt="">
                <div class="title">
                    <h2>一医通</h2>
                    <p>卫育委员会预约挂号统一平台</p>
                </div>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p @click="login" v-if="!userStore.userInfo.name">注册/登录</p>
                <el-dropdown v-else>
                    <span class="el-dropdown-link">
                        {{ userStore.userInfo.name }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>实名认证</el-dropdown-item>
                            <el-dropdown-item>挂号名单</el-dropdown-item>
                            <el-dropdown-item>就诊人管理</el-dropdown-item>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';
import useUserStore from '@/store/modules/user'

var userStore = useUserStore()
const router = useRouter()
const goHome = () => {
    router.push({
        path: '/home'
    })
}
const login = () => {
    userStore.visiable = true;
}
const logout = () => {
    userStore.userLogout()
    router.replace('/home')
}
</script>

<style lang='scss' scoped>
.top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);

    .content {
        width: 1200px;
        height: 70px;
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 60px;
                height: 60px;
                margin-right: 10px;
            }

        }

        .right {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #bbb;

            .help {
                margin-right: 10px;
            }

            p {
                cursor: pointer;
            }

            .example-showcase .el-dropdown-link {
                cursor: pointer;
                color: var(--el-color-primary);
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>
