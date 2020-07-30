<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">编号</th>
          <th scope="col">房间代码</th>
          <th scope="col">房间类型</th>
          <th scope="col">入住时间</th>
          <th scope="col">退房时间</th>
          <th scope="col">订单状态</th>
          <th scope="col">入住客户</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderList" v-bind:key="order.id">
          <th scope="row">{{order.id}}</th>
          <td>{{order.room.code}}</td>
          <td>{{order.room.type.name}}</td>
          <td>{{order.start}}</td>
          <td>{{order.end}}</td>
          <td>{{order.status}}</td>
          <td>
            <ul>
              <li v-for="guest in order.guests" v-bind:key="guest.id">{{guest.name}}</li>
            </ul>
          </td>
          <td>
            <a @click="markAsBefore(order)" class="btn btn-info">标记为已预定</a>
            <a @click="markAsCurrent(order)" class="btn btn-warning">标记为已入住</a>
            <a @click="markAsAfter(order)" class="btn btn-success">标记为已退房</a>
            <a @click="deleteOrder(order.id)" class="btn btn-danger">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      orderList: [
        {
          id: 0,
          room: { code: "315", type: { name: "四人间" } },
          start: new Date("December 17, 1995 03:24:00").toISOString().split('T')[0],
          end: new Date("December 17, 2995 03:24:00").toISOString().split('T')[0],
          status: "绝赞活跃中",
          guests: [
            { name: "大力" },
            { name: "紫藤" },
            { name: "龙龙" },
            { name: "楠楠" },
          ],
        },
      ],
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
        .get("order/query/all", {
          params: {},
        })
        .then((response) => {
          console.log(response);
          this.orderList = response.data.models;
        });
    },
    deleteOrder(order_id) {
      let confirmResult = confirm("确认删除？");
      if (!confirmResult) {
        return;
      }
      this.axiosJSON
        .post("order/remove", {
          id: order_id,
        })
        .then((response) => {
          console.log(response);
          this.getList();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    markAsBefore(order) {
      this.axiosJSON
        .post("order/modify", {
          id: order.id,
          status: "预定",
        })
        .then((response) => {
          console.log(response);
          order.status = "预定";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    markAsCurrent(order) {
      this.axiosJSON
        .post("order/modify", {
          id: order.id,
          status: "入住",
        })
        .then((response) => {
          console.log(response);
          order.status = "入住";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    markAsAfter(order) {
      this.axiosJSON
        .post("order/modify", {
          id: order.id,
          status: "退房",
        })
        .then((response) => {
          console.log(response);
          order.status = "退房";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style>
</style>
