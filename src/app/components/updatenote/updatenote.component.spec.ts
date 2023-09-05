import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenoteComponent } from './updatenote.component';

describe('UpdatenoteComponent', () => {
  let component: UpdatenoteComponent;
  let fixture: ComponentFixture<UpdatenoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatenoteComponent]
    });
    fixture = TestBed.createComponent(UpdatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
