import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectStar(){

    this.isActive = !this.isActive;
  }
}
