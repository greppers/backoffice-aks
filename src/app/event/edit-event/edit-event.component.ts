import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Event } from '../event.model';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  @ViewChild('updateForm') eventForm!: NgForm;

  eventData: any;
  eventId: any;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
    var type = document.getElementById('type') as HTMLInputElement;

    var location = document.getElementById('location') as HTMLInputElement;
    var url = document.getElementById('url') as HTMLInputElement;
    var lbl_location = document.getElementById(
      'lbl_location'
    ) as HTMLInputElement;

    var lbl_url = document.getElementById('lbl_url') as HTMLInputElement;

    this.eventService.getEvent(this.eventId).subscribe((event) => {
      this.eventData = event;
      if (event.type == 'En_ligne') {
        type.value = 'En_ligne';
        this.eventData.location = event.localisation;
        location.hidden = true;
        lbl_location.hidden = true;
        url.hidden = false;
        lbl_url.hidden = false;
      } else {
        type.value = 'Presentiel';
        this.eventData.location = event.localisation;
        lbl_location.hidden = false;
        location.hidden = false;
        url.hidden = true;
        lbl_url.hidden = true;
      }
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  editEvent() {

    console.log("in edit event click")





    this.progress = 0;
    if(this.selectedFiles)
    {
      console.log("selectedFiles")
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;

      const updatedEvent: Event = {
      id: this.eventData.id,
      titre: this.eventData.titre,
      description: this.eventData.description,
      date: new Date(Date.parse(this.eventData.date)),
      userid: 1,
      rate: 2,
      nbPlaces: this.eventData.nbPlaces,
      prix: this.eventData.prix,
      image: this.currentFile.name,
      localisation: this.eventData.location,
      type: this.eventData.type,
    };
    this.eventService.updateEvent(updatedEvent,this.currentFile).subscribe({
         next: (event:any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            }
          },

          error: (err:any) => {

            console.log(err);
            this.progress = 0;



            this.currentFile = undefined;

          },

          complete: () => {
            this.router.navigate(['/events']);

          }
    });

      }
    }else
    {
      console.log("else selectedFiles")
      const updatedEvent: Event = {
        id: this.eventData.id,
        titre: this.eventData.titre,
        description: this.eventData.description,
        date: new Date(Date.parse(this.eventData.date)),
        userid: 1,
        rate: 2,
        nbPlaces: this.eventData.nbPlaces,
        prix: this.eventData.prix,
        image: this.eventData.image,
        localisation: this.eventData.location,
        type: this.eventData.type,
      };
      this.eventService.updateEvent(updatedEvent,undefined).subscribe(
        {


           complete: () => {
             this.router.navigate(['/events']);

           }
     }
      );

    }

  }

  handleSelectChange() {
    var type = document.getElementById('type') as HTMLInputElement;

    var location = document.getElementById('location') as HTMLInputElement;
    var url = document.getElementById('url') as HTMLInputElement;

    var lbl_location = document.getElementById(
      'lbl_location'
    ) as HTMLInputElement;

    var lbl_url = document.getElementById('lbl_url') as HTMLInputElement;

    if (type != null && location != null && url != null) {
      if (type.value === 'En_ligne') {
        location.hidden = true;
        lbl_location.hidden = true;
        url.hidden = false;
        lbl_url.hidden = false;
      } else {
        lbl_location.hidden = false;
        location.hidden = false;
        url.hidden = true;
        lbl_url.hidden = true;
      }
    }
  }
}
