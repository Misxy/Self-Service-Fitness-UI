import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterationComponent],
  imports: [ClientRoutingModule, ReactiveFormsModule, SharedModule],
})
export class ClientModule {}
