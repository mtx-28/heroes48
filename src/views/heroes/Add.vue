<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">英雄名称</label>
                <input v-model="formData.name" type="email" class="form-control" id="exampleInputEmail1" placeholder="英雄名称">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="英雄性别">
            </div>
                        
            <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
        </form>
    </div>
</template>

<script>
    //导入axios
    import axios from 'axios';
   export default {
       data() {
           return {
               formData: {
                   name: '',
                   gender: ''
               }
           }
       },
       methods: {
           //添加英雄
           handleAdd() {
               axios.post('http://localhost:3000/heroes', this.formData)
                    .then((response)=>{
                        if(response.status === 201) {
                            this.$router.push('/heroes')
                        } else {
                            alert('添加失败');
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
 