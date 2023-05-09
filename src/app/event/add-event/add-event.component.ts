import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  @ViewChild('updateForm') eventForm!: NgForm;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;

  event = {
    titre: '',
    description: '',
    date: '',
    userid: 1,
    rate: 0,
    nbPlaces: 1,
    prix: 0,
    image: '',
    location: '',
    type: 'En_ligne',
  };

  constructor(private eventService: EventService,
    private router: Router) {}

  ngOnInit(): void {

    var type = document.getElementById('type') as HTMLInputElement;

    var location = document.getElementById('location') as HTMLInputElement;
    var url = document.getElementById('url') as HTMLInputElement;
    var lbl_location = document.getElementById(
      'lbl_location'
    ) as HTMLInputElement;

    var lbl_url = document.getElementById('lbl_url') as HTMLInputElement;

    location.hidden = true;
    url.hidden = false;

    lbl_location.hidden = true;
    lbl_url.hidden = false;
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
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

  createEvent() {

    this.progress = 0;
    if(this.selectedFiles)
    {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;

        const newEvent: Event = {
          id: 0, // the id will be assigned by the backend
          titre: this.event.titre,
          description: this.event.description,
          date: new Date(Date.parse(this.event.date)),
          userid: 1,
          rate: 0,
          nbPlaces: this.event.nbPlaces,
          prix: this.event.prix,
          image: file.name,
          localisation: this.event.location,
          type: this.event.type,
        };
        this.eventService.createEvent(newEvent,this.currentFile).subscribe({
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
          },

        });
      }
    }




  }
}
