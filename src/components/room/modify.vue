<template>
  <form @submit.prevent="modify()">
    <div class="form-group">
      <label>ID</label>
      <input v-model="room.id" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>编码</label>
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
    <router-link to="/room/addType" class="btn btn-default">增加类型</router-link>
    <router-link to="/room/listType" class="btn btn-default">管理类型类型</router-link>
    <router-view></router-view>
  </form>
</template>

<script>
export default {
  name: "RoomModify",
  props: { roomId: Number },
  data() {
    return {
      room: { id: 0, code: "", type: { id: 0 } },
      typeList: [],
    };
  },
  created() {
    this.room.id = this.roomId;
    this.getTypeList();
    this.getOldVal();
  },
  methods: {
    modify() {
      this.axiosJSON
        .post("room/modify", this.room)
        .then((response) => {
          console.log(response);
          this.$router.push("/room");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTypeList() {
      this.axiosJSON
        .get("roomType/query/all", {
          params: {},
        })
        .then((response) => {
          console.log(response);
          this.typeList = response.data.models;
        });
    },
    getOldVal() {
      this.axiosJSON
        .get("room/query/id", { params: { id: this.room.id } })
        .then((response) => {
          console.log(response);
          this.room = response.data.model;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPrev() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>
