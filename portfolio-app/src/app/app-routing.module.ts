import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { DashboardComponent } from './content/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'MainPage', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
