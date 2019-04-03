<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside width="200">
        <el-button id="switch-nav" v-on:click="isCollapse = !isCollapse" icon="el-icon-tickets"></el-button>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo left-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
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
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">营销</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-printer"></i>
            <span slot="title">数据</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-news"></i>
            <span slot="title">财务</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-bell"></i>
            <span slot="title">门店</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="font-size: 12px">
          <el-row :gutter="20">
            <el-col :span="16">
              <div class="grid-content bg-purple top-panel">
                <div class="panel-icon"><i class="el-icon-rank"></i></div>
                <div class="panel-icon"><i class="el-icon-document"></i></div>
                <div class="panel-search">
                  <el-input placeholder="请输入关键词进行功能搜索..." class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align:right;height:60px;line-height:60px;">
                <div class="logout"><i class="el-icon-circle-close-outline"></i></div>
                <div class="welcome"><span>文森，欢迎您！</span></div>
                <div class="header"><img src="./assets/header.png" alt=""></div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="20" class="main-panel"><div class="grid-content bg-purple"><router-view/></div></el-col>
            <el-col :span="4" class="right-panel">
              <div class="grid-content bg-purple">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>订单信息</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>内容公告</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>佣金提现</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>评价</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>系统提示</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </div>
            </el-col>
          </el-row>
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
.el-header {background-color: #ffffff;color: #333;line-height: 60px;padding-left:0;}
.el-aside {color: #333;background: #24303c;min-height:900px;overflow:hidden;padding-top: 60px;border-right: solid 1px #e6e6e6;}
#switch-nav {display: block;width: 100%;border-radius: 0;border:none;background: #2b394a;color: #FFF;}
.el-aside span:first-child {background: #B3C0D1;text-align: center;display: block;}
.el-aside .el-menu {border-right: none;background-color: #18222e !important;}
.el-aside .left-menu:not(.el-menu--collapse) {width: 190px; min-height: 100%;background: #24303c;color: #FFF;}
.left-menu .el-menu-item {color: #FFF;border-left:3px solid #18222e;}
.left-menu .el-menu-item:focus, .left-menu .el-menu-item:hover {background: #2b394a;border-left:3px solid #409EFF}
.top-panel .panel-icon {border-right: 1px solid #f5f7f9;width: 50px;text-align: center;display: inline-block;}
.top-panel .panel-icon i {font-size: 20px;}
.top-panel .panel-search {border-right: 1px solid #f5f7f9;display: inline-block;}
.top-panel .el-input-group {width: 340px;}
.top-panel .el-input-group .el-input__inner {border:none;}
.top-panel .el-input-group .el-input-group__append {border:none;background: #FFF;}
.top-panel .el-input-group .el-button--default {font-size: 17px;}
.header {line-height: 60px;padding-top: 7px;float: right;margin-right:20px;}
.header img {width: 40px;border-radius: 40px;}
.welcome {display: block;height: 60px;line-height: 60px;float: right;font-size: 16px;font-weight: 600;border-right: 1px solid #f5f7f9;margin-right: 20px;color: #797979;}
.logout {float:right;font-size: 20px;font-weight: 600;width: 50px;text-align: center;}
.el-main {padding:0;}
.el-row {margin-left: 0 !important;margin-right: 0 !important;}
.main-panel{padding-left: 0 !important;padding-right: 0 !important;}
.right-panel {background: #FFF;min-height: 900px;}
.right-panel .el-menu {border-right: none;}
</style>
