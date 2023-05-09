import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import {Event} from "../event.model";
import { forkJoin, map, Observable } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})

export class WalletComponent implements OnInit {

  constructor( private eventService: EventService) { }

  wallet : any ;
  totalIncome : number = 0;
  totalParticipants : number = 0;
  events : Event[] | any;

  ngOnInit() {
    this.fn1();
    this.fn2();
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.getWalletInfos().subscribe(wallet => {
        this.wallet = wallet;

        console.log(this.wallet)
      });
    });
  }

  getWalletInfos(): Observable<any> {
    const walletObs = (this.events as Event[]).map((event) => {
      console.log(event.id)
      return forkJoin([
        this.eventService.getNombreParticipantsEvent(event.id).pipe(
          map(res => res)
        ),
        this.eventService.getRevenueEvent(event.id).pipe(
          map(res => res)
        )
      ]).pipe(
        map(([np, income]) => ({
          titre: event.titre,
          date: event.date,
          np: np || 0,
          income: income || 0
        }))
      );
    });
    return forkJoin(walletObs);
  }

  fn1() {
    this.eventService.getRevenueEvents().pipe(
      map(res => parseFloat(res.toString())) // convert string to number
    ).subscribe(data => {
      if (!isNaN(data)) {
        this.totalIncome = data;
      } else {
        console.error('Error: invalid data type for totalIncome');
      }
    });
  }

  fn2() {
    this.eventService.getNombreParticipantsEvents().pipe(
      map(res => parseFloat(res.toString())) // convert string to number
    ).subscribe(data => {
      if (!isNaN(data)) {
        this.totalParticipants = data;
      } else {
        console.error('Error: invalid data type for totalParticipants');
      }
    });
  }
}
