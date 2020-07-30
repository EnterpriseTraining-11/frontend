<template>
  <div>
    <form class="form-inline">
      <div class="input-group">
        <span class="input-group-addon">起始时间</span>
        <input v-model="start" type="date" class="form-control" />
      </div>
      <div class="input-group">
        <span class="input-group-addon">结束时间</span>
        <input v-model="end" type="date" class="form-control" />
      </div>
    </form>

    <div class="panel">
      <div class="panel-heading">区间收入</div>
      <div class="panel-body">
        <h1 class="text-success">{{income}}</h1>
      </div>
    </div>

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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StatisticList",
  data() {
    return {
      orderList: [
        {
          id: 0,
          room: { code: "315", type: { name: "四人间" } },
          start: new Date("December 17, 1995 03:24:00")
            .toISOString()
            .split("T")[0],
          end: new Date("December 17, 2995 03:24:00")
            .toISOString()
            .split("T")[0],
          status: "绝赞活跃中",
          guests: [
            { name: "大力" },
            { name: "紫藤" },
            { name: "龙龙" },
            { name: "楠楠" },
          ],
        },
      ],
      start: new Date().toISOString().split("T")[0],
      end: new Date().toISOString().split("T")[0],
      income: 0,
    };
  },
  watch: {
    start(newStart, oldStart) {
      this.getStatistic();
    },
    end(newEnd, oldEnd) {
      this.getStatistic();
    },
  },
  created() {
    this.end = new Date(this.start);
    console.log(this.end)
    this.end = new Date(new Date(this.end).getTime() + 24*60*60*1000);
    console.log(this.end)
    this.end = this.end.toISOString().split("T")[0];
    console.log(this.end)
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
          this.getStatistic();
        });
    },
    getStatistic() {
      let start = new Date(this.start);
      let end = new Date(this.end);
      let income = 0;
      for (let order in this.orderList) {
        order = this.orderList[order];
        let orderStart = new Date(order.start);
        let orderEnd = new Date(order.end);
        if (start <= orderStart < end) {
          let livingTime = orderEnd - orderStart;
          let livingDays = Math.round(livingTime / (1000 * 60 * 60 * 24));
          income += order.room.type.price * livingDays;
        }
      }
      this.income = income;
    },
  },
};
</script>