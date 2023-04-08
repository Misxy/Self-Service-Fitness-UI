import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [NotFoundComponent, HeaderComponent, FooterComponent],
  exports: [NotFoundComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule {}
