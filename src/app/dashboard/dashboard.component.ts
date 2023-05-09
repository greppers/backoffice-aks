import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  totalClients!: number;
  totalMarchants!: number;
  totalUsers!: number;
  totalAdmins!: number;

  ngOnInit() {
   

    this.http.get(' http://localhost:8080/users').subscribe((data: any) => {
       this.totalClients = data['totalClients'];
       this.totalMarchants = data['totalMarchants'];
       this.totalUsers = data['totalUsers'];
       this.totalAdmins = data['totalAdmins'];


    });
    }

  

  

}

