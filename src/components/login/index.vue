<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visiable" title="用户登录" width="500">
            <el-row>
                <!-- 左侧 -->
                <el-col :span="12">
                    <div class="login">
                        <el-form>
                            <el-form-item>
                                <el-input :prefix-icon="User" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input :prefix-icon="Lock" placeholder="请输入验证码"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="12">123</el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script lang='ts' setup>
import useUserStore from '@/store/modules/user'
import { User, Lock } from '@element-plus/icons-vue'

var userStore = useUserStore()

</script>

<style lang='scss' scoped>
.login_container {
    :deep(.el-dialog__body) {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .login {
        padding: 50px 30px;
    }
}
</style>