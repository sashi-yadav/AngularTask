import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }
  getUser() {
    return localStorage.getItem("username")
  }
  isLoggednIn() {
    return this.getUser() !== null;
  }
  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("records");
    this.route.navigate(["./login"]);
  }
}
