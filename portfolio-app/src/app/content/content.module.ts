import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Angular Material Libraries
import {MatSidenavModule, MatTabsModule, MatCardModule} from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    SidebarComponent,
     DashboardComponent,
     HomePageComponent
    ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule
    
  ],
  exports:
  [
    SidebarComponent,
    DashboardComponent

  ]
})
export class ContentModule { }
