<template>
    <div class="hospital">
        <!-- 左侧导航 -->
        <div class="menu">
            <el-menu :default-active="route.path" @select="changeRouter">
                <el-menu-item index="/hospital/register">
                    <span>预约挂号</span>
                </el-menu-item>
                <el-menu-item index="/hospital/detail">
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item index="/hospital/notice">
                    <span>预约须知</span>
                </el-menu-item>
                <el-menu-item index="/hospital/close">
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item index="/hospital/search">
                    <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧内容 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import useDetailStore from '@/store/modules/hospitalDetail'

var detailStore = useDetailStore()

const route = useRoute()
const router = useRouter()

onMounted(() => {
    detailStore.getHospital(route.query.hoscode as string);
    detailStore.getDepartment(route.query.hoscode as string);
})


const changeRouter = (index: string) => {
    router.push({
        path: index,
        query: {
            hoscode: route.query.hoscode
        }
    })
}
</script>

<style lang='scss' scoped>
.hospital {
    display: flex;
    margin-top: 20px;

    .menu {
        flex: 1.5;
    }

    .content {
        flex: 8.5;
    }

}
</style>