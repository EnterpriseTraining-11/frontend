<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">编号</th>
                    <th scope="col">代码</th>
                    <th scope="col">类型名称</th>
                    <th scope="col">价格</th>
                    <th scope="col">最大人数</th>
                    <th scope="col">信息</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orderList" v-bind:key="order.id">
                    <th scope="row">{{order.id}}</th>
                    <td>{{order.code}}</td>
                    <td>{{order.type.name}}</td>
                    <td>{{order.type.price}}</td>
                    <td>{{order.type.maxNum}}</td>
                    <td>{{order.type.message}}</td>
                    <td>
                        <router-link :to="{name: 'ModifyRoom',params: {orderId: order.id}}" class="btn btn-default">修改</router-link>
                        <a @click="deleteRoom(order.id)" class="btn btn-danger">删除</a>
                        <router-link to="/order/add" class="btn btn-default">查看</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/order/add" class="btn btn-default">增加</router-link>
    </div>
</template>

<script>


    export default {
        name: "OrderList",
        data() {
            return {
                orderList: [],
                page: 0,
                rows: 10,
                count: 0,
                pageCount: 0
            };
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.axiosJSON.get("order/query/all", {
                    params: {}
                }).then(response => {
                    console.log(response);
                    this.orderList = response.data.models;
                });
            },
            deleteRoom(order_id) {
                let confirmResult = confirm("确认删除？");
                if (!confirmResult) {
                    return;
                }
                this.axiosJSON.post('order/remove', {
                    id: order_id
                  })
                  .then(response=> {
                    console.log(response);
                    this.getList();
                  })
                  .catch(error=> {
                    console.log(error);
                  });

            }
        }
    }
</script>

<style>
</style>
