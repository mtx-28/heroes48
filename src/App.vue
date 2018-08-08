<template>
  <div id="app">
     <!-- 网页的header -->
     <app-header></app-header>

      <div class="container-fluid">
        <div class="row">
         <!-- 侧边栏sidebar -->
         <app-sidebar></app-sidebar>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!-- 列表管理 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
     


        
  </div>
</template>

<script>


// 导入AppHeader组件
import AppHeader from './components/AppHeader.vue';
//导入AppSidebar 组件
import AppSidebar from './components/AppSidebar';


  export default {
    components: {
      AppHeader,
      AppSidebar
    }
  }

</script>

<style>

</style>
