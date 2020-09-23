import { TestBed } from '@angular/core/testing';

import { FoodOnlineService } from './food-online.service';

describe('FoodOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodOnlineService = TestBed.get(FoodOnlineService);
    expect(service).toBeTruthy();
  });
});
