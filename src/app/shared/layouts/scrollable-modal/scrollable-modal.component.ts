import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scrollable-modal',
  templateUrl: './scrollable-modal.component.html',
  styleUrls: ['./scrollable-modal.component.scss'],
})
export class ScrollableModalComponent implements OnInit {
  @Output()
  eventEmitter: EventEmitter<boolean> = new EventEmitter();
  ngOnInit(): void {}
  closeModal(): void {
    this.eventEmitter.emit(false);
  }
}
