import { Component } from '@angular/core';
import { fitnessName } from '../../constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  label: string = fitnessName;
}
