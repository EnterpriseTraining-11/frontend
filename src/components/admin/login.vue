<template>
  <div class="login-box-body">
    <p class="login-box-msg">请输入登录信息</p>

    <form @submit.prevent="login()">
      <div class="form-group has-feedback">
        <input v-model="name" type="text" class="form-control" required placeholder="账号" />
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="password" type="password" class="form-control" required placeholder="密码" />
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <!-- /.col -->
        <div class="col-xs-12">
          <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
        </div>
        <!-- /.col -->
      </div>
    </form>
    <!-- /.social-auth-links -->
    <a href="#">忘记密码</a>
    <br />
    <a href="register.html" class="text-center">注册新用户</a>
    <P class="text-danger">{{errMsg}}</P>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      id: null,
      name: null,
      password: null,
      errMsg:""
    };
  },
  methods: {
    login() {
      this.axiosJSON
        .post("admin/login", {
          name: this.name,
          password: this.password,
        })
        .then((response) => {
          let user = response.data.model;
          if(user==null){
            this.errMsg = response.data.message;
            return;
          }
          this.$store.commit("login", user);
          this.$router.push(this.$route.query.redirect);
        });

      //DEBUG
    },
  },
};
</script>

<style>
</style>
