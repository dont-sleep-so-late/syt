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
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    margin-top: 70px;
  }

}
</style>