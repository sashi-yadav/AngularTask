import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../record';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


records: Record[];

  constructor(private router: Router) { }


  ngOnInit() {
    this.records=JSON.parse(localStorage.getItem("records"));
  }
  add(){
    this.router.navigate(['./addTicket']);
  }
}
