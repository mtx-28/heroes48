import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由
    import HeroesList from '../views/heroes/List.vue';
    import EquipsList from '../views/equips/List.vue';
    import WeaponsList from '../views/weapons/List.vue';
    //导入添加英雄组件
    import HeroesAdd from '../views/heroes/Add.vue';
    //导入编辑英雄组件
    import HeroesEdit from '../views/heroes/Edit.vue';

    //注册插件 this.$router this.$route
    Vue.use(VueRouter)

//创建路由对象
var router = new VueRouter({
    //路由地址， 只要包含a标签的href中的值就有该类样式
    linkActiveClass: 'active',
    //路由规则
    routes: [
        {path: '/', redirect: '/heroes'},
        {name: 'heroes', path: '/heroes', component: HeroesList},
        {name: 'heroadd', path: '/heroes/add', component: HeroesAdd},
        {name: 'heroedit', path: '/heroes/:id', component: HeroesEdit, props: true},
        {name: 'equips', path: '/equips', component: EquipsList},
        {name: 'weapons', path: '/weapons', component: WeaponsList}
    ]
})
        
        

//模块中导出路由对象

export default router;