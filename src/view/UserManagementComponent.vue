<template>
  <el-table
    :data="obj.data"
    style="width: 100%"
    :default-sort="{ prop: 'registrationDate', order: 'descending' }"
  >
    <el-table-column prop="username" label="username" />
    <el-table-column prop="email" label="email" />
    <el-table-column prop="registrationDate" label="registrationDate" sortable>
      <template #default="scope">
        {{ timeFormat(scope.row.registrationDate) }}
      </template>
    </el-table-column>
    <el-table-column prop="status" label="status">
      <template #default="scope">
        {{ scope.row.status.description }}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="300px">
      <template #default="scope">
        <el-button>编辑</el-button>
        <el-button @click="changeStatus(scope.row)">{{
          scope.row.status.code ? "禁用" : "启用"
        }}</el-button>
        <el-button @click="removeData(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogVisible" title="Tips" width="500">
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { ElMessageBox } from "element-plus";
import dayjs from "dayjs";
let dialogVisible = ref(false);
const obj = reactive({
  status: "success",
  data: [
    {
      _id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-02T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    {
      _id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-01T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    {
      _id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-05T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
    {
      _id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-07T00:00:00Z",
      status: { code: 1, description: "Active" },
    },
  ],
});
function changeStatus(row) {
  row.status.code = !row.status.code;
  row.status.description = row.status.code ? "Active" : "Disabled";
}
function removeData(index) {
  dialogVisible = true;
  ElMessageBox.confirm("你确定要删除吗?")
    .then(() => {
      obj.data.splice(index, 1);
    })
    .catch(() => {
      // catch error
    });
}
const timeFormat = computed(() => (createdAt) => {
  return dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss");
});
</script>

<style lang="scss" scoped>
</style>