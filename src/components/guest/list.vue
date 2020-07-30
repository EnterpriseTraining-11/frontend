<template>
  <div>
    <form @submit.prevent="getList" @reset="resetFilter" class="form-inline">
      <div class="input-group">
        <span class="input-group-addon">身份证号</span>
        <input v-model="filter.idCard" type="text" class="form-control" />
      </div>

      <div class="input-group">
        <span class="input-group-addon">姓名</span>
        <input v-model="filter.name" type="text" class="form-control" />
      </div>
      <div class="input-group">
        <span class="input-group-addon">性别</span>
        <input v-model="filter.gender" type="text" class="form-control" />
      </div>
      <div class="input-group">
        <span class="input-group-addon">手机号码</span>
        <input v-model="filter.phone" type="text" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">查询</button>
      <button type="reset" class="btn btn-default">重置</button>
    </form>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">编号</th>
          <th scope="col">身份证号</th>
          <th scope="col">姓名</th>
          <th scope="col">性别</th>
          <th scope="col">手机号码</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guest in guestList" v-bind:key="guest.id">
          <th scope="row">{{guest.id}}</th>
          <td>{{guest.idCard}}</td>
          <td>{{guest.name}}</td>
          <td>{{guest.gender}}</td>
          <td>{{guest.phone}}</td>
          <td>
            <router-link
              :to="{name: 'AddAndModifyGuest',params: {idCard: guest.idCard}}"
              class="btn btn-default"
            >修改</router-link>
            <a @click="deleteGuest(guest.id)" class="btn btn-danger">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GuestList",
  data() {
    return {
      guestList: [
        {
          id: 0,
          idCard: 0,
          name: "type",
          gender: "男",
          phone: "10086",
        },
      ],
      filter: {
        idCard: null,
        name: null,
        gender: null,
        phone: null,
      },
      page: 0,
      rows: 10,
      count: 0,
      pageCount: 0,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.axiosJSON
        .get("guest/query/all", {
          params: {
            idCard: this.filter.idCard,
            name: this.filter.name,
            gender: this.filter.gender,
            phone: this.filter.phone,
            page: this.page,
            rows: this.rows,
            count: this.count,
            pageCount: this.pageCount,
          },
        })
        .then((response) => {
          console.log(response);
          this.guestList = response.data.models;
        });
    },
    deleteGuest(guest_id) {
      let confirmResult = confirm("确认删除？");
      if (!confirmResult) {
        return;
      }
      this.axiosJSON
        .post("guest/remove", {
          id: guest_id,
        })
        .then((response) => {
          console.log(response);
          this.getList();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resetFilter() {
      this.filter = {
        idCard: null,
        name: null,
        gender: null,
        phone: null,
      };
      this.getList();
    },
  },
};
</script>