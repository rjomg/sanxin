<template>
  <div class="decoration">
    <el-row :gutter="20">
      <el-col :span="3" class="left-el-col">
        <div class="grid-content bg-purple left">
          <LeftPanel :navList="navList"></LeftPanel>
        </div>
      </el-col>
      <el-col :span="17"><div class="grid-content bg-purple maing">main</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple right">right</div></el-col>
    </el-row>
  </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel'
export default {
  name: 'ShopDecoration',
  components: {
    LeftPanel
  },
  data () {
    return {
      navList: [
        {name: '店铺首页', link: '/'},
        {name: '店铺装修', link: '/'},
        {name: '订单申诉', link: '/'},
        {name: '评价管理', link: '/'},
        {name: '退货地址', link: '/'},
        {name: '配送方式', link: '/'}
      ]
    }
  }
}
</script>

<style scoped>
.left {min-height: 900px;background: #FFF;}
.el-row {margin-left:0 !important;margin-right:0 !important;}
.left-el-col {padding-left:0 !important;}
</style>
