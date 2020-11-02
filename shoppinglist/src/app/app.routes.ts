import { Routes } from "@angular/router";
import { DashboardComponent } from './pages/ui/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'lists',
    loadChildren: () => import("./pages/ui/lists/lists.module").then((m) => m.ListsModule)
  },
  {
    path:'products',
    loadChildren:() => import("./pages/ui/products/products.module").then((m) => m.ProductsModule)
  },
  {
    path:'', redirectTo:'dashboard',pathMatch:'full'
  }
];