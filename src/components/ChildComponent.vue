<template>
  <CardComponent
    v-for="user in data"
    :key="user.id"
    :user="user"
    :sendData="sendData"
  ></CardComponent>
</template>

<script setup>
import CardComponent from "../components/CardComponent.vue";
defineProps(["data", "sendData"]);
</script>

<style lang="scss" scoped>
</style>