<template>
  <div>
    <h2 class="form-group">增加类型</h2>
    <form @submit.prevent="add()">
      <div class="form-group">
        <label for="exampleInputEmail1">身份证</label>
        <input v-model="guest.idCard" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input v-model="guest.name" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">性别</label>
        <select v-model="guest.gender" class="form-control">
          <option disabled value>请选择性别</option>
          <option>男</option>
          <option>女</option>
          <option>非二元性别</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">手机号码</label>
        <input v-model="guest.phone" type="text" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
      <button @click.prevent="goPrev" class="btn btn-default">取消</button>
    </form>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "AddAndModifyGuest",
  data() {
    return {
      guest: {
        idCard: null,
        name: null,
        gender: null,
        phone: null,
      },
    };
  },
  methods: {
    add() {
      console.log(this.guest);
      this.axiosJSON
        .post("guest/addAndModify", this.guest)
        .then((response) => {
          console.log(response);
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
