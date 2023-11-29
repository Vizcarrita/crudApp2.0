import { Routes } from '@angular/router';
import { MainComponent } from './productos/main.component';

export const routes: Routes = [
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
                path:'', redirectTo:'agregar', pathMatch:'full'
            }
        ]
    },
    {
        path:'',
        redirectTo:'/productos',
        pathMatch:'full'
    }
];
