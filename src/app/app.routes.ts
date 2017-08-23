
import { Routes, RouterModule } from '@angular/router';


import { 
    AboutComponent,
    PortafolioComponent,
    ProductoComponent 
} from './components/index.paginas';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: '**', component: PortafolioComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const routes = RouterModule.forRoot(app_routes, {useHash:true});
