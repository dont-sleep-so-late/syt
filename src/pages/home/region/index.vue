<template>
    <div class="box">
        <div class="content">
            <div class="left">
                地区：
            </div>
            <ul class="choose">
                <li :class="{ active: activeFlag == '' }" @click="changeActiveFlag()">全部</li>
                <li v-for="item in regionArr" :class="{ active: activeFlag == item.value }" :key="item.id"
                    @click="changeRegion(item.value)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import { onMounted, ref } from "vue";
import type { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type'
defineOptions({
    name: 'Region',
})
var activeFlag = ref<string>('')
var regionArr = ref<HospitalLevelAndRegionArr>([])

onMounted(() => {
    getRegion()
})

//点击等级的按钮回调
const changeRegion = (value: string) => {
    //高亮响应式数据存储数值
    activeFlag.value = value
    //触发自定义事件:将医院等级参数回传纤父组件
    $emit('getRegion', value)
}
const changeActiveFlag = () => {
    activeFlag.value = ''

    changeRegion(activeFlag.value)
}
const getRegion = async () => {
    var result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin')
    regionArr.value = result.data
}
var $emit = defineEmits(['getRegion'])
</script>

<style lang='scss' scoped>
@import "@/style/home/choose"
</style>