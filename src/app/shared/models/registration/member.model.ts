class Member {
  id?: string;
  callName?: string;
  lineID?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  email?: string;
  emergencyContact?: string;
  emergencyContactMobile?: string;
  isAcceptTermsAndCondition?: boolean;
}

export class MemberBuilder {
  private member: Member;
  constructor() {
    this.member = new Member();
  }
  public getMember(): Member {
    return this.member;
  }
  public setID(id: string): void {
    this.member.id = id;
  }
  public setCallName(callName: string): void {
    this.member.callName = callName;
  }
  public setLineID(lineID: string): void {
    this.member.lineID = lineID;
  }
  public setFirstName(firstName: string): void {
    this.member.firstName = firstName;
  }
  public setLastName(lastName: string): void {
    this.member.lastName = lastName;
  }
  public setBirthDate(birthDate: string): void {
    this.member.birthDate = birthDate;
  }
  public setEmail(email: string): void {
    this.member.email = email;
  }
  public setEmergencyContact(emergencyContact: string): void {
    this.member.emergencyContact = emergencyContact;
  }
  public setEmergencyContactMobile(emergencyContactMobile: string): void {
    this.member.emergencyContactMobile = emergencyContactMobile;
  }
  public setIsAcceptTermsAndCondition(
    isAcceptTermsAndCondition: boolean
  ): void {
    this.member.isAcceptTermsAndCondition = isAcceptTermsAndCondition;
  }
}
