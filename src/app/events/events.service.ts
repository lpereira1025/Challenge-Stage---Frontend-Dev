import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEvent(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateEvent(id: number, event: any) {
    return this.http.put(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
