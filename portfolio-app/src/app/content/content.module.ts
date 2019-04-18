import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Angular Material Libraries
import {MatSidenavModule, MatTabsModule, MatCardModule, MatGridListModule, MatButtonModule} from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { JadaDashboardComponent } from './jada-dashboard/jada-dashboard.component';

@NgModule({
  declarations: [
    SidebarComponent,
     DashboardComponent,
     HomePageComponent,
     ContactPageComponent,
     GalleryComponent,
     TeamPageComponent,
     JadaDashboardComponent
    ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
    
  ],
  exports:
  [
    SidebarComponent,
    DashboardComponent

  ]
})
export class ContentModule { }
