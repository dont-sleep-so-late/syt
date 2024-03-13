<template>
    <div class="top">
        <div class="content">
            <!-- 左侧 -->
            <div class="left">
                <img src="@/assets/logo.png" alt="">
                <p>医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p>注册/登录</p>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>

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
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            p {
                font-size: 20px;
                color: #55a6fe;
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
        }
    }
}
</style>
