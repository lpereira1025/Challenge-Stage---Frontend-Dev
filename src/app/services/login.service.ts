import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8000/auth";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login" , { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.access_token);
      })
    );
  }

  Signup(name: string , email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.access_token);
        sessionStorage.setItem("name", name);
      })
    );
  }
}
