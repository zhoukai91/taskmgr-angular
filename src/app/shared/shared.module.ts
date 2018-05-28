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
  MatGridListModule,
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
    MatGridListModule,
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
    MatGridListModule,
  ]
})
export class SharedModule { }
