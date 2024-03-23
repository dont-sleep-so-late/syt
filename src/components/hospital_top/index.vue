<template>
    <div class="top">
        <div class="content">
            <!-- 左侧 -->
            <div class="left" @click="goHome">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p>注册/登录</p>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const goHome = () => {
    router.push({
        path: '/home'
    })
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

            img {
                width: 100%;
                height: 70px;
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
        }
    }
}
</style>
