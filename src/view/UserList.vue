<template>
  <div style="border: 1px solid; background-color: #fff">
    <el-table :data="new_data" style="width: 100%">
      <el-table-column prop="groupId" label="groupId" />
      <el-table-column prop="groupName" label="groupName"> </el-table-column>
      <el-table-column type="expand">
        <template #default="scope">
          <el-table :data="scope.row.users">
            <el-table-column
              prop="name"
              label="name"
              :filters="userFilters(scope.row.users)"
              :filter-method="filterHandler"
            />
            <el-table-column prop="email" label="email" />
            <el-table-column prop="role" label="role" />
            <el-table-column prop="createdAt" label="createdAt" sortable>
              <template #default="scope">
                {{ timeFormat(scope.row.createdAt) }}
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex">
      <el-pagination
        small
        background
        v-model:current-page="pageinfo.currentPage"
        :page-size="3"
        layout="prev, pager, next"
        :total="obj.data.length"
        class="mt-4"
        style="margin: auto"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import dayjs from "dayjs";
const pageinfo = reactive({
  currentPage: 1,
  pageSize: 3,
});
const obj = reactive({
  status: "success",
  data: [
    {
      groupId: 1,
      groupName: "Admin Group",
      users: [
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
        // 更多用户...
      ],
    },
    {
      groupId: 2,
      groupName: "Editor Group",
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
      ],
    },
    {
      groupId: 3,
      groupName: "Admin Group",
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
      ],
    },
    {
      groupId: 4,
      groupName: "Admin Group",
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
      ],
    },
    {
      groupId: 5,
      groupName: "Admin Group",
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          createdAt: "2023-01-01T00:00:00Z",
        },
      ],
    },
  ],
});
const timeFormat = computed(() => (createdAt) => {
  return dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss");
});
const filterHandler = (value, row, column) => {
  const property = column["property"];
  return row[property] === value;
};
const new_data = computed(() => {
  return obj.data.slice(
    (pageinfo.currentPage - 1) * pageinfo.pageSize,
    pageinfo.currentPage * pageinfo.pageSize
  );
});
const userFilters = computed(
  () => (users) =>
    users.reduce((arr, user) => {
      arr.push({ text: user.name, value: user.name });
      return arr;
    }, [])
);
</script>

<style  scoped>
</style>