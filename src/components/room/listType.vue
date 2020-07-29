<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">编号</th>
          <th scope="col">代码</th>
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
          <td>{{type.max_num}}</td>
          <td>{{type.message}}</td>
          <td>
            <router-link to="/room/modifyType" class="btn btn-default">修改</router-link>
            <a @click="deleteType(type.id)" class="btn btn-danger">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/room/addType" class="btn btn-default">增加</router-link>
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
        .get("http://localhost:2333/type/all", {
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
        .post("type/delete", {
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
  },
};
</script>

<style>
</style>
