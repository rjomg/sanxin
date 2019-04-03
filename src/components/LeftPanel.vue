<template>
  <div class="leftPanel">
    <ul v-for="(item, key) in navList" :key="key">
      <li><router-link to="">{{item.name}}</router-link></li>
    </ul>
  </div >
</template>

<script>
export default {
  name: 'LeftPanel',
  data () {
    return {}
  },
  props: {
    navList: {
      type: [Array],
      required: true
    }
  }
}
</script>

<style scoped>
ul {margin: 0;padding: 0;}
ul li {display: block;text-align: center;height: 60px;line-height: 60px;}
ul li a {text-decoration: none;color: #000;font-weight: 600;display: block;}
ul li a:active, ul li a:hover, ul li a:focus{background: #d6e4ff;color: #4e88ff;}
</style>
