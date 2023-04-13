import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  targetIDLength = 13;
  targetMobileNumsLength = 10;
  isModalDisplayed = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      idInput: [
        '',
        [
          Validators.minLength(this.targetIDLength),
          Validators.maxLength(this.targetIDLength),
          Validators.required,
        ],
      ],
      callNameID: ['', Validators.required],
      lineID: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      emailInput: ['', [Validators.email, Validators.required]],
      emergencyContact: ['', Validators.required],
      emergencyContactMobile: [
        '',
        [
          Validators.minLength(this.targetMobileNumsLength),
          Validators.maxLength(this.targetMobileNumsLength),
          Validators.required,
        ],
      ],
      conditionCheckbox: ['', Validators.required],
    });
  }
  ngOnInit() {}

  get IdInput() {
    return this.registerForm.get('idInput');
  }
  get callNameID() {
    return this.registerForm.get('callNameID');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get birthDate() {
    return this.registerForm.get('birthDate');
  }
  get emailInput() {
    return this.registerForm.get('emailInput');
  }
  get emergencyContact() {
    return this.registerForm.get('emergencyContact');
  }
  get emergencyContactMobile() {
    return this.registerForm.get('emergencyContactMobile');
  }
  get conditionCheckbox() {
    return this.registerForm.get('conditionCheckbox');
  }
  onSubmit(): void {
    console.log('Pressed the button!');
  }
  openConditionModal(): void {
    this.isModalDisplayed = true;
  }
  updateModalStatus($event: boolean) {
    this.isModalDisplayed = $event;
  }
}
