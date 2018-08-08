<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">英雄姓名</label>
                <input v-model="formData.name" type="email" class="form-control" id="exampleInputEmail1" placeholder="英雄姓名" value="xxx">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="英雄性别" value="xxx">
            </div>
           
            <button type="submit" class="btn btn-success" @click.prevent="handleEdit">Submit</button>
        </form>
    </div>
</template>

<script>
//导入axios
import axios from 'axios';

    export default {
        props: ['id'],
        data() {
            return {
                formData: {
                    name: '',
                    gender: ''
                }
            }
        },
       created() {
           axios.get(`http://localhost:3000/heroes/${this.id}`)
                .then((response)=> {
                    if(response.status === 200) {
                        this.formData = response.data;
                    }
                })
                .catch((err)=> {
                    console.log(err);
                })
       },
      methods: {
          handleEdit() {
              axios.put(`http://localhost:3000/heroes/${this.id}`, this.formData)
                    .then((response)=> {
                        if(response.status === 200) {
                            //跳转页面
                            this.$router.push('/heroes');
                        } else {
                            alert('跳转失败');
                        }
                    })
                    .catch( (err)=>{
                        console.log(err);
                    })
          }
      }
    }
</script>

<style>

</style>
