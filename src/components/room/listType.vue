<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">编号</th>
          <th scope="col">类型名称</th>
          <th scope="col">价格</th>
          <th scope="col">最大人数</th>
          <th scope="col">信息</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="type in typeList" v-bind:key="type.id">
          <th scope="row">{{type.id}}</th>
          <td>{{type.name}}</td>
          <td>{{type.price}}</td>
          <td>{{type.maxNum}}</td>
          <td>{{type.message}}</td>
          <td>
            <router-link v-bind:to="'/room/modifyType/'+type.id" class="btn btn-default">修改</router-link>
            <a @click="deleteType(type.id)" class="btn btn-danger">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/room/addType" class="btn btn-default">增加</router-link>
    <button @click.prevent="goPrev" class="btn btn-default">取消</button>
  </div>
</template>

<script>
export default {
  name: "RoomListType",
  data() {
    return {
      typeList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.axiosJSON
        .get("roomType/query/all", {
          params: {},
        })
        .then((response) => {
          console.log(response);
          this.typeList = response.data.models;
        });
    },
    deleteType(type_id) {
      let confirmResult = confirm("确认删除？");
      if (!confirmResult) {
        return;
      }
      this.axiosJSON
        .post("roomType/remove", {
          id: type_id,
        })
        .then((response) => {
          console.log(response);
          this.getList();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPrev(){
        this.$router.go(-1);
    }
  },
};
</script>

<style>
</style>
