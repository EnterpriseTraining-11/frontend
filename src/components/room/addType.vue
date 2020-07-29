<template>
  <div>
    <h2 class="form-group">增加类型</h2>
    <form @submit.prevent="add()">
      <div class="form-group">
        <label for="exampleInputEmail1">类型名称</label>
        <input v-model="room.code" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">价格</label>
        <input v-model="room.code" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">最大人数</label>
        <input v-model="room.code" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">信息</label>
        <input v-model="room.code" type="text" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
      <button @click="goPrev">取消</button>
    </form>
  </div>
</template>

<script>

import router from "../../router";

export default {
  name: "RoomAddType",
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
        .post("roomType/add", this.room)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPrev(){
        router.go(-1);
    }
  }
};
</script>

<style>
</style>
