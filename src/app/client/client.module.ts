import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { RegisterationComponent } from './components/registeration/registeration.component';

@NgModule({
  declarations: [RegisterationComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
