import { Routes } from '@angular/router';
import { MainComponent } from './productos/main.component';
import { ProfileSettingComponent } from './components/profile/profile-setting/profile-setting.component';
import { MainAuthComponent } from './auth/main-auth.component';

export const routes: Routes = [

    {
        path:'account',
        component:MainAuthComponent,
        children:[
            {
                path:'login',
                loadComponent: () => import('./auth/pages/login/login.component'),
            },
            {
                path:'registro',
                loadComponent: () => import('./auth/pages/registro/registro.component'),
            },
            {
                path:'setting',
                component: ProfileSettingComponent,
            }
        ]
    },
    {
        path:'productos',
        component: MainComponent,
        children:[
            {
                path:'agregar',
                title:'Agregar Producto',
                loadComponent: () => import('./productos/pages/agregar/agregar.component'),
            },
            {
                path:'listado',
                title:'Listado Producto',
                loadComponent: () => import('./productos/pages/listado/listado.component'),
            },
            {
                path:'cart',
                title:'Carrito de Compras',
                loadComponent: () => import('./productos/pages/carrito/carrito.component'),
            },
            {
                path:'', redirectTo:'agregar', pathMatch:'full'
            },
                
        ]
    },
    {
        path:'',
        redirectTo:'/productos',
        pathMatch:'full'
    },

];
