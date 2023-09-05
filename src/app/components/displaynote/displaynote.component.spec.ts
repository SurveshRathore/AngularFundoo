import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynoteComponent } from './displaynote.component';

describe('DisplaynoteComponent', () => {
  let component: DisplaynoteComponent;
  let fixture: ComponentFixture<DisplaynoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaynoteComponent]
    });
    fixture = TestBed.createComponent(DisplaynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
