import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashnoteComponent } from './trashnote.component';

describe('TrashnoteComponent', () => {
  let component: TrashnoteComponent;
  let fixture: ComponentFixture<TrashnoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashnoteComponent]
    });
    fixture = TestBed.createComponent(TrashnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
