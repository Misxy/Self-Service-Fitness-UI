import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ModalComponent } from './layouts/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}
