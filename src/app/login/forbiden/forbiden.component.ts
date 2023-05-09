import { Component, OnInit } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forbiden',
  templateUrl: './forbiden.component.html',
  styleUrls: ['./forbiden.component.css']
})
export class ForbidenComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
signout() {
  this.auth.signout();
}
}
