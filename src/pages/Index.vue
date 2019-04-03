<template>
  <div class="index">
    <div class="containerbox">
      <!-- 当前位置 -->
      <current-location :info="currentInfo"></current-location>
      <!-- 主窗口 -->
      <div class="wrap">
        111111
      </div>
    </div>
  </div>
</template>

<script>
import CurrentLocation from '@/components/CurrentLocation' // 头部

export default {
  name: 'Index',
  components: {
    // 组件注册
    CurrentLocation
  },
  data () {
    return {
      currentInfo: {
        'name': '当前位置：',
        'title': '首页'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerbox{height:100%; width:100%;}
  .wrap{ width:100%; background-color:#FFFFFF}
</style>
