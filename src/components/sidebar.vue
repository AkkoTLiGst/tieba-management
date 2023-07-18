<template>
  <div class="sideBar">
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Odometer} from "@element-plus/icons-vue";


// 设置菜单
const items = [
  {
    title: '首页',
    icon: Odometer
  },
  {
    title: '消息',
    icon: Odometer
  }
]
</script>

<style scoped lang="less"></style>