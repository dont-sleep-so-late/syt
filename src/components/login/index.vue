<template>
    <div class="login_container">
        <el-dialog v-model="dialogFormVisible" title="用户登录" width="500">

        </el-dialog>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const dialogFormVisible = ref(false)

</script>

<style lang='scss' scoped></style>