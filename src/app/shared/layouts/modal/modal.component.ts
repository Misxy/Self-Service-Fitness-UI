import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisplayMessage } from '../../models/displayMessage/display-message.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() displayMessage: DisplayMessage = {} as DisplayMessage;
  @Output()
  eventEmitter: EventEmitter<boolean> = new EventEmitter();
  onCloseModal(): void {
    this.eventEmitter.emit(false);
  }
}
