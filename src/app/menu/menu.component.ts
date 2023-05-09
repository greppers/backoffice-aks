import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  GoBack() {
    window.location.href = 'http://localhost:4200/'

  }
}
