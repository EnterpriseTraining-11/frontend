<template>
  <div>
    <h2 class="form-group">修改类型</h2>
    <form @submit.prevent="modify()">
      <div class="form-group">
        <label>ID</label>
        <input v-model="type.id" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>类型名称</label>
        <input v-model="type.name" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>价格</label>
        <input v-model="type.price" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label>最大人数</label>
        <input v-model="type.maxNum" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label>信息</label>
        <input v-model="type.message" type="text" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
      <button @click.prevent="goPrev" class="btn btn-default">取消</button>
    </form>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "RoomModifyType",
  props: {
    typeId: Number,
  },
  data() {
    return {
      type: {
        id: null,
        name: null,
        price: null,
        maxNum: null,
        message: null,
      },
    };
  },
  created() {
    this.type.id = this.typeId;
    this.getOldVal();
  },
  methods: {
    modify() {
      this.axiosJSON
        .post("roomType/update", this.type)
        .then((response) => {
          console.log(response);
          router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOldVal() {
      this.axiosJSON
        .get("roomType/query/id", { params: { id: this.type.id } })
        .then((response) => {
          console.log(response);
          this.type = response.data.model;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPrev() {
      router.go(-1);
    },
  },
};
</script>

<style>
</style>
