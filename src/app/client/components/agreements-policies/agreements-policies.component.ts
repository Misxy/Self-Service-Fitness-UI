import { KeyValue } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AgreementAndPoliciesService } from 'src/app/core/services/agreement-and-policies.service';

@Component({
  selector: 'app-agreements-policies',
  templateUrl: './agreements-policies.component.html',
  styleUrls: ['./agreements-policies.component.scss'],
})
export class AgreementAndPoliciesComponent {
  conditions: Observable<Map<string, string>>;
  constructor(private agreementService: AgreementAndPoliciesService) {
    this.conditions = this.agreementService.createAgreementAndPolicies();
  }
  @Output()
  eventEmitter: EventEmitter<boolean> = new EventEmitter();
  closeModal(): void {
    this.eventEmitter.emit(false);
  }
  preserveOriginalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
