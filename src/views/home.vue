<template>
  <vHeader/>
  <vSideBar/>
  <div class="contentBox" :class="{'contentLeft': side.showSideBar}">
    <div class="content">
      <!--通过v-slot从router-view中解构出Component-->
      <!--Component：要通过router-view渲染的组件-->
      <router-view v-slot="{Component}">
        <keep-alive name="move" mode="out-in">
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import vHeader from '../components/header.vue'
import vSideBar from  '../components/sidebar.vue'
import {sideBar} from "../store/sideBar.ts";
import {onMounted} from "vue";

const side = sideBar();

onMounted(() => {
    if(document.documentElement.clientWidth < 1500){
      side.sideBarEvent();
    }
});

</script>

<style scoped lang="less">
.contentBox{
  position: absolute;
  left: 250px;
  top: 70px;
  right: 0; bottom: 0;
  background: #f0f0f0;
  -webkit-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;

  .content{
    width: auto; height: 100%;
    margin: 10px 10px;
    overflow: scroll;
    padding: 10px;
  }
}
.contentLeft{
  left: 65px;
}

</style>