import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth.service'; // Importe o AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {} // Injete o AuthService

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.token) {
          // Armazene o token no localStorage
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('username', this.username);
          console.log('Login bem-sucedido! Token armazenado no localStorage.');
        } else {
          console.log('Login falhou!');
        }
      },
      error => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }
}
