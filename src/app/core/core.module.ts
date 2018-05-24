import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule { }
