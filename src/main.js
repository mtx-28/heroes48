import Vue from 'vue'
import App from './App.vue'


// 导入全局样式
// 导入bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';


//导入路由对象
  import router from './routes/router';
  
  new Vue({
    router,
    el: '#app',
    render: h => h(App)
  })
