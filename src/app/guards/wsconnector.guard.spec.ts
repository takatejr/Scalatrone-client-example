import { TestBed } from '@angular/core/testing';

import { WsconnectorGuard } from './wsconnector.guard';

describe('WsconnectorGuard', () => {
  let guard: WsconnectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WsconnectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
