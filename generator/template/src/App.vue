<!--
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-20 18:58:05
 * @LastEditTime: 2019-08-21 11:47:44
 * @LastEditors: Devin Shi
 * @Description: 
 -->
<template>
  <div id="app">
    <div class="pages">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "~@/assets/less/app.less";

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
