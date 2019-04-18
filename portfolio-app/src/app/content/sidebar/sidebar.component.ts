import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name: string = '';

  
  constructor() {
    
   }

  ngOnInit() {
   
  }

displayProfile(name){
   this.name = name;
   console.log(this.name +' '+ "profile is being displayed.");
}

}
