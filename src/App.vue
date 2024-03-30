<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <!-- 路由展示 -->
      <router-view></router-view>
    </div>
    <!-- 底部全局组件 -->
    <HospitalBottom />
    <Login />
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 1200px;

  .content {
    width: 1200px;
    min-height: calc(100vh - 120px);
    margin-top: 70px;
  }

}
</style>