<template>
    <form @submit.prevent="modify()">
        <div class="form-group">
            <label for="exampleInputEmail1">编码</label>
            <input v-model="room.code" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">类型</label>
            <select v-model="room.type.id"  class="form-control">
                <option disabled value="">请选择房间类型</option>
                <option v-for="type in typeList" v-bind:key="type.id" value="type.id">{{type.name}}</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">提交</button>
        <button @click="backToList" class="btn btn-default">取消</button>
    </form>
</template>

<script>
    const axios = require('axios');
    import router from '../../router'
    
    export default {
        name: "TypeModify",
        data() {
            return {
                type: {
                    id:null,
                    name: null,
                    price: null,
                    max_num:null,
                    message:null
                }
            };
        },
        methods: {
            modify() {
                axios.post('http://localhost:2333/type/modify', this.type)
                  .then(response=> {
                    console.log(response);
                    router.push('/typeList')
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
