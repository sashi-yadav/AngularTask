import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../record';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  constructor(private router: Router) { }

  record : Record[];
  temp: string;

  ngOnInit() {
    this.record = [];
  }
  addTicket(description: string,remark: string){
    this.temp=localStorage.getItem("records");
    if(this.temp){
    this.record=JSON.parse(this.temp);
    }
    this.record.push(new Record(description,remark));
    localStorage.setItem("records",JSON.stringify(this.record));
  }
}
  