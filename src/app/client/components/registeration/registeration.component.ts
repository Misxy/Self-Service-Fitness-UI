import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClientService } from 'src/app/core';
import { DisplayMessage, MemberBuilder } from 'src/app/shared';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  targetIDLength = 13;
  targetMobileNumsLength = 10;
  isModalDisplayed: boolean = false;
  isSuccessfulRegistration: boolean = false;
  isShowDisplayMessage: boolean = false;
  displayMessageFromParent: DisplayMessage = {} as DisplayMessage;
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {
    const targetIDRegex: string = '^\\d{13}$';
    const targetMobileNoRegex: string = '^\\d{10}$';
    this.registerForm = this.formBuilder.group({
      idInput: [
        '',
        [
          Validators.minLength(this.targetIDLength),
          Validators.maxLength(this.targetIDLength),
          Validators.pattern(targetIDRegex),
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
          Validators.pattern(targetMobileNoRegex),
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
    this.isSuccessfulRegistration = this.clientService.addMember(
      this.createMember()
    );
    this.isShowDisplayMessage = true;
    this.generateDisplayMessage(this.isSuccessfulRegistration);
  }
  openConditionModal(): void {
    this.isModalDisplayed = true;
  }
  updateModalStatus($event: boolean) {
    this.isModalDisplayed = $event;
  }
  updateShowDisplayMessageStatus($event: boolean) {
    this.isShowDisplayMessage = $event;
  }
  private generateDisplayMessage(isSuccess: boolean): void {
    this.displayMessageFromParent.isSuccess = isSuccess;
    this.displayMessageFromParent.firstButtonLabel = 'ปิด';
    if (isSuccess) {
      this.displayMessageFromParent.headLine =
        'ยินดีด้วย! คุณสมัครสมาชิกฟิตเนสสำเร็จ';
      this.displayMessageFromParent.description =
        'แล้วพบกันที่ Prodigy Sport Fitness Club!';
    } else {
      this.displayMessageFromParent.headLine =
        'เอ๊ะ! ดูเหมือนว่าคุณสมัครสมาชิกฟิตเนสไม่สำเร็จ';
      this.displayMessageFromParent.description =
        'กรุณาสอบถามข้อมูลเพิ่มเติมจากทางฟิตเนส';
    }
  }
  private createMember(): MemberBuilder {
    const newMember: MemberBuilder = new MemberBuilder();
    newMember.setID(this.IdInput?.value);
    newMember.setCallName(this.callNameID?.value);
    newMember.setFirstName(this.firstName?.value);
    newMember.setLastName(this.lastName?.value);
    newMember.setBirthDate(this.birthDate?.value);
    newMember.setEmail(this.emailInput?.value);
    newMember.setEmergencyContact(this.emergencyContact?.value);
    newMember.setEmergencyContactMobile(this.emergencyContactMobile?.value);
    newMember.setIsAcceptTermsAndCondition(true);
    return newMember;
  }
}
