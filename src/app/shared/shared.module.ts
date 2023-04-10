import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ScrollableModalComponent } from './layouts/scrollable-modal/scrollable-modal.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ScrollableModalComponent,
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ScrollableModalComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
