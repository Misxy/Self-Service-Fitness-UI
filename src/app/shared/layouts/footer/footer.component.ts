import { Component } from '@angular/core';
import { fitnessName } from '../../constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  label: string = fitnessName;
}
