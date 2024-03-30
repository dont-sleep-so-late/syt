<template>
    <div class="close">
        <h1>{{ hospitalStore.hospitalInfo.hospital?.hosname }}停诊信息</h1>
        <el-empty description="description" />
    </div>
</template>

<script lang='ts' setup>
import useDetailStore from '@/store/modules/hospitalDetail'
const hospitalStore = useDetailStore()


</script>

<style lang='scss' scoped>
.close {
    h1 {
        text-align: center;
    }
}
</style>