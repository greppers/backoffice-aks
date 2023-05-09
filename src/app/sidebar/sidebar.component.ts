import { Component, OnInit } from '@angular/core';
import { userRoles,isMarchant,isAdmin } from '../utils/getRole';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmin=isAdmin
  isMarchant=isMarchant
  constructor() { }

  ngOnInit(): void {
    // console.log(userRoles?.filter(user=>user.roleName==="Marchant"))
  }

}
