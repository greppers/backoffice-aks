import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event } from "./event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly apiUrl = 'http://localhost:8080/events';

  constructor(private http: HttpClient) { }


  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/getEventsByUser/1`);
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/searchEvent/` + id);
  }

  createEvent(event: Event, file: File): Observable<Event> {

    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('event', JSON.stringify(event));



    return this.http.post<Event>(`${this.apiUrl}/addEvent`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  updateEvent(event: Event, file?: File): Observable<Event> {


    const formData: FormData = new FormData();

    formData.append('file', file!);
    formData.append('event', JSON.stringify(event));

    return this.http.put<Event>(`${this.apiUrl}/updateEvent`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  deleteEvent(event: Event): Observable<Event> {

    return this.http.request<Event>('delete', `${this.apiUrl}/deleteEvent`, {
      body: {
        "id": event.id
      }
    });
  }

  //eventid
  getRevenueEvent(id: number):Observable<number> {

    return this.http.get<number>(`${this.apiUrl}/revenueEvent/` + id);

  }

  //userid
  getRevenueEvents():Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/revenueEvents`);

  }

  //eventid
  getNombreParticipantsEvent(id: number) :Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/numberOfParticipantsEvent/` + id);

  }

//userid
  getNombreParticipantsEvents():Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/numberOfParticipantsEvents`);
  }

  //eventid
  getNombreDePlaceDispo(id: number) :Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/nombreDePlacesDisponible/` + id);


  }


}
