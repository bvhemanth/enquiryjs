import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockServiceService } from './mock-service.service';

describe('MockServiceService', () => {
  let service: MockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(MockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
