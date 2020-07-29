<template>
  <div>
    <form @submit.prevent="add()">
      <div class="form-group">
        <label for="exampleInputEmail1">编码</label>
        <input v-model="room.code" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">类型</label>
        <select v-model="room.type.id" class="form-control">
          <option disabled value>请选择房间类型</option>
          <option v-for="type in typeList" v-bind:key="type.id" :value="type.id">{{type.name}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
      <button @click.prevent="goPrev" class="btn btn-default">取消</button>
      <router-link to="/room/add/addType" class="btn btn-default">增加类型</router-link>
      <router-link to="/room/add/listType" class="btn btn-default">管理类型类型</router-link>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "RoomAdd",
  data() {
    return {
      room: {
        code: null,
        type: {
          id: null,
        },
      },
      typeList: [],
    };
  },
  created() {
    this.getTypeList();
  },
  methods: {
    add() {
      this.axiosJSON
        .post("room/add", this.room)
        .then((response) => {
          console.log(response);
          router.push("/room");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTypeList() {
      this.axiosJSON.get("roomType/all", {
          params: {}
      }).then(response => {
          console.log(response);
          this.typeList = response.data.models;
      });
    },
    goPrev(){
        router.go(-1);
    }
  },
};
</script>

<style>
</style>
