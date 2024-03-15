<template>
  <el-card style="width: 100%; box-sizing: border-box">
    <template #header>
      <div class="card-header">
        <span>{{ user.name }}</span>
      </div>
    </template>
    <p class="text item">{{ user.email }}</p>
    <p class="text item">{{ user.role }}</p>
    <p class="text item">
      <el-button @click="sendData">更新</el-button>
    </p>
  </el-card>
</template>

<script setup>
defineProps(["user", "sendData"]);
</script>

<style lang="scss" scoped>
</style>