<template>
  <div>
    <form @submit.prevent="add()">
      <div class="form-group">
        <label>入住日期</label>
        <input v-model="order.start" type="date" class="form-control" />
      </div>
      <div class="form-group">
        <label>退房日期</label>
        <input v-model="order.end" type="date" class="form-control" />
      </div>
      <div class="form-group">
        <label>订单状态</label>
        <select v-model="order.status">
          <option disabled>请选择订单状态</option>
          <option>预定</option>
          <option>入住</option>
          <option>完成</option>
        </select>
      </div>

      <div class="form-group">
        <h2>添加入住人员信息</h2>
        <h3>已添加：</h3>
        <p v-for="guest in order.guests" v-bind:key="guest.idCard">{{guest.name}}</p>
      </div>

      <form @submit.prevent="addGuest()">
        <div class="form-group">
          <label>身份证</label>
          <input v-model="guestToAdd.idCard" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>姓名</label>
          <input v-model="guestToAdd.name" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>性别</label>
          <select v-model="guestToAdd.gender" class="form-control">
            <option disabled value>请选择性别</option>
            <option>男</option>
            <option>女</option>
            <option>非二元性别</option>
          </select>
        </div>
        <div class="form-group">
          <label>手机号码</label>
          <input v-model="guestToAdd.phone" type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </form>

      <button type="submit" class="btn btn-primary">提交</button>
      <button @click.prevent="goPrev" class="btn btn-default">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "OrderAdd",
  props: {
    roomId: Number,
  },
  data() {
    return {
      order: {
        room: { id: null },
        start: null,
        end: null,
        status: null,
        guests: []
      },
      guestToAdd: {
          id: null,
          idCard: null,
          name: null,
          gender: null,
          phone: null,
        },
    };
  },
  created() {
    this.order.room.id = this.roomId;
  },
  methods: {
    add() {
      this.axiosJSON
        .post("order/add", this.order)
        .then((response) => {
          console.log(response);
          this.$router.push("/order");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addGuest() {
      console.log(this.guestToAdd);
      this.axiosJSON
        .post("guest/add-or-modify", this.guestToAdd)
        .then((response) => {
          console.log(response);
          this.order.guests.add(response.data.model);
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