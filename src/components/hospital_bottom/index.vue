<template>
    <div class="bottom">
        <div class="content">
            <!-- 左侧 -->
            <div class="left">
                <p>京ICP备13018369号 </p>
                <p>电话挂号010-56253825</p>
            </div>
            <div class="right">
                <span><a href="#">联系我们</a></span>
                <span><a href="#">合作伙伴</a></span>
                <span><a href="#">用户协议</a></span>
                <span><a href="#">隐私协议</a></span>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.bottom {
    z-index: 999;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .content {
        width: 1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                margin-right: 10px;
            }
        }

        .right {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #bbb;

            a {
                margin-left: 20px;
                color: #999;
                font-size: 12px;
            }
        }
    }
}
</style>
