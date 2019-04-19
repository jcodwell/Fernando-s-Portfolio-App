import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ShowCustomersComponent } from './admin/show-customers/show-customers.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  { path: 'MainPage', component: DashboardComponent,
  children: [
    { path: 'admin', component: AdminComponent }
    ]  

  },
  { path: 'customers', component: ShowCustomersComponent },
  { path: 'admini', component: AdminComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
