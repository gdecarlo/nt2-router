import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Persona from './components/Persona.vue'

const routes = [
    {
        path:'/',
        component: Home,
        meta:{requiereAuth:false}
    },
    {
        path:'/about',
        component:About,
        meta:{requiereAuth:true}
    },
    {
        path:'/persona/:id',
        component: Persona
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

router.beforeEach((to,from)=>{
    
    if(to.meta.requiereAuth != null){
        console.log(to.meta.requiereAuth)

    }
    //const tienePermiso = el usuario esta autenticado o tiene permisos para la ruta "to"
    //!tienePermiso?to.
})

createApp(App)
.use(router)
.mount('#app')
