import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShruComponent } from './shru.component';

describe('ShruComponent', () => {
  let component: ShruComponent;
  let fixture: ComponentFixture<ShruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
