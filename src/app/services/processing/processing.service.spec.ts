import { TestBed } from '@angular/core/testing';

import { ProcessingService } from './processing.service';

describe('ProcessingService', () => {
  let service: ProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should convert F to C', () => {
    expect(service.fromFtoC(70)).toEqual(30);
    expect(service.fromFtoC(-4)).toEqual(30);
    expect(service.fromFtoC(8)).toEqual(30);
    expect(service.fromFtoC(36)).toEqual(30);

    
  });


});
