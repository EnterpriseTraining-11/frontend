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
                <tr v-for="room in roomList" v-bind:key="room.id">
                    <th scope="row">{{room.id}}</th>
                    <td>{{room.code}}</td>
                    <td>{{room.type.name}}</td>
                    <td>{{room.type.price}}</td>
                    <td>{{room.type.maxNum}}</td>
                    <td>{{room.type.message}}</td>
                    <td>
                        <router-link v-bind:to="'/room/modify/'+room.id" class="btn btn-default">修改</router-link>
                        <a @click="deleteRoom(room.id)" class="btn btn-danger">删除</a>
                        <router-link to="/room/add" class="btn btn-default">查看</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/room/add" class="btn btn-default">增加</router-link>
    </div>
</template>

<script>


    export default {
        name: "RoomList",
        data() {
            return {
                roomList: [],
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
                this.axiosJSON.get("room/query/all", {
                    params: {}
                }).then(response => {
                    console.log(response);
                    this.roomList = response.data.models;
                });
            },
            deleteRoom(room_id) {
                let confirmResult = confirm("确认删除？");
                if (!confirmResult) {
                    return;
                }
                this.axiosJSON.post('room/remove', {
                    id: room_id
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
