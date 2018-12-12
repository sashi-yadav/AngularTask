import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('username');
  }
  
  login(userName: string,password: string){
    if (userName === 'Sashi' && password === 'password') {
      localStorage.setItem('username', userName);
      this.router.navigate(['./home']);
    }
  }
}
