<template>
  <div class="container">
    <div style="width: 100%">
      <el-menu
        default-active="1"
        class="el-menu-demo content"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :ellipsis="false"
        style="position: sticky; top: 0; z-index: 999"
      >
        <el-menu-item index="1" @click="router.push('/productList')"
          >Test1</el-menu-item
        >
        <el-menu-item index="2" @click="router.push('/userlist')"
          >Test2</el-menu-item
        >
        <el-menu-item index="3" @click="router.push('/parentComponent')"
          >Test3</el-menu-item
        >
        <el-menu-item index="4" @click="router.push('/userManagementComponent')"
          >Test4</el-menu-item
        >
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style  scoped>
.container {
  width: 80%;
  max-height: 80vh;
  margin: 20px auto;
  border: 1px solid;
  overflow-y: scroll;
  transition: height 0.5s;
  display: flex;
}
.content {
  margin: auto;
  display: flex;
  justify-content: space-evenly;
}
</style>