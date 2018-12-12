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

  ngOnInit() {
    this.record = [];
  }
  addTicket(description: string,remark: string){
    debugger;
    if(JSON.parse(localStorage.getItem("records"))){
    this.record=JSON.parse(localStorage.getItem("records"));
    }
    this.record.push(new Record(description,remark));
    localStorage.setItem("records",JSON.stringify(this.record));
  }
}
