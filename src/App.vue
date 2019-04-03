<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside width="200">
        <el-button id="switch-nav" v-on:click="isCollapse = !isCollapse" icon="el-icon-tickets"></el-button>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">店铺</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">商品</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">会员</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-goods"></i>
            <span slot="title">订单</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">营销</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-printer"></i>
            <span slot="title">数据</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-news"></i>
            <span slot="title">财务</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-bell"></i>
            <span slot="title">门店</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Tom</span>
        </el-header>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item),
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-header {background-color: #ffffff;color: #333;line-height: 60px;}
.el-aside {color: #333;background: #24303c;min-height:900px;overflow:hidden;padding-top: 60px;border-right: solid 1px #e6e6e6;}
#switch-nav {display: block;width: 100%;border-radius: 0;border:none;background: #2b394a;color: #FFF;}
.el-aside span:first-child {background: #B3C0D1;text-align: center;display: block;}
.el-aside .el-menu {border-right: none;background-color: #18222e !important;}
.el-menu-vertical-demo:not(.el-menu--collapse) {width: 200px; min-height: 100%;background: #24303c;color: #FFF;}
.el-menu-vertical-demo .el-menu-item {color: #FFF;}
.el-menu-item:focus, .el-menu-item:hover {background: #18222e;}
.main{background-color:#F0F0F0}
</style>
