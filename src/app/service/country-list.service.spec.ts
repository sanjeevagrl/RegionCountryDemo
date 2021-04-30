import { TestBed } from '@angular/core/testing';

import { CountryListService } from './country-list.service';

describe('CountryListService', () => {
  let service: CountryListService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {  
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']); 
    service = new CountryListService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});