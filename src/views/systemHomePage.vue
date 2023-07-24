<script setup lang="ts">
import {userStore} from "../store";
import {onMounted, reactive, ref} from "vue";
import * as echarts from 'echarts';
import {systemBar, systemLine} from "../echarts";

const store = userStore();

// 代办事项
const todoList = reactive([
  {
    title: '代办111111111',
    status: false
  },
  {
    title: '代办2',
    status: false
  },
  {
    title: '代办3',
    status: false
  },
  {
    title: '代办4',
    status: false
  },
  {
    title: '代办5',
    status: false
  },
])

// 柱状图
const barCharts = ref();
// 折线图
const lineCharts = ref();

const postBar = [20, 30, 40, 50, 60, 80, 100];
const post = [20, 40, 60, 80, 20, 30, 100];
const user = [60, 80, 100, 20, 40, 50, 10];

function initBar() {
  const myBarEcharts = echarts.init(barCharts.value);
  myBarEcharts.setOption(systemBar(postBar, post, user));

  const myLineEcharts = echarts.init(lineCharts.value)
  myLineEcharts.setOption(systemLine(postBar, post, user));
}

onMounted(() => {
  initBar();
})
</script>

<template>
  <div>
    <!--信息行-->
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="leftCard" shadow="hover">
          <div class="user">
            <i-ep-avatar class="avatar"></i-ep-avatar>
            <div class="username">
              <span>{{ store.user.name }}</span>
              <span>超级管理员</span>
            </div>
          </div>

          <div class="load">
            <span>上次登录事件:</span>
            <span>2023-8-1</span>
            <span>上次登录地点:</span>
            <span>南京</span>
          </div>
        </el-card>
        <el-card class="leftCard" shadow="hover">
          <template #header>
            <div style="padding: 5px 0">系统状况</div>
          </template>
          CPU占用
          <el-progress :percentage="79.4" color="#42b983"></el-progress>
          内存占用
          <el-progress :percentage="14" color="#f1e05a"></el-progress>
          磁盘IO
          <el-progress :percentage="5.6"></el-progress>
          负载状态
          <el-progress :percentage="1" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="leftRow">
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="topCard">
                <i-ep-user class="avatar" style="background-color: #4c88f1"></i-ep-user>
                <div class="data">
                  <span style="color: #4c88f1">{{ 123 }}</span>
                  <span>帖子总数</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="topCard">
                <i-ep-ChatDotRound class="avatar" style="background-color: #66d670"></i-ep-ChatDotRound>
                <div class="data">
                  <span style="color: #66d670">{{ 123 }}</span>
                  <span>用户总数</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="topCard">
                <i-ep-goods class="avatar" style="background-color: #ec6044"></i-ep-goods>
                <div class="data">
                  <span style="color: #ec6044">{{ 123 }}</span>
                  <span>帖吧总数</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-card shadow="hover" style="width: 100%; height: 403px">
          <template #header>
            <div class="todoTitle">
              <span>代办事项</span>
              <span>添加</span>
            </div>
          </template>
          <el-table :data="todoList" style="width: 100%">
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column :data="todoList" label="事项">
              <template #default="scope">
                <div :class="{'isDo': scope.row.status}">
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!--数据行-->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div ref="barCharts" class="bar"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div ref="lineCharts" class="bar"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(gray, .4);

  .avatar {
    width: 120px;
    box-sizing: border-box;
    height: 120px;
    border: 1px solid gray;
    border-radius: 50%;
    padding: 10px;
  }

  .username {
    margin-left: 50px;

    span {
      display: block;
      font-size: 30px
    }

    span:last-child {
      font-size: 14px;
      color: gray
    }

    text-align: center;
  }
}

.load {
  margin-top: 20px;
  color: rgba(gray, .7);
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  font-size: 14px;
}

.isDo {
  text-decoration: line-through;
  color: #999;
}

.leftRow {
  :deep(.el-card__body) {
    padding: 0
  }

  .topCard {
    display: flex;
    height: 100px;

    .avatar {
      width: 50px;
      height: 50px;
      padding: 25px;
      color: white;
    }

    .data {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      span {
        color: gray;
        font-size: 12px
      }

      span:first-child {
        font-size: 25px;
        font-weight: bold
      }
    }
  }
}

.todoTitle{
  display: flex;
  justify-content: space-between;
  span:last-child:hover{
    cursor: pointer;
  }
}

.leftCard {
  padding-bottom: 5px
}

.leftCard:last-child {
  padding-bottom: 18px;
}

:deep(.el-card) {
  margin-bottom: 20px;
  padding-bottom: 0;
}

.bar {
  height: 400px;
}
</style>