import { Component, OnInit } from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today = 'day'

  constructor() {
    this.today = `day${getDate(new Date())}`;
    console.log(this.today);
   }

  ngOnInit() {
  }

}
