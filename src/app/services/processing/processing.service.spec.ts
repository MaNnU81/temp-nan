import { TestBed } from '@angular/core/testing';

import { ProcessingService } from './processing.service';
import { TempTime } from '../../model/temp-time';

describe('ProcessingService', () => {
  let service: ProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should convert F to C //  conversione F to C', () => {
    // expect(service.fromFtoC(70)).toEqual(21.1);
    // expect(service.fromFtoC(-4)).toEqual(-20);
    // expect(service.fromFtoC(8)).toEqual(-13.3);
    // expect(service.fromFtoC(36)).toEqual(2.2);
    const fArray = [70, -4, 8, 36]
    const cArray = [21.1, -20, -13.3, 2.2]
    for (let i = 0; i < fArray.length; i++) {
      const f = fArray[i];
      const c = cArray[i];
      expect(service.fromFtoC(f)).toEqual(c)
    }
  
    
  });

  it('should convert hourly obj to tempTime Array // conversione obj in array', () => {

    const hourlyObj = {
      "time": [
        "2025-01-26T00:00",
        "2025-01-26T01:00",
        "2025-01-26T02:00",
        "2025-01-26T03:00",
        "2025-01-26T04:00",
        "2025-01-26T05:00",
        "2025-01-26T06:00",
        "2025-01-26T07:00",
        "2025-01-26T08:00",
        "2025-01-26T09:00"
      ],
      "temperature_2m": [
        48.3,
        47.3,
        46.9,
        46.4,
        46.5,
        46.7,
        45.6,
        46.1,
        45.1,
        46.0
      ]
    }

    const result = [
      {
        "temp": 9.1,
        "time": "2025-01-26T00:00"
      },
      {
        "temp": 8.5,
        "time": "2025-01-26T01:00"
      },
      {
        "temp": 8.3,
        "time": "2025-01-26T02:00"
      },
      {
        "temp": 8,
        "time": "2025-01-26T03:00"
      },
      {
        "temp": 8.1,
        "time": "2025-01-26T04:00"
      },
      {
        "temp": 8.2,
        "time": "2025-01-26T05:00"
      },
      {
        "temp": 7.6,
        "time": "2025-01-26T06:00"
      },
      {
        "temp": 7.8,
        "time": "2025-01-26T07:00"
      },
      {
        "temp": 7.3,
        "time": "2025-01-26T08:00"
      },
      {
        "temp": 7.8,
        "time": "2025-01-26T09:00"
      }
    ]

    expect(service.getTempArrayFromHourlyData(hourlyObj)).toEqual(result)
  })


  it('should be get Max Temp // temperatura massima', () => {
    const testData: TempTime[] = [
      { temp: 10, time: '10:00' },
      { temp: 25, time: '12:00' },
      { temp: 15, time: '11:00' },
      { temp: 5, time: '09:00' }
    ];

    const expectedResult = { temp: 25, time: '12:00' };

    const result = service.getMaxTemp(testData);

    expect(result).toEqual(expectedResult);
  });

  it('should be get Min Temp //  temperatura minima', () => {
    const testData: TempTime[] = [
      { temp: 10, time: '10:00' },
      { temp: 25, time: '12:00' },
      { temp: 15, time: '11:00' },
      { temp: 5, time: '09:00' }
    ];

    const expectedResult = { temp: 5, time: '09:00' };

    const result = service.getMinTemp(testData);

    expect(result).toEqual(expectedResult);
  });

  it('should be get Mean // media valori Temp', () => {
    const testData: TempTime[] = [
      { temp: 10, time: '10:00' },
      { temp: 25, time: '12:00' },
      { temp: 15, time: '11:00' },
      { temp: 5, time: '09:00' }
    ];

    const expectedResult = 13.75;

    const result = service.getTempMean(testData);

    expect(result).toEqual(expectedResult);
  });




});
