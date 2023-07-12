<template>
  <div>

    <el-form id="loginForm" ref="form" :model="form" label-width="200px">
      <el-form-item label="账号:">
        <el-input type="text" placeholder="请输入账号" v-model="form.name"></el-input>
        <el-label>{{form.name}}</el-label>
      </el-form-item>
      <el-form-item label="父传子:">
        <el-input type="text" placeholder="参数" v-model="form.parms"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="open">登录</el-button>
    </el-form>
    <Child :parent="form.parms" @childV="childByValue"></Child>
  </div>


</template>
<script>
  import Child from './child.vue';
  export default {
    name: "Content",
    components: {
      Child // 注册子组件
    },
    data() {
      return {
        form: {
          name: "",
          password: "",
          parms: ""
        },
      }
    },
    methods: {
      open() {
        this.$confirm('是否登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '登录成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      childByValue: function (childV) {
        this.form.name = childV;
      }

    },
  }

</script>
<style>
  #loginForm {
    margin-top: 60px;

  }

</style>
