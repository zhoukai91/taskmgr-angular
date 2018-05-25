import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
  ]
})
export class SharedModule { }
