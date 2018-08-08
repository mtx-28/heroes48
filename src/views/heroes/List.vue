<template>
    <div>
        <h2 class="sub-header">英雄管理</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
        
        <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="item.id">
                  <td>{{index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  
                  <td>
                    <!-- <a href="edit.html">edit</a> -->
                    <router-link :to="`/heroes/` + item.id">edit</router-link>
                    &nbsp;&nbsp;
                    <a href="javascript:void(0)" @click.prevent="handleDelete(item.id)">delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script>
//导入axios
  import axios from 'axios';

    export default {
      data() {
        return {
          list: []
        };
      },
      created(){
       this.loadData();
      },
      methods: {
        //加载列表数据
        loadData() {
             axios.get('http://localhost:3000/heroes')
              .then((response)=>{
                if(response.status === 200) {
                  
                  this.list = response.data;
                 
                }
              })
              .catch((err)=>{
                console.log(err);
              })
        },
        handleDelete(id) {
          axios.delete(`http://localhost:3000/heroes/${id}`)
                .then((response)=>{
                  if(response.status === 200) {
                    //删除成功，重新加载页面
                    this.loadData();
                  } else {
                    alert('删除失败');
                  }
                })
                .catch((err)=>{
                  console.log(err);
                })
              
        }
      }
              
    }
</script>

<style>

</style>

