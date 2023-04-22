import { Component } from '@angular/core';
import { password, username } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usernameLabel: string = username;
  passwordLabel: string = password;
}
