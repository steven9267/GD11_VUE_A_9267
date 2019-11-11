import Vue from 'vue' 
import Router from 'vue-router' 
 
const dashboardLayout = () => import(/* webpackChunkName: "dashboard" */
'../components/dashboardLayout.vue') 
 
function loadView(view) { 
    return () => import(/* webpackChunkName: "view-[request]" */ 
    `../components/dashboardContents/${view}.vue`) 
} 
 
    const routes = [    
         {       
             path: '/',      
             component: dashboardLayout,       
             children: [         
                 {           
                     name: 'userControllers',           
                     path: '',          
                      component: loadView('userControllers')         
                }       
            ]     
        },   
    ]   
    Vue.use(Router) 
     
      const router = new Router({mode: 'history', routes: routes}) 
     
      export default router 