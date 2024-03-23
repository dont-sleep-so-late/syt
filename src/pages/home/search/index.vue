<template>
    <!-- 搜索模块 -->
    <div class="search">
        <el-autocomplete v-model="hosname" :fetch-suggestions="fetchData" :trigger-on-focus="false" clearable
            placeholder="请输入医院名称" @select="handleSelect" />
        <el-button type="primary"><el-icon color="#fff">
                <Search />
            </el-icon></el-button>
    </div>
</template>

<script lang='ts' setup>
import { reqHospitalInfo } from '@/api/home';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

//创建路由对象
var router = useRouter();

defineOptions({
    name: 'search'
})

//收集搜索的关键字(医院的名字)
var hosname = ref('')

//顶部组件的回调
const fetchData = async (keyword: string, cb: any) => {
    //当用户输入完关键字次函数会执行一次，发请求获取需要展示的数据即可
    const result = await reqHospitalInfo(keyword)
    //整理数据，变成人家组件需要数据格式
    var showData = result.data.map(item => {
        return {
            value: item.hosname, //展示医院的名字
            hoscode: item.hoscode//存储医院的编码
        }
    })
    cb(showData)
}

const handleSelect = async (item: any) => {
    router.push({
        path: '/hospital'
    })

}

</script>

<style lang='scss' scoped>
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    ////深度选择器: >>>    /deep/   ::v-deep
    // ::v-deep .el-input__wrapper {
    //     width: 600px;
    //     height: 50px;
    //     margin-right: 10px;
    // }
    :deep(.el-input__wrapper) {
        width: 600px;
        height: 50px;
        margin-right: 10px;
    }

    .el-button {
        width: 50px;
        height: 50px;
    }
}
</style>