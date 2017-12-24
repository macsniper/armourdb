import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmouritemsComponent } from './armouritems.component';

describe('ArmouritemsComponent', () => {
  let component: ArmouritemsComponent;
  let fixture: ComponentFixture<ArmouritemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmouritemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmouritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
