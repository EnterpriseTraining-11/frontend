<template>
    <div id="app" class="wrapper">
        <!-- Main Header -->
        <HomeTop></HomeTop>
        <!-- Left side column. contains the logo and sidebar -->
        <HomeLeft></HomeLeft>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <section class="content container-fluid">
                <!--------------------------
              | Your Page Content Here |
              -------------------------->
                <router-view></router-view>
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Main Footer -->
        <HomeFooter></HomeFooter>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED JS SCRIPTS -->

    <!-- jQuery 3 -->
    <!-- <script src="bower_components/jquery/./assets/dist/jquery.min.js"></script>-->
    <!-- Bootstrap 3.3.7 -->
    <!-- <script src="bower_components/bootstrap/./assets/dist/js/bootstrap.min.js"></script>-->
    <!-- AdminLTE App -->
    <!-- <script src="./assets/dist/js/adminlte.min.js"></script>-->

    <!-- Optionally, you can add Slimscroll and FastClick plugins.
           Both of these plugins are recommended to enhance the
           user experience. -->

    <!--    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
    </div> -->
</template>

<script>
    import HomeLeft from "./components/common/HomeLeft.vue"
    import HomeTop from "./components/common/HomeTop.vue"
    import HomeFooter from "./components/common/HomeFooter.vue"
    export default {
        components: {
            HomeTop,
            HomeLeft,
            HomeFooter
        }
    };
</script>

<style>
    @import url("assets/bower_components/bootstrap/dist/css/bootstrap.min.css");
    @import url("assets/bower_components/font-awesome/css/font-awesome.min.css");
    @import url("assets/bower_components/Ionicons/css/ionicons.min.css");
    @import url("assets/dist/css/AdminLTE.min.css");
    @import url("assets/dist/css/skins/skin-blue.min.css");
    /*    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    } */
</style>
