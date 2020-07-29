<template>
  <div>
    <form @submit.prevent="add()">
      <div class="form-group">
        <label>身份证</label>
        <input v-model="guest.idCard" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>姓名</label>
        <input v-model="guest.name" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>性别</label>
        <select v-model="guest.gender" class="form-control">
          <option disabled value>请选择性别</option>
          <option>男</option>
          <option>女</option>
          <option>非二元性别</option>
        </select>
      </div>
      <div class="form-group">
        <label>手机号码</label>
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
  props: { idCard: String },
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
  created() {
    this.guest.idCard = this.idCard;
  },
  methods: {
    add() {
      console.log(this.guest);
      this.axiosJSON
        .post("guest/add-or-modify", this.guest)
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
