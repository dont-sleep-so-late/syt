<template>
    <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../assets/web-banner1.png" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
img {
    width: 100%;
}
</style>