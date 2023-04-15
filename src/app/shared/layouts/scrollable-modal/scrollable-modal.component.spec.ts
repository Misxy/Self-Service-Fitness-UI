import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableModalComponent } from './scrollable-modal.component';

describe('ScrollableModalComponent', () => {
  let component: ScrollableModalComponent;
  let fixture: ComponentFixture<ScrollableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollableModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
