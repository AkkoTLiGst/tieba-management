<template>
  <div class="header">
    <div class="left">
      <i-ep-Expand @click="changeSideView" v-show="sideView"></i-ep-Expand>

      <i-ep-Fold @click="changeSideView" v-show="!sideView"></i-ep-Fold>

      <span>贴吧后台管理</span>
    </div>

    <div class="right">
      <i-ep-Bell></i-ep-Bell>


      <div class="userName">
        <i-ep-avatar class="avatar"></i-ep-avatar>

        <el-dropdown trigger="click">
          <span>
            {{ store.user.name }}
            <i-ep-ArrowDown style="margin-left: 4px"/>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item >个人中心</el-dropdown-item>
              <el-dropdown-item >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {userStore} from "../store";
import {ref} from "vue";

const store = userStore();

//切换显示侧边栏的方式
const sideView = ref(false);
const changeSideView = () => {
  sideView.value = !sideView.value;
}


</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  background-color: #242f42;
  height: 70px;
  color: white;

  .left {
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    span {
      margin-left: 10px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .userName {
      margin-left: 20px;
      font-size: 12px;
      display: flex;
      align-items: center;

      span {
        margin: 0 0 0 10px;
        display: flex;
      }

      .avatar {
        font-size: 16px;
        background-color: white;
        color: black;
        border-radius: 50%;
        padding: 2px;
      }

      :deep(.el-dropdown){
        border: none;
        color: white;
      }
    }

  }
}

</style>