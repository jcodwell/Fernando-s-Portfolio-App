import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Angular Material Libraries
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SidebarComponent,
     DashboardComponent
    ],
  imports: [
    CommonModule,
    MatSidenavModule
    
  ],
  exports:
  [
    SidebarComponent,
    DashboardComponent

  ]
})
export class ContentModule { }
