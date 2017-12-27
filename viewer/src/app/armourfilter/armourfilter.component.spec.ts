import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmourfilterComponent } from './armourfilter.component';

describe('ArmourfilterComponent', () => {
  let component: ArmourfilterComponent;
  let fixture: ComponentFixture<ArmourfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmourfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmourfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
