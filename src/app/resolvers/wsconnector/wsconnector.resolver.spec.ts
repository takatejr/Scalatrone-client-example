import { TestBed } from '@angular/core/testing';

import { WsconnectorResolver } from './wsconnector.resolver';

describe('WsconnectorResolver', () => {
  let resolver: WsconnectorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WsconnectorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
