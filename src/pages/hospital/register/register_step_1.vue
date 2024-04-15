<template>
    <div class="warp">
        <div class="top">
            <span class="hosname">北京人民医院</span>
            <span class="line"></span>
            <span>专科</span>
            <span class="dot">·</span>
            <span class="hospitaldepartment">多发性硬化专科门诊</span>
        </div>
        <div class="center">
            <h1 class="time">2023年6月3日</h1>
            <div class="container">
                <div class="item" v-for="item in 6" :key="item" @click="">
                    <div class="date">2023-06-03 周六</div>
                    <div class="state">有号</div>
                </div>
            </div>
            <el-pagination layout="prev, pager, next" :total="50" />

        </div>
    </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { reqHospitalWork } from '@/api/hospital';
import { useRoute, useRouter } from 'vue-router';
import { HospitalWorkResponseData } from '@/api/hospital/type';

//获取路由对象
var route = useRoute()
//获取路由器
var router = useRouter()

var pagenum = ref<number>(0)
var pagesize = ref<number>(10)

onMounted(() => {
    getWorkData()
})

const getWorkData = async () => {
    let result: HospitalWorkResponseData = await reqHospitalWork(pagenum.value, pagesize.value, route.query.hoscode as string, route.query.depcode as string)
    console.log(result);

}
</script>

<style lang='scss' scoped>
.warp {
    .top {
        display: flex;
        align-items: center;
        line-height: 16px;
        color: #7f7f7f;
        margin-left: 10px;

        .line {
            width: 1px;
            height: 16px;
            background-color: #7f7f7f;
            align-items: center;
        }

        span {
            margin: 4px 4px;
        }
    }

    .center {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .time {
            margin: 30px 0;
        }

        .container {
            display: flex;


            .item {
                width: 150px;
                height: 80px;
                border: 2px solid skyblue;
                margin: 0 20px;

                .date {
                    width: 100%;
                    height: 40%;
                    text-align: center;
                    line-height: 30px;
                    background-color: skyblue;
                    font-weight: 700;
                }

                .state {
                    text-align: center;
                    margin: 12px 0;
                }
            }
        }
    }
}
</style>
