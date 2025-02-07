import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Event {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: string;
  publishDate: string;
  image: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string = '';
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchQuery: string = '';
  viewMode: 'cards' | 'list' = 'cards';
  selectedEvent: Event | null = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('name') || 'Usuário';

    this.http.get<Event[]>('http://localhost:8000/events').subscribe({
      next: (events) => {
        this.events = events;
        this.filteredEvents = events;
      },
      error: () => {
        this.toastr.error('Erro ao carregar eventos.');
      }
    });
  }

  filterEvents(): void {
    this.filteredEvents = this.events.filter(event =>
      event.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'cards' ? 'list' : 'cards';
  }

  deleteEvent(eventId: string, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation(); // Impede a propagação do evento para o card/item da lista
    }

    this.filteredEvents = this.filteredEvents.filter(event => event.id !== eventId);
    this.events = this.events.filter(event => event.id !== eventId);

    this.http.delete(`http://localhost:8000/events/${eventId}`).subscribe({
      next: () => {
        this.toastr.success('Evento excluído com sucesso.');
        this.closeModal(); // Fechar o modal se estiver aberto
      },
      error: () => {
        this.toastr.error('Erro ao excluir evento.');
      }
    });
  }

  openModal(event: Event): void {
    this.selectedEvent = event;
  }

  closeModal(): void {
    this.selectedEvent = null;
  }
}
