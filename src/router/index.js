import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const Admin = () => import("~/layouts/admin.vue");
const Index = () => import('~/pages/index.vue');
const Login = () => import('~/pages/login.vue');
const NotFound = () => import('~/pages/404.vue');
const GoodList = () => import('~/pages/goods/list.vue');
const CategoryList = () => import('~/pages/category/list.vue');
const UserList = () => import('~/pages/user/list.vue');
const OrderList = () => import('~/pages/order/list.vue');
const CommentList = () => import('~/pages/comment/list.vue');
const ImageList = () => import('~/pages/image/list.vue');
const NoticeList = () => import('~/pages/notice/list.vue');
const SettingBase = () => import('~/pages/setting/base.vue');
const CouponList = () => import('~/pages/coupon/list.vue');
const ManagerList = () => import('~/pages/manager/list.vue');
const AccessList = () => import('~/pages/access/list.vue');
const RoleList = () => import('~/pages/role/list.vue');
const SkusList = () => import('~/pages/skus/list.vue');
const LevelList = () => import('~/pages/level/list.vue');
const SettingBuy = () => import('~/pages/setting/buy.vue');
const SettingShip = () => import('~/pages/setting/ship.vue');
const DistributionIndex = () => import('~/pages/distribution/index.vue');
const DistributionSetting = () => import('~/pages/distribution/setting.vue');


// 默认路由，所有用户共享
const routes = [
    {
        path: "/",
        name:"admin",
        component: Admin,
    },
    {
        path: "/login",
        component: Login,
        meta: {
            title: "登录页"
        }
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }]


// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [{
    path:"/",
    name:"/",
    component:Index,
    meta:{
        title:"后台首页"
    }
},{
    path:"/goods/list",
    name:"/goods/list",
    component:GoodList,
    meta:{
        title:"商品管理"
    }
},{
    path:"/category/list",
    name:"/category/list",
    component:CategoryList,
    meta:{
        title:"分类列表"
    }
},{
    path:"/user/list",
    name:"/user/list",
    component:UserList,
    meta:{
        title:"用户列表"
    }
},{
    path:"/order/list",
    name:"/order/list",
    component:OrderList,
    meta:{
        title:"订单列表"
    }
},{
    path:"/comment/list",
    name:"/comment/list",
    component:CommentList,
    meta:{
        title:"评价列表"
    }
},{
    path:"/image/list",
    name:"/image/list",
    component:ImageList,
    meta:{
        title:"图库列表"
    }
},{
    path:"/notice/list",
    name:"/notice/list",
    component:NoticeList,
    meta:{
        title:"公告列表"
    }
},{
    path:"/setting/base",
    name:"/setting/base",
    component:SettingBase,
    meta:{
        title:"配置"
    }
},{
    path:"/coupon/list",
    name:"/coupon/list",
    component:CouponList,
    meta:{
        title:"优惠券列表"
    }
},{
    path:"/manager/list",
    name:"/manager/list",
    component:ManagerList,
    meta:{
        title:"管理员管理"
    }
},{
    path:"/access/list",
    name:"/access/list",
    component:AccessList,
    meta:{
        title:"菜单权限管理"
    }
},{
    path:"/role/list",
    name:"/role/list",
    component:RoleList,
    meta:{
        title:"角色管理"
    }
},{
    path:"/skus/list",
    name:"/skus/list",
    component:SkusList,
    meta:{
        title:"规格管理"
    }
},{
    path:"/level/list",
    name:"/level/list",
    component:LevelList,
    meta:{
        title:"会员等级"
    }
},{
    path:"/setting/buy",
    name:"/setting/buy",
    component:SettingBuy,
    meta:{
        title:"支付设置"
    }
},{
    path:"/setting/ship",
    name:"/setting/ship",
    component:SettingShip,
    meta:{
        title:"物流设置"
    }
},{
    path:"/distribution/index",
    name:"/distribution/index",
    component:DistributionIndex,
    meta:{
        title:"分销员管理"
    }
},{
    path:"/distribution/setting",
    name:"/distribution/setting",
    component:DistributionSetting,
    meta:{
        title:"分销设置"
    }
}]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 动态添加路由的方法
export function addRoutes(menus){
    // 是否有新的路由
    let hasNewRoutes = false
    const findAndAddRoutesByMenus = (arr) =>{
        arr.forEach(e=>{
            let item = asyncRoutes.find(o=>o.path == e.frontpath)
            if(item && !router.hasRoute(item.path)){
                router.addRoute("admin",item)
                hasNewRoutes = true
            }
            if(e.child && e.child.length > 0){
                findAndAddRoutesByMenus(e.child)
            }
        })
    }

    findAndAddRoutesByMenus(menus)

    return hasNewRoutes
}