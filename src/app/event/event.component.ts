import {Component, OnInit, ViewChild} from '@angular/core';
import {EventService} from "./event.service";
import {Event} from "./event.model";
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[] | any;





  @ViewChild('eventForm') eventForm!: NgForm;

  constructor(private eventService: EventService,private router: Router) {
    this.eventForm = {} as NgForm;
  }



  ngOnInit() {
    this.getEvents();

  }

  checkEventType(type:string)
  {
    if(type==="En_ligne")
    {
      return true;
    }else
    {
      return false;
    }
  }

  getEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events
    } );

  }




  editEvent(event: number) {
    const eventId = event;
  this.router.navigate(['/editEvent', eventId]);
  }



  deleteEvent(event: Event) {
    if (confirm("Are you sure you want to delete this event?")) {
      this.eventService.deleteEvent(event).subscribe(() => {
        alert("Event deleted successfully.");
        window.location.reload();


      });
    }

  }

}
