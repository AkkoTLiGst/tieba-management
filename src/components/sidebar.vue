<template>
  <div class="sideBar">
    <el-menu
        background-color="#324157"
        text-color='white'
        router
        :collapse="sidebar.showSideBar"
        :default-active="onRoutes"
        unique-opened
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is='item.icon'/>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="sub in item.subs">
              <el-menu-item :index="sub.index">
                {{ sub.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon"/>
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {Message, Odometer, Operation, Warning, View} from "@element-plus/icons-vue";
import {useRoute} from "vue-router";
import {computed} from "vue";
import {sideBar} from '../store/sideBar.ts'

const sidebar = sideBar();

// 设置菜单
const items = [
  {
    title: '系统首页',
    icon: Odometer,
    index: '/system'
  },
  {
    title: '常规管理',
    icon: Operation,
    index: '2',
    subs: [
      {
        title: '贴吧管理',
        index: '/postBar',
      },
      {
        title: '用户管理',
        index: '/user',
      },
      {
        title: '帖子管理',
        index: '/posts',
      },
    ]
  },
  {
    title: '通知消息',
    icon: Message,
    index: '/message',
  },
  {
    title: '数据图表',
    icon: Warning,
    index: '/charts',
  },
  {
    title: 'three.js建模',
    icon: View,
    index: '/threeJs'
  }
]

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});
</script>

<style scoped lang="less">
.sideBar {
  display: block;
  position: absolute;
  top: 70px; left: 0; bottom: 0;
  height: 100%;
  .el-menu{
    height: 100%;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .el-menu::-webkit-scrollbar {
    width: 0;
  }
}
</style>