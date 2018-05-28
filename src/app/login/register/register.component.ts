import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  avatars;

  constructor() {
    let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    this.avatars = temp.map(i => `avatars：svg-${i}`)
    console.log(this.avatars)
   }

  ngOnInit() {
  }

}
