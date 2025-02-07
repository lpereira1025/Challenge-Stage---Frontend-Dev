import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-list-events',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css'],
})
export class ListEventsComponent implements OnInit {
  events: any[] = [];
  viewMode: 'cards' | 'table' = 'cards';

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventsService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }

  deleteEvent(eventId: number) {
    this.eventsService.deleteEvent(eventId).subscribe(() => {
      this.events = this.events.filter(event => event.id !== eventId);
    });
  }

  toggleView(mode: 'cards' | 'table') {
    this.viewMode = mode;
  }
}
