<template>
  <div class="current-location">
    <div class="title">
      <div class="line-block"></div>
      <div class="current">{{info.name}}</div>
      <div class="current-color">{{info.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentLocation',
  props: {
    info: {
      type: [Array, Object],
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{height: 1.5rem; width: 100%; line-height: 20px; margin: 20px 0 20px 0;}
  .line-block{height:20px; width:5px;; background-color:rgb(103,186,247); float: left; margin-right: 0.5rem;}
  .current{float:left; font-weight: 600;}
  .current-color{float: left; font-weight: 500; color:rgb(54, 121, 254)}
</style>
