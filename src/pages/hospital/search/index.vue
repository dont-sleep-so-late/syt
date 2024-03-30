<template>
    <div class="search">
        <h1>{{ hospitalStore.hospitalInfo.hospital?.hosname }}查询消息</h1>
        <el-empty description="description" />
    </div>
</template>

<script lang='ts' setup>
import useDetailStore from '@/store/modules/hospitalDetail'
const hospitalStore = useDetailStore()


</script>

<style lang='scss' scoped>
.search {
    h1 {
        text-align: center;
    }
}
</style>