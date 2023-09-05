import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeNoteComponent } from './take-note.component';

describe('TakeNoteComponent', () => {
  let component: TakeNoteComponent;
  let fixture: ComponentFixture<TakeNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeNoteComponent]
    });
    fixture = TestBed.createComponent(TakeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
