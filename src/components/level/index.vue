<template>
    <div class="box">
        <h1>医院</h1>
        <div class="content">
            <div class="left">
                等级：
            </div>
            <ul class="choose">
                <li :class="{ active: activeFlag == '' }" @click="changeActiveFlag()">全部</li>
                <li v-for="item in levelArr" :class="{ active: activeFlag == item.value }" :key="item.id"
                    @click="changeLevel(item.value)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import { onMounted, ref } from "vue";
import type { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type'
defineOptions({
    name: 'Level',
})
var activeFlag = ref<string>('')
var levelArr = ref<HospitalLevelAndRegionArr>([])

onMounted(() => {
    getLevel()
})

//点击等级的按钮回调
const changeLevel = (value: string) => {
    //高亮响应式数据存储数值
    activeFlag.value = value
    //触发自定义事件:将医院等级参数回传纤父组件
    $emit('getLevel', value)
}
const changeActiveFlag = () => {
    activeFlag.value = ''

    changeLevel(activeFlag.value)
}
const getLevel = async () => {
    var result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Hostype')
    levelArr.value = result.data
}
var $emit = defineEmits(['getLevel'])
</script>

<style lang='scss' scoped>
@import "../../style/home/choose"
</style>
