import { TestBed, inject } from '@angular/core/testing';

import { ArmourService } from './armour.service';

describe('ArmourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmourService]
    });
  });

  it('should be created', inject([ArmourService], (service: ArmourService) => {
    expect(service).toBeTruthy();
  }));
});
