<template>
  <div>
    <h2 class="form-group">增加类型</h2>
    <form @submit.prevent="add()">
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
export default {
  name: "RoomAddType",
  data() {
    return {
      type: {
          name:null,
          price:null,
          maxNum:null,
          message:null
        }
    };
  },
  methods: {
    add() {
        console.log("add");
      this.axiosJSON
        .post("roomType/add", this.type)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPrev(){
        this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
