import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  title = 'sample-a';
  constructor(private router: Router,private location: Location,private auth: AuthService){}

  checkPath(): boolean{
    debugger;
    if(this.location.path().endsWith("login"))
    return false;
    else
    return true;
  }

  logout(){
    this.auth.logout();
  }
}
