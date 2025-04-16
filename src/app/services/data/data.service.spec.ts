import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dovrebbe restituire i dati dal fetch', async () => {
    const mockData = { hourly: { temperature_2m: [50, 52, 53] } };

    // Mock globale di fetch
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      } as Response)
    );

    const result = await service.getData();
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

});
