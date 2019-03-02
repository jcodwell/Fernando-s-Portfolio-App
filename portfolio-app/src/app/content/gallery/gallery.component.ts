import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  img: string;
}


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {

  tiles: Tile[] = [
    {img: 'assets/AliPic.png', cols: 3, rows: 4, color: 'lightblue'},
    {img: 'assets/AliPup.png', cols: 1, rows: 4, color: 'white'},
    {img: 'assets/App.jpg', cols: 1, rows: 4, color: 'lightpink'},
    {img: 'assets/Bitch.png', cols: 2, rows: 4, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
