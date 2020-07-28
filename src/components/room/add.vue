<template>
    <form @submit.prevent="add()">
        <div class="form-group">
            <label for="exampleInputEmail1">编码</label>
            <input v-model="room.code" type="text" class="form-control">
            <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">类型</label>
            <input v-model="room.type.id" type="number" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">提交</button>
        <a href="tolist.do" class="btn btn-default">取消</a>
    </form>
</template>

<script>
    const axios = require('axios');
    import router from '../../router'

    export default {
        name: "RoomAdd",
        data() {
            return {
                room: {
                    code: null,
                    type: {
                        id: null
                    }
                }
            };
        },
        methods: {
            add() {
                axios.post('http://localhost:2333/room/add', this.room)
                  .then(response=> {
                    console.log(response);
                    router.push('/room')
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
