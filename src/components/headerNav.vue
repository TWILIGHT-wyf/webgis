<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="menuSelect" router="true">
      <el-menu-item index="/login">登录</el-menu-item>
      <el-menu-item index="/dashboard">仪表盘</el-menu-item>
      <el-menu-item index="/map">地图</el-menu-item>
      <el-menu-item index="/workorders">设施管理</el-menu-item>
      <el-menu-item index="/report">报表</el-menu-item>
      <el-menu-item index="/config">设置</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
