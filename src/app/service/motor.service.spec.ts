import { TestBed } from '@angular/core/testing';

import { MotorService } from './motor.service';

describe('MotorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotorService = TestBed.get(MotorService);
    expect(service).toBeTruthy();
  });
});
