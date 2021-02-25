import { TestBed } from '@angular/core/testing';

import { WebsocketgateService } from './websocketgate.service';

describe('WebsocketgateService', () => {
  let service: WebsocketgateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketgateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
