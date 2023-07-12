<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><a  @click="goUser" target="_blank">主页</a></el-menu-item>
      <el-menu-item index="2"><router-link to="/Content">内容</router-link></el-menu-item>
    </el-menu>
    <br>

    <router-view></router-view>
  </div>
</template>
<script>
export default {

  name: 'App',
  methods:{
    goUser(){
      this.$router.push({ path: `/user/1` })
}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
