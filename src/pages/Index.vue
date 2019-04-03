<template>
  <div class="index">
    <div class="containerbox">
      <div class="title">
        <div class="line-block"></div>
        <b class="current">当前位置：</b>
        <div class="current-color">首页</div>
      </div>
      <div class="wrap">
        1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerbox{height:100%; width:100%; position:fixed;}
  .title{height: 20px; width: 100%}
  .line-block{height:20px; width:2px; background-color:rgb(103,186,247); float: left;}
  .current{float:left;}
  .current-color{float: left;color:#2894FF}
  .wrap{height:100%; width:100%; background-color:#FFFFFF}
</style>
