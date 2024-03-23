<template>
    <div>
        <!-- 轮播图 -->
        <Carousel />
        <!-- 搜索模块 -->
        <Search />
        <!-- 主要内容展示区 -->
        <el-row :gutter=20>
            <el-col :span="20">
                <Level @getLevel="getLevel" />
                <Region @getRegion="getRegion" />
                <div class="hospital" v-if="hasHospitalArr.length > 0" v-loading="loading">
                    <Card class="item" v-for="item in hasHospitalArr" :key="item.id" :hospitalInfo="item" />
                    <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" layout=" prev, pager, next, jumper,sizes,->,total" :total="total"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </div>
                <el-empty v-else description="暂无数据" />
            </el-col>
            <el-col :span="4">
                <Tip />
            </el-col>
        </el-row>
    </div>
</template>

<script lang='ts' setup>
import Carousel from '@/pages/home/carousel/index.vue' //轮播图
import Search from '@/pages/home/search/index.vue'  //搜索组件
import Level from '@/pages/home/level/index.vue'  //等级组件
import Region from '@/pages/home/region/index.vue' //地区组件
import Card from '@/pages/home/card/index.vue' //卡片组件
import Tip from '@/pages/home/tip/index.vue' //卡片组件

import { onMounted, ref } from "vue";
import { resHospital } from "@/api/home/index";
import { Content, HospitalResponseData } from '@/api/home/type'

//分页器需要的数据
//分页器页码
var pageNum = ref<number>(1)
//分页器页数
var pageSize = ref<number>(10)
//总个数
var total = ref<number>(11)
//存储已有医院数据
var hasHospitalArr = ref<Content>([])
//存储医院的等级响应数据
var hostype = ref<string>('')
//存储医院的地区  
var districtCode = ref<string>('')

var loading = ref<boolean>(true)

onMounted(() => {
    getHospitalInfo()
})

//获取已有的医院的数据
const getHospitalInfo = async () => {
    loading.value = true
    //获取医院的数据:默认获取第一页、一页十个医院的数据
    let result: HospitalResponseData = await resHospital(pageNum.value, pageSize.value, hostype.value, districtCode.value);
    if (result.code == 200) {
        //存储已有医院数据
        hasHospitalArr.value = result.data.content
        total.value = result.data.totalElements
        loading.value = false

    }
}
const handleSizeChange = () => {
    pageNum.value = 1
    getHospitalInfo()
}
const handleCurrentChange = () => {
    getHospitalInfo()
}
//子组件自定义事件:获取儿子给父组件传递过来的等级参数
const getLevel = (value: string) => {
    hostype.value = value
    getHospitalInfo()
}
const getRegion = (value: string) => {
    districtCode.value = value
    getHospitalInfo()
}
</script>

<style lang='scss' scoped>
.hospital {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin: 10px 0;
    }

    .el-pagination {
        width: 100%;
    }
}
</style>