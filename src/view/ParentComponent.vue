<template>
  <div>
    <ChildComponentVue
      :data="obj.data"
      :sendData="sendData"
    ></ChildComponentVue>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import ChildComponentVue from "../components/ChildComponent.vue";
const obj = reactive({
  status: "success",
  data: [],
});
onMounted(() => {
  obj.data = users;
});
const users = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    createdAt: "2023-01-03T00:00:00Z",
  },
  {
    id: 2,
    name: "Doe",
    email: "john.doe@example.com",
    role: "admin",
    createdAt: "2023-01-02T00:00:00Z",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    createdAt: "2023-01-03T00:00:00Z",
  },
  {
    id: 4,
    name: "Doe",
    email: "john.doe@example.com",
    role: "admin",
    createdAt: "2023-01-02T00:00:00Z",
  },
]);
function sendData() {
  obj.data = users;
  console.log(obj.data);
  alert("更新成功");
}
</script>

<style   scoped>
</style>