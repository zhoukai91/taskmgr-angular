import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>()
  @Output() toggleDarkTheme = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  openSideBar() {
    this.toggle.emit()
  }
  toggleTheme(checked) {
    this.toggleDarkTheme.emit(checked);
  }
}
