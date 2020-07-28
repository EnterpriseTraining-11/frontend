<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">编号</th>
                    <th scope="col">名称</th>
                    <th scope="col">价格</th>
                    <th scope="col">最大人数</th>
                    <th scope="col">信息</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in data" v-bind:key="entry.name">
                    <th scope="row">{{entry.code}}</th>
                    <td>{{entry.name}}</td>
                    <td>{{entry.price}}</td>
                    <td>{{entry.max_num}}</td>
                    <td>{{entry.message}}</td>
                    <td>
                        <button class="btn btn-default">修改</button>
                        <button class="btn btn-danger">删除</button>
                        <button class="btn btn-default">查看</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "RoomMain",
        data() {
            return {};
        }
    }
</script>

<style>
</style>
