import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:()=>import("../view/ProductList.vue")
        },{
            path:"/productList",
            component:()=>import("../view/ProductList.vue")
        },{
            path:"/userList",
            component:()=>import("../view/UserList.vue")
        },
        {
            path:"/parentComponent",
            component:()=>import("../view/ParentComponent.vue")
        },{
            path:"/userManagementComponent",
            component:()=>import("../view/UserManagementComponent.vue")
        }
    ]
})