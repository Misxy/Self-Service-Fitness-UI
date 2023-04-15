import { Injectable } from '@angular/core';
import { MemberBuilder } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private _members: Array<MemberBuilder> = [];

  public addMember(member: MemberBuilder): boolean {
    if (this.isDuplicateMember(member)) {
      return false;
    }
    this._members.push(member);
    return true;
  }
  private isDuplicateMember(member: MemberBuilder) {
    // for (const eachMember of this._members){
    //   if(eachMember.getMember().id === member.getMember().id){
    //     return true;
    //   }
    // }
    // return false;
    return this._members.some(
      eachMember => eachMember.getMember().id === member.getMember().id
    );
  }
}
