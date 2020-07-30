<template>
  <div>
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="panel" v-bind:class="{'panel-info': loggedIn,'panel-danger':!loggedIn }">
            <div class="panel-heading">{{user.name}}</div>
            <div class="panel-body">
              <a v-if="loggedIn" href="#">
                <i class="fa fa-circle text-success"></i>
                <span>Online<button @click="logout" class="btn btn-primary pull-right">Logout</button></span>
              </a>
              <a v-else href="#">
                <i class="fa fa-circle .text-secondary"></i>
                <span>Offline</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">HEADER</li>

          <li>
            <router-link to="/room">
              <i class="fa fa-link"></i>
              <span>房间</span>
            </router-link>
          </li>
          <li>
            <router-link to="/order">
              <i class="fa fa-link"></i>
              <span>订房</span>
            </router-link>
          </li>
          <li>
            <router-link to="/guest">
              <i class="fa fa-link"></i>
              <span>客户</span>
            </router-link>
          </li>
          <li>
            <router-link to="/statistic">
              <i class="fa fa-link"></i>
              <span>表单</span>
            </router-link>
          </li>
          <!-- Optionally, you can add icons to the links -->
          <!-- <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
                    <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
                    <li class="treeview">
                        <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="#">Link in level 2</a></li>
                            <li><a href="#">Link in level 2</a></li>
                        </ul>
          </li>-->
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
export default {
  name: "HomeLeft",
  props:{
    loginUser:Object
  },
  data() {
    return {
    };
  },
  created() {
  },
  computed:{
    user(){
      if(this.loginUser!=null){
        return this.loginUser;
      }
      return {name:"N/A"}
    },
    loggedIn(){
      return this.$store.state.loginUser!=null;
    }
  },
  methods:{
    logout(){
      this.$store.commit("logout");
      this.$router.push("/")
    }
  }
};
</script>

<style>
</style>
